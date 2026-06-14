---
title: "Preto rico vs preto puro: qual usar (e o erro que estraga o texto)"
description: "Porque é que há mais do que um preto na impressão: a diferença entre preto puro (só K) e preto rico (CMYK), quando usar cada um, o perigo do 'preto de registo', e os limites de tinta que tens de respeitar."
pubDate: 2026-08-01
category: "Preparação de ficheiros"
keywords: "preto rico, preto puro, rich black, registo preto, K100, limite de tinta, total ink, preparação ficheiros impressão"
readingTime: "9 min"
featured: false
---

Parece a coisa mais simples do mundo: preto é preto. Mas na impressão a cores, **há mais do que um preto**, e escolher o errado pode deixar o teu texto desfocado, o teu fundo acinzentado, ou, no pior caso, encharcar o papel de tinta que nunca seca. A diferença entre **preto puro** e **preto rico** é um dos pormenores que separa um ficheiro bem preparado de um problema na gráfica.

Este artigo explica os tipos de preto, quando usar cada um, e os erros caros que se evitam sabendo isto.

## Os dois pretos (e meio)

Na [quadricromia CMYK](/artigos/cmyk-ou-rgb-qual-usar-quando-vais-imprimir/), o preto pode ser feito de maneiras diferentes:

- **Preto puro (*flat black*):** apenas a tinta preta, **K=100** (C0 M0 Y0 K100). Um único canal de tinta.
- **Preto rico (*rich black*):** a tinta preta **reforçada** com as outras cores por baixo, por exemplo, **C60 M40 Y40 K100**. Várias tintas sobrepostas para um preto mais **profundo e denso**.
- **Preto de registo (*registration black*):** **todas** as tintas a 100% (C100 M100 Y100 K100). **Não é para usar em arte**, serve apenas para marcas de corte. Já vamos ver porquê.

A pergunta certa não é "qual é o melhor preto", mas "**qual o preto certo para este elemento**".

## Quando usar preto puro

O **preto puro (K=100)** é a escolha para **texto pequeno e linhas finas**. A razão é técnica e importante: o preto puro usa **uma só chapa de tinta**, por isso não depende do **registo** (o alinhamento perfeito entre as quatro cores).

Se imprimisses texto miudinho em preto rico, as quatro tintas teriam de encaixar **com precisão perfeita**, e, na prática, há sempre uma ligeira variação de registo na máquina. Resultado: o texto fica com uma **auréola colorida** à volta (um fantasma de ciano ou magenta), **desfocado** e difícil de ler. Com preto puro (uma só tinta), isso **nunca** acontece, o texto sai limpo e nítido.

> Regra de ouro: **texto pequeno e linhas finas → sempre preto puro (K=100)**. Nunca uses preto rico em corpo de texto.

<div class="tech-box">
<div class="tech-label">Porque o registo estraga o texto em preto rico</div>
<p>Uma máquina de impressão aplica as quatro cores em <strong>passagens/estações separadas</strong>, e o papel pode "dançar" frações de milímetro entre elas, é o <strong>erro de registo</strong>. Em áreas grandes, ninguém nota. Mas numa letra de 8 pt feita de quatro tintas, um desvio mínimo faz aparecer as cores <strong>por baixo</strong> das bordas, criando um efeito tremido e colorido. O preto puro, com uma só tinta, é imune a isto. É por isso que o texto deve ser <strong>K=100</strong>.</p>
</div>

## Quando usar preto rico

O **preto rico** é a escolha para **grandes áreas de preto**, um fundo preto, uma capa, um bloco sólido. Aqui o problema é outro: o preto puro (K=100 sozinho), numa **área grande**, costuma parecer **acinzentado, lavado, "pobre"**, porque uma só camada de tinta preta não cobre o papel com densidade suficiente.

Reforçando o preto com as outras cores por baixo (o **preto rico**), obtém-se um preto **profundo, encorpado, verdadeiramente "preto"**. A diferença, num fundo grande, é enorme e visível.

Uma receita típica de preto rico (varia com a gráfica e o papel): qualquer coisa como **C60 M40 Y40 K100**, ou uma versão "frio"/"quente" ajustando o ciano ou o magenta. **Confirma sempre com a tua gráfica** a receita recomendada para o trabalho.

## O perigo: o limite de tinta

Aqui está o erro que pode arruinar uma tiragem. É tentador pensar "se rico é melhor, faço o preto **mais** rico possível", pondo todas as cores a 100% (C100 M100 Y100 K100). **Nunca faças isto** numa área de arte.

A razão é o **limite de tinta** (*total ink* / TAC, *Total Area Coverage*): a soma das percentagens das quatro tintas. C100+M100+Y100+K100 = **400%** de tinta. Isso é **tinta a mais** para o papel absorver, resultado: **não seca**, **borra**, **mela** (passa para a folha seguinte, o *set-off*), e pode estragar a tiragem inteira.

O offset costuma ter um limite seguro à volta de **280-320%** de tinta total (varia com o papel e o processo). Por isso, um bom preto rico **respeita esse limite**, daí receitas como C60 M40 Y40 K100 (soma ~240%), e não as quatro a 100%.

<div class="tech-box">
<div class="tech-label">"Preto de registo": a armadilha do menu de cores</div>
<p>Muitos programas têm uma amostra chamada <strong>"Registo" / "Registration"</strong> que parece preto, mas é o tal <strong>C100 M100 Y100 K100</strong> (400% de tinta). Existe só para as <strong>marcas de corte</strong> imprimirem em todas as chapas. Se, por engano, usares essa amostra num texto ou num fundo, crias um desastre de tinta encharcada. <strong>Nunca uses "Registo" em arte</strong>, usa K=100 (texto) ou um preto rico controlado (fundos). É um erro silencioso e clássico.</p>
</div>

## E na impressão digital?

Boa parte disto aplica-se sobretudo ao **offset** (onde o registo e a secagem das chapas mandam). Na [impressão digital](/artigos/impressao-digital-toner-xerografia/), o registo é eletrónico e muito preciso, e a secagem é diferente, por isso os problemas são menores. Ainda assim, o princípio mantém-se: **texto em K=100** (sempre seguro e nítido) e **fundos em preto rico controlado**. E o RIP/sistema digital também tem [limites de tinta](/artigos/rip-e-gestao-de-cor-grande-formato/) a respeitar.

## Confusões comuns

**"Preto é só preto, tanto faz."**
Não. **K=100** (puro) para texto e linhas finas; **preto rico** (CMYK controlado) para grandes áreas. Trocá-los dá texto desfocado ou fundos acinzentados.

**"Quanto mais rico o preto, melhor, ponho tudo a 100%."**
Erro grave. C100M100Y100K100 = **400% de tinta**, que não seca e borra. O preto rico tem de **respeitar o limite de tinta** (~280-320% no offset).

**"Uso a cor 'Registo' porque é o preto mais escuro."**
Não. "Registo" existe só para marcas de corte (imprime em todas as chapas). Em arte, encharca o papel. Usa K=100 ou um preto rico controlado.

**"Texto pequeno fica mais bonito em preto rico."**
Fica **pior**: o erro de registo cria auréolas coloridas e desfoca a letra. Texto pequeno é **sempre K=100**.

## Em resumo

Há mais do que um preto na impressão. O **preto puro (K=100)** é para **texto e linhas finas**, uma só tinta, imune ao erro de registo, sempre nítido. O **preto rico (CMYK reforçado, ex.: C60 M40 Y40 K100)** é para **grandes áreas**, onde dá um preto **profundo** que o K sozinho não consegue. E o **preto de registo (tudo a 100%)** **nunca** se usa em arte, só em marcas de corte.

A regra que evita desastres: **texto → K100; fundos → preto rico controlado; nunca "Registo"; e respeita sempre o limite de tinta** (~280-320%). É um pormenor pequeno na preparação do ficheiro, mas é a diferença entre um trabalho nítido e profundo e um texto tremido sobre um fundo encharcado. Em caso de dúvida, **pergunta à tua gráfica** a receita de preto rico que ela recomenda.
