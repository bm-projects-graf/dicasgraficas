# dicasgraficas.com

Site editorial sobre artes gráficas em Portugal.

Construído com [Astro](https://astro.build), alojado no [Netlify](https://netlify.com), domínio na Cloudflare.

---

## 🚀 Como pôr o site online (primeira vez)

Segue por esta ordem. Total: ~30 minutos.

### Passo 1 — Criar repositório no GitHub

1. Vai a [github.com](https://github.com) e faz login
2. Clica no **+** no canto superior direito → **New repository**
3. Preenche:
   - **Repository name:** `dicasgraficas`
   - **Description:** (opcional) `Site editorial sobre artes gráficas`
   - **Public** (importante: tem de ser público para o Netlify usar gratuitamente)
   - **NÃO marques** "Add README", "Add .gitignore" ou "Choose a license" (já temos)
4. Clica **Create repository**
5. Vais ver uma página com instruções — ignora-as por agora

### Passo 2 — Fazer upload dos ficheiros

A forma mais fácil para quem não usa Git:

1. Na página do repositório recém-criado, clica **uploading an existing file** (link no meio da página)
2. Arrasta para a janela TODOS os ficheiros e pastas desta pasta (incluindo a pasta `src`, `public`, e os ficheiros `package.json`, `astro.config.mjs`, etc.)
   - **Não arrastes** a pasta `node_modules` se ela existir (não é necessária)
3. Em baixo, em "Commit changes", escreve: `Initial commit`
4. Clica **Commit changes** (botão verde)

Aguarda alguns segundos. O upload pode demorar 1-2 minutos.

### Passo 3 — Ligar ao Netlify

1. Vai a [app.netlify.com](https://app.netlify.com) e faz login
2. Clica **Add new site** → **Import an existing project**
3. Escolhe **GitHub**
4. Autoriza o Netlify a aceder ao GitHub (se ainda não autorizaste)
5. Procura `dicasgraficas` na lista de repositórios e clica
6. As definições de build aparecem automaticamente (Netlify deteta Astro):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Clica **Deploy site**

O Netlify vai construir o site. Demora 1-3 minutos. No fim, tens um URL temporário tipo `random-name-12345.netlify.app`.

### Passo 4 — Apontar o domínio dicasgraficas.com

1. No painel do Netlify do teu site, clica **Domain settings**
2. Clica **Add custom domain**
3. Escreve `dicasgraficas.com` e confirma
4. O Netlify mostra-te dois nameservers, algo como:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - (etc. — costumam ser 4 servidores)
5. Em paralelo, vai à Cloudflare:
   - Acede ao domínio dicasgraficas.com
   - Vai a **DNS** ou **Domain registration → Configuration**
   - Procura "**Nameservers**" ou "**Servidores de nomes**"
   - Substitui pelos nameservers do Netlify
6. Volta ao Netlify e clica **Verify DNS configuration**

A propagação DNS pode demorar de 5 minutos a 24 horas. Costuma estar feito em 1-2 horas.

### Passo 5 — Ativar HTTPS

Depois do domínio estar verificado:

1. No Netlify, vai a **Domain settings → HTTPS**
2. Clica **Verify DNS configuration**
3. Quando o domínio aparecer verde, clica **Provision certificate**
4. O Netlify trata do SSL automaticamente (Let's Encrypt, gratuito)

Pronto. O site está online em https://dicasgraficas.com.

---

## 📝 Como publicar um artigo novo

Sempre que quiseres adicionar um artigo novo:

1. Vai ao GitHub do repositório
2. Navega para `src/content/articles/`
3. Clica **Add file → Create new file**
4. O nome do ficheiro deve ser o slug em minúsculas e com hífens, ex: `historia-do-papel.md`
5. Cola o conteúdo do artigo (com o frontmatter — ver template abaixo)
6. Em baixo, clica **Commit changes**

O Netlify deteta automaticamente e republica o site em ~2 minutos.

### Template de artigo

```markdown
---
title: "Título do artigo"
description: "Descrição curta de 1-2 frases. Aparece em Google e redes sociais."
pubDate: 2026-05-15
category: "Preparação de ficheiros"
keywords: "palavras-chave separadas, por vírgulas"
readingTime: "8 min"
featured: false
---

Texto do primeiro parágrafo aqui. Markdown normal.

## Subtítulo H2

Texto com **negrito**, *itálico*, e [links](https://exemplo.com).

### Subtítulo H3

Listas:
- Item 1
- Item 2

<div class="tech-box">
<div class="tech-label">Sabias que</div>
<p>Caixa de destaque técnico.</p>
</div>

> Citação destacada
```

**Categorias válidas** (tem de ser exatamente uma destas):
- `Preparação de ficheiros`
- `Papel e suportes`
- `Acabamentos`
- `Produtos impressos`
- `Negócio e marketing`
- `Processos de impressão`
- `História e curiosidades`
- `Ciência da cor`
- `Tipografia`

---

## 🎨 Como mudar cores ou estilos

As cores principais estão em `src/styles/global.css`, no topo do ficheiro:

```css
--color-primary: #1B6FA8;        /* Azul escuro Onda Grafe */
--color-primary-light: #5FB4D9;  /* Azul claro Onda Grafe */
--color-accent: #C8332D;         /* Vermelho técnico */
```

Muda os valores hex e o site inteiro atualiza.

---

## 📊 Configurar Google Analytics e AdSense

### Google Analytics (recomendado desde o dia 1)

1. Cria conta em [analytics.google.com](https://analytics.google.com)
2. Cria propriedade para `dicasgraficas.com`
3. Copia o **Measurement ID** (formato `G-XXXXXXXXXX`)
4. Vai a `src/layouts/Base.astro`
5. Procura o bloco comentado de "Google Analytics placeholder"
6. Remove os comentários `<!-- -->` e substitui `GA_MEASUREMENT_ID` pelo teu ID
7. Faz commit. Site atualiza em 2 minutos.

### Google Search Console (essencial para SEO)

1. Vai a [search.google.com/search-console](https://search.google.com/search-console)
2. Adiciona propriedade `dicasgraficas.com`
3. Verifica via DNS (usa a Cloudflare para adicionar o registo TXT)
4. Submete o sitemap: `https://dicasgraficas.com/sitemap-index.xml`

### Google AdSense (depois de 20+ artigos)

1. Cria conta em [google.com/adsense](https://google.com/adsense)
2. Adiciona o site `dicasgraficas.com`
3. Aguarda aprovação (2-4 semanas tipicamente)
4. Quando aprovado, copia o **Publisher ID** (formato `ca-pub-XXXXXXXXXX`)
5. Vai a `src/layouts/Base.astro`
6. Procura o bloco "AdSense placeholder"
7. Descomenta e substitui `PUBLISHER_ID` pelo teu

---

## 🆘 Problemas comuns

**O site não publica novas alterações.**
→ Verifica em Netlify → Deploys se aparece erro. Se sim, lê a mensagem.

**Erro de "Build failed".**
→ Provavelmente erro de sintaxe num ficheiro markdown. Verifica o frontmatter (entre `---`).

**Mudei algo e o site continua igual.**
→ Limpa cache do navegador (Ctrl+Shift+R). O Netlify só republica após commit.

**Domínio não está a apontar.**
→ Espera mais 1-2 horas. Se passar 24h e ainda não funcionar, verifica nameservers na Cloudflare.

---

Boa sorte com o lançamento. 🚀
