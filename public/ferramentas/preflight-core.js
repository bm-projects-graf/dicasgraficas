/*
 * preflight-core.js — análise de prontidão de PDF para impressão (client-side).
 * Sem DOM: recebe os bytes e as bibliotecas, devolve um relatório.
 *   analyze(bytes, { PDFLib, pako }) -> Promise<report>
 *
 * Usa pdf-lib para boxes/fontes/colorspace e um mini-interpretador do content
 * stream (com pako a descomprimir Flate) para o PPI efetivo das imagens.
 *
 * É um indicador pedagógico, não um preflight profissional (Acrobat/PitStop).
 */
(function (root, factory) {
  var mod = factory();
  if (typeof module === "object" && module.exports) module.exports = mod;
  root.PreflightCore = mod;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var STD14 = {
    "Helvetica": 1, "Helvetica-Bold": 1, "Helvetica-Oblique": 1, "Helvetica-BoldOblique": 1,
    "Times-Roman": 1, "Times-Bold": 1, "Times-Italic": 1, "Times-BoldItalic": 1,
    "Courier": 1, "Courier-Bold": 1, "Courier-Oblique": 1, "Courier-BoldOblique": 1,
    "Symbol": 1, "ZapfDingbats": 1
  };

  var PT_PER_MM = 72 / 25.4; // 2.8346
  function ptToMm(pt) { return pt / PT_PER_MM; }

  function analyze(bytes, libs) {
    var L = libs.PDFLib, pako = libs.pako;
    var PDFName = L.PDFName, PDFNumber = L.PDFNumber, PDFArray = L.PDFArray,
        PDFDict = L.PDFDict, PDFRawStream = L.PDFRawStream, PDFRef = L.PDFRef;

    return L.PDFDocument.load(bytes, { ignoreEncryption: true, throwOnInvalidObject: false, updateMetadata: false })
      .then(function (doc) {
        var ctx = doc.context;

        function nm(o) {
          o = resolve(o);
          if (o && o instanceof PDFName) { var s = o.asString(); return s.charAt(0) === "/" ? s.slice(1) : s; }
          return null;
        }
        function resolve(o) { try { return o instanceof PDFRef ? ctx.lookup(o) : o; } catch (e) { return o; } }
        function num(o) { o = resolve(o); return (o && o instanceof PDFNumber) ? o.asNumber() : null; }
        function dget(d, k) { try { return resolve(d.get(PDFName.of(k))); } catch (e) { return undefined; } }
        function boxNums(arr) {
          arr = resolve(arr);
          if (!arr || !(arr instanceof PDFArray)) return null;
          var a = arr.asArray().map(function (x) { return num(x); });
          if (a.length < 4 || a.some(function (v) { return v == null; })) return null;
          // normaliza para [x, y, w, h]
          var x0 = Math.min(a[0], a[2]), y0 = Math.min(a[1], a[3]);
          return { x: x0, y: y0, w: Math.abs(a[2] - a[0]), h: Math.abs(a[3] - a[1]) };
        }

        // ---------- FONTES ----------
        var descriptors = [], nonEmbedded = {}, embeddedCount = 0;
        // ---------- IMAGENS (cor) ----------
        var imgColor = { rgb: 0, cmyk: 0, gray: 0, lab: 0, spot: 0, other: 0 };
        // ---------- TRANSPARÊNCIAS / OVERPRINT / CORES DIRETAS ----------
        var transpWhy = {};          // motivo -> 1 (opacidade, máscara suave, modo de mistura)
        var overprintFound = false;  // algum ExtGState com OP/op true
        var spotNames = {};          // nome da tinta direta -> 1
        var regAll = false;          // usa a cor de registo ("All") — erro clássico

        // descodifica nomes PDF com escapes hex (#20 = espaço, etc.)
        function decodeName(n) {
          return String(n || "").replace(/#([0-9A-Fa-f]{2})/g, function (_, h) { return String.fromCharCode(parseInt(h, 16)); });
        }
        function collectSpot(arr) {
          var head = nm(arr.get(0));
          if (head === "Separation") {
            var s = decodeName(nm(arr.get(1)));
            if (s === "All") regAll = true; else if (s && s !== "None") spotNames[s] = 1;
          } else if (head === "DeviceN") {
            var lista = resolve(arr.get(1));
            if (lista instanceof PDFArray) lista.asArray().forEach(function (x) {
              var s2 = decodeName(nm(x));
              if (s2 === "All") regAll = true;
              else if (s2 && s2 !== "None" && s2 !== "Cyan" && s2 !== "Magenta" && s2 !== "Yellow" && s2 !== "Black") spotNames[s2] = 1;
            });
          }
        }

        var allObjs = ctx.enumerateIndirectObjects(); // [[ref, obj], ...]
        allObjs.forEach(function (pair) {
          var obj = pair[1];
          if (obj instanceof PDFArray) { try { collectSpot(obj); } catch (e) {} return; }
          // CUIDADO: um PDFDict simples também tem uma propriedade interna .dict (um Map).
          // Só os streams têm .dict como PDFDict verdadeiro — testar o tipo, não a existência.
          var dict = (obj instanceof PDFDict) ? obj : ((obj && obj.dict instanceof PDFDict) ? obj.dict : null);
          if (!dict || !(dict instanceof PDFDict)) return;
          var type = nm(dict.get(PDFName.of("Type")));
          var subtype = nm(dict.get(PDFName.of("Subtype")));

          if (type === "FontDescriptor") {
            var hasFile = !!(dict.get(PDFName.of("FontFile")) || dict.get(PDFName.of("FontFile2")) || dict.get(PDFName.of("FontFile3")));
            var fname = nm(dict.get(PDFName.of("FontName"))) || "(sem nome)";
            descriptors.push({ name: fname, embedded: hasFile });
            if (hasFile) embeddedCount++; else nonEmbedded[fname] = 1;
          } else if (type === "Font" && (subtype === "Type1" || subtype === "TrueType")) {
            // fonte simples sem descritor incorporado = base-14 / não incorporada
            if (!dict.get(PDFName.of("FontDescriptor"))) {
              var bf = nm(dict.get(PDFName.of("BaseFont"))) || "(desconhecida)";
              var clean = bf.indexOf("+") === 6 ? bf.slice(7) : bf; // remove subset tag
              if (STD14[clean] || clean === "(desconhecida)") nonEmbedded[clean] = 1;
            }
          } else if (subtype === "Image" && obj instanceof PDFRawStream) {
            if (dict.get(PDFName.of("ImageMask"))) return; // máscaras 1-bit não contam
            var kind = classifyCS(dict.get(PDFName.of("ColorSpace")));
            if (imgColor[kind] != null) imgColor[kind]++; else imgColor.other++;
            if (dict.get(PDFName.of("SMask"))) transpWhy["imagens com máscara (alpha)"] = 1;
            // colorspace Separation numa imagem também conta como tinta direta
            var csArr = resolve(dict.get(PDFName.of("ColorSpace")));
            if (csArr instanceof PDFArray) { try { collectSpot(csArr); } catch (e) {} }
          } else if (type === "ExtGState" || dict.get(PDFName.of("BM")) || dict.get(PDFName.of("OP")) || dict.get(PDFName.of("ca")) !== undefined) {
            // estado gráfico: opacidade, modos de mistura, sobreimpressão
            var ca = num(dict.get(PDFName.of("ca"))), CA = num(dict.get(PDFName.of("CA")));
            if ((ca !== null && ca < 1) || (CA !== null && CA < 1)) transpWhy["opacidade < 100%"] = 1;
            var sm = dict.get(PDFName.of("SMask"));
            if (sm && nm(sm) !== "None") transpWhy["máscara suave (soft mask)"] = 1;
            var bm = nm(dict.get(PDFName.of("BM")));
            if (bm && bm !== "Normal" && bm !== "Compatible") transpWhy["modo de mistura (" + bm + ")"] = 1;
            var OP = dict.get(PDFName.of("OP")), op = dict.get(PDFName.of("op"));
            if ((OP && OP.toString() === "true") || (op && op.toString() === "true")) overprintFound = true;
          }
        });

        function classifyCS(cs) {
          cs = resolve(cs);
          if (!cs) return "other";
          if (cs instanceof PDFName) {
            var n = nm(cs);
            if (n === "DeviceRGB" || n === "CalRGB") return "rgb";
            if (n === "DeviceCMYK") return "cmyk";
            if (n === "DeviceGray" || n === "CalGray") return "gray";
            return "other";
          }
          if (cs instanceof PDFArray) {
            var head = nm(cs.get(0));
            if (head === "ICCBased") {
              var st = resolve(cs.get(1));
              var N = st && st.dict ? num(st.dict.get(PDFName.of("N"))) : null;
              if (N === 3) return "rgb"; if (N === 4) return "cmyk"; if (N === 1) return "gray";
              return "other";
            }
            if (head === "Indexed") return classifyCS(cs.get(1));
            if (head === "CalRGB") return "rgb";
            if (head === "CalGray") return "gray";
            if (head === "Lab") return "lab";
            if (head === "Separation" || head === "DeviceN") return "spot";
            if (head === "DeviceRGB") return "rgb";
            if (head === "DeviceCMYK") return "cmyk";
            return "other";
          }
          return "other";
        }

        // fontes diretas nos Resources (ex.: base-14 não incorporadas que não são objetos indiretos)
        function walkResFonts(resources, depth, visited) {
          resources = resolve(resources);
          if (!resources || !(resources instanceof PDFDict) || depth > 12) return;
          var fonts = resolve(resources.get(PDFName.of("Font")));
          if (fonts && fonts instanceof PDFDict) {
            fonts.entries().forEach(function (e) {
              var fd = resolve(e[1]);
              if (!fd || !(fd instanceof PDFDict)) return;
              if (nm(fd.get(PDFName.of("Type"))) !== "Font") return;
              var sub = nm(fd.get(PDFName.of("Subtype")));
              if ((sub === "Type1" || sub === "TrueType") && !fd.get(PDFName.of("FontDescriptor"))) {
                var bf = nm(fd.get(PDFName.of("BaseFont"))) || "(desconhecida)";
                nonEmbedded[bf.indexOf("+") === 6 ? bf.slice(7) : bf] = 1;
              }
            });
          }
          var xo = resolve(resources.get(PDFName.of("XObject")));
          if (xo && xo instanceof PDFDict) {
            xo.entries().forEach(function (e) {
              var st = resolve(e[1]);
              if (st && st.dict && nm(st.dict.get(PDFName.of("Subtype"))) === "Form") {
                var key = "f" + depth + e[0].asString();
                if (visited[key]) return; visited[key] = 1;
                walkResFonts(st.dict.get(PDFName.of("Resources")), depth + 1, visited);
              }
            });
          }
        }
        doc.getPages().forEach(function (p) { try { walkResFonts(p.node.Resources && p.node.Resources(), 0, {}); } catch (e) {} });

        // ---------- BOXES (sangria) por página ----------
        // IMPORTANTE: só a BleedBox conta. Comparar TrimBox com a MediaBox dava
        // falsos OK: um PDF exportado COM marcas de corte mas SEM bleed tem a
        // MediaBox maior que a TrimBox (por causa das marcas), sem bleed nenhum.
        var pages = doc.getPages();
        var sangrias = [];        // mm mínimos por página (só onde há BleedBox)
        var anyTrim = false;
        var semBleedBox = 0;      // páginas com TrimBox mas sem BleedBox declarada
        var pageSizes = {};       // "210x297" -> nº de páginas (tamanho final, mm)
        var annotCount = 0;       // anotações que não imprimem (exclui links)
        pages.forEach(function (p) {
          var leaf = p.node;
          var media = boxNums(leaf.MediaBox && leaf.MediaBox());
          var trim = boxNums(leaf.TrimBox && leaf.TrimBox());
          var bleed = boxNums(leaf.BleedBox && leaf.BleedBox());

          // tamanho final da página (mm, arredondado)
          var ref = trim || media;
          if (ref) {
            var key = Math.round(ptToMm(ref.w)) + "×" + Math.round(ptToMm(ref.h));
            pageSizes[key] = (pageSizes[key] || 0) + 1;
          }

          // anotações (comentários, campos de formulário) — não saem na máquina
          try {
            var annots = resolve(leaf.get(PDFName.of("Annots")));
            if (annots instanceof PDFArray) annots.asArray().forEach(function (a) {
              var ad = resolve(a);
              if (ad && ad instanceof PDFDict && nm(ad.get(PDFName.of("Subtype"))) !== "Link") annotCount++;
            });
          } catch (e) {}

          if (!trim) return;
          anyTrim = true;
          if (!bleed) { semBleedBox++; return; }
          var left = trim.x - bleed.x;
          var bottom = trim.y - bleed.y;
          var right = (bleed.x + bleed.w) - (trim.x + trim.w);
          var top = (bleed.y + bleed.h) - (trim.y + trim.h);
          sangrias.push(ptToMm(Math.min(left, bottom, right, top)));
        });

        // ---------- OUTPUT INTENT / PDF-X / TRAPPED ----------
        var outputIntentId = null, isPdfX = false, trapped = null;
        try {
          var ois = resolve(doc.catalog.get(PDFName.of("OutputIntents")));
          if (ois instanceof PDFArray && ois.size() > 0) {
            var oi = resolve(ois.get(0));
            if (oi instanceof PDFDict) {
              var sType = nm(oi.get(PDFName.of("S")));
              if (sType && sType.indexOf("GTS_PDFX") === 0) isPdfX = true;
              var oci = resolve(oi.get(PDFName.of("OutputConditionIdentifier")));
              outputIntentId = oci && oci.decodeText ? oci.decodeText() : (oci && oci.asString ? oci.asString().replace(/^\(|\)$/g, "") : null);
            }
          }
        } catch (e) {}
        try {
          var info = ctx.trailerInfo && ctx.trailerInfo.Info ? resolve(ctx.trailerInfo.Info) : null;
          if (info && info instanceof PDFDict) {
            var tr = nm(info.get(PDFName.of("Trapped")));
            if (tr) trapped = tr; // "True" | "False" | "Unknown"
          }
        } catch (e) {}

        // ---------- PPI (interpretador do content stream) ----------
        var ppiState = { min: Infinity, placed: 0, low: 0 };
        try {
          pages.forEach(function (p) {
            var leaf = p.node;
            var res = resolve(leaf.Resources && leaf.Resources());
            var content = readContents(leaf);
            if (content != null) walkContent(content, [1, 0, 0, 1, 0, 0], res, 0, {});
          });
        } catch (e) { /* PPI fica indeterminado */ }

        function readContents(leaf) {
          var c = resolve(leaf.Contents && leaf.Contents());
          if (!c) return null;
          var streams = [];
          if (c instanceof PDFArray) c.asArray().forEach(function (s) { streams.push(resolve(s)); });
          else streams.push(c);
          var parts = [];
          for (var i = 0; i < streams.length; i++) {
            var b = decodeStream(streams[i]);
            if (b == null) return null;
            parts.push(b);
          }
          return parts.join("\n");
        }

        function decodeStream(st) {
          if (!st || !(st instanceof PDFRawStream)) return null;
          var raw = st.contents; // Uint8Array
          var filter = resolve(st.dict.get(PDFName.of("Filter")));
          var filters = [];
          if (filter instanceof PDFName) filters = [nm(filter)];
          else if (filter instanceof PDFArray) filters = filter.asArray().map(nm);
          var data = raw;
          for (var i = 0; i < filters.length; i++) {
            if (filters[i] === "FlateDecode") {
              // predictores complicam — se houver DecodeParms com Predictor>1, desistimos
              var dp = resolve(st.dict.get(PDFName.of("DecodeParms")) || st.dict.get(PDFName.of("DP")));
              if (dp && dp instanceof PDFDict) { var pr = num(dp.get(PDFName.of("Predictor"))); if (pr && pr > 1) return null; }
              try { data = pako.inflate(data); } catch (e) { return null; }
            } else if (filters[i] == null) {
              /* sem filtro */
            } else {
              return null; // filtro não suportado para content (LZW, etc.)
            }
          }
          return bytesToLatin1(data);
        }

        function walkContent(str, ctm, resources, depth, visited) {
          if (depth > 12) return;
          var xobjs = resolve(resources && resources.get(PDFName.of("XObject")));
          var stack = [], ops = [], names = [];
          var i = 0, n = str.length;
          function isWS(c) { return c === " " || c === "\n" || c === "\r" || c === "\t" || c === "\f" || c === "\0"; }
          function isDelim(c) { return c === "(" || c === ")" || c === "<" || c === ">" || c === "[" || c === "]" || c === "{" || c === "}" || c === "/" || c === "%"; }
          while (i < n) {
            var c = str[i];
            if (isWS(c)) { i++; continue; }
            if (c === "%") { while (i < n && str[i] !== "\n" && str[i] !== "\r") i++; continue; }
            if (c === "/") { // nome
              var j = i + 1; while (j < n && !isWS(str[j]) && !isDelim(str[j])) j++;
              names.push(str.slice(i + 1, j)); i = j; continue;
            }
            if (c === "(") { // string literal — saltar com balanço
              var depthP = 1; i++;
              while (i < n && depthP > 0) { if (str[i] === "\\") i += 2; else { if (str[i] === "(") depthP++; else if (str[i] === ")") depthP--; i++; } }
              continue;
            }
            if (c === "<") { // hex string ou dict <<
              if (str[i + 1] === "<") { i += 2; var d2 = 1; while (i < n && d2 > 0) { if (str[i] === "<" && str[i + 1] === "<") { d2++; i += 2; } else if (str[i] === ">" && str[i + 1] === ">") { d2--; i += 2; } else i++; } continue; }
              while (i < n && str[i] !== ">") i++; i++; continue;
            }
            if (c === "[" || c === "]" || c === "{" || c === "}") { i++; continue; }
            if (c === "-" || c === "+" || c === "." || (c >= "0" && c <= "9")) { // número
              var k = i + 1; while (k < n && !isWS(str[k]) && !isDelim(str[k])) k++;
              var v = parseFloat(str.slice(i, k)); if (!isNaN(v)) ops.push(v); i = k; continue;
            }
            // operador (sequência de não-delimitadores/não-espaços)
            var m = i + 1; while (m < n && !isWS(str[m]) && !isDelim(str[m])) m++;
            var op = str.slice(i, m); i = m;
            if (op === "q") { stack.push(ctm.slice()); }
            else if (op === "Q") { if (stack.length) ctm = stack.pop(); }
            else if (op === "cm") {
              if (ops.length >= 6) { var t = ops.slice(ops.length - 6); ctm = mul(t, ctm); }
            }
            else if (op === "Do") {
              var nameRef = names.length ? names[names.length - 1] : null;
              if (nameRef && xobjs && xobjs instanceof PDFDict) handleDo(nameRef, ctm, resources, depth, visited, xobjs);
            }
            else if (op === "BI") { // inline image — saltar até EI
              var ei = str.indexOf("EI", i); i = ei < 0 ? n : ei + 2;
            }
            ops = []; names = []; // limpa operandos após cada operador
          }
        }

        function handleDo(name, ctm, parentRes, depth, visited, xobjs) {
          var ref = xobjs.get(PDFName.of(name));
          var st = resolve(ref);
          if (!st || !st.dict) return;
          var sub = nm(st.dict.get(PDFName.of("Subtype")));
          if (sub === "Image") {
            var W = num(st.dict.get(PDFName.of("Width"))), H = num(st.dict.get(PDFName.of("Height")));
            if (!W || !H) return;
            var wpt = Math.hypot(ctm[0], ctm[1]); // largura desenhada (pt)
            var hpt = Math.hypot(ctm[2], ctm[3]); // altura desenhada (pt)
            if (wpt < 0.01 || hpt < 0.01) return;
            var ppiX = W / (wpt / 72), ppiY = H / (hpt / 72);
            var ppi = Math.min(ppiX, ppiY);
            ppiState.placed++;
            if (ppi < ppiState.min) ppiState.min = ppi;
            if (ppi < 300) ppiState.low++;
          } else if (sub === "Form") {
            var key = (ref instanceof PDFRef) ? ref.toString() : Math.random();
            if (visited[key]) return; var v2 = Object.assign({}, visited); v2[key] = 1;
            var fm = boxNumsMatrix(st.dict.get(PDFName.of("Matrix")));
            var inner = fm ? mul(fm, ctm) : ctm;
            var fres = resolve(st.dict.get(PDFName.of("Resources"))) || parentRes;
            var fc = decodeStream(st);
            if (fc != null) walkContent(fc, inner, fres, depth + 1, v2);
          }
        }
        function boxNumsMatrix(arr) {
          arr = resolve(arr);
          if (!arr || !(arr instanceof PDFArray)) return null;
          var a = arr.asArray().map(num);
          return (a.length === 6 && a.every(function (x) { return x != null; })) ? a : null;
        }

        // ---------- montar relatório ----------
        var nonEmbList = Object.keys(nonEmbedded);
        var report = { pages: pages.length };

        // Cor
        var rgb = imgColor.rgb, totalImgs = imgColor.rgb + imgColor.cmyk + imgColor.gray + imgColor.lab + imgColor.spot + imgColor.other;
        report.cor = {
          status: rgb > 0 ? "aviso" : "ok",
          rgb: rgb, cmyk: imgColor.cmyk, gray: imgColor.gray, spot: imgColor.spot, other: imgColor.other, total: totalImgs
        };

        // Resolução
        if (ppiState.placed === 0) {
          report.resolucao = { status: "ok", placed: 0, minPPI: null, low: 0, na: true };
        } else {
          var mn = Math.round(ppiState.min);
          var st2 = mn < 150 ? "erro" : (mn < 300 ? "aviso" : "ok");
          report.resolucao = { status: st2, placed: ppiState.placed, minPPI: mn, low: ppiState.low, na: false };
        }

        // Fontes
        report.fontes = {
          status: nonEmbList.length > 0 ? "aviso" : "ok",
          nonEmbedded: nonEmbList, embeddedCount: embeddedCount,
          noFonts: (descriptors.length === 0 && nonEmbList.length === 0)
        };

        // Sangria — OK só quando há BleedBox declarada com ≥3 mm em todas as páginas
        if (!anyTrim) {
          report.sangria = { status: "aviso", hasTrim: false, hasBleedBox: false, minMM: null };
        } else if (semBleedBox > 0 || sangrias.length === 0) {
          report.sangria = { status: "aviso", hasTrim: true, hasBleedBox: false, minMM: null };
        } else {
          var minMM = Math.min.apply(null, sangrias);
          report.sangria = { status: minMM >= 2.9 ? "ok" : "aviso", hasTrim: true, hasBleedBox: true, minMM: Math.round(minMM * 10) / 10 };
        }

        // Transparências (informativo: bem geridas em PDF/X-4, risco em fluxos antigos)
        var motivos = Object.keys(transpWhy);
        report.transparencias = { status: motivos.length ? "info" : "ok", present: motivos.length > 0, motivos: motivos };

        // Sobreimpressão (informativo: presença de estados com overprint ligado)
        report.overprint = { status: overprintFound ? "info" : "ok", present: overprintFound, trapped: trapped };

        // Cores diretas (spot) + cor de registo
        var spotList = Object.keys(spotNames);
        report.spot = { status: regAll ? "aviso" : (spotList.length ? "info" : "ok"), names: spotList, regAll: regAll };

        // Output intent / PDF-X
        report.outputIntent = { status: outputIntentId ? "ok" : "info", id: outputIntentId, pdfx: isPdfX };

        // Páginas: tamanho final e consistência
        var sizeKeys = Object.keys(pageSizes);
        report.paginas = { status: sizeKeys.length > 1 ? "aviso" : "ok", sizes: sizeKeys, inconsistent: sizeKeys.length > 1 };

        // Anotações / campos de formulário (não imprimem)
        report.anotacoes = { status: annotCount > 0 ? "aviso" : "ok", count: annotCount };

        var order = { ok: 0, info: 0, aviso: 1, erro: 2 };
        report.overall = [
          report.cor.status, report.resolucao.status, report.fontes.status, report.sangria.status,
          report.spot.status, report.paginas.status, report.anotacoes.status
        ].reduce(function (acc, s) { return order[s] > order[acc] ? s : acc; }, "ok");
        return report;
      });
  }

  // matriz afim [a,b,c,d,e,f]; mul(m1,m2) = aplica m1 e depois m2
  function mul(m1, m2) {
    return [
      m1[0] * m2[0] + m1[1] * m2[2],
      m1[0] * m2[1] + m1[1] * m2[3],
      m1[2] * m2[0] + m1[3] * m2[2],
      m1[2] * m2[1] + m1[3] * m2[3],
      m1[4] * m2[0] + m1[5] * m2[2] + m2[4],
      m1[4] * m2[1] + m1[5] * m2[3] + m2[5]
    ];
  }
  function bytesToLatin1(u8) {
    var s = "", CH = 0x8000;
    for (var i = 0; i < u8.length; i += CH) s += String.fromCharCode.apply(null, u8.subarray(i, i + CH));
    return s;
  }

  return { analyze: analyze };
});
