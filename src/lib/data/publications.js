import { bigymMark } from './logos.js';

// Add a paper = add an object. Authors are structured so the component can
// bold "me" and render the shared-first-author star automatically.
export const publications = [
  {
    image: '/images/papers/bigym2-poster.jpg',
    video: '/images/papers/bigym2.mp4',
    logo: bigymMark,
    title: 'BiGym 2.0: Benchmarking Learned and Agent-Developed Policies for Humanoid Household Manipulation',
    titleHtml:
      'BiGym <b>2.0</b>: Benchmarking Learned and Agent-Developed Policies for Humanoid Household Manipulation',
    accent: '#0072b2',
    href: 'https://bigym2.github.io',
    authors: [
      { name: 'Zexi Zhang', note: '*', me: true },
      { name: 'Zecheng Zhu', note: '*' },
      { name: 'Zidong Chen' },
      { name: 'Zulkhuu Tuya' },
      { name: 'Stephen James' },
    ],
    venue: 'arXiv 2026',
    links: [
      { label: 'project', href: 'https://bigym2.github.io' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2610.07594' },
      { label: 'code', href: 'https://github.com/swirl-uk/BiGym2' },
      { label: 'twitter', href: 'https://x.com/Nag1ovo/status/2108230199187808367' },
    ],
    abstract:
      'A household loco-manipulation benchmark for the Unitree G1: 20 tasks with native VR demos under closed-loop whole-body control, evaluating VLA fine-tuning, imitation learning, demo-driven RL and coding agents through one interface.',
    bibtex: `@article{zhang2026bigym2,
  title   = {BiGym 2.0: Benchmarking Learned and Agent-Developed Policies for Humanoid Household Manipulation},
  author  = {Zhang, Zexi and Zhu, Zecheng and Chen, Zidong and Tuya, Zulkhuu and James, Stephen},
  journal = {arXiv preprint arXiv:2610.07594},
  year    = {2026},
}`,
  },
  {
    image: '/images/papers/tagavlm.png',
    video: '/images/papers/tagavlm.mp4',
    poster: '/images/papers/tagavlm-poster.jpg',
    title: 'TagaVLM: Topology-Aware Global Action Reasoning for Vision-Language Navigation',
    // Optional: title with <b> marking the acronym letters, coloured with `accent`.
    titleHtml:
      '<b>TagaVLM</b>: <b>T</b>opology-<b>A</b>ware <b>G</b>lobal <b>A</b>ction Reasoning for Vision-Language Navigation',
    accent: '#bf0303',
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
      { label: 'project', href: 'https://apex-bjut.github.io/Taga-VLM/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2603.02972' },
      { label: 'code', href: 'https://github.com/APEX-BJUT/Taga-VLM' },
    ],
    abstract:
      'An end-to-end VLM for Vision-Language Navigation that fuses topology-aware spatial reasoning with global action decisions, staying competitive on R2R at just 0.5B parameters.',
    bibtex: `@inproceedings{liu2026tagavlm,
  title     = {TagaVLM: Topology-Aware Global Action Reasoning for Vision-Language Navigation},
  author    = {Liu, Jiaxing and Zhang, Zexi and Li, Xiaoyan and Wang, Boyue and Hu, Yongli and Yin, Baocai},
  booktitle = {IEEE International Conference on Robotics and Automation (ICRA)},
  year      = {2026},
}`,
  },
];
