import type { CollectionEntry } from 'astro:content';

/** Jekyll-compatible permalink: /blog/:year/:month/:day/:title/ */
export function postPath(post: CollectionEntry<'posts'>): string {
  const date = post.data.date;
  const pad = (n: number) => String(n).padStart(2, '0');
  const slug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return `/blog/${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${slug}/`;
}
