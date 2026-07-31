// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marcphilipp.de',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes('/impressum/') }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});
