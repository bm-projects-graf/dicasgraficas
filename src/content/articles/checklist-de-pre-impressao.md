---
title: "Checklist de pré-impressão: 12 verificações antes de enviar"
description: "A lista definitiva para conferir um ficheiro antes de o mandar para a gráfica: cor, resolução, bleed, fontes, preto, sobreimpressão, formato e mais, com as ferramentas para verificar cada ponto."
pubDate: 2026-06-13
category: "Preparação de ficheiros"
keywords: "checklist pré-impressão, verificar ficheiro antes de imprimir, preparar pdf gráfica, erros de impressão"
readingTime: "8 min"
featured: true
---

A diferença entre um trabalho que sai perfeito e um que volta com problemas (ou pior, que se descobre só depois de impresso) costuma estar em **detalhes que demoram segundos a verificar**. Esta é a checklist que vale a pena correr antes de carregar em "enviar", com a explicação de cada ponto e as ferramentas para o conferir.

Guarda esta página. É o teu **pré-flight pessoal**.

## 1. A cor está em CMYK?

A impressão é [CMYK](/artigos/cmyk-ou-rgb-qual-usar-quando-vais-imprimir/), não RGB. Elementos em RGB saem com cores diferentes do que vês no ecrã. Converte para CMYK (com o perfil da gráfica, ex.: FOGRA39) antes de exportar.
→ Confirma com o [Inspetor de PDF](/inspetor-de-pdf/).

## 2. As imagens têm resolução suficiente?

300 PPI **ao tamanho final** para leitura de perto (menos para grande formato visto à distância). Uma imagem esticada para além do seu tamanho fica pixelizada.
→ Calcula o tamanho máximo de uma imagem na [calculadora de resolução](/resolucao-de-impressao/) e confirma o PPI real no [Inspetor de PDF](/inspetor-de-pdf/).

## 3. Tem bleed (sangria) e margem de segurança?

3 mm de [bleed](/artigos/bleed-margem-de-seguranca-linha-de-corte/) em todas as bordas onde há cor/imagem até à beira, e elementos importantes a 3-5 mm para dentro da linha de corte. Sem bleed, arriscas filetes brancos no corte.
→ O [Inspetor de PDF](/inspetor-de-pdf/) deteta se há TrimBox/sangria definida.

## 4. As fontes estão incorporadas (ou em curvas)?

Se a fonte não viaja com o ficheiro, a gráfica vê outra letra. [Incorpora as fontes ou converte o texto em curvas](/artigos/fontes-incorporar-ou-converter-em-curvas/), sobretudo nos logótipos.
→ O [Inspetor de PDF](/inspetor-de-pdf/) lista fontes não incorporadas.

## 5. O preto está bem construído?

Texto pequeno em **preto puro** (K100); grandes áreas pretas em **[preto rico](/artigos/preto-rico-vs-preto-puro/)** (ex.: C40 M30 Y0 K100) para não ficarem lavadas. Não uses "preto RGB" (que vira um CMYK sujo na conversão).

## 6. A sobreimpressão está correta?

O preto de texto vai normalmente em [sobreimpressão (overprint)](/artigos/sobreimpressao-e-trapping/); o **branco nunca**, branco em overprint **desaparece** na máquina. Confirma os atributos de overprint dos teus elementos.
→ Vê o efeito no [simulador de sobreimpressão vs vazado](/sobreimpressao-vs-vazado/).

## 7. O formato e a orientação estão certos?

O documento está no tamanho final correto? Páginas na orientação certa? Para trabalhos de máquina, confirma que o produto encaixa bem na folha, e quantos saem por folha.
→ Planeia na ferramenta de [aproveitamento de folha](/aproveitamento-de-folha/) e revê os [formatos de papel](/artigos/formatos-de-papel-a-b-c-sra/).

## 8. Os logótipos e ilustrações são vetoriais?

Logótipos, ícones e texto devem ser [vetoriais](/artigos/vetorial-vs-raster-imagens-para-impressao/), não imagens raster, para escalarem sem perda. Um logo em JPG numa lona é um problema anunciado.

## 9. Vais usar a norma PDF/X certa?

Exporta em [PDF/X](/artigos/pdf-x-1a-vs-x-4-normas-de-impressao/) (X-4 na maioria dos casos modernos; X-1a se a gráfica pedir). Garante fontes incorporadas e um output intent (perfil de destino).
→ Passo a passo em [como exportar um PDF para impressão](/artigos/como-exportar-pdf-para-impressao/).

## 10. As cores diretas (Pantone) estão definidas?

Se o trabalho leva [Pantone](/artigos/pantone-vs-cmyk-cores-diretas/), confirma que as cores diretas estão corretamente nomeadas e não duplicadas (não queres "PANTONE 485 C" e "Pantone 485" como duas tintas). Define o que é spot e o que converte para CMYK.

## 11. O papel e a tiragem fazem sentido?

A [gramagem](/artigos/gramagem-do-papel-explicada/) é adequada ao produto? O papel revestido ou não revestido vai afetar a cor (mais [ganho de ponto](/artigos/ganho-de-ponto-dot-gain/) em não revestido). A tiragem favorece [digital ou offset](/artigos/impressao-digital-vs-offset/)?

## 12. Pediste prova para cor crítica?

Se a cor é importante, nenhuma checklist substitui uma [prova de cor](/artigos/provas-de-cor-antes-da-tiragem/). O ecrã mente; o papel é a verdade. Vale o pequeno custo.

<div class="tech-box">
<div class="tech-label">Atalho: deixa a máquina conferir por ti</div>
<p>Os pontos 1, 2, 3 e 4 (cor, resolução, sangria e fontes) são os que mais estragam trabalhos, e são exatamente os que o nosso <a href="/inspetor-de-pdf/">Inspetor de PDF</a> verifica automaticamente. Larga lá o PDF final e tens um diagnóstico em segundos, sem enviar o ficheiro para lado nenhum. Usa-o como último passo antes de carregar em "enviar".</p>
</div>

## A regra acima de todas as regras

Quando tiveres **qualquer** dúvida, **pergunta à gráfica antes de imprimir**. Cada gráfica tem o seu fluxo, os seus perfis e as suas preferências. Um email de 30 segundos a confirmar o perfil de cor ou o bleed poupa reimpressões inteiras. Ficheiros bem preparados não só evitam erros, fazem a gráfica trabalhar mais depressa e melhor para ti.

## Em resumo (a checklist em 12 pontos)

1. Cor em **CMYK** ✔
2. Imagens a **300 PPI** ao tamanho final ✔
3. **Bleed 3 mm** + margem de segurança ✔
4. **Fontes** incorporadas ou em curvas ✔
5. **Preto** puro (texto) / rico (áreas grandes) ✔
6. **Sobreimpressão** certa (branco nunca em overprint) ✔
7. **Formato/orientação** corretos ✔
8. Logótipos em **vetor** ✔
9. **PDF/X** com output intent ✔
10. **Pantone** bem definido ✔
11. **Papel/tiragem** adequados ✔
12. **Prova** para cor crítica ✔

Corre esta lista (e o [Inspetor de PDF](/inspetor-de-pdf/)) sempre antes de enviar. Vira hábito, e deixas de ter surpresas na receção do trabalho.
