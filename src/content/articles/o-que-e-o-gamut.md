---
title: "O que é o gamut: porque há cores no ecrã que nunca vão imprimir"
description: "O gamut explicado sem matemática: o que é a gama de cores de um dispositivo, porque o ecrã mostra cores que a impressão não alcança, e como reconhecer e lidar com as cores 'fora de gamut' antes de imprimir."
pubDate: 2026-06-28
category: "Ciência da cor"
keywords: "gamut, gama de cores, fora de gamut, cores que não imprimem, gamut RGB CMYK, espaço de cor"
readingTime: "9 min"
featured: false
---

Aconteceu a toda a gente que já mandou imprimir algo: aquele **azul vibrante** ou **verde elétrico** que era lindo no ecrã saiu, no papel, apagado e triste. Não foi erro da gráfica nem do teu ficheiro. Foi o **gamut** a fazer o seu trabalho — ou melhor, a mostrar o seu limite. Perceber o gamut é perceber **porque é que nem todas as cores são imprimíveis**, e é uma das ideias mais úteis (e mais ignoradas) da ciência da cor.

Vamos explicá-lo de forma visual e sem fórmulas.

## Gamut: o conjunto de cores que um dispositivo consegue

**Gamut** (ou gama de cores) é o **conjunto de todas as cores que um determinado dispositivo ou sistema consegue reproduzir**. É a "paleta máxima" de cada aparelho.

- O teu **olho** tem o maior gamut de todos — vê milhões de cores.
- Um **monitor** reproduz uma parte dessas cores (um gamut grande, mas menor que o olho).
- Uma **impressora CMYK** reproduz uma parte ainda menor — e de forma diferente.

Cada um tem a sua fronteira. E o problema nasce quando uma cor existe **dentro** do gamut de um dispositivo mas **fora** do de outro.

<div class="tech-box">
<div class="tech-label">Imagina três sacos de berlindes</div>
<p>Pensa em cada gamut como um <strong>saco de berlindes coloridos</strong>. O saco do <strong>olho</strong> tem todas as cores. O saco do <strong>monitor</strong> tem muitas, mas faltam-lhe alguns. O saco da <strong>impressão</strong> tem menos ainda. Quando queres uma cor que está no saco do monitor mas <strong>não</strong> no da impressão, a impressora faz o que pode: dá-te o berlinde <strong>mais parecido</strong> que tem. Por isso o azul elétrico do ecrã sai num azul mais "comportado" no papel — não porque a impressora errou, mas porque aquele berlinde não existe no saco dela.</p>
</div>

## Porque é que o ecrã ganha (quase) sempre

Há uma razão física para o ecrã mostrar cores mais vivas do que a impressão consegue: **o ecrã emite luz; o papel reflete-a.**

- Um monitor cria cor com **luz** (vermelho, verde e azul a brilhar). Pode produzir cores muito **saturadas e luminosas**, sobretudo verdes e azuis intensos.
- O papel impresso não brilha — apenas **reflete** a luz ambiente através de camadas de tinta. A tinta **absorve** parte da luz, e o resultado é sempre mais contido. Não há tinta CMYK que faça um verde-néon luminoso.

Por isso, regra geral, o **gamut do ecrã (RGB) é maior** — sobretudo nos tons vivos — do que o **gamut da impressão (CMYK)**. Há, porém, exceções curiosas: certos **ciano-esverdeados** imprimem-se de forma que alguns ecrãs reproduzem pior. Os gamuts não são só "maior/menor" — têm **formas diferentes**, e tocam-se e desencontram-se em zonas distintas.

## "Fora de gamut": o que acontece a essas cores

Quando convertes uma imagem de RGB (ecrã) para CMYK (impressão), o software encontra cores **fora do gamut** do CMYK — cores que a impressão não alcança. Tem de as **substituir** pela cor imprimível mais próxima. A este processo chama-se **mapeamento de gamut** (*gamut mapping*), e a estratégia usada é a **intenção de renderização** (perceptual, colorimétrica...), que explicámos em detalhe na [gestão de cor](/artigos/gestao-de-cor-perfis-icc/).

O efeito prático: as cores muito saturadas **"encolhem"** para dentro do que é possível. Quanto mais a tua imagem depende de cores vivas no limite, mais vais notar a diferença ao imprimir.

## Como antecipar (e não levar sustos)

Não precisas de instrumentos caros para evitar a desilusão:

- **Trabalha com noção dos limites.** Se uma cor parece "néon" ou "elétrica" no ecrã, desconfia: é forte candidata a estar fora do gamut de impressão.
- **Usa o aviso de "fora de gamut".** Programas profissionais de imagem têm um aviso (*gamut warning*) que **pinta** as zonas da imagem que não vão imprimir como as vês. Liga-o antes de decidir.
- **Faz soft proofing.** Simula no ecrã (com o perfil da gráfica) como as cores vão sair — incluindo o "apagar" das que estão fora de gamut.
- **Escolhe cores um pouco menos saturadas** para elementos críticos de marca, para que o ecrã e o papel fiquem mais próximos.

<div class="tech-box">
<div class="tech-label">Quando precisas mesmo da cor impossível</div>
<p>E se a cor da tua marca <strong>é</strong> aquele verde ou laranja que o CMYK não faz? Há saída: as <strong>cores diretas</strong>. Uma <a href="/artigos/pantone-vs-cmyk-cores-diretas/">Pantone</a> (incluindo fluorescentes e metálicas) é uma tinta pré-misturada que <strong>estende o gamut</strong> para lá do que as quatro cores conseguem. É a forma de imprimir cores que, de outro modo, ficariam para sempre "presas" no ecrã.</p>
</div>

## Gamuts que vais encontrar pelo nome

Quando lidas com cor, vais cruzar-te com estes "tamanhos de saco":

- **sRGB:** o gamut padrão da web e da maioria dos ecrãs. Modesto, mas universal.
- **Adobe RGB:** maior que o sRGB, sobretudo nos verdes — usado em fotografia e pré-impressão.
- **CMYK de impressão** (FOGRA, GRACoL...): mais pequeno e de forma própria, varia com o **papel** e a **máquina**.
- **Gamut da visão humana:** o maior de todos; nenhum dispositivo o cobre por inteiro.

Por isso uma foto guardada em Adobe RGB e aberta como sRGB (ou sem perfil) parece **lavada**: cores que cabiam no saco maior foram espremidas para o menor.

## Confusões comuns

**"A impressora estragou as minhas cores."**
Quase sempre não. As cores estavam **fora do gamut** da impressão e foram aproximadas. O ecrã prometeu o que a tinta não pode cumprir.

**"Se uso um monitor melhor, imprimo cores melhores."**
Um monitor melhor **mostra** mais cores — mas não muda o que a **impressão** consegue. Pode até piorar a desilusão, porque vês cores ainda mais vivas que não vão imprimir.

**"CMYK tem sempre menos cores que RGB."**
No geral sim, mas não em tudo. Os gamuts têm **formas diferentes**; há tons onde o CMYK ou o papel se comportam de modo que certos ecrãs não cobrem. "Menor" não é toda a história.

**"Cores fora de gamut são um erro a corrigir."**
Não é erro — é uma **limitação física**. Geres-na (escolhendo cores possíveis, ou usando cores diretas), não a "corriges".

## Em resumo

O **gamut** é a gama de cores que um dispositivo consegue reproduzir, e o grande facto da vida da cor é que **esses gamuts são diferentes**: o ecrã, que emite luz, mostra cores vivas que a impressão, que reflete luz, não alcança. As cores **fora de gamut** são aproximadas no momento de imprimir — daí o azul elétrico que "morre" no papel.

A boa notícia: com **avisos de fora de gamut**, **soft proofing** e bom senso na escolha das cores — e, quando é mesmo preciso, com **cores diretas** — deixas de ser apanhado de surpresa. Passas a saber, antes de imprimir, quais das tuas cores são promessas que o papel pode cumprir e quais ficam só no ecrã.
