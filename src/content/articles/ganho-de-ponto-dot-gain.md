---
title: "Ganho de ponto (dot gain): porque o impresso sai mais escuro"
description: "O que é o ganho de ponto, porque é que os meios-tons saem mais escuros no papel do que no ecrã, a diferença entre papel revestido e não revestido, e como os perfis ICC compensam isto."
pubDate: 2026-06-13
category: "Ciência da cor"
keywords: "ganho de ponto, dot gain, tvi, meio-tom escuro impressão, papel não revestido, reticula"
readingTime: "8 min"
featured: false
---

Imprimiste um cinzento suave e saiu um cinzento sujo e escuro? Uma fotografia que estava perfeita no ecrã ficou "pesada" no papel? Quase de certeza foi o **ganho de ponto** (*dot gain*) — um dos fenómenos mais importantes (e mais ignorados) da impressão. Perceber isto explica porque é que a cor impressa quase nunca é igual à do monitor.

## A retícula: a impressão é feita de pontos

Primeiro, recapitulemos: a impressão (offset, digital) reproduz tons contínuos com uma **retícula** — milhares de **pontos** de tamanho variável. Pontos grandes e juntos = zona escura; pontos pequenos = zona clara. Um cinzento a 30% é, na verdade, papel branco coberto a 30% por pequenos pontos de tinta. (Mais sobre isto em [como funciona o offset](/artigos/como-funciona-impressao-offset/).)

## O que é o ganho de ponto

O **ganho de ponto** é o **crescimento** desses pontos entre o ficheiro e o papel. Um ponto que devia cobrir 30% da área acaba por cobrir, digamos, 45%. Como há mais tinta do que o previsto, a zona sai **mais escura**.

<figure class="article-figure">
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O mesmo ponto de retícula: pequeno no ficheiro, maior no papel por alastramento da tinta">
<text x="115" y="26" text-anchor="middle" font-family="monospace" font-size="12.5" fill="#6B7280">no ficheiro — 30%</text>
<text x="345" y="26" text-anchor="middle" font-family="monospace" font-size="12.5" fill="#6B7280">no papel — alastra para ~45%</text>
<g fill="var(--cat)">
<circle cx="70" cy="80" r="11"/><circle cx="115" cy="80" r="11"/><circle cx="160" cy="80" r="11"/>
<circle cx="70" cy="125" r="11"/><circle cx="115" cy="125" r="11"/><circle cx="160" cy="125" r="11"/>
</g>
<g fill="var(--cat)">
<circle cx="300" cy="80" r="16"/><circle cx="345" cy="80" r="16"/><circle cx="390" cy="80" r="16"/>
<circle cx="300" cy="125" r="16"/><circle cx="345" cy="125" r="16"/><circle cx="390" cy="125" r="16"/>
</g>
<circle cx="300" cy="80" r="16" fill="none" stroke="#9CA3AF" stroke-dasharray="3 3"/>
<text x="230" y="180" text-anchor="middle" font-family="monospace" font-size="11" fill="#9CA3AF">a tinta espalha-se no papel ao ser absorvida</text>
</svg>
<figcaption>O mesmo ponto de retícula: pequeno no ficheiro, maior depois de impresso. A soma de milhares de pontos maiores torna o meio-tom visivelmente mais escuro do que aparentava no ecrã.</figcaption>
</figure>

## Porque acontece: duas causas

O ganho de ponto tem duas componentes:

- **Ganho físico (mecânico):** quando a tinta líquida toca no papel, **espalha-se** ligeiramente ao ser absorvida, e a pressão da máquina esmaga um pouco o ponto. O ponto fica fisicamente maior.
- **Ganho ótico:** mesmo que o ponto não crescesse, a luz que entra no papel **dispersa-se** por baixo dele e é absorvida nas margens do ponto, fazendo-o **parecer** maior e mais escuro do que é.

As duas somam-se. O resultado prático: os **meios-tons escurecem** e o contraste geral muda.

## O papel manda (revestido vs não revestido)

A quantidade de ganho depende muito do **papel**:

- **Papel revestido (couché):** tem uma camada que **seguram a tinta à superfície**. A tinta espalha-se pouco → ganho de ponto **baixo**. Cores mais vivas e fiéis.
- **Papel não revestido (offset, reciclado):** é poroso e **absorve** a tinta como um mata-borrão → ganho de ponto **alto**. Os meios-tons escurecem bastante mais.

É por isto que a **mesma imagem** sai diferente em couché e em papel natural — e porque o mesmo ficheiro precisa de perfis diferentes para cada papel.

<div class="tech-box">
<div class="tech-label">TVI: o nome técnico</div>
<p>Nas normas modernas, o ganho de ponto chama-se <strong>TVI</strong> (<em>Tone Value Increase</em>, aumento do valor tonal). É medido com um densitómetro/espetrofotómetro e descrito nas condições de impressão normalizadas — por exemplo, o <strong>FOGRA39</strong> descreve o comportamento típico do couché europeu, incluindo o seu TVI. É essa curva que os <a href="/artigos/gestao-de-cor-perfis-icc/">perfis ICC</a> usam para compensar.</p>
</div>

## Como se compensa (e porque não precisas de fazer contas)

A boa notícia: **não tens de corrigir o ganho de ponto à mão**. É para isso que servem os **perfis ICC** e o fluxo de cor:

1. O perfil de impressão (ex.: FOGRA39) **já sabe** quanto aquele papel/máquina vai escurecer.
2. Quando converte/imprime com esse perfil, o sistema **aclara antecipadamente** os meios-tons o suficiente para que, depois do ganho, saiam certos.

Por isso, o teu trabalho é simples: **usa o perfil da gráfica** e faz [soft proofing](/artigos/gestao-de-cor-perfis-icc/) para veres a simulação antes de imprimir. O perfil trata da compensação.

## O que isto significa para o teu design

- **Evita zonas muito escuras "no limite".** Sombras com 90%+ em vários canais podem "encher" (os pontos juntam-se) e perder detalhe — viram uma mancha chapada. Dá respiração às sombras.
- **Cuidado com tons muito claros.** Tintas abaixo de ~3-5% podem desaparecer (no sentido oposto ao ganho — chamam-lhe ponto mínimo). Um gradiente que termina em 2% pode "cortar" de repente.
- **Em papel não revestido, espera cores mais apagadas e escuras.** Não é defeito — é o papel. Escolhe-o sabendo disso.

## Confusões comuns

**"A minha imagem está escura, a gráfica errou."**
Pode ser ganho de ponto previsível, sobretudo em papel não revestido — não um erro. Por isso se pede [prova de cor](/artigos/provas-de-cor-antes-da-tiragem/): mostra o resultado real antes da tiragem.

**"Vou escurecer as sombras para ficarem ricas."**
Cuidado: com o ganho, sombras muito carregadas tapam-se e perdem detalhe. Muitas vezes é melhor o contrário — aliviar.

**"O ganho de ponto é só no offset."**
É mais notório no offset com tinta líquida em papel poroso, mas qualquer processo com retícula tem algum ganho (físico e ótico). O digital a toner tem o seu próprio comportamento, também descrito por perfis.

## Em resumo

O **ganho de ponto** é o crescimento dos pontos de retícula entre o ficheiro e o papel (por espalhamento físico da tinta e por dispersão ótica da luz), que faz os meios-tons saírem **mais escuros** — muito mais em papel **não revestido**. Não se corrige à mão: os **perfis ICC** (FOGRA, etc.) compensam-no automaticamente. O teu papel é usar o perfil certo, dar respiração às sombras e confirmar com uma prova.
