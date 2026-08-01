import type { CollectionEntry } from 'astro:content';
import { md } from './markdown';

/**
 * HTML excerpt: everything before the `more` marker. Markdown posts use their
 * rendered HTML; MDX posts have no `rendered.html`, so their raw body is used
 * with imports dropped and inline Markdown converted.
 * ponytail: regex-only Markdown for the MDX branch; render via the Container API if MDX excerpts ever need more
 */
export function postExcerpt(post: CollectionEntry<'posts'>): string {
  const html = post.rendered?.html;
  if (html) return html.split('<!--more-->')[0];
  const text = (post.body ?? '')
    .split('{/* more */}')[0]
    .replace(/^import .*$/gm, '')
    .replace(/^<\/?div.*$/gm, '')
    .trim();
  return `<p>${md(text)}</p>`;
}

/** Jekyll-compatible permalink: /blog/:year/:month/:day/:title/ */
export function postPath(post: CollectionEntry<'posts'>): string {
  const date = post.data.date;
  const pad = (n: number) => String(n).padStart(2, '0');
  const slug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return `/blog/${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${slug}/`;
}
