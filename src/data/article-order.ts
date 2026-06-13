// ============================================
//  Ordem por INTERESSE dentro de cada categoria
//  (1.º da lista = mais interessante; aparece primeiro)
//  Fonte única — não é preciso tocar no frontmatter dos artigos.
//  Slugs não listados vão para o fim, ordenados por data (mais recente primeiro).
//  O slug é o id do artigo (nome do ficheiro .md sem extensão).
// ============================================

export const orderByCategory: Record<string, string[]> = {
  'Preparação de ficheiros': [
    'cmyk-ou-rgb-qual-usar-quando-vais-imprimir',
    'resolucao-para-impressao-dpi',
    'bleed-margem-de-seguranca-linha-de-corte',
    'como-exportar-pdf-para-impressao',
    'vetorial-vs-raster-imagens-para-impressao',
    'sobreimpressao-e-trapping',
    'pdf-x-1a-vs-x-4-normas-de-impressao',
    'preto-rico-vs-preto-puro',
    'rip-e-gestao-de-cor-grande-formato'
  ],
  'Papel e suportes': [
    'formatos-de-papel-a-b-c-sra',
    'gramagem-do-papel-explicada',
    'tipos-de-papel-para-impressao',
    'papeis-reciclados-e-certificacoes-fsc-pefc',
    'sentido-da-fibra-do-papel',
    'materiais-de-sinaletica-dibond-forex-acrilico',
    'historia-do-papel-cai-lun-a-maquina'
  ],
  'Acabamentos': [
    'guia-tecnico-dobras-impressao',
    'plastificado-mate-brilhante-soft-touch',
    'verniz-uv-total-reserva-efeito-mate-brilhante',
    'hot-stamping-e-foil-acabamento-metalico',
    'guia-completo-encadernacao',
    'corte-e-vinco-como-se-faz-uma-embalagem',
    'laminacao-plastificacao-grande-formato',
    'acabamento-digital-verniz-foil-relevo',
    'aplicacao-de-vinil-wrapping',
    'corte-de-grande-formato-kiss-cut-fresas',
    'corte-e-vinco-digital'
  ],
  'Produtos impressos': [
    'cartoes-de-visita-formatos-papeis-acabamentos',
    'folhetos-e-flyers-formatos-e-dobras',
    'anatomia-do-livro-e-da-revista',
    'caixas-de-cartao-canelado-fefco',
    'rotulos-e-etiquetas-materiais-adesivos',
    'sleeves-retrateis-shrink-sleeve'
  ],
  'Processos de impressão': [
    'impressao-digital-vs-offset',
    'como-funciona-impressao-offset',
    'serigrafia-impressao-em-quase-tudo',
    'flexografia-impressao-de-embalagens',
    'sublimacao-impressao-textil',
    'dtf-direct-to-film-com-e-sem-po',
    'impressao-digital-toner-xerografia',
    'hp-indigo-impressao-digital-offset',
    'grande-formato-tintas-solvente-latex-uv',
    'impressao-textil-metodos-comparados',
    'impressao-plana-flatbed-grande-formato',
    'inkjet-de-producao-jato-de-tinta',
    'rotogravura-impressao-de-grandes-tiragens',
    'ph-e-condutividade-impressao-offset'
  ],
  'História e curiosidades': [
    'curiosidades-artes-graficas-factos-surpreendentes',
    'gutenberg-homem-do-milenio',
    'historia-do-codigo-de-barras',
    'bi-sheng-tipos-moveis-china',
    'historia-da-imprensa-nacional',
    'pentateuco-de-faro-primeiro-livro-impresso-portugal',
    'historia-da-dobra-codice-ao-folheto-moderno',
    'historia-embalagem-granel-ao-cartao',
    'historia-encadernacao-mosteiros-encadernadores-reais',
    'historia-plastificado-shellac-bopp',
    'historia-verniz-laca-japonesa-cura-uv'
  ],
  'Ciência da cor': [
    'pantone-vs-cmyk-cores-diretas',
    'o-que-e-o-gamut',
    'ganho-de-ponto-dot-gain',
    'gestao-de-cor-perfis-icc',
    'delta-e-medir-diferenca-de-cor',
    'historia-da-pantone'
  ],
  'Tipografia': [
    'serif-sans-serif-familias-tipograficas',
    'como-combinar-tipos-de-letra-font-pairing',
    'anatomia-de-uma-letra',
    'fontes-incorporar-ou-converter-em-curvas',
    'kerning-tracking-entrelinha-espacamento',
    'historia-da-helvetica',
    'aldus-manutius-livro-de-bolso-italico'
  ],
  'Negócio e marketing': [
    'como-pedir-orcamento-a-uma-grafica',
    'quanto-custa-imprimir-fatores-preco',
    'preparar-marca-para-grafica',
    'sustentabilidade-na-impressao',
    'provas-de-cor-antes-da-tiragem',
    'o-impresso-no-marketing-porque-o-papel-funciona'
  ],
  'Design gráfico': [
    'o-que-e-o-design-grafico-essencia',
    'teoria-da-cor-para-designers',
    'grelha-e-composicao-design-grafico',
    'branding-e-identidade-visual',
    'estilos-do-design-grafico-ao-longo-do-tempo',
    'ux-vs-design-grafico',
    'historia-do-design-grafico',
    'historia-do-design-grafico-portugues',
    'designers-portugueses-premiados-no-estrangeiro'
  ]
};

/** Posição na ordem de interesse (menor = mais interessante). 999 = não listado. */
export function articleRank(category: string, id: string): number {
  const arr = orderByCategory[category];
  if (!arr) return 999;
  const i = arr.indexOf(id);
  return i === -1 ? 999 : i;
}

/** Comparador pronto a usar: interesse e, em empate, data (mais recente primeiro). */
export function byInteresse(a: any, b: any): number {
  const ra = articleRank(a.data.category, a.id);
  const rb = articleRank(b.data.category, b.id);
  if (ra !== rb) return ra - rb;
  return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
}
