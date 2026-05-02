import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: 'dicasgraficas.com',
    description: 'Dicas e curiosidades sobre artes gráficas. Conselhos práticos, explicações técnicas e história da impressão em Portugal.',
    site: context.site,
    items: sortedArticles.map(article => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/artigos/${article.id}/`,
      categories: [article.data.category]
    })),
    customData: `<language>pt-PT</language>`
  });
}
