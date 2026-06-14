---
title: "Sobreimpressão e trapping: o guia visual"
description: "O que é a sobreimpressão (overprint), o vazado (knockout) e o trapping, porque existem, quando se usam e como evitam os filetes brancos de mau registo na impressão."
pubDate: 2026-06-13
category: "Preparação de ficheiros"
keywords: "sobreimpressão overprint, knockout vazado, trapping impressão, filetes brancos registo, overprint preto"
readingTime: "9 min"
featured: false
---

Há um conjunto de conceitos que separa quem "faz arte" de quem percebe de **pré-impressão**: sobreimpressão, vazado e trapping. Todos giram à volta da mesma realidade física, quando uma máquina imprime várias cores, **as chapas nunca estão 100% alinhadas**, e essa pequena imperfeição tem de ser gerida. Este guia explica tudo, e podes experimentar ao vivo no nosso [Simulador de sobreimpressão vs vazado](/sobreimpressao-vs-vazado/).

## Vazado (knockout): o comportamento normal

Quando colocas um objeto de uma cor sobre um fundo de outra cor, o padrão é o **vazado** (*knockout*): a máquina "fura" o fundo no sítio do objeto, deixando o papel à vista, e imprime a cor do objeto por cima desse espaço vazio. As tintas **não se misturam**, cada uma fica na sua zona.

É o que faz sentido na maioria dos casos. Um texto laranja sobre um fundo azul deve sair laranja, não uma mistura de laranja com azul.

## Sobreimpressão (overprint): imprimir por cima

A **sobreimpressão** (*overprint*) é o oposto: o objeto é impresso **por cima** do fundo, sem furar. As tintas somam-se (física subtrativa): em cada canal, a percentagem final é a soma das duas, até ao máximo de 100%.

Isto raramente é o que queres para cores, sobreimpor um amarelo sobre um ciano dá verde, não amarelo. Mas há um caso em que a sobreimpressão é **a norma da indústria**: o **texto preto pequeno**.

<div class="tech-box">
<div class="tech-label">Porque é que o preto pequeno vai em overprint</div>
<p>Imagina texto preto fino sobre um fundo de cor. Em vazado, a máquina teria de furar o fundo exatamente na forma de cada letra, e ao mínimo desalinhamento das chapas aparece um <strong>filete branco</strong> à volta das letras. Pondo o preto em <strong>sobreimpressão</strong>, ele imprime-se simplesmente por cima do fundo: não há furo, não há filete branco possível. Por isso o preto de texto vai quase sempre em overprint.</p>
</div>

## O problema do registo (e os filetes brancos)

Numa máquina a 4 cores, cada cor é aplicada por uma chapa diferente. Os **erros de registo**, desalinhamentos de frações de milímetro entre chapas, são inevitáveis. Quando duas cores diferentes se tocam num vazado, esse desalinhamento revela o papel branco por baixo: o tal **filete branco**.

<figure class="article-figure">
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mau registo cria um filete branco; o trapping sobrepõe ligeiramente as cores e tapa-o">
<text x="115" y="24" text-anchor="middle" font-family="monospace" font-size="12.5" fill="#6B7280">sem trapping, filete branco</text>
<text x="345" y="24" text-anchor="middle" font-family="monospace" font-size="12.5" fill="#6B7280">com trapping, sem falha</text>
<rect x="40" y="40" width="150" height="120" fill="#00AEEF"/>
<rect x="118" y="40" width="72" height="120" fill="#FFFFFF"/>
<rect x="126" y="40" width="64" height="120" fill="#EC008C"/>
<rect x="270" y="40" width="150" height="120" fill="#00AEEF"/>
<rect x="348" y="40" width="72" height="120" fill="#EC008C"/>
<rect x="344" y="40" width="8" height="120" fill="#7A0F6B"/>
<text x="115" y="178" text-anchor="middle" font-family="monospace" font-size="11" fill="#9CA3AF">o papel aparece na junta</text>
<text x="345" y="178" text-anchor="middle" font-family="monospace" font-size="11" fill="#9CA3AF">pequena sobreposição na junta</text>
</svg>
<figcaption>À esquerda, o magenta desalinhou-se do ciano e o papel branco aparece na junta. À direita, o <strong>trapping</strong> faz as cores sobreporem-se ligeiramente: mesmo com desalinhamento, não há branco a aparecer.</figcaption>
</figure>

## Trapping: a solução para os filetes brancos

O **trapping** (ou *sobreposição de cores adjacentes*) é a técnica que resolve isto: faz-se uma das cores **invadir ligeiramente** o território da outra na zona de contacto. Assim, se houver desalinhamento, há sempre cor a tapar a junta, nunca o papel.

Há dois movimentos básicos:

- **Spread (espalhar):** o objeto mais claro cresce um pouco para dentro do mais escuro.
- **Choke (encolher):** o fundo mais escuro avança um pouco sobre o objeto mais claro.

A regra geral é que **a cor mais clara cede à mais escura**, porque o olho nota menos a alteração na cor clara. Os valores típicos de trapping são minúsculos, 0,05 a 0,15 mm, e na esmagadora maioria dos casos é o **RIP da gráfica** que os aplica automaticamente. Raramente precisas de fazer trapping à mão.

## O erro crítico: texto branco em overprint

Há uma combinação que dá sempre asneira: **texto branco com sobreimpressão ativada**.

Na máquina, o branco é a **ausência de tinta**, é a cor do papel. Se mandares um objeto branco em overprint, estás a dizer "imprime nada por cima do fundo". Resultado: a máquina imprime o fundo por cima e o **texto branco desaparece** completamente. É um clássico que arruína tiragens.

Experimenta no [simulador](/sobreimpressao-vs-vazado/): põe o texto a branco, ativa o overprint, e vê-o sumir. O branco deve estar **sempre em vazado**.

## E os grandes fundos pretos?

O overprint do preto é ótimo para texto, mas em **grandes áreas pretas** pode deixar o fundo transparecer (a tinta preta não é 100% opaca). Para esses casos, usa **preto rico em vazado**, vê [preto rico vs preto puro](/artigos/preto-rico-vs-preto-puro/). O preto rico (ex.: C40 M30 Y0 K100) é mais denso e cobre melhor.

## Confusões comuns

**"Vou pôr tudo em overprint para evitar filetes brancos."**
Não. O overprint só é seguro para o preto (e cores escuras sobre claras). Em cores normais, mistura tintas e dá cores erradas. Para o resto, a solução é o **trapping**, não o overprint geral.

**"Tenho de fazer o trapping no meu design."**
Quase nunca. As gráficas profissionais aplicam trapping no RIP. Fazer trapping manual sem saber pode até piorar. Pergunta à tua gráfica como gerem isto.

**"O branco em overprint vê-se no ecrã, logo imprime."**
O ecrã é luz, a impressão é tinta. O ecrã mostra o branco; a máquina não tem "tinta branca" no CMYK, imprime o fundo por cima. Confia na regra, não no ecrã.

## Em resumo

Vazado = a cor fura o fundo (padrão). Overprint = a cor imprime por cima e soma-se (usar para preto de texto). Trapping = pequena sobreposição que tapa os filetes brancos do mau registo. E a regra que nunca podes esquecer: **branco nunca em overprint**. Brinca com os cenários no [simulador](/sobreimpressao-vs-vazado/) até a lógica ficar intuitiva.
