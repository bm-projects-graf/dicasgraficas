---
title: "CMYK ou RGB? Qual usar quando vais imprimir"
description: "A diferença entre CMYK e RGB explicada de forma clara, com exemplos do que acontece quando se confunde os dois antes de mandar um trabalho para a gráfica."
pubDate: 2026-05-02
category: "Preparação de ficheiros"
keywords: "cmyk vs rgb, cmyk impressão, converter rgb para cmyk, diferença cmyk rgb"
readingTime: "8 min"
featured: true
---

Mandaste um ficheiro à gráfica e o resultado impresso ficou com cores apagadas, diferentes do que vias no ecrã? Quase de certeza que o problema foi este: o ficheiro estava em **RGB**, mas a impressão usa **CMYK**.

É um dos erros mais comuns no envio de trabalhos para imprimir — e um dos mais frustrantes, porque só se descobre quando o trabalho já está impresso. Vamos perceber porque acontece, e como evitá-lo.

## O que é o RGB

O sistema **RGB** vem de *Red, Green, Blue* — vermelho, verde e azul. É o sistema usado por todos os ecrãs: monitores, telemóveis, televisões, projetores. Funciona com **luz**: cada pixel emite uma combinação destas três cores, e o teu olho vê o resultado misturado.

A grande característica do RGB é que é um sistema **aditivo**: começas com preto (ausência de luz) e somas cores até chegares ao branco (todas as luzes acesas em simultâneo). É por isso que os ecrãs desligados são pretos.

O RGB consegue representar uma gama enorme de cores — incluindo verdes muito vibrantes, azuis profundos e ciclones que parecem brilhar. É o ideal para fotografia digital, sítios web, vídeo e qualquer coisa que vá ser vista num ecrã.

## O que é o CMYK

O sistema **CMYK** vem de *Cyan, Magenta, Yellow, Key* — ciano, magenta, amarelo e preto (o "K" é de "key", não de "black", para evitar confusão com o B de "blue"). É o sistema usado em quase toda a impressão profissional.

Funciona ao contrário do RGB. É um sistema **subtrativo**: começas com branco (a folha de papel) e adicionas tinta para subtrair luz que iria ser refletida. Quanto mais tinta, menos luz é refletida, e mais escura fica a cor.

Em teoria, juntando ciano + magenta + amarelo a 100% obterias preto. Na prática obténs um castanho lamacento — por isso o **preto (K)** é adicionado como quarta cor, para conseguir pretos verdadeiros e detalhe nas sombras.

<figure class="article-figure">
<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RGB aditivo (luz) versus CMY subtractivo (tinta)">
<rect x="20" y="20" width="230" height="205" rx="10" fill="#111111" />
<g>
<circle cx="120" cy="100" r="52" fill="#FF2D2D" style="mix-blend-mode:screen" />
<circle cx="170" cy="100" r="52" fill="#2DFF2D" style="mix-blend-mode:screen" />
<circle cx="145" cy="148" r="52" fill="#2D6BFF" style="mix-blend-mode:screen" />
</g>
<g>
<circle cx="350" cy="100" r="52" fill="#00AEEF" style="mix-blend-mode:multiply" />
<circle cx="400" cy="100" r="52" fill="#EC008C" style="mix-blend-mode:multiply" />
<circle cx="375" cy="148" r="52" fill="#FFE000" style="mix-blend-mode:multiply" />
</g>
<g font-family="monospace" font-size="14" fill="#374151" text-anchor="middle">
<text x="145" y="258">RGB — luz (aditivo)</text>
<text x="375" y="258">CMY — tinta (subtractivo)</text>
</g>
</svg>
<figcaption>À esquerda, o ecrã soma luz (RGB) e o centro fica branco. À direita, a tinta subtrai luz (CMY) e o centro escurece. São dois mundos opostos — e por isso a cor muda do ecrã para o papel.</figcaption>
</figure>

## Porque é que as cores parecem "apagadas" quando se converte

Aqui está o problema central: o **CMYK consegue reproduzir muito menos cores do que o RGB**. A gama de cores do CMYK é mais pequena — ficam fora muitos verdes vibrantes, azuis elétricos, laranjas saturados e roxos profundos.

Quando converteres uma imagem RGB para CMYK, todas as cores que estão "fora" da gama CMYK têm de ser aproximadas para a cor mais próxima dentro da gama. O resultado: cores mais apagadas, menos contraste, perda do "brilho" original.

Isto é especialmente visível em:
- **Azuis vibrantes** — tendem a ficar mais roxos ou acinzentados
- **Verdes elétricos** — perdem a saturação
- **Laranjas e amarelos brilhantes** — ficam mais "doces"
- **Vermelhos saturados** — podem ficar mais alaranjados

<div class="tech-box">
<div class="tech-label">Sabias que</div>
<p>O monitor onde estás a ver este texto consegue mostrar muito mais cores do que qualquer impressora do mundo. É por isso que profissionais de pré-impressão usam monitores calibrados — para se aproximarem do que vão ver impresso, em vez do RGB cheio.</p>
</div>

## Como converter no Photoshop, Illustrator e Canva

### Adobe Photoshop

1. Abre a imagem
2. Vai a `Imagem → Modo → Cor CMYK`
3. O Photoshop avisa que vais perder qualidade — confirma
4. Guarda como nova versão (mantém o RGB original separado, para outras utilizações)

Antes de converter, é boa prática usar `Imagem → Modo → Aviso de gama` para veres em cinzento as cores que vão ser afetadas. Permite-te ajustar manualmente.

<div class="tech-box">
<div class="tech-label">Atenção: "CMYK" não é um só</div>
<p>Mudar o botão para CMYK <strong>não</strong> garante cor certa, porque o CMYK depende do <strong>perfil</strong> de destino — ou seja, do papel e da máquina. Converter para couché (ex.: FOGRA39) dá separações diferentes de converter para um papel não revestido. O ideal é pedires à tua gráfica <strong>qual o perfil ICC que ela usa</strong> e converteres para esse. Se isto te parece chinês, não há problema — explicamos tudo no artigo de <a href="/artigos/gestao-de-cor-perfis-icc/">gestão de cor e perfis ICC</a>.</p>
</div>

### Adobe Illustrator

No Illustrator, defines o modo **antes** de começar:

1. `Ficheiro → Novo`
2. Em "Modo de cor", escolhe **CMYK**
3. Trabalha sempre nesse espaço

Se já tens um documento em RGB: `Ficheiro → Modo de cor do documento → Cor CMYK`. Mas atenção: as cores podem mudar visivelmente.

### Canva

O Canva é onde mais utilizadores se queixam de surpresas na impressão. A versão gratuita só trabalha em RGB. Para descarregar em CMYK precisas do **Canva Pro**:

1. Faz o design normalmente
2. Em `Partilhar → Descarregar`, escolhe **PDF impressão** (não PDF padrão)
3. Marca a opção **CMYK** e confirma

Se não tens Canva Pro, descarrega o PDF normal e converte-o no Acrobat ou pede à gráfica para fazer a conversão (a maioria faz, mas o resultado fica fora do teu controlo).

## Erros típicos: pretos misturados, azuis que ficam roxos

Mesmo dentro do CMYK, há armadilhas que apanham toda a gente.

**O preto enriquecido vs preto puro.** Em CMYK, o preto pode ser construído de várias formas. Para texto pequeno, usa sempre **preto puro** (C:0 M:0 Y:0 K:100). Para áreas grandes pretas (fundos, caixas), usa **preto enriquecido** (algo como C:60 M:40 Y:40 K:100) — fica mais profundo. Misturar os dois no mesmo trabalho dá pretos visivelmente diferentes lado a lado.

**Os azuis traiçoeiros.** Um azul vibrante em RGB tipo (R:0 G:50 B:255) costuma converter-se mal para CMYK e ficar arroxeado. Se queres mesmo um azul forte impresso, evita CMYK puro: ou usas uma **cor Pantone** (mais caro mas garantido), ou aceitas que o resultado vai ser próximo, mas não igual ao ecrã.

**Imagens "mistas".** Uma armadilha frequente: documentos com algumas imagens em RGB e outras em CMYK no mesmo PDF. A maioria das gráficas converte tudo para CMYK na receção, mas os resultados podem ser inconsistentes. Garante que todos os elementos estão em CMYK antes de exportar.

## Quando faz sentido manter RGB

Há um caso onde o RGB pode ser deixado intacto: **impressão digital de alta qualidade em equipamentos que aceitam RGB nativamente**. Algumas máquinas modernas (HP Indigo, certas Canon e Konica Minolta) processam RGB internamente e podem aproveitar gamas de cor mais amplas que o CMYK tradicional.

Mas mesmo nestes casos, **pergunta sempre à gráfica**. Cada gráfica tem o seu fluxo de trabalho preferido. Algumas pedem CMYK, outras preferem RGB, outras aceitam ambos. Ignorar esta pergunta é a forma mais rápida de teres uma surpresa na receção do trabalho.

## A regra de ouro

Para 95% das situações em Portugal (offset, digital normal, grandes formatos): **converte para CMYK antes de enviar**. Verifica visualmente se as cores te agradam após a conversão. Se houver alguma cor crítica para a tua marca (o azul exato do teu logótipo, por exemplo), considera especificar uma **cor Pantone** correspondente em vez de confiar apenas no CMYK.

E o mais importante: **nunca te baseies só no que vês no ecrã** para avaliar como vai sair impresso. O ecrã é luz, o impresso é tinta — são dois mundos diferentes. Se o trabalho é importante, pede uma **prova de cor** à gráfica antes da tiragem completa. Custa um valor pequeno e poupa-te muitos aborrecimentos.
