---
title: "Fontes: incorporar ou converter em curvas?"
description: "Porque é que as fontes desaparecem ou trocam na gráfica, o que significa incorporar (embed) uma fonte, quando converter o texto em curvas, e os cuidados com licenças."
pubDate: 2026-06-13
category: "Tipografia"
keywords: "incorporar fontes pdf, converter texto em curvas, fontes em falta impressão, embed font, criar contornos"
readingTime: "7 min"
featured: false
---

"O texto saiu noutra letra." É das falhas mais frustrantes da impressão — e quase sempre evitável. A causa é simples: o ficheiro chegou à gráfica **sem a fonte**. Há duas formas de garantir que isso nunca acontece: **incorporar** a fonte ou **converter o texto em curvas**. Saber quando usar cada uma é conhecimento básico de pré-impressão.

## Porque é que as fontes "desaparecem"

Um ficheiro de texto não guarda os desenhos das letras — guarda **caracteres** e o **nome da fonte** a usar. O computador desenha as letras buscando essa fonte ao sistema. O problema: a gráfica **não tem as mesmas fontes que tu**. Se o ficheiro só diz "usa a Helvetica Neue" e a máquina da gráfica não a tem, ela **substitui** por outra parecida (ou avisa que falta) — e o teu cuidado tipográfico vai por água abaixo.

É exatamente por isto que o nosso [Inspetor de PDF](/inspetor-de-pdf/) verifica se as fontes estão incorporadas: é uma das quatro coisas que mais estraga trabalhos.

## Incorporar (embed): meter a fonte dentro do ficheiro

**Incorporar** uma fonte é guardar o desenho das letras **dentro do próprio PDF**. A gráfica deixa de precisar de ter a fonte — ela viaja com o ficheiro. É o método recomendado na maioria dos casos: o texto continua a ser **texto** (pesquisável, selecionável, editável em pré-impressão se necessário) e mantém-se nítido a qualquer tamanho.

Há duas formas de incorporação:

- **Completa:** vai a fonte inteira.
- **Subconjunto (subset):** vão só os caracteres usados no documento. É o mais comum, porque é mais leve. (No PDF, vês nomes de fonte como `ABCDEF+Helvetica` — o prefixo indica que é um subconjunto.)

<div class="tech-box">
<div class="tech-label">PDF/X obriga a incorporar</div>
<p>Se exportares em <a href="/artigos/pdf-x-1a-vs-x-4-normas-de-impressao/">PDF/X</a> (X-1a ou X-4), a norma <strong>exige</strong> que todas as fontes estejam incorporadas — se alguma não puder ser, a exportação falha ou avisa. É mais uma boa razão para usar PDF/X: garante este ponto automaticamente.</p>
</div>

## Converter em curvas (criar contornos)

**Converter em curvas** (ou "criar contornos"/*outlines*) transforma cada letra num **desenho vetorial** — deixa de ser texto e passa a ser uma forma, como qualquer ilustração. A fonte deixa de ser necessária porque já não há "texto", só vetores.

Vantagens: imunidade total a problemas de fonte; ideal para **logótipos** e títulos onde a forma é definitiva.

Desvantagens:
- O texto **deixa de ser editável** (não dá para corrigir uma gralha sem refazer).
- O ficheiro pode ficar mais pesado em textos longos.
- Texto muito pequeno convertido em curvas pode perder o *hinting* (ajuste fino que melhora a leitura a tamanhos pequenos).

Por isso: **curvas para logótipos e títulos; incorporação para corpo de texto.**

## Como se faz

- **Illustrator:** seleciona o texto → `Tipo → Criar contornos` (`Shift+Ctrl/Cmd+O`). Dica: faz numa **cópia** do ficheiro, para manteres uma versão editável.
- **InDesign:** o melhor é **incorporar via PDF** (exporta em PDF/X e as fontes vão embebidas). Se precisares mesmo de curvas, `Tipo → Criar contornos`, mas perde-se editabilidade.
- **Logótipos:** entrega-os sempre com o texto **em curvas** — assim a marca imprime igual em qualquer gráfica, mesmo sem a fonte original. Liga-se a [vetorial vs raster](/artigos/vetorial-vs-raster-imagens-para-impressao/).

## O detalhe que muita gente ignora: licenças

Nem todas as fontes **permitem** ser incorporadas. A licença de cada fonte define o que podes fazer:

- A maioria das fontes comerciais permite incorporação para impressão.
- Algumas restringem ou proíbem (a exportação avisa-te com um erro de "permissões da fonte").
- Fontes "grátis" da internet podem ter licenças duvidosas — para trabalho profissional, usa fontes com licença clara (Google Fonts, Adobe Fonts, fundições reconhecidas).

Converter em curvas **contorna** a questão técnica da incorporação, mas **não** te dá direito de usar uma fonte que não licenciaste. A licença vem sempre primeiro.

## Confusões comuns

**"Mandei o PDF, logo a fonte vai lá."**
Só se estiver **incorporada**. Um PDF pode referir uma fonte sem a conter. Confirma na exportação (ou passa pelo [Inspetor de PDF](/inspetor-de-pdf/)).

**"Converti tudo em curvas, é mais seguro."**
Para logótipos sim; para um livro de 200 páginas, não — perdes a edição e podes prejudicar a legibilidade do texto pequeno. Incorporar é melhor para corpo de texto.

**"Enviei a fonte em anexo para a gráfica instalar."**
Funciona, mas é trabalho extra e pode esbarrar na licença. Incorporar no PDF é mais limpo e legal.

## Em resumo

O texto troca de letra quando a gráfica não tem a fonte. Resolve-se de duas formas: **incorporar** (guardar a fonte dentro do PDF — ideal para corpo de texto, e obrigatório em PDF/X) ou **converter em curvas** (transformar as letras em vetores — ideal para logótipos e títulos). Em qualquer caso, respeita a **licença** da fonte. E confirma sempre antes de enviar.
