// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://marcphilipp.de',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});
