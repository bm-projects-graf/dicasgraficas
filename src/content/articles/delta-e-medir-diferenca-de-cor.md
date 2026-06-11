---
title: "Delta E: o número que mede se duas cores são realmente diferentes"
description: "O que é o Delta E (ΔE), como põe um número na diferença entre duas cores, qual o limiar a partir do qual o olho humano nota a diferença, e porque é a métrica que controla a qualidade na impressão profissional."
pubDate: 2026-07-01
category: "Ciência da cor"
keywords: "delta E, ΔE, diferença de cor, CIEDE2000, tolerância de cor, controlo de qualidade cor, CIELAB"
readingTime: "10 min"
featured: false
---

"A cor está perto, mas não exatamente igual." Quantas vezes já ouviste — ou disseste — isto a olhar para uma prova de impressão? O problema é que "perto" não é uma medida. É uma opinião. E na impressão profissional, onde a cor de uma marca tem de bater certo de forma objetiva e contratável, as opiniões não chegam. É preciso um **número**. Esse número chama-se **Delta E** (ΔE), e é a ferramenta que transforma "acho que está bem" em "está dentro da tolerância".

Este artigo explica o que é o Delta E, como interpretá-lo, e porque é o coração do controlo de qualidade da cor.

## A ideia: a distância entre duas cores

Imagina todas as cores arrumadas num **espaço a três dimensões** — o espaço **CIELAB** (ou L\*a\*b\*), que descreve a cor como o olho a vê: um eixo para a **luminosidade** (L\*, do preto ao branco), um para o **verde-vermelho** (a\*) e um para o **azul-amarelo** (b\*). Nesse espaço, cada cor é um **ponto**.

O **Delta E** é, muito simplesmente, a **distância entre dois pontos** — entre duas cores. Se a cor que querias e a cor que saiu impressa forem o mesmo ponto, a distância é zero: cores idênticas. Quanto mais afastadas, maior o Delta E, mais diferentes são.

O "Delta" (Δ) é o símbolo grego de "diferença"; o "E" vem do alemão *Empfindung* ("sensação", de perceção). Delta E = "diferença de perceção de cor".

<div class="tech-box">
<div class="tech-label">Porque CIELAB e não RGB ou CMYK</div>
<p>Medir distância em RGB ou CMYK não funciona, porque esses espaços não são <strong>perceptualmente uniformes</strong> — a mesma "distância numérica" pode representar diferenças de cor muito diferentes para o olho. O <strong>CIELAB</strong> foi desenhado para ser (aproximadamente) uniforme: distâncias iguais correspondem a diferenças visuais parecidas. Por isso o Delta E mede-se sempre num espaço baseado na <strong>visão humana</strong>, não no comportamento de um aparelho. É a mesma lógica da <a href="/artigos/gestao-de-cor-perfis-icc/">gestão de cor</a>.</p>
</div>

## A escala: a partir de que ΔE o olho nota?

O mais útil do Delta E é que existe uma **interpretação prática** ligada à perceção humana. Eis a escala de referência (para o ΔE clássico):

| Delta E (ΔE) | O que o olho vê |
|---|---|
| **< 1** | Diferença **impercetível** — nem um olho treinado distingue |
| **1 – 2** | Percetível só por um **olho treinado**, em observação atenta lado a lado |
| **2 – 3,5** | Percetível por um **olho normal**, com as cores lado a lado |
| **3,5 – 5** | Diferença **clara** |
| **> 5** | Cores **claramente diferentes** |

O número mágico é o **1**: é, aproximadamente, a **menor diferença de cor que o ser humano consegue detetar** (a chamada *just noticeable difference*). Abaixo de 1, as cores são, para todos os efeitos, iguais.

Isto dá um critério objetivo: se a tua marca exige fidelidade alta, podes especificar "tolerância máxima de ΔE ≤ 2" e a gráfica tem um **alvo medível** para cumprir — não uma vaga promessa.

<figure class="article-figure">
<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Delta E é a distância entre duas cores e a escala do que o olho nota">
<circle cx="150" cy="65" r="34" fill="#B83C5E" />
<circle cx="310" cy="65" r="34" fill="#BE5A6E" />
<line x1="186" y1="65" x2="274" y2="65" stroke="#374151" stroke-width="1.5" stroke-dasharray="5 4" />
<text x="230" y="56" text-anchor="middle" font-family="monospace" font-size="15" fill="#111">&#916;E</text>
<g font-family="monospace" font-size="12" fill="#6B7280" text-anchor="middle">
<text x="150" y="120">cor pretendida</text><text x="310" y="120">cor obtida</text>
</g>
<rect x="40" y="165" width="95" height="18" fill="#16A34A" /><rect x="135" y="165" width="95" height="18" fill="#A3B814" /><rect x="230" y="165" width="95" height="18" fill="#F59E0B" /><rect x="325" y="165" width="95" height="18" fill="#DC2626" />
<g font-family="monospace" font-size="11.5" fill="#374151" text-anchor="middle">
<text x="87" y="202">&lt;1</text><text x="87" y="216">igual</text>
<text x="182" y="202">1–2</text><text x="182" y="216">olho treinado</text>
<text x="277" y="202">2–3,5</text><text x="277" y="216">nota-se</text>
<text x="372" y="202">&gt;5</text><text x="372" y="216">diferente</text>
</g>
</svg>
<figcaption>O ΔE mede a <strong>distância</strong> entre a cor que querias e a que saiu. A escala diz o que o olho nota: abaixo de 1 são, na prática, iguais; acima de 5 são claramente cores diferentes.</figcaption>
</figure>

## Nem todos os Delta E são iguais

Aqui está a parte que distingue quem percebe do assunto. Há **várias fórmulas** de Delta E, cada vez mais sofisticadas, porque a primeira tinha um problema.

- **ΔE\*ab (CIE76):** a fórmula original, de 1976 — a simples distância em linha reta no espaço Lab. Fácil de calcular, mas **imperfeita**: o espaço CIELAB não é perfeitamente uniforme, e a fórmula "exagera" as diferenças em certas zonas (sobretudo nos azuis e nas cores muito saturadas) e subestima noutras.
- **ΔE94 (CIE94):** uma correção que pondera melhor a luminosidade, a saturação e a tonalidade.
- **ΔE00 (CIEDE2000):** a fórmula **moderna e mais usada** no controlo de qualidade profissional. É mais complexa, mas alinha-se muito melhor com a forma como o olho **realmente** vê as diferenças, corrigindo as falhas da fórmula de 76. Quando uma norma ou um relatório fala de tolerância de cor a sério, é quase sempre em **ΔE00**.

<div class="tech-box">
<div class="tech-label">O mesmo par de cores, números diferentes</div>
<p>Atenção a esta armadilha: duas cores podem dar um valor em ΔE76 e <strong>outro</strong> em ΔE00 — porque são fórmulas diferentes. Por isso, comparar valores só faz sentido se forem da <strong>mesma fórmula</strong>. Quando alguém indica uma tolerância de cor, deve dizer <em>qual</em> Delta E (ex.: "ΔE00 ≤ 3"). Misturar fórmulas é comparar maçãs com laranjas.</p>
</div>

## Onde o Delta E trabalha todos os dias

O Delta E não é teoria académica — é a ferramenta operacional do controlo de cor:

- **Aferir provas e impressão a uma referência.** Mede-se a diferença entre o impresso e o alvo (por exemplo, uma tira de controlo normalizada, a *media wedge* da Fogra) e verifica-se se está dentro da tolerância.
- **Normas de impressão** (como a **ISO 12647**, que rege o offset de qualidade) definem **tolerâncias em Delta E** para as cores primárias e para o cinzento. Cumprir a norma é, em boa parte, **ficar abaixo de certos ΔE**.
- **Controlo de cor de marca.** Uma marca exigente mede o seu vermelho em cada produção e exige ΔE abaixo de um limite — garantia objetiva de que a cor não "desliza" entre lotes.
- **Avaliar a fidelidade de uma [Pantone](/artigos/pantone-vs-cmyk-cores-diretas/) simulada em CMYK:** o ΔE entre a direta e a sua simulação diz, em número, **quão boa** é a conversão.

Mede-se com um **espetrofotómetro** — o instrumento que lê a cor real de uma amostra impressa e a converte em valores Lab para o cálculo.

## Um exemplo concreto

Imagina que a cor-alvo da tua marca, medida em Lab, é **L\*50, a\*60, b\*40** (um vermelho-alaranjado), e a impressão saiu **L\*51, a\*58, b\*41**. A diferença em cada eixo é pequena (1, 2, 1). O Delta E (na fórmula simples) seria a "distância" desses desvios combinados — qualquer coisa à volta de **2,4**. Tradução: um olho atento, com as duas amostras lado a lado, **nota** uma ligeira diferença; à distância e sem comparação, ninguém repara. Se a tua tolerância era ΔE ≤ 3, **passou**. Se era ≤ 2, **chumbou** — e há que reafinar a máquina.

É esta objetividade que torna o Delta E tão poderoso: substitui a discussão "está bom / não está" por um veredito medido.

## Confusões comuns

**"Delta E zero é impossível, então não serve."**
ΔE exatamente zero é raro, mas não é o objetivo. O objetivo é ficar **abaixo do limiar percetível** (tipicamente ΔE ≤ 1-2). Cor "perfeita" é cor que o olho não distingue da referência, não cor matematicamente idêntica.

**"ΔE 3 é o triplo de mau que ΔE 1."**
Não é uma escala perfeitamente linear na perceção (sobretudo na fórmula antiga). É melhor pensar em **patamares** (impercetível / percetível / claro) do que em proporções exatas. As fórmulas modernas (ΔE00) aproximam-se mais da linearidade percetual.

**"Mediste ΔE, então a cor está certa."**
Depende do **alvo** e da **fórmula**. Um ΔE baixo contra a referência errada não vale nada. E tem de se indicar qual Delta E (76, 94, 00) — senão o número é ambíguo.

**"O olho é melhor que a máquina."**
O olho é sensível mas **inconsistente** (cansa, é enganado pela luz e pelas cores à volta). O espetrofotómetro é **objetivo e repetível**. Por isso o controlo profissional usa números, não impressões.

## Em resumo

O **Delta E** põe um número na diferença entre duas cores, medindo a **distância entre elas** no espaço perceptual CIELAB. A escala tem um marco essencial: **ΔE ≈ 1 é o limiar do que o olho humano deteta** — abaixo disso, as cores são, na prática, iguais. As fórmulas evoluíram da simples **CIE76** para a muito mais fiel **CIEDE2000 (ΔE00)**, hoje o padrão.

É a métrica que transforma a cor de uma questão de gosto numa questão de engenharia — e que permite a uma marca exigir, e a uma gráfica garantir, que aquele vermelho é mesmo *aquele* vermelho. Quando a cor não pode falhar, o Delta E é o juiz.
