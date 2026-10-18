// Runs after `vite build` (see package.json). For every talk in src/lib/data/talks.js:
//  - adds a small toolbar to each deck in build/slides/: a link home and, when the talk has
//    several languages, a switch that keeps the current page; Esc goes back to the page the
//    visitor came from on this site. The exported decks in static/ stay untouched.
//  - writes a redirect page for every old slug in `aliases`, so links already shared keep
//    working (page number included), plus a copy of the PDF under its old name.
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { talks } from '../src/lib/data/talks.js';

const build = fileURLToPath(new URL('../build/slides', import.meta.url));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const deckPath = (slug, v) => `/slides/${slug}/${v.dir ? `${v.dir}/` : ''}`;

function toolbar(talk, current) {
  const versions = talk.versions ?? [{}];
  const langs =
    versions.length > 1
      ? `<span class="nf-langs">${versions
          .map((v) =>
            v === current
              ? `<span aria-current="true">${esc(v.label)}</span>`
              : `<a href="${deckPath(talk.slug, v)}" data-keep-hash>${esc(v.label)}</a>`,
          )
          .join('')}</span>`
      : '';
  // Fixed to the top-left corner, fades out after 2.5s without pointer movement (stays on touch
  // screens). Pointer events stop here so the deck's own click/swipe handling never sees them.
  return `
<style>
.nf-bar{position:fixed;z-index:2147483647;top:calc(12px + env(safe-area-inset-top,0px));left:calc(12px + env(safe-area-inset-left,0px));display:flex;align-items:center;gap:6px;padding:4px;border-radius:999px;background:rgba(20,20,24,.72);color:#fff;font:600 13px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);transition:opacity .3s}
.nf-bar a,.nf-bar span[aria-current]{display:block;padding:7px 11px;border-radius:999px;color:inherit;text-decoration:none}
.nf-bar a:hover,.nf-bar a:focus-visible{background:rgba(255,255,255,.16);outline:none}
.nf-langs{display:flex;border-left:1px solid rgba(255,255,255,.22);padding-left:4px}
.nf-langs span[aria-current]{background:rgba(255,255,255,.2)}
.nf-bar.nf-idle{opacity:0;pointer-events:none}
@media (hover:none){.nf-bar.nf-idle{opacity:1;pointer-events:auto}}
@media (prefers-reduced-motion:reduce){.nf-bar{transition:none}}
</style>
<nav class="nf-bar" aria-label="Site"><a href="/" title="Zexi Zhang’s homepage">← nagi.fun</a>${langs}</nav>
<script>
(function(){
var bar=document.querySelector('.nf-bar'),t;
['pointerdown','pointerup','click','touchstart','touchend','wheel'].forEach(function(n){bar.addEventListener(n,function(e){e.stopPropagation()})});
bar.querySelectorAll('[data-keep-hash]').forEach(function(a){a.addEventListener('click',function(){a.href=a.getAttribute('href').split('#')[0]+location.hash})});
function wake(){bar.classList.remove('nf-idle');clearTimeout(t);t=setTimeout(function(){if(!bar.contains(document.activeElement))bar.classList.add('nf-idle')},2500)}
addEventListener('pointermove',wake);addEventListener('keydown',function(e){if(e.key==='Tab')wake()});wake();
addEventListener('keydown',function(e){if(e.key!=='Escape'||e.defaultPrevented)return;if(document.referrer.indexOf(location.origin+'/')===0&&history.length>1)history.back()});
})();
</script>
`;
}

function redirect(to) {
  const href = esc(to);
  return `<!doctype html>
<meta charset="utf-8">
<title>Moved</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${href}">
<meta http-equiv="refresh" content="0; url=${href}">
<script>location.replace(${JSON.stringify(to)} + location.hash)</script>
<p>This deck has moved to <a href="${href}">${href}</a>.</p>
`;
}

for (const talk of talks) {
  const versions = talk.versions ?? [{}];
  for (const v of versions) {
    const file = join(build, talk.slug, v.dir ?? '', 'index.html');
    if (!existsSync(file)) throw new Error(`slides-build: missing ${file}`);
    const html = readFileSync(file, 'utf8');
    const at = html.lastIndexOf('</body>');
    const bar = toolbar(talk, v);
    writeFileSync(file, at === -1 ? html + bar : html.slice(0, at) + bar + html.slice(at));
  }

  for (const alias of talk.aliases ?? []) {
    for (const v of versions) {
      const dir = join(build, alias, v.dir ?? '');
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), redirect(deckPath(talk.slug, v)));
      copyFileSync(join(build, talk.slug, v.dir ?? '', `${talk.slug}.pdf`), join(dir, `${alias}.pdf`));
    }
  }
}

console.log(`slides-build: ${talks.length} talk(s) processed`);
