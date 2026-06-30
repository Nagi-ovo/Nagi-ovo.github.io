// Generate static/og.png (1200x630) for social preview cards.
// Run:  node scripts/gen-og.mjs   (re-run whenever the name/tagline changes)
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');

const avatar = readFileSync(join(root, 'static/images/JesseZhang-opt.jpg')).toString('base64');
const avatarUri = `data:image/jpeg;base64,${avatar}`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const name = 'Zexi "Jesse" Zhang';
const nameZh = '张泽西';
const tagline = 'AI & Machine Learning · Imperial College London';
const subtitle = 'Humanoid loco-manipulation and reinforcement learning';

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circ"><circle cx="985" cy="300" r="195"/></clipPath>
  </defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="618" width="1200" height="12" fill="#1772d0"/>
  <image href="${avatarUri}" x="790" y="105" width="390" height="390"
         preserveAspectRatio="xMidYMid slice" clip-path="url(#circ)"/>
  <circle cx="985" cy="300" r="195" fill="none" stroke="#e8e8e8" stroke-width="2"/>
  <text x="90" y="265" font-family="Helvetica, Arial, sans-serif" font-size="66" font-weight="700" fill="#1a1a1a">${esc(name)}</text>
  <text x="92" y="320" font-family="'PingFang SC', 'Heiti SC', Helvetica, sans-serif" font-size="40" fill="#555555">${esc(nameZh)}</text>
  <text x="92" y="398" font-family="Helvetica, Arial, sans-serif" font-size="29" font-weight="700" fill="#1772d0">${esc(tagline)}</text>
  <text x="92" y="442" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#555555">${esc(subtitle)}</text>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
});
const png = resvg.render().asPng();
writeFileSync(join(root, 'static/og.png'), png);
console.log(`wrote static/og.png (${png.length} bytes)`);
