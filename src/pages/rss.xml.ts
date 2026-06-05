import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site?: URL }) {
  const site = context.site ?? new URL('https://dantae.dev');

  const [blog, research, notes] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('research', ({ data }) => !data.draft),
    getCollection('notes', ({ data }) => !data.draft),
  ]);

  const entries = [
    ...blog.map((entry) => ({ ...entry, collection: 'blog' as const })),
    ...research.map((entry) => ({ ...entry, collection: 'research' as const })),
    ...notes.map((entry) => ({ ...entry, collection: 'notes' as const })),
  ].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Dantae',
    description: 'Security research, tooling, and field notes.',
    site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/${entry.collection}/${entry.slug}/`,
      categories: [entry.collection, ...entry.data.tags],
    })),
    customData: '<language>en</language>',
  });
}
