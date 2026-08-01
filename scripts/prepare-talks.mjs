// Replaces the old Gradle build: downloads Speakerdeck cover images and
// emits src/data/talks.json with a `slideImage` field per talk.
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { parse } from 'yaml';

const IMAGE_DIR = 'src/assets/talks';
const talks = parse(await readFile('src/data/talks.yml', 'utf8'));

async function findCached(name) {
  try {
    const files = await readdir(join(IMAGE_DIR, dirname(name)));
    const base = name.split('/').pop();
    const match = files.find((f) => f.startsWith(`${base}.`));
    return match ? join(dirname(name), match) : null;
  } catch {
    return null;
  }
}

async function download(slidesUrl, name) {
  const page = await fetch(slidesUrl);
  if (!page.ok) throw new Error(`${page.status} for ${slidesUrl}`);
  const html = await page.text();
  const content = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/)?.[1];
  if (!content) throw new Error(`no og:image on ${slidesUrl}`);
  const imageUrl = new URL(content, page.url);
  const image = await fetch(imageUrl);
  if (!image.ok) throw new Error(`${image.status} for ${imageUrl}`);
  const ext = extname(new URL(imageUrl).pathname) || '.jpg';
  const file = `${name}${ext}`;
  await mkdir(join(IMAGE_DIR, dirname(file)), { recursive: true });
  await writeFile(join(IMAGE_DIR, file), Buffer.from(await image.arrayBuffer()));
  return file;
}

let downloads = 0;
await Promise.all(talks.map(async (talk) => {
  if (!talk.slides) return;
  const name = new URL(talk.slides).pathname.replace(/^\/|\/$/g, '');
  let file = await findCached(name);
  if (!file) {
    try {
      file = await download(talk.slides, name);
      downloads++;
    } catch (error) {
      console.warn(`WARN skipping slide image for "${talk.title}": ${error.message}`);
      return;
    }
  }
  talk.slideImage = file;
}));

talks.sort((a, b) => new Date(a.date) - new Date(b.date));
await writeFile('src/data/talks.json', JSON.stringify(talks, null, 2));
console.log(`${talks.length} talks, ${downloads} images downloaded`);
