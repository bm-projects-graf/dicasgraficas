---
title: "Resolução para impressão: o guia definitivo do DPI"
description: "O que é o DPI, porque é que 300 é o número mágico para impressão, e como verificar se as tuas imagens têm resolução suficiente antes de enviar à gráfica."
pubDate: 2026-05-03
category: "Preparação de ficheiros"
keywords: "resolução impressão dpi, 300 dpi impressão, dpi para flyers, resolução cartões visita"
readingTime: "8 min"
featured: false
---

Mandaste uma fotografia para imprimir e o resultado ficou pixelizado, com aquele aspeto "estragado" típico de imagem de baixa qualidade? Quase de certeza foi um problema de **resolução** — e mais especificamente, de **DPI**.

A boa notícia é que este é dos problemas mais fáceis de evitar quando se percebe a lógica. Vamos lá.

## O que é DPI

**DPI** vem do inglês *Dots Per Inch* — pontos por polegada. É a medida de quantos pontos de tinta uma impressora coloca dentro de uma polegada (2,54 cm) de papel. Quanto mais pontos por polegada, mais detalhe é possível reproduzir.

Uma fotografia impressa a **300 DPI** tem 300 pontos de tinta em cada polegada. Numa polegada quadrada (2,54 × 2,54 cm), isso são **90.000 pontos** — densidade suficiente para o olho humano não conseguir distinguir os pontos individuais a uma distância normal de leitura.

Uma imagem a **72 DPI** tem apenas 72 pontos por polegada. Numa polegada quadrada, são **5.184 pontos** — 17 vezes menos densidade. O olho humano vê facilmente os pontos individuais, e a imagem aparece pixelizada.

## A confusão entre DPI e PPI

Vais ouvir ambos os termos e na maioria das conversas são usados como sinónimos. Mas tecnicamente são diferentes:

- **DPI** (Dots Per Inch) refere-se à **impressão** — pontos físicos de tinta no papel
- **PPI** (Pixels Per Inch) refere-se ao **ecrã** — pixels na imagem digital

Quando preparas um ficheiro digital para impressão, o que estás realmente a definir é o **PPI** (densidade de pixels da imagem). A impressora depois traduz esses pixels em pontos de tinta (DPI).

Para efeitos práticos, podes pensar nos dois como a mesma coisa. A maior parte dos programas (Photoshop, Illustrator, etc.) usa o termo **DPI** mesmo quando tecnicamente está a falar de PPI.

## Porquê 300 DPI é o padrão de impressão

Não é coincidência que 300 DPI seja o número mágico para impressão profissional. É um valor cuidadosamente calibrado:

- **Acima de 300 DPI**, o olho humano não consegue distinguir pontos individuais à distância normal de leitura (30-40 cm). Mais DPI seria desperdício — resoluções tipo 600 ou 1200 só fazem sentido em produtos visualizados muito de perto, como livros de arte ou fotografia profissional.

- **Abaixo de 300 DPI**, começam a ser visíveis falhas — desfoque, pixels visíveis, perda de detalhes. A 200 DPI ainda passa em alguns casos. A 150 DPI já é claramente percetível para alguém atento. A 72 DPI é catastrófico para impressão.

Há contudo casos onde se pode ir mais baixo sem prejuízo, que vamos ver já a seguir.

## Resoluções por tipo de produto

A regra dos 300 DPI aplica-se a tudo o que é visualizado de perto. Mas a **distância de visualização** muda completamente o cenário. Quanto mais longe estás de uma imagem, menos DPI precisas — porque o teu olho não distingue os pequenos pontos de qualquer maneira.

**Cartões de visita, postais, flyers (visualizados a 30-40 cm):** 300 DPI é o padrão, sem exceções.

**Brochuras, catálogos, revistas (visualizados a 30-50 cm):** 300 DPI também. Em casos de catálogos com imagens muito grandes, alguns profissionais sobem para 400 DPI, mas é raro.

**Livros e fotografia de arte (visualizados muito de perto):** 300 DPI no mínimo, podendo subir até 600 DPI em livros premium de fotografia ou arte, onde cada detalhe importa.

**Cartazes A2 e A1 (visualizados a 1-2 metros):** 200-250 DPI é tipicamente suficiente. O olho humano a 1 metro não consegue distinguir entre 250 e 300 DPI, então não vale a pena o peso extra do ficheiro.

**Cartazes grandes formatos (A0 e maiores, visualizados a 2-3 metros):** 150 DPI é frequentemente suficiente.

**Lonas publicitárias e outdoors (visualizados a 5-30 metros):** 50-100 DPI é o padrão. Pode parecer chocante, mas faz sentido — a 10 metros de distância, o olho não distingue uma lona a 75 DPI de uma a 300 DPI. A diferença prática é apenas o tamanho do ficheiro: uma lona de outdoor a 300 DPI seria um ficheiro de gigabytes, completamente desnecessário.

**Lonas gigantes em fachadas de edifícios:** 30-50 DPI funciona perfeitamente.

A regra simples: **quanto mais longe vais ver, menos DPI precisas**. Para perto, 300. Para outdoor grande, muito menos.

## Como verificar a resolução de uma imagem antes de imprimir

Antes de enviar qualquer imagem para a gráfica, vale a pena confirmar que tem resolução suficiente.

**No Adobe Photoshop:**

1. Abre a imagem
2. `Imagem → Tamanho da imagem` (`Image → Image Size`)
3. Vê o campo **Resolução** — este é o teu DPI
4. Confirma também o **Tamanho do documento** (em centímetros ou polegadas) — é o tamanho real a que a imagem será impressa àquela resolução

Se aumentares o tamanho do documento (por exemplo, de 10 cm para 20 cm), a resolução cai automaticamente para metade. Manter o ficheiro a 300 DPI **e** aumentar o tamanho exige adicionar pixels (o que o Photoshop faz através de algoritmos, com perda de qualidade).

**No Windows ou Mac (sem programa especial):**

Clica direito na imagem → **Propriedades** (Windows) ou **Obter informações** (Mac). Vê **Dimensões em pixels** (ex: 1500 × 1000 px).

Faz a conta: pixels ÷ 300 = polegadas que podes imprimir a 300 DPI. Multiplica por 2,54 para teres centímetros.

Por exemplo, uma imagem de 1500 × 1000 px:
- 1500 ÷ 300 = 5 polegadas = **12,7 cm**
- 1000 ÷ 300 = 3,33 polegadas = **8,5 cm**

Esta imagem pode ser impressa a 300 DPI até cerca de 12,7 × 8,5 cm — perfeito para um cartão de visita, demasiado pequena para um flyer A5.

## Tabela rápida: tamanho mínimo em pixels para 300 DPI

| Formato | Dimensões cm | Pixels mínimos a 300 DPI |
|---------|--------------|--------------------------|
| Cartão de visita | 8,5 × 5,5 | 1004 × 650 |
| Postal A6 | 10,5 × 14,8 | 1240 × 1748 |
| Flyer A5 | 14,8 × 21 | 1748 × 2480 |
| Flyer A4 | 21 × 29,7 | 2480 × 3508 |
| Cartaz A3 | 29,7 × 42 | 3508 × 4961 |
| Cartaz A2 (a 250 DPI) | 42 × 59,4 | 4134 × 5847 |
| Cartaz A1 (a 200 DPI) | 59,4 × 84,1 | 4677 × 6622 |

Se a tua imagem está acima destes valores, estás bem servido. Se está abaixo, vais ter perda de qualidade.

## Posso aumentar a resolução? IA upscaling vs realidade

Esta é a pergunta de muita gente: *"a minha foto tem 800 × 600 px, mas eu queria imprimi-la em A3. Posso simplesmente aumentar para 3508 × 4961?"*

A resposta curta: **podes, mas o resultado vai ser pior do que esperas**.

Tradicionalmente, aumentar uma imagem (chamado *upscaling*) é feito através de **interpolação** — algoritmos que tentam adivinhar que pixels colocar entre os existentes. O resultado é uma imagem maior, mas com **detalhe inventado** que não estava lá. Texto fica desfocado, contornos perdem nitidez, padrões finos desaparecem.

Nos últimos anos surgiram ferramentas de **upscaling com IA** (Topaz Photo AI, Adobe Super Resolution, Upscayl, entre outras) que fazem um trabalho impressionante. Conseguem pegar numa imagem de 1000 px e gerar uma versão de 4000 px com detalhe convincente.

Mas há limites importantes:

- **Qualidade depende muito do tipo de imagem.** Fotografias de paisagens e retratos costumam upscalar bem. Texto, logótipos pequenos, gráficos detalhados costumam ficar com artefactos visíveis.

- **A IA "inventa" detalhes.** Para fotografias é geralmente OK. Mas se a imagem é, por exemplo, uma fotografia de um produto onde os detalhes têm de estar corretos, a IA pode adicionar detalhes que não correspondem ao original.

- **Não funciona milagres.** Uma imagem de 200 × 200 px nunca vai ficar verdadeiramente nítida a A3, mesmo com a melhor IA.

A regra prática: usa upscaling com IA apenas quando **não tens alternativa**. Sempre que possível, recolhe a imagem original em alta resolução desde o início. Para fotografia, fotografa em RAW ou JPEG de alta qualidade. Para logótipos e ilustrações, usa **ficheiros vetoriais** (SVG, AI, EPS) que não têm o problema de resolução de todo — escalam infinitamente sem perda.

## Erros comuns: imagens do Facebook, Instagram, Google

A maior fonte de imagens em baixa resolução são as redes sociais. **As plataformas comprimem agressivamente as imagens** para poupar largura de banda — o que carregaste em alta qualidade fica reduzido a 1080 px ou menos quando alguém faz download.

Em particular:
- **Imagens descarregadas do Facebook:** tipicamente 960 × 720 px ou similar
- **Imagens descarregadas do Instagram:** 1080 × 1080 ou 1080 × 1350 px
- **Imagens guardadas via clique direito no Google Imagens:** dependem do sítio web original, frequentemente comprimidas
- **Capturas de ecrã:** captam à resolução do ecrã, tipicamente 72-100 DPI

**Nunca uses imagens destas fontes para impressão**, exceto em produtos pequenos como cartões de visita onde o tamanho final é reduzido. Vai sempre buscar o ficheiro original — pede ao fotógrafo, ao designer, ao cliente. Se for uma imagem de stock, compra a versão de alta resolução.

## O caso especial dos logótipos

Os logótipos merecem uma menção à parte. Idealmente, **um logótipo nunca deve ser imagem rasterizada (PNG, JPG)** — deve ser **ficheiro vetorial** (AI, EPS, SVG, ou PDF vetorial).

Os ficheiros vetoriais não têm DPI nem resolução. São compostos por **fórmulas matemáticas** que descrevem formas — círculos, linhas, curvas — que podem ser desenhadas a qualquer tamanho sem perda de qualidade. O mesmo logótipo vetorial pode ser impresso num cartão de visita de 5 cm e numa lona de 5 metros, com perfeita nitidez nos dois casos.

Se a tua marca só tem o logótipo em PNG ou JPG, **investe em fazê-lo recuperar em vetorial** com um designer. Vai poupar-te problemas em todas as impressões futuras.

## A regra de ouro

Antes de enviar qualquer trabalho à gráfica:

1. **Verifica a resolução de cada imagem** ao tamanho final em que vai ser impressa
2. **Mantém 300 DPI** para tudo que seja visualizado de perto
3. **Usa vetoriais sempre que possível** — especialmente para logótipos, texto e ilustrações
4. **Não estiques imagens pequenas** — procura sempre o original em alta qualidade

Quando tiveres dúvida, pede à gráfica para verificar o ficheiro **antes** de imprimir. A maioria das gráficas profissionais faz revisão automática e avisa-te se há imagens em baixa resolução. Esta verificação preventiva poupa-te dinheiro e tempo.
