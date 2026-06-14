---
title: "PDF/X-1a vs PDF/X-4: que norma usar e porquê"
description: "O que são as normas PDF/X para impressão, a diferença entre PDF/X-1a e PDF/X-4 (transparências, perfis ICC, RGB) e qual escolher para o teu trabalho."
pubDate: 2026-06-13
category: "Preparação de ficheiros"
keywords: "pdf/x, pdf x-1a, pdf x-4, norma pdf impressão, output intent, perfil de saída"
readingTime: "8 min"
featured: false
---

Quando exportas um PDF para impressão, o teu programa oferece predefinições com nomes como **PDF/X-1a:2001** ou **PDF/X-4:2008**. Não são caprichos técnicos: são **normas internacionais** que garantem que o ficheiro tem tudo o que a máquina precisa, e nada do que a pode atrapalhar. Perceber a diferença ajuda-te a escolher bem e a falar a mesma língua que a gráfica.

## O que é o PDF/X

O **PDF/X** é uma família de normas ISO para **troca de ficheiros gráficos** (o "X" é de *eXchange*). Um PDF comum pode conter coisas que estragam uma impressão: imagens em RGB, fontes não incorporadas, sem indicação do espaço de cor final. O PDF/X **impõe regras** que eliminam esses riscos:

- Todas as **fontes têm de estar incorporadas**.
- Tem de existir um **output intent** (a indicação do espaço de cor de destino, o perfil da impressão).
- Não pode haver elementos "soltos" que a máquina não saiba interpretar.

Ou seja: um PDF/X é um PDF **com garantias** de que está preparado para produção.

<div class="tech-box">
<div class="tech-label">Output intent: a peça-chave</div>
<p>O <strong>output intent</strong> é o perfil ICC que diz "este ficheiro foi pensado para ser impresso <em>nesta</em> condição", por exemplo, <strong>FOGRA39</strong> (papel couché europeu). É o que dá sentido aos números CMYK do ficheiro. Sem ele, "C50" é ambíguo; com ele, sabe-se exatamente que cor é. Liga isto à <a href="/artigos/gestao-de-cor-perfis-icc/">gestão de cor e perfis ICC</a>.</p>
</div>

## PDF/X-1a: o clássico "tudo fechado"

O **PDF/X-1a** é a norma mais antiga e restritiva. As suas regras de ouro:

- **Só CMYK e cores diretas (Pantone).** Nada de RGB, tudo tem de estar já convertido.
- **Transparências achatadas.** Sombras, esfumados e sobreposições são "achatados" (*flattened*) na exportação, transformados em elementos opacos.
- Máxima compatibilidade com fluxos de trabalho antigos.

É como entregar tudo **pré-cozinhado**: a gráfica recebe um ficheiro sem decisões por tomar. Seguro, previsível, mas rígido.

## PDF/X-4: o moderno e flexível

O **PDF/X-4** é a evolução. As diferenças principais:

- **Mantém as transparências "vivas"**, não as achata na exportação. O RIP da gráfica trata delas com a máxima qualidade.
- **Suporta gestão de cor com perfis ICC**, podendo até incluir elementos em RGB com um output intent que diz como os converter.
- Suporta camadas e é a base dos fluxos de trabalho atuais.

É como entregar os **ingredientes e a receita**: dás à gráfica a informação para tratar tudo da melhor forma, em vez de tomar todas as decisões à partida.

## Tabela: lado a lado

| | PDF/X-1a | PDF/X-4 |
|---|---|---|
| Ano | 2001 | 2008 |
| Cor | Só CMYK + Pantone | CMYK, Pantone e RGB (com perfil) |
| Transparências | Achatadas na exportação | Mantidas (tratadas no RIP) |
| Perfis ICC | Não (output intent simples) | Sim (gestão de cor completa) |
| Quando usar | Fluxos antigos, máquinas/RIPs antigos | Recomendado hoje na maioria dos casos |

## Então qual devo escolher?

A resposta honesta: **pergunta à tua gráfica**. Mas como orientação geral:

- **PDF/X-4** é a escolha recomendada hoje. Mantém a qualidade das transparências e funciona com qualquer fluxo moderno.
- **PDF/X-1a** quando a gráfica o pedir explicitamente, ou para trabalhos simples sem transparências onde queres garantir o achatamento à partida.

Se o trabalho tem **sombras, esfumados, logótipos com transparência**, o X-4 evita surpresas no achatamento. Se é só texto e blocos de cor chapada, qualquer um serve.

<div class="tech-box">
<div class="tech-label">O perigo do achatamento mal feito</div>
<p>Quando uma transparência é achatada (X-1a), zonas que se sobrepõem são recortadas e recombinadas. Se isso correr mal, podem aparecer <strong>linhas finas</strong> ou pequenas variações de cor nas juntas dessas zonas. É raro, mas é a razão nº1 pela qual o X-4 (que adia o achatamento para o RIP) é preferido em trabalhos com muita transparência.</p>
</div>

## Como exportar em PDF/X

Em qualquer programa Adobe, é escolher a predefinição na exportação:

- **InDesign / Illustrator:** em `Exportar` → `Adobe PDF`, escolhe a predefinição `[PDF/X-4:2008]` ou `[PDF/X-1a:2001]`. Confirma o **output intent** no separador *Saída*.
- **Canva, Word:** não oferecem PDF/X diretamente, saem como PDF normal, que a gráfica terá de validar.

O passo a passo completo está em [como exportar um PDF para impressão](/artigos/como-exportar-pdf-para-impressao/).

## Confusões comuns

**"PDF/X garante que a cor sai perfeita."**
Garante que o ficheiro está bem formado e tem um output intent. A cor final depende ainda do papel, da máquina e da calibração, daí continuar a valer a pena uma [prova de cor](/artigos/provas-de-cor-antes-da-tiragem/).

**"X-4 é sempre melhor que X-1a."**
É mais moderno e flexível, mas "melhor" é o que a tua gráfica suporta no fluxo dela. Uma máquina/RIP antigo pode dar-se melhor com X-1a.

**"Se exportar em PDF/X já não preciso de pensar em CMYK nem bleed."**
A norma obriga a fontes incorporadas e output intent, mas **não inventa o bleed** nem converte magicamente RGB mal preparado em X-1a (recusa-o). Continuas a precisar de preparar o documento, vê [bleed](/artigos/bleed-margem-de-seguranca-linha-de-corte/) e [CMYK vs RGB](/artigos/cmyk-ou-rgb-qual-usar-quando-vais-imprimir/).

## Em resumo

PDF/X são normas que tornam um PDF **seguro para produção** (fontes incorporadas + output intent). **X-1a** é o clássico restritivo (só CMYK, transparências achatadas); **X-4** é o moderno e flexível (transparências vivas, gestão de cor ICC). Para a maioria dos trabalhos de hoje, **X-4**, mas confirma sempre com a gráfica qual o preset que ela prefere.
