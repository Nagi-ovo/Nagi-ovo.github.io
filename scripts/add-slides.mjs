// Put a slide deck on the site: copies the exported HTML + PDF into static/slides/<slug>/ as they
// are, and renders one webp thumbnail per page for the Talks card. The deck's toolbar (home,
// language switch, Esc) is added at build time by scripts/slides-build.mjs, from src/lib/data/talks.js.
// Run:  node scripts/add-slides.mjs <slug> <deck.html> <deck.pdf> [dir]
// `dir` (e.g. `en`) adds another language of the same talk under static/slides/<slug>/<dir>/.
// Needs poppler (pdftoppm) and ImageMagick (magick): `brew install poppler imagemagick`.
// Re-running with the same slug replaces the deck and its thumbnails.
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const [slug, html, pdf, sub = ''] = process.argv.slice(2);
if (!slug || !html || !pdf || !/^[a-z0-9-]+$/.test(slug) || !/^[a-z0-9-]*$/.test(sub)) {
  console.error('Usage: node scripts/add-slides.mjs <slug> <deck.html> <deck.pdf> [dir]  (a-z, 0-9, -)');
  process.exit(1);
}

const root = fileURLToPath(new URL('..', import.meta.url));
const dir = join(root, 'static/slides', slug, sub);
const thumbs = join(dir, 'thumbs');
rmSync(thumbs, { recursive: true, force: true });
mkdirSync(thumbs, { recursive: true });

copyFileSync(html, join(dir, 'index.html'));
copyFileSync(pdf, join(dir, `${slug}.pdf`));

const tmp = mkdtempSync(join(tmpdir(), 'slides-'));
execFileSync('pdftoppm', ['-scale-to', '960', '-png', pdf, join(tmp, 'p')]);
const pages = readdirSync(tmp).filter((f) => f.endsWith('.png')).sort();
pages.forEach((f, i) => {
  execFileSync('magick', [join(tmp, f), '-quality', '74', join(thumbs, `${i + 1}.webp`)]);
});
rmSync(tmp, { recursive: true, force: true });

console.log(`static/slides/${slug}/${sub && `${sub}/`}  index.html, ${slug}.pdf, ${pages.length} thumbnails`);
console.log(
  sub
    ? `Add to that talk's \`versions\` in src/lib/data/talks.js:  { label: '…', dir: '${sub}' }`
    : `Add to src/lib/data/talks.js:  { slug: '${slug}', pages: ${pages.length}, title: '…', date: '…' }`,
);
