# marcphilipp.de

Static website built with [Astro](https://astro.build).

## Running locally

```terminal
$ npm install
$ npm run dev
```

The `predev`/`prebuild` hooks run `scripts/prepare-talks.mjs`, which downloads
talk slide cover images (via each deck's `og:image`) into `public/img/talks/`
and writes the enriched talk list to `src/data/talks.json`. Both are gitignored;
the source of truth is `src/data/talks.yml`.

## Building

```terminal
$ npm run build
```

The site is deployed to GitHub Pages by `.github/workflows/gh-pages.yml` on
pushes to `main`.
