---
title: "Vetorial vs raster: porque o logótipo tem de ser em vetor"
description: "A diferença entre imagens vetoriais e raster (bitmap) explicada de forma simples — e porque é que um logótipo em JPG é um problema, mas em SVG ou PDF vetorial escala sem perder qualidade."
pubDate: 2026-06-13
category: "Preparação de ficheiros"
keywords: "vetorial vs raster, imagem vetorial, bitmap, logótipo vetorial, svg ai eps, jpg png para impressão"
readingTime: "7 min"
featured: false
---

Há uma divisão fundamental no mundo das imagens digitais que explica metade dos problemas de impressão: uma imagem ou é **raster** (feita de pixels) ou é **vetorial** (feita de fórmulas matemáticas). Perceber esta diferença muda a forma como preparas tudo — e responde de vez à pergunta clássica: *"porque é que o meu logótipo fica desfocado quando o amplio?"*

## Raster: imagens feitas de pixels

Uma imagem **raster** (ou *bitmap*) é uma grelha de pequenos quadrados de cor — os **pixels**. Fotografias são sempre raster: cada pixel guarda uma cor, e a soma de milhares deles forma a imagem.

A consequência é que uma imagem raster tem uma **resolução fixa**: um número finito de pixels. Se a ampliares para além do seu tamanho, o programa tem de "inventar" pixels que não existem — e o resultado é o serrilhado e o desfoque que toda a gente conhece. É também por isto que a [resolução (DPI)](/artigos/resolucao-para-impressao-dpi/) importa tanto.

**Formatos raster:** JPG, PNG, TIFF, GIF, BMP, PSD.

## Vetorial: imagens feitas de fórmulas

Uma imagem **vetorial** não guarda pixels — guarda **instruções matemáticas**: "uma circunferência de raio X aqui", "uma linha curva dali até ali", "preenche esta forma com este ciano". Quando a imagem é desenhada no ecrã ou na máquina, essas fórmulas são calculadas **ao tamanho pedido**, seja ele qual for.

Por isso uma imagem vetorial **não tem resolução nem DPI** e **escala infinitamente sem perder nitidez**. O mesmo logótipo vetorial imprime-se perfeito num cartão de 5 cm e numa lona de 5 metros.

**Formatos vetoriais:** SVG, AI (Illustrator), EPS, PDF (quando contém vetores), CDR (CorelDRAW).

<figure class="article-figure">
<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Letra A ampliada: em raster fica aos quadrados, em vetor fica lisa">
<text x="115" y="28" text-anchor="middle" font-family="monospace" font-size="13" fill="#6B7280">raster — amplia e pixeliza</text>
<text x="345" y="28" text-anchor="middle" font-family="monospace" font-size="13" fill="#6B7280">vetor — amplia e mantém-se nítido</text>
<g fill="var(--cat)">
<rect x="70" y="60" width="22" height="22"/><rect x="92" y="60" width="22" height="22"/>
<rect x="48" y="82" width="22" height="22"/><rect x="114" y="82" width="22" height="22"/>
<rect x="48" y="104" width="22" height="22"/><rect x="70" y="104" width="22" height="22"/><rect x="92" y="104" width="22" height="22"/><rect x="114" y="104" width="22" height="22"/>
<rect x="48" y="126" width="22" height="22"/><rect x="114" y="126" width="22" height="22"/>
<rect x="48" y="148" width="22" height="22"/><rect x="114" y="148" width="22" height="22"/>
</g>
<path d="M345 58 L322 162 L335 162 L341 138 L367 138 L373 162 L386 162 L363 58 Z M344 126 L351 96 L357 96 L364 126 Z" fill="var(--cat)"/>
</svg>
<figcaption>A mesma letra ampliada: a versão raster mostra os "quadradinhos" (pixels), a vetorial mantém os bordos lisos a qualquer tamanho, porque é recalculada matematicamente.</figcaption>
</figure>

## Quando usar cada um

| Tipo de conteúdo | Melhor formato |
|---|---|
| Fotografias | **Raster** (TIFF ou JPG de alta qualidade) |
| Logótipos | **Vetorial** (AI, EPS, SVG, PDF) |
| Ilustrações de linhas, ícones | **Vetorial** |
| Texto / tipografia | **Vetorial** (é o que as fontes são) |
| Imagens com gradientes fotográficos complexos | Raster |
| Sinalética, lonas, grande formato | Vetorial sempre que possível |

A regra prática: **tudo o que é forma definida (logótipos, texto, ícones) deve ser vetor; tudo o que é imagem contínua (fotos) é raster.**

<div class="tech-box">
<div class="tech-label">Porque é que o logótipo tem mesmo de ser vetor</div>
<p>Um logótipo vive em todo o lado: cartão de visita, fatura, fachada, brinde, anúncio. Se só o tens em PNG ou JPG, cada uso a tamanho diferente é um risco de ficar desfocado. Em vetor, é <strong>um único ficheiro</strong> que serve para tudo, sempre nítido. Se a tua marca só tem o logo em imagem, vale a pena pagar a um designer para o <strong>recriar em vetor</strong> — é um investimento que se paga em todas as impressões futuras.</p>
</div>

## "Vetorializar" um JPG não é magia

Existem ferramentas (e funções de "image trace" no Illustrator) que tentam converter uma imagem raster em vetor. Funcionam bem para **formas simples e contrastadas** (um logótipo a preto sobre branco, por exemplo). Mas:

- Não recuperam detalhe que já se perdeu — partem do que existe.
- Em fotografias, o resultado é artificial e raramente útil.
- O traçado automático costuma precisar de limpeza manual.

Ou seja: vetorializar ajuda a **reconstruir** um logótipo simples, não a "consertar" uma foto de baixa resolução.

## Confusões comuns

**"O meu logo está em PNG de alta resolução, chega."**
Para um tamanho específico, talvez. Mas no dia em que precisares dele numa lona, o PNG não chega. O vetor resolve isso de uma vez.

**"PDF é vetorial."**
Depende do que lá está dentro. Um PDF pode conter vetores **ou** uma simples foto raster. Um PDF exportado de uma foto continua a ser raster.

**"SVG é só para a web."**
O SVG é um formato vetorial perfeitamente válido para impressão, desde que o programa da gráfica o aceite (muitos preferem AI/EPS/PDF). Na dúvida, entrega em PDF vetorial.

## Em resumo

Raster = pixels, resolução fixa, ideal para fotos. Vetor = matemática, escala infinita, ideal para logótipos, texto e ilustração. Guarda sempre os teus logótipos e marcas em **vetor** — e usa raster (a [300 DPI](/artigos/resolucao-para-impressao-dpi/)) para as fotografias. Assim nunca mais tens surpresas com imagens "às escadinhas".
