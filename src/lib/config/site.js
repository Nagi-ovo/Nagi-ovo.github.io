// ── Single source of truth for everything personal ──────────────────────
// Edit this file to change your name, intro, links, awards, hobbies, etc.
// Structured lists (publications, experience, software) live in src/lib/data/.

export const site = {
  name: 'Zexi "Jesse" Zhang',
  nameZh: '张泽西',
  photo: '/images/avatar.jpg',

  // Short paragraphs. They may contain inline <a> links — rendered with {@html}.
  intro: `I am a CS Ph.D. student at
    <a href="https://www.imperial.ac.uk/">Imperial College London</a> and a member of
    the <a href="https://www.swirl.uk/home">Safe Whole-body Intelligent Robotics Lab (SWIRL)</a>,
    advised by Prof. <a href="https://stepjam.github.io/">Stephen James</a>. My research focuses on
    foundation models in robot learning. I also enjoy running RL on myself in the real world, where rewards
    are sparse and there is no reset button :)`,

  research: `My research focuses on enabling intelligent agents, particularly humanoid robots, to
    perceive, reason, and physically interact with the world.`,

  softwareIntro: `I enjoy the craft of bringing ideas to life with code, especially through
    front-end development. I frequently share my thoughts and projects on
    <a href="https://blog.nagi.fun">my blog</a>.`,

  community: `If you have ADHD and need someone to talk to, I'm happy to schedule a 30-minute chat
    every month. Feel free to reach out.`,

  hobbies: `Bouldering, swimming, badminton, tennis, and FPS games (CS2, Overwatch, etc.). I was a
    Top 500 player in Overwatch 2!`,

  // Header link row. Email is rendered separately (anti-scrape component).
  social: [
    // `icon` keys into src/lib/icons. An entry with `copy` instead of `href` copies that text on click.
    { label: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/citations?user=30l1YNcAAAAJ&hl=en' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/Nagi-ovo' },
    { label: 'X', icon: 'x', href: 'https://x.com/Nag1ovo' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/zexi-zhang-83bb20291/' },
    { label: 'Blog', icon: 'blog', href: 'https://blog.nagi.fun' },
  ],

  awards: ['Silver Medal (Top 3.63%), Kaggle LLM Prompt Recovery, 2024'],

  teaching: [
    'TA for <i>Python Programming</i> (2024.09 - 2025.01).',
    'TA for <i>Natural Language Processing</i> (2025.02 - 2025.06). Built the entire experimental framework on Kaggle for the course labs.',
  ],
};
