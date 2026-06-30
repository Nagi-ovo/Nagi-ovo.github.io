// Add a paper = add an object. Authors are structured so the component can
// bold "me" and render the shared-first-author star automatically.
export const publications = [
  {
    image: '/images/papers/tagavlm.png',
    title: 'TagaVLM: Topology-Aware Global Action Reasoning for Vision-Language Navigation',
    href: 'https://apex-bjut.github.io/Taga-VLM/',
    authors: [
      { name: 'Jiaxing Liu', note: '*' },
      { name: 'Zexi Zhang', note: '*', me: true },
      { name: 'Xiaoyan Li' },
      { name: 'Boyue Wang' },
      { name: 'Yongli Hu' },
      { name: 'Baocai Yin' },
    ],
    venue: 'ICRA 2026',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2603.02972' },
      { label: 'project page', href: 'https://apex-bjut.github.io/Taga-VLM/' },
      { label: 'code', href: 'https://github.com/APEX-BJUT/Taga-VLM' },
    ],
    abstract:
      'We propose an end-to-end VLM for Vision-Language Navigation that integrates topology-aware spatial reasoning with global action decision, achieving competitive performance on R2R benchmarks with models as small as 0.5B parameters.',
  },
];
