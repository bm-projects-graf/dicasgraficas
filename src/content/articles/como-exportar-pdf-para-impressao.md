---
title: "Como exportar um PDF pronto para a gráfica (InDesign, Illustrator, Canva)"
description: "O passo a passo para exportar um PDF de impressão sem surpresas: CMYK, 300 DPI, bleed, marcas de corte e fontes incorporadas, em InDesign, Illustrator, Canva e Word."
pubDate: 2026-06-13
category: "Preparação de ficheiros"
keywords: "exportar pdf impressão, pdf para gráfica, pdf/x indesign, exportar pdf canva impressão, bleed marcas de corte"
readingTime: "9 min"
featured: true
---

A maior parte dos problemas que uma gráfica encontra não está no design, está no **PDF final**. Cores em RGB, imagens em baixa resolução, fontes em falta, sem bleed. O bom é que exportar um PDF profissional é quase sempre uma questão de **carregar nos botões certos**. Este é o guia para o fazeres bem, qualquer que seja o teu programa.

No fim, podes confirmar tudo no nosso [Inspetor de PDF para impressão](/inspetor-de-pdf/), larga lá o ficheiro e ele diz-te se está pronto.

## O que torna um PDF "pronto para impressão"

Independentemente do programa, um bom PDF de impressão tem **cinco coisas**:

1. **Cor em CMYK** (ou com cores Pantone bem definidas), nunca RGB, vê [CMYK ou RGB](/artigos/cmyk-ou-rgb-qual-usar-quando-vais-imprimir/).
2. **Imagens a 300 DPI** ao tamanho final, vê o [guia do DPI](/artigos/resolucao-para-impressao-dpi/).
3. **Bleed de 3 mm** e margem de segurança, vê [bleed e linha de corte](/artigos/bleed-margem-de-seguranca-linha-de-corte/).
4. **Fontes incorporadas** (ou texto em curvas).
5. **Norma PDF/X** sempre que possível, vê [PDF/X-1a vs X-4](/artigos/pdf-x-1a-vs-x-4-normas-de-impressao/).

<div class="tech-box">
<div class="tech-label">A regra de ouro</div>
<p>Quando a gráfica te der um <strong>perfil de cor</strong> (ex.: FOGRA39) ou um <strong>preset PDF</strong>, usa-o. Poupa-te a configurar tudo à mão e garante que o ficheiro fala a "língua" daquela máquina. Na dúvida, pergunta, uma gráfica profissional prefere responder antes do que corrigir depois.</p>
</div>

## Adobe InDesign

O InDesign foi feito para isto, por isso é o mais direto.

1. Define o **bleed** logo na criação do documento (`Ficheiro → Novo`, secção *Bleed e slug*: 3 mm em todas as caixas).
2. `Ficheiro → Exportar` → escolhe **Adobe PDF (Print)**.
3. Em **Predefinição Adobe PDF**, escolhe `[PDF/X-4:2008]` (ou o preset que a gráfica te deu).
4. No separador **Marcas e sangrias**: ativa **Marcas de corte** e marca **Utilizar definições de sangria do documento**.
5. No separador **Saída**: confirma que a *Conversão de cor* aponta para o perfil CMYK da gráfica.
6. Exporta e **abre o PDF para confirmar** antes de enviar.

## Adobe Illustrator

Ideal para logótipos, cartões e trabalhos vetoriais.

1. Define o bleed em `Ficheiro → Configuração do documento → Sangria` (3 mm).
2. `Ficheiro → Guardar como → Adobe PDF`.
3. Em **Predefinição**, escolhe `[PDF/X-4:2008]` ou `[PDF/X-1a:2001]`.
4. Em **Marcas e sangrias**: ativa **Marcas de recorte** e **Utilizar definições de sangria do documento**.
5. Atenção ao texto: o Illustrator incorpora as fontes automaticamente, mas se quiseres garantia absoluta, duplica o ficheiro e faz `Tipo → Criar contornos` (converte o texto em curvas) na cópia que vais imprimir.

## Canva

O Canva é onde mais gente é apanhada de surpresa, porque a versão gratuita só trabalha em RGB.

1. Faz o design com **3 mm de espaço** à volta dos elementos importantes (o Canva não mostra guias de bleed reais).
2. `Partilhar → Transferir` → tipo de ficheiro **PDF para impressão** (não o PDF normal).
3. Ativa **Marcas de corte e sangria**.
4. Em **Gestão de cores**, se tiveres **Canva Pro**, escolhe **CMYK (perfil para impressão)**. Sem Pro, o PDF sai em RGB, a gráfica terá de converter, com resultado fora do teu controlo.
5. Transfere e confirma o ficheiro.

<div class="tech-box">
<div class="tech-label">Canva sem Pro</div>
<p>Se não tens Canva Pro, tens duas opções: pedir à gráfica que faça a conversão para CMYK (aceitando alguma variação de cor), ou converter o PDF noutro programa. O que <strong>não</strong> deves fazer é assumir que o RGB vai sair igual ao ecrã, não vai.</p>
</div>

## Microsoft Word e PowerPoint

Não são programas de pré-impressão, mas às vezes é o que há. Limitações: trabalham sempre em **RGB** e **não fazem bleed**. Servem para documentos simples (relatórios, cartas), não para trabalhos com cor até à borda.

1. `Ficheiro → Guardar como` → **PDF**.
2. Em **Opções**, escolhe **PDF/A** apenas se for para arquivo; para impressão deixa o PDF normal e marca **Norma ISO 19005** desligada.
3. Conta sempre com uma etapa de pré-impressão na gráfica (e o respetivo custo).

## A "armadilha" das transparências

Sombras, esfumados e transparências (muito comuns em logótipos e fundos) podem comportar-se de forma estranha na impressão se forem **achatadas** mal. É aqui que entra a escolha da norma:

- **PDF/X-4** mantém as transparências "vivas" e deixa o RIP da gráfica tratá-las, é a escolha moderna recomendada.
- **PDF/X-1a** achata tudo na exportação, mais seguro em fluxos antigos, mas pode criar problemas em sobreposições complexas.

Tens o tema todo explicado em [PDF/X-1a vs X-4](/artigos/pdf-x-1a-vs-x-4-normas-de-impressao/).

## Confusões comuns

**"Exportei em alta qualidade, logo está pronto."**
"Alta qualidade" trata da compressão das imagens, não da cor nem do bleed. Um PDF lindo pode estar em RGB e sem sangria.

**"Pus as imagens a 300 DPI, está resolvido."**
300 DPI **ao tamanho final**. Uma imagem de 300 DPI a 5 cm fica a 150 DPI se a esticares para 10 cm. Verifica sempre ao tamanho real.

**"O PDF tem o texto, logo a fonte vai."**
Só se estiver **incorporada**. Se a fonte não for incorporada, a gráfica vê outra letra (ou um aviso). Incorpora ou converte em curvas.

**"Mandei marcas de corte, mas não pus bleed."**
As marcas dizem onde cortar; o bleed é a tinta que se prolonga para além desse corte. Precisas dos dois.

## A checklist final

Antes de carregar em "enviar":

1. **CMYK** (ou Pantone definido) ✔
2. **300 DPI** ao tamanho final ✔
3. **Bleed 3 mm + marcas de corte** ✔
4. **Fontes incorporadas ou em curvas** ✔
5. **PDF/X** sempre que possível ✔

E o passo que poupa mais dores de cabeça: **passa o PDF pelo [Inspetor de PDF](/inspetor-de-pdf/)** antes de o enviar. Em segundos sabes se há RGB, baixa resolução, fontes em falta ou falta de sangria, tudo no teu navegador, sem enviar o ficheiro para lado nenhum.
