# Atualização: Remover Contacto e Newsletter

Esta atualização remove tudo relacionado com email e newsletter do site.

## O que muda

- ❌ Página `/contacto/` desaparece
- ❌ Link "Contacto" no menu principal desaparece
- ❌ Link "Contacto" no rodapé desaparece
- ❌ Secção "Recebe um artigo novo" (newsletter azul na home) desaparece
- ❌ Email contacto@dicasgraficas.com retirado de todas as páginas legais

## Como aplicar a atualização

### Passo 1: Substituir 7 ficheiros

No GitHub do teu repositório dicasgraficas, navega para cada um destes caminhos e substitui o ficheiro existente pelo novo (que está no ZIP):

1. `src/components/Header.astro`
2. `src/components/Footer.astro`
3. `src/pages/index.astro`
4. `src/pages/sobre.astro`
5. `src/pages/politica-de-privacidade.astro`
6. `src/pages/termos.astro`
7. `src/pages/cookies.astro`

**Como substituir cada ficheiro:**

a. Vai ao GitHub do repositório
b. Navega para o ficheiro (ex: `src/pages/index.astro`)
c. Clica no ícone do lápis (✏️) "Edit this file" no canto superior direito
d. Apaga TODO o conteúdo (Ctrl+A, Delete)
e. Abre o ficheiro novo do ZIP num editor de texto (Notepad, VS Code)
f. Copia tudo (Ctrl+A, Ctrl+C)
g. Cola no GitHub (Ctrl+V)
h. Em baixo, clica **Commit changes** (botão verde)
i. Confirma novamente **Commit changes** no popup

Repete para cada um dos 7 ficheiros.

### Passo 2: Apagar a página de Contacto

a. No GitHub, navega para `src/pages/contacto.astro`
b. Abre o ficheiro
c. Clica no ícone do caixote do lixo (🗑️) no canto superior direito
d. Em baixo, escreve "Apagar página de contacto" e clica **Commit changes**

### Passo 3: Aguardar deploy

O Netlify deteta as alterações automaticamente e republica o site em 2-3 minutos.

### Verificação

Após o deploy, verifica:

- O menu principal só tem: Início, Artigos, Categorias, Sobre
- A homepage não tem secção de newsletter no fundo
- Tentar abrir `/contacto/` dá erro 404
- O rodapé não tem link "Contacto"
- A página Sobre não menciona email
- A política de privacidade não menciona email

## Se quiseres adicionar Contacto/Newsletter mais tarde

Quando estiveres pronto (depois de configurar Email Routing na Cloudflare), avisa-me que eu envio-te os ficheiros para repor.
