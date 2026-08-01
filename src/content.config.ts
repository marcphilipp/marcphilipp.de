import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    lang: z.enum(['en', 'de']).default('en'),
    ref: z.string(),
    note: z.string().optional(),
    comments: z.boolean().optional(),
  }),
});

export const collections = { posts };
