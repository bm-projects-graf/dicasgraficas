---
title: "pH e condutividade na impressão offset: a química invisível que decide o trabalho"
description: "Porque é que o offset imprime com água, o que o pH e a condutividade da solução de molha têm a ver com a qualidade, e como um desequilíbrio nestes números invisíveis estraga a cor, o ponto e a secagem."
pubDate: 2026-07-02
category: "Processos de impressão"
keywords: "pH solução de molha, condutividade offset, solução de molha, fountain solution, equilíbrio água tinta, química offset"
readingTime: "12 min"
featured: false
---

A impressão [offset](/artigos/impressao-digital-vs-offset/) assenta num princípio que parece magia: **a água e a gordura não se misturam.** É essa repulsa que permite a uma única chapa imprimir imagem e fundo sem se confundirem. Mas para que essa magia funcione, dia após dia, há uma química delicada a acontecer nos bastidores — e dois números que poucos fora da sala de impressão conhecem governam tudo: o **pH** e a **condutividade** da solução de molha.

Quando um trabalho offset sai com a cor instável, com sujidade no fundo, com o ponto a engordar ou a secar mal, a causa está, muitas vezes, nestes dois valores invisíveis. Este artigo explica-os ao nível de quem opera, ensina ou supervisiona uma máquina offset.

## Primeiro: porque é que o offset usa água

Numa chapa offset, as zonas de imagem são **oleófilas** (gostam de gordura, repelem a água) e as zonas sem imagem são **hidrófilas** (gostam de água, repelem a gordura). Em cada rotação, a chapa recebe duas coisas:

1. Uma fina película de **solução de molha** (água com aditivos), que humedece as zonas **sem** imagem e as protege.
2. **Tinta** (gordurosa), que só adere às zonas **de imagem** — porque as outras estão protegidas pela água.

A imagem entintada passa depois para a borracha e desta para o papel. Todo o sistema depende de um **equilíbrio água-tinta** finíssimo: água a menos e a tinta suja as zonas que deviam ficar limpas (*scumming*); água a mais e a tinta **emulsiona** (mistura-se com a água), perdendo força e estabilidade. E é a **química da solução de molha** que mantém esse equilíbrio.

<div class="tech-box">
<div class="tech-label">A solução de molha não é só água</div>
<p>A "água" do offset é, na verdade, uma <strong>solução de molha</strong> (em inglês, <em>fountain solution</em>): água + um concentrado com vários aditivos — agentes tampão (que estabilizam o pH), gomas (que mantêm hidrófilas as zonas sem imagem), agentes molhantes (que reduzem a tensão superficial), anti-espuma, biocidas. Historicamente juntava-se <strong>álcool isopropílico (IPA)</strong> para baixar a tensão superficial e melhorar o espalhamento; por razões ambientais (VOC), foi sendo substituído por <em>substitutos de álcool</em>. É esta receita que tem de estar afinada — e o pH e a condutividade são a forma de a controlar.</p>
</div>

## O pH: nem ácido demais, nem alcalino

O **pH** mede a acidez ou alcalinidade da solução (escala de 0 a 14: abaixo de 7 é ácido, acima é alcalino). Na solução de molha offset convencional, o alvo é uma zona **ligeiramente ácida**, tipicamente entre **pH 4,8 e 5,5** (varia com o sistema e o fabricante).

Porque esta janela importa tanto:

- **pH demasiado baixo (ácido a mais, abaixo de ~4,5):** a solução fica agressiva. Consequências: a tinta **seca devagar** (a acidez interfere com os secantes), tendência a **emulsionar**, possível ataque às chapas e aos rolos, e instabilidade geral. Mais ácido **não** é "mais seguro" — é problema.
- **pH demasiado alto (alcalino, acima de ~6):** perde-se o efeito tampão e a proteção das zonas sem imagem; a tinta tende a **emulsionar e a sujar** o fundo (*tinting*/*scumming*), o **ponto engorda** ([ganho de ponto](/artigos/o-que-e-o-gamut/)) e a película de tinta enfraquece. Frequentemente, papéis ou tintas **alcalinos** empurram o pH para cima durante a tiragem.

O segredo não é só **atingir** o pH certo — é **mantê-lo estável**. Por isso as soluções modernas são **tamponadas** (*buffered*): resistem a variações, mesmo quando o papel ou a tinta introduzem substâncias que mexeriam no pH. Mede-se com um **medidor de pH**, regularmente, ao longo do dia.

## A condutividade: o "doseador" da solução

Se o pH diz **quão ácida** está a solução, a **condutividade** diz **quão concentrada** está. A condutividade mede a capacidade da solução de **conduzir eletricidade**, que depende da quantidade de **sais e aditivos dissolvidos** — ou seja, da concentração do concentrado de molha. Mede-se em **microsiemens por centímetro (µS/cm)**.

A lógica prática é poderosa:

- **Água pura** conduz mal a eletricidade (condutividade baixa).
- Quanto **mais concentrado de molha** se adiciona, mais sais dissolvidos, **maior a condutividade**.
- A relação é aproximadamente **linear**: cada incremento de concentrado sobe a condutividade de forma previsível.

Por isso, a condutividade é o **indicador prático para dosear** a solução de molha. Em vez de medir químicas complexas, o operador mede a condutividade e ajusta o concentrado até ao valor-alvo definido para aquele sistema (por exemplo, manter a solução X µS/cm **acima** da condutividade da água de base).

<div class="tech-box">
<div class="tech-label">Porquê medir <em>acima</em> da água de base</div>
<p>A água da torneira já tem condutividade própria — e varia com a <strong>dureza</strong> (minerais dissolvidos) de região para região. Por isso o que interessa não é o número absoluto, mas o <strong>aumento</strong> de condutividade que o concentrado provoca. Primeiro mede-se a água "nua", depois mede-se a solução pronta; a diferença diz quanto concentrado lá está. Água muito dura (muito mineral) pode, aliás, perturbar a química — daí muitas gráficas tratarem a água (osmose, desmineralização) antes de a usar.</p>
</div>

## pH e condutividade trabalham em conjunto

Estes dois números contam histórias complementares, e ler os dois ao mesmo tempo permite **diagnosticar** o que se passa:

- **Condutividade a subir muito durante a tiragem** sinaliza que o papel e a tinta estão a libertar substâncias para a solução (acumulação de contaminantes) — pode ser hora de renovar a solução.
- **pH a derivar** indica que o efeito tampão está a ceder, ou que o papel/tinta é alcalino.
- Uma solução **demasiado concentrada** (condutividade alta) tende a emulsionar a tinta e a sujar; **demasiado fraca** (condutividade baixa) não protege bem as zonas sem imagem.

Numa sala de impressão bem gerida, o pH e a condutividade são **medidos e registados** ao longo do dia, como um piloto verifica instrumentos. São baratos de medir e poupam fortunas em trabalhos estragados.

## Os sintomas de quando corre mal

Para ligar a teoria à realidade, eis o que aparece no papel quando a química desafina:

| Sintoma | Causa química frequente |
|---------|-------------------------|
| Fundo sujo, zonas limpas a "encher" (*scumming*/*tinting*) | pH alto / solução fraca / pouca água |
| Tinta sem força, baça, a emulsionar | Solução demasiado concentrada ou pH instável |
| Secagem lenta, repasse (*set-off*) | pH demasiado ácido |
| Ponto a engordar, perda de detalhe | Desequilíbrio água-tinta, pH alto |
| Cor a variar ao longo da tiragem | pH/condutividade a derivar sem controlo |

Repara: muitos destes problemas seriam atribuídos a "tinta má" ou "máquina descalibrada" por quem não conhece a química — quando a raiz está nestes dois números.

## Confusões comuns

**"É só água, qualquer uma serve."**
Não. A **dureza** e a contaminação da água afetam o pH e a condutividade. Muitas gráficas tratam a água (osmose inversa) precisamente para partir de uma base estável e previsível.

**"Mais ácido protege melhor as zonas sem imagem."**
Falso. Abaixo da janela ideal, a acidez excessiva atrasa a secagem, ataca materiais e desestabiliza. O alvo é uma faixa **ligeiramente** ácida e **estável**, não "o mais ácido possível".

**"Condutividade e pH medem a mesma coisa."**
Não. O **pH** mede acidez/alcalinidade; a **condutividade** mede a concentração de sólidos dissolvidos (a "força" da solução). São dois instrumentos diferentes que se complementam.

**"Com máquinas modernas isto já não importa."**
As máquinas atuais automatizam parte do controlo (dosagem, refrigeração, filtragem), mas a **química continua a mandar**. Automatizar o controlo é, precisamente, manter o pH e a condutividade nos alvos certos — não deixá-los de lado.

## Em resumo

O offset imprime graças à repulsa entre **água e gordura**, e o árbitro silencioso desse equilíbrio é a **solução de molha**. O **pH** mantém-na na zona ligeiramente ácida e estável (tipicamente ~4,8-5,5) que garante boa secagem e zonas limpas; a **condutividade** mede a sua concentração e serve para a dosear com precisão. Juntos, dizem ao operador se a química está saudável — e, quando derivam, explicam a cor instável, a sujidade, o ponto a engordar e a secagem lenta.

São dois números invisíveis no papel final, mas decisivos para lá chegar. Dominá-los é a diferença entre uma tiragem que sai sempre igual e uma máquina que "tem dias" — e é uma das marcas de uma sala de impressão verdadeiramente profissional.
