# marcphilipp.de

Static website built with [Astro](https://astro.build).

## Running locally

```terminal
$ npm install
$ npm run dev
```

The `predev`/`prebuild` hooks run `scripts/prepare-talks.mjs`, which downloads
talk slide cover images (via each deck's `og:image`) into `public/img/talks/`
and writes the enriched talk list to `src/data/talks.json`.

## Visual regression tests

```terminal
$ ./run-visual-tests.sh
```

Runs Playwright screenshot tests in Docker so results match CI. After an
intentional visual change, reset the baseline screenshots in
`tests/visual-regression.spec.ts-snapshots/` and commit them:

```terminal
$ ./run-visual-tests.sh --update-snapshots
```

## Building

```terminal
$ npm run build
```

The site is deployed to statichost.eu on pushes to `main`.
