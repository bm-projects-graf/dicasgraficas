// ============================================
//  Fonte única de verdade das categorias
//  (cor, ícone, número, descrições)
//  Usada na homepage, lista de categorias,
//  páginas de categoria e cartões de artigo.
// ============================================

export interface Category {
  /** Nome exato — tem de coincidir com o enum em content.config.ts */
  title: string;
  slug: string;
  /** Descrição longa (página da categoria) */
  description: string;
  /** Descrição curta (cartões da homepage) */
  short: string;
  /** Cor de identidade da categoria (hex) */
  color: string;
  /** Número de ordem, ex. "01" */
  number: string;
  /** Markup interno do ícone SVG (24x24, currentColor) */
  icon: string;
}

export const categories: Category[] = [
  {
    title: 'Preparação de ficheiros',
    slug: 'preparacao-de-ficheiros',
    short: 'CMYK, DPI, bleed e os erros que estragam um trabalho antes de chegar à máquina.',
    description: 'Tudo o que precisas saber antes de enviar um ficheiro para a gráfica: CMYK, DPI, bleed, formatos, e os erros mais comuns que estragam um trabalho.',
    color: '#1B6FA8',
    number: '01',
    icon: '<path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" /><path d="M9 13h6M9 17h4" />'
  },
  {
    title: 'Papel e suportes',
    slug: 'papel-e-suportes',
    short: 'Tipos de papel, gramagens e acabamentos. O material que dá vida ao impresso.',
    description: 'O guia do material que dá vida ao impresso: tipos de papel, gramagens, acabamentos, e como escolher para cada projeto.',
    color: '#B45309',
    number: '02',
    icon: '<path d="M12 3 3 8l9 5 9-5-9-5z" /><path d="m3 13 9 5 9-5" /><path d="m3 18 9 5 9-5" />'
  },
  {
    title: 'Acabamentos',
    slug: 'acabamentos',
    short: 'Verniz UV, laminados, hot stamping, relevos. As técnicas que dão classe.',
    description: 'Verniz UV, laminados, hot stamping, relevos, encadernações. As técnicas que distinguem um trabalho profissional.',
    color: '#7C3AED',
    number: '03',
    icon: '<path d="M12 3l1.9 4.8L18.7 9l-3.8 3 1 5L12 14.6 8.1 17l1-5L5.3 9l4.8-1.2L12 3z" />'
  },
  {
    title: 'Produtos impressos',
    slug: 'produtos-impressos',
    short: 'Cartões, flyers, catálogos, embalagens. Como cada produto se planeia e imprime.',
    description: 'Cartões de visita, flyers, catálogos, embalagens, sinalética. Como cada produto se planeia, desenha e imprime.',
    color: '#0D9488',
    number: '04',
    icon: '<rect x="3" y="5" width="14" height="10" rx="1.5" /><path d="M7 19h14a0 0 0 0 1 0 0v-9" opacity="0.5" /><path d="M6 9h8M6 12h5" />'
  },
  {
    title: 'Processos de impressão',
    slug: 'processos-de-impressao',
    short: 'Offset, digital, serigrafia, flexografia. Como funciona cada técnica e quando usar.',
    description: 'Offset, digital, serigrafia, flexografia, rotogravura. Como funciona cada técnica e quando usar cada uma.',
    color: '#DC2626',
    number: '05',
    icon: '<path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" /><rect x="3" y="9" width="18" height="7" rx="1.5" /><path d="M7 16h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4z" /><circle cx="17" cy="12" r="0.6" fill="currentColor" stroke="none" />'
  },
  {
    title: 'História e curiosidades',
    slug: 'historia-e-curiosidades',
    short: 'De Gutenberg ao digital: 600 anos de imprensa com rigor e leveza.',
    description: 'De Gutenberg ao digital: 600 anos de imprensa contados com rigor histórico e leveza narrativa.',
    color: '#9A3412',
    number: '06',
    icon: '<path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2V5z" /><path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2V5z" />'
  },
  {
    title: 'Ciência da cor',
    slug: 'ciencia-da-cor',
    short: 'CMYK, Pantone, perfis ICC, ganho de ponto. A tecnologia por trás da cor.',
    description: 'CMYK, Pantone, ICC profiles, ganho de ponto. A tecnologia por trás das cores que vemos impressas.',
    color: '#DB2777',
    number: '07',
    icon: '<circle cx="9" cy="9" r="5" opacity="0.9" /><circle cx="15" cy="9" r="5" opacity="0.6" /><circle cx="12" cy="14" r="5" opacity="0.6" />'
  },
  {
    title: 'Tipografia',
    slug: 'tipografia',
    short: 'Os mestres do tipo, fontes famosas e a tradição tipográfica portuguesa.',
    description: 'Os mestres do tipo, fontes famosas, e a tradição tipográfica portuguesa.',
    color: '#4F46E5',
    number: '08',
    icon: '<path d="M5 6V4h14v2" /><path d="M12 4v16" /><path d="M9 20h6" />'
  },
  {
    title: 'Negócio e marketing',
    slug: 'negocio-e-marketing',
    short: 'Como pedir orçamento, escolher a gráfica certa e fazer o impresso render.',
    description: 'Como pedir orçamento, escolher a gráfica certa, e fazer o impresso render em campanhas reais.',
    color: '#059669',
    number: '09',
    icon: '<path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 3-4 3 2 5-6" /><path d="M18 7h-3M18 7v3" />'
  },
  {
    title: 'Design gráfico',
    slug: 'design-grafico',
    short: 'A essência, a história e os estilos da comunicação visual — e quem a faz.',
    description: 'O que é o design gráfico, a sua história, os grandes estilos ao longo do tempo, e os criadores — incluindo portugueses reconhecidos lá fora.',
    color: '#EA580C',
    number: '10',
    icon: '<path d="M5 19l2.5-7L15 4.5a2.1 2.1 0 0 1 3 0l1.5 1.5a2.1 2.1 0 0 1 0 3L12 16.5 5 19z" /><path d="M14 6l4 4" />'
  }
];

/** Procura uma categoria pelo título exato. */
export function getCategory(title: string): Category | undefined {
  return categories.find(c => c.title === title);
}
