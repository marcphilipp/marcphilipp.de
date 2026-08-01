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
      themes: { light: 'night-owl-light', dark: 'night-owl' },
      // emits color: light-dark(…, …), which follows the site's color-scheme toggle
      defaultColor: 'light-dark()',
    },
  },
});
