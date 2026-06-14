---
title: "Bleed, margem de segurança e linha de corte explicados"
description: "O que é o bleed, porque é necessário, e como adicioná-lo nos programas mais usados, InDesign, Illustrator e Canva. Os 3mm que fazem a diferença entre um trabalho profissional e um amador."
pubDate: 2026-05-03
category: "Preparação de ficheiros"
keywords: "bleed impressão, margem segurança gráfica, bleed 3mm, linha de corte"
readingTime: "7 min"
featured: false
---

Recebeste um email de uma gráfica a dizer "*o ficheiro precisa de bleed de 3mm*" e ficaste a olhar para o ecrã sem perceber o que isso quer dizer? Não estás sozinho. O **bleed**, a palavra inglesa para a tinta que se prolonga para lá da linha de corte, é um daqueles conceitos que parece técnico mas é, na verdade, simples, e absolutamente fundamental para qualquer trabalho de impressão sair bem.

Vamos perceber o que é, porque existe, e como o adicionar nos programas que usas.

## O que é o bleed

**Bleed** é uma extensão extra do design para além das linhas de corte do trabalho final. Em termos práticos, é uma "moldura invisível" de cor ou imagem que se prolonga 3 milímetros para fora das dimensões reais do produto.

Imagina que estás a desenhar um flyer A5 (148 × 210 mm) com um fundo azul. Sem bleed, o fundo termina exatamente nas bordas do A5. Com bleed, o fundo prolonga-se para fora, formando um retângulo de 154 × 216 mm, 3 mm extra em cada lado, que serão cortados depois.

<figure class="article-figure">
<svg viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama com a área de bleed, a linha de corte e a margem de segurança">
<rect x="30" y="30" width="380" height="230" fill="var(--cat)" opacity="0.12" />
<rect x="30" y="30" width="380" height="230" fill="none" stroke="#DC2626" stroke-width="2" stroke-dasharray="7 5" />
<rect x="57" y="57" width="326" height="176" fill="none" stroke="#1A1A1A" stroke-width="2" />
<rect x="86" y="86" width="268" height="118" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="7 5" />
<text x="220" y="151" text-anchor="middle" font-family="monospace" font-size="13" fill="#6B7280">conteúdo seguro aqui dentro</text>
<g font-family="monospace" font-size="13" fill="#374151">
<line x1="40" y1="300" x2="66" y2="300" stroke="#DC2626" stroke-width="2" stroke-dasharray="6 4" /><text x="74" y="304">Bleed, 3 mm que serão cortados</text>
<line x1="40" y1="325" x2="66" y2="325" stroke="#1A1A1A" stroke-width="2" /><text x="74" y="329">Linha de corte, o tamanho final</text>
<line x1="40" y1="350" x2="66" y2="350" stroke="#059669" stroke-width="2" stroke-dasharray="6 4" /><text x="74" y="354">Margem de segurança, nada importante fora</text>
</g>
</svg>
<figcaption>As três zonas de qualquer ficheiro de impressão: a arte prolonga-se até ao bleed, o corte dá-se na linha preta, e o conteúdo essencial fica dentro da margem verde.</figcaption>
</figure>

## Os 3 milímetros mágicos

Em quase toda a Europa, **3 mm de bleed** é o padrão universal. É o suficiente para acomodar pequenos desvios na máquina de corte, mas pequeno o suficiente para não desperdiçar papel.

Em alguns mercados (especialmente nos Estados Unidos), o padrão é **0.125 polegadas**, que equivale a cerca de **3,175 mm**, praticamente o mesmo. Trabalhos especiais como capas de livros encadernados ou produtos com cortantes especiais podem pedir 5 mm. Quando há dúvida, pergunta sempre à gráfica.

## Porque é que o bleed existe

Se as máquinas de corte fossem perfeitas e cada folha fosse cortada exatamente na linha certa, o bleed não seria necessário. Mas na realidade não é assim:

As máquinas de corte cortam **dezenas ou centenas de folhas ao mesmo tempo**, em pilhas. Mesmo as melhores máquinas têm uma tolerância de 0,5 a 2 mm, pequenas variações no posicionamento da pilha, na pressão da lâmina, no avanço entre cortes.

Se uma folha é cortada 1 mm desviada do previsto, e o teu fundo de cor terminava exatamente na borda original, vais ter uma **linha branca fina** ao longo desse lado. Repara em flyers mal preparados, frequentemente vais ver essa pequena linha branca onde a tinta não chegou.

Com 3 mm de bleed, mesmo que o corte saia 1-2 mm desviado, o fundo de cor continua a chegar até à borda. Uniformidade garantida.

## Margem de segurança: o que NÃO pôr perto da borda

Se o bleed é a tinta que **se prolonga para fora** das linhas de corte, a **margem de segurança** é o oposto: é a área dentro das linhas de corte onde **não deves colocar elementos importantes**.

A regra prática é manter pelo menos **3-5 mm de margem de segurança** em todas as bordas. Tudo o que esteja dentro desta margem corre risco de ficar cortado ou demasiado próximo da borda, texto, logótipos, números de contacto, elementos importantes do design devem estar fora desta zona de risco.

Resumindo as três zonas:

- **Bleed** (3 mm para fora): cor de fundo, imagens que tocam a borda
- **Linha de corte** (a borda real do produto): onde o produto será cortado
- **Margem de segurança** (3-5 mm para dentro): texto e elementos importantes ficam aqui

## Como adicionar bleed no Adobe InDesign

O InDesign foi pensado para impressão, então é o mais simples:

1. Quando crias um documento novo (`Ficheiro → Novo → Documento`), na janela de configuração há uma secção **Bleed e slug**
2. Em **Bleed**, escreve `3 mm` em todas as quatro caixas (cima, baixo, dentro, fora)
3. Confirma e o documento abre com uma linha vermelha a 3 mm das bordas, essa é a tua área de bleed
4. Estende cores e imagens de fundo até à linha vermelha
5. Quando exportares para PDF (`Ficheiro → Exportar`), na secção **Marcas e bleeds**, marca **Use Document Bleed Settings** e ativa **Crop Marks**

## Como adicionar bleed no Adobe Illustrator

No Illustrator, defines o bleed na criação do documento:

1. `Ficheiro → Novo`
2. Na janela de configuração, há uma secção **Bleed**
3. Escreve `3 mm` em todas as caixas
4. O Illustrator vai mostrar uma área vermelha à volta do teu artboard
5. Estende cores até essa linha vermelha
6. Para exportar, vai a `Ficheiro → Guardar como → Adobe PDF`, escolhe predefinição **PDF/X-1a** ou **PDF/X-4**, e na secção **Marks and Bleeds** marca **Use Document Bleed Settings**

Se o documento já está criado sem bleed, podes adicionar depois em `Ficheiro → Configuração do documento → Bleed`.

## Como adicionar bleed no Canva

O Canva esconde esta funcionalidade, só está disponível na **versão Pro** e na altura de descarregar:

1. Faz o teu design normalmente
2. Em `Partilhar → Descarregar`, escolhe **PDF impressão** (não PDF padrão)
3. Marca a opção **Crop marks and bleed**
4. Descarrega

O Canva adiciona automaticamente 3 mm de bleed estendendo o teu fundo. Mas atenção: se o teu design tem elementos posicionados muito perto da borda, o Canva pode cortá-los inesperadamente. Verifica sempre o PDF antes de enviar.

Se não tens Canva Pro, há duas alternativas: ou pedes à gráfica que adicione o bleed no ficheiro (a maioria faz, mas perde-se controlo), ou usas uma ferramenta gratuita como o **Bleed Generator** online.

## O que acontece quando não há bleed: os exemplos visíveis

Há sinais clássicos num impresso mal preparado, e quando os reconheces começas a vê-los em todo o lado:

- **Linhas brancas finas ao longo de uma ou várias bordas**, a clássica falha de bleed
- **Texto cortado em flyers**, alguém pôs texto demasiado perto da borda, e o corte apanhou-o
- **Logótipos desalinhados em cartões de visita**, quando o design está demasiado próximo das bordas, pequenos desvios de corte tornam-se visíveis
- **Imagens de capa "saltadas" em livros**, quando a capa não tem bleed suficiente, a lombada e as bordas ficam com tiras brancas

Estes erros são **inelegíveis para reclamação na maioria das gráficas**, porque a responsabilidade de preparar o ficheiro é do cliente. Daí a importância de fazer bem desde o primeiro envio.

## Casos especiais: lombadas, formatos não-padrão, cortantes

A regra dos 3 mm cobre 95% dos casos. Mas há situações especiais a ter em conta:

**Livros encadernados com lombada:** o miolo precisa de bleed nas bordas externas, mas também tem de prever o espaço da lombada no centro (que pode ter 2 a 30+ mm consoante o número de páginas e o tipo de encadernação).

**Capas com badanas (orelhas):** as badanas que dobram para dentro precisam de bleed nas pontas, mais um cuidado extra na zona da dobra para que o desenho continue corretamente.

**Cortantes especiais (formas não-retangulares):** quando o produto tem uma forma personalizada, uma caixa de embalagem, um cartão recortado em forma de X, o bleed segue a forma do cortante, não as linhas retas. A gráfica fornece um modelo específico que tens de respeitar.

**Formatos auto-completos como dobráveis:** um folheto tríptico A4 que se dobra em três precisa de bleed nas bordas externas, mas o design tem de ser consistente entre as zonas que se vão dobrar.

## A regra de ouro

Antes de enviares qualquer ficheiro à gráfica, **certifica-te das três coisas em conjunto**:

1. **Bleed de 3 mm** estendido em todas as bordas externas
2. **Texto e elementos importantes a pelo menos 3-5 mm de margem das linhas de corte**
3. **PDF exportado com marcas de corte e bleed visíveis**

Se cumpres estas três coisas, o teu ficheiro vai ter aspeto profissional na receção da gráfica. E gráficas que recebem ficheiros bem preparados respondem mais rápido, sugerem melhorias com confiança, e dão-te tratamento prioritário em prazos apertados. Vale a pena.
