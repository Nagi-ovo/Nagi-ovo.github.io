// Add a talk = run `node scripts/add-slides.mjs <slug> <deck.html> <deck.pdf>`, then add an object.
// Files are found by slug: /slides/<slug>/ (deck), /slides/<slug>/<slug>.pdf, /slides/<slug>/thumbs/<n>.webp.
// `original` is the deck's own title when it isn't in English; `lang` labels a non-English talk.
// `venue` / `venueHref` (optional) say where it was given. `aliases`: old slugs that still redirect here.
// `versions` (optional): the same deck in other languages, e.g. [{ label: 'English', dir: 'en' }, { label: '中文' }];
// the first is shown by default. Add one with `node scripts/add-slides.mjs <slug> <html> <pdf> <dir>`.
export const talks = [
  {
    slug: 'attention-harness',
    aliases: ['attention-management'],
    pages: 15,
    title: 'Entering the Age of Attention Management',
    original: '迈入注意力管理时代',
    desc: 'Customizing your UI is customizing your attention harness: fewer windows, the urgent things first, and output you can take in at a glance.',
    venue: 'Oh My DSH Community Meetup, Beijing (remote)',
    venueHref: 'https://omdsh.dev',
    date: 'Oct 2026',
    lang: 'Chinese',
    versions: [{ label: 'English', dir: 'en' }, { label: '中文' }],
  },
];
