import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      'Preparação de ficheiros',
      'Papel e suportes',
      'Acabamentos',
      'Produtos impressos',
      'Negócio e marketing',
      'Processos de impressão',
      'História e curiosidades',
      'Ciência da cor',
      'Tipografia'
    ]),
    keywords: z.string().optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { articles };
