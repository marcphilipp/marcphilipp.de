import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postPath } from '../data/posts';

export async function GET(context) {
  const posts = (await getCollection('posts'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 10);
  return rss({
    title: 'Marc Philipp',
    description: '',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: postPath(post),
      content: post.rendered?.html,
      categories: post.data.categories,
    })),
  });
}
