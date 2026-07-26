// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcphilipp.de',
  trailingSlash: 'always',
  redirects: {
    '/en/about-me/': '/',
    '/de/ueber-mich/': '/de/startseite/',
  },
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});
