// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcphilipp.de',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});
