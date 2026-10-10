// Education and work share one card component (ExperienceItem.svelte).
// `note` may contain inline <a> links — rendered with {@html}.

export const education = [
  {
    logo: '/images/badges/ic-new.png',
    mono: true, // single-colour wordmark: rendered white in dark mode
    org: 'Imperial College London',
    date: '2026.10 - Present',
    role: 'Ph.D. in Computer Science',
    note: 'Advisor: <a href="https://stepjam.github.io/">Stephen James</a>',
  },
  {
    logo: '/images/badges/ic-new.png',
    mono: true, // single-colour wordmark: rendered white in dark mode
    org: 'Imperial College London',
    date: '2025.09 - 2026.09',
    role: 'M.Res. in AI & Machine Learning',
    note: 'Graduated with Distinction',
  },
  {
    logo: '/images/badges/bjut.png',
    org: 'Beijing University of Technology',
    date: '2021.09 - 2025.06',
    role: 'B.Eng. in Artificial Intelligence',
  },
  {
    logo: '/images/badges/pkuschool.png',
    org: 'High School Affiliated to Peking University',
    date: '2018.09 - 2021.06',
  },
];

export const work = [
  {
    logo: '/images/badges/ponyai.png',
    org: 'PonyAI Inc.',
    date: '2024',
    role: 'Software Engineer Intern',
    note: 'Developed data annotation pipelines & trained models for LLMs integration.',
  },
];
