---
title: "Formatos de papel: série A, B, C, SRA e formatos de máquina"
description: "Como funcionam os formatos de papel ISO (A4, A3, A0…), as séries B e C dos envelopes, os formatos SRA/RA das gráficas e os tamanhos americanos. Com tabela de medidas e a lógica do √2."
pubDate: 2026-06-13
category: "Papel e suportes"
keywords: "formatos de papel, série a, a4 a3 a0 medidas, sra3, formato sra, formato de máquina, iso 216"
readingTime: "8 min"
featured: true
---

Toda a gente conhece o A4 — mas porque é que tem exatamente 210 × 297 mm, e não um número redondo? E o que é um **SRA3**, esse formato que aparece nas gráficas e nas impressoras digitais? Por trás dos formatos de papel há uma lógica matemática elegante que vale a pena perceber, porque explica desde o A4 do escritório até ao formato da folha de máquina que escolhes para [aproveitar melhor o papel](/aproveitamento-de-folha/).

## A série A e a magia do √2

A série A é definida pela norma **ISO 216** e assenta numa ideia genial: **todos os formatos têm a mesma proporção**, e dobrar (ou cortar ao meio) um formato dá o formato seguinte.

Essa proporção é **1 : √2** (1 : 1,414). É a única proporção em que, ao cortar uma folha ao meio no lado maior, as duas metades mantêm exatamente a mesma proporção do original. Por isso um A4 dobrado dá dois A5, um A3 cortado dá dois A4, e assim sucessivamente — sem nunca distorcer.

O ponto de partida é o **A0**, que tem uma **área de exatamente 1 m²** (841 × 1189 mm). A partir daí, cada número corta o anterior ao meio:

<figure class="article-figure">
<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Os formatos A aninhados: A0 contém A1, A2, A3, A4, A5">
<rect x="20" y="20" width="380" height="240" fill="var(--cat)" opacity="0.10" stroke="var(--cat)"/>
<rect x="20" y="20" width="190" height="240" fill="none" stroke="var(--cat)" stroke-width="1.5"/>
<rect x="210" y="20" width="190" height="120" fill="var(--cat)" opacity="0.10"/>
<rect x="210" y="20" width="190" height="120" fill="none" stroke="var(--cat)" stroke-width="1.5"/>
<rect x="210" y="140" width="95" height="120" fill="none" stroke="var(--cat)" stroke-width="1.5"/>
<rect x="305" y="140" width="95" height="60" fill="none" stroke="var(--cat)" stroke-width="1.5"/>
<g font-family="monospace" font-size="15" fill="#374151" text-anchor="middle">
<text x="115" y="145">A1</text><text x="305" y="85">A2</text><text x="257" y="205">A3</text><text x="352" y="175">A4</text>
</g>
<text x="210" y="277" text-anchor="middle" font-family="monospace" font-size="11" fill="#9CA3AF">cada formato é metade do anterior — sempre na proporção 1:√2</text>
</svg>
<figcaption>A série A é "encaixável": A0 contém dois A1, que contêm dois A2, e por aí fora. Cortar ao meio mantém sempre a mesma proporção (1:√2), e por isso ampliar um A4 para A3 não corta nada.</figcaption>
</figure>

### Tabela da série A

| Formato | Medidas (mm) | Uso típico |
|---|---|---|
| A0 | 841 × 1189 | Cartazes grandes, plantas |
| A1 | 594 × 841 | Cartazes, posters |
| A2 | 420 × 594 | Cartazes, calendários |
| A3 | 297 × 420 | Cartazes pequenos, mapas |
| A4 | 210 × 297 | Folha de escritório, flyers |
| A5 | 148 × 210 | Flyers, folhetos |
| A6 | 105 × 148 | Postais, convites |
| A7 | 74 × 105 | Cartões, etiquetas |

<div class="tech-box">
<div class="tech-label">Truque para nunca te enganares</div>
<p>Para passar de um formato ao seguinte, troca os números e divide o maior por dois. A4 = 210 × 297 → A5 = 148 × <strong>210</strong> (o lado maior do A5 é o lado menor do A4). Quanto maior o número a seguir ao A, mais pequeno o papel.</p>
</div>

## Séries B e C: cartazes e envelopes

A norma ISO define mais duas séries, com a mesma proporção 1:√2:

- **Série B:** tamanhos **intermédios** entre os A (B4 fica entre A3 e A4). Usa-se em cartazes, livros e quando se precisa de algo "um pouco maior" que o A correspondente. O B0 mede 1000 × 1414 mm.
- **Série C:** pensada para **envelopes**. Um envelope **C4** leva uma folha A4 sem dobrar; um **C5** leva um A5 (ou um A4 dobrado a meio); um **C6** leva um A4 dobrado em quatro. É por isso que os envelopes têm nomes "C".

A regra mnemónica: **A vai dentro de C, e C é maior que B por pouco.** Para cada tamanho, C > B > A.

## SRA e RA: os formatos de máquina

Aqui chegamos ao que confunde quem entra numa gráfica: os formatos **SRA** (e RA). São formatos ISO **maiores** que os A correspondentes, criados precisamente para **impressão profissional**.

Porquê maiores? Porque uma folha que vai ser impressa precisa de espaço extra para duas coisas:

1. **Bleed** — a tinta que se prolonga para além do corte (vê [bleed e linha de corte](/artigos/bleed-margem-de-seguranca-linha-de-corte/)).
2. **Pinça e marcas** — a zona por onde a máquina agarra a folha e as marcas de corte/registo.

O **SRA** (*Supplementary Raw format A*) dá essa margem. O exemplo mais conhecido é o **SRA3: 320 × 450 mm** — maior que o A3 (297 × 420), o tamanho-padrão das impressoras digitais profissionais, precisamente para imprimir um A3 **com bleed**.

| Formato | Medidas (mm) | Para imprimir… |
|---|---|---|
| SRA3 | 320 × 450 | A3 com bleed |
| SRA2 | 450 × 640 | A2 com bleed (ou vários A4) |
| SRA1 | 640 × 900 | A1 com bleed |
| SRA0 | 900 × 1280 | A0 com bleed |
| RA0 | 860 × 1220 | versão um pouco menor que o SRA |

<div class="tech-box">
<div class="tech-label">Porque é que isto importa para o teu orçamento</div>
<p>A folha que entra na máquina é um formato SRA (ou um formato de máquina maior, como 70×100 cm). Quantos produtos finais cabem nessa folha determina o custo por unidade. É exatamente essa conta que o nosso <a href="/aproveitamento-de-folha/">otimizador de aproveitamento de folha</a> faz — dá-lhe o formato de máquina e o do produto e vê quantos saem à folha e quanto se desperdiça.</p>
</div>

## E os formatos americanos?

Os EUA (e parte do Canadá e México) não usam a série ISO. Usam formatos definidos em **polegadas**, sem a lógica do √2:

| Formato | Polegadas | mm | Equivalente |
|---|---|---|---|
| Letter | 8,5 × 11 | 216 × 279 | ~A4 (mas mais largo e baixo) |
| Legal | 8,5 × 14 | 216 × 356 | — |
| Tabloid / Ledger | 11 × 17 | 279 × 432 | ~A3 |

Como não têm proporção constante, ampliar de Letter para Tabloid **não** encaixa certinho como o A4→A3. Se trabalhas para clientes americanos, atenção a esta diferença — um design feito em A4 não cabe perfeitamente em Letter.

## Confusões comuns

**"A4 é o tamanho-base."**
O tamanho-base da série é o **A0** (1 m²). O A4 é só o quarto corte a partir do A0 — é o mais comum no dia a dia, mas não é a referência.

**"Posso imprimir um A3 com bleed numa folha A3."**
Não cabe. Um A3 com 3 mm de bleed de cada lado mede 303 × 426 mm — precisa de uma folha **SRA3** (320 × 450) que dê espaço ao bleed e às marcas.

**"Letter é igual a A4."**
São parecidos mas diferentes: Letter é mais largo (216 vs 210 mm) e mais baixo (279 vs 297 mm). Um PDF A4 impresso em Letter (ou vice-versa) fica com margens erradas.

## Em resumo

A série **A** assenta na proporção 1:√2 e no A0 de 1 m², o que faz os formatos encaixarem e ampliarem sem distorção. A série **C** é para envelopes (C4 leva um A4), a **B** fica no meio. Os formatos **SRA/RA** são maiores, feitos para imprimir com **bleed e pinça** — por isso o A3 se imprime em SRA3. E os formatos **americanos** (Letter, Legal, Tabloid) seguem outra lógica, em polegadas. Saber isto ajuda-te a escolher a folha certa e a [aproveitá-la ao máximo](/aproveitamento-de-folha/).
