module.exports = {
  pathPrefix: '/',
  siteUrl: 'https://nagi-ovo.github.io',
  title: 'Jesse Zhang',
  siteDescription: 'Homepage of Jesse Zhang',
  author: 'Jesse Zhang',
  authorAlternative: '张泽西',
  introduction: [
    'I\'m a Senior student at [BJUT](https://english.bjut.edu.cn/), advised by [Xiaoyan Li](https://scholar.google.com/citations?user=MCzJnAQAAAAJ&hl=en).',
    'My research interests span a wide range of topics, including Large Language Models (LLMs), Agents, Reinforcement Learning, and Embodied Intelligence. My vision is to ensure that everyone can benefit from artificial intelligence, rather than seeing their quality of life and well-being diminished by technological advancements.',
  ],
  avatar: 'avatar.png',
  professions: [
    'Senior Student',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  location: 'Beijing, China',
  email: 'z13264500190@gmail.com',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: 'https://github.com/Nagi-ovo',
      icon: ['fab', 'github'],
    },
    {
      url: 'https://scholar.google.com/citations?hl=en&user=4r4iwb4AAAAJ',
      icon: ['fab', 'google-scholar'],
    },
    {
      url: 'https://www.linkedin.com/in/jesse-zhang-83bb20291/',
      icon: ['fab', 'linkedin']
    }
          ],
  // wakatime: {
  //   username: 'tcimba',
  //   activity: '7add4047-08f9-4da8-b649-aa114503678f',
  //   language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
  //   editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
  //   os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  // },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/bjjjmoxb',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-GFMXZR1LDN',
  education: [
    {
      date: 'Sep 2019 - Present',
      icon: 'graduation-cap',
      title: 'Bachelor of Artificial Intelligence',
      location: 'Beijing University of Technology (BJUT)',
    },
    {
      date: 'Sep 2015 - Aug 2019',
      icon: 'school',
      title: 'High School Diploma',
      location: 'The Affiliated High School of Peking University (pkuschool)',
    },
  ],
  interests: [
    {
      icon: 'brain',
      title: 'LLMs',
    }, {
      icon: 'robot',
      title: 'Robotics & RL',
    }, {
      icon: 'user-secret',
      title: 'Secure & Privacy',
    }],
  experience: [
    {
      title: 'Internship',
      position: 'left',
      data: [
        {
          date: 'Apr 2024 - Aug 2024',
          title: 'Software Engineer',
          location: 'Beijing, China',
          description: 'Large language model consultant, research and development of automatic labeling system',
        },
      ],
    },
    {
      title: 'Teaching',
      position: 'right',
      data: [
        {
          date: 'Sep 2024 - Present',
          title: 'Teaching Assistant of Python Programing (undergrad level)',
          location: 'Beijing University of Technology',
          description: 'Worked with Prof. [Junbiao Pang](https://scholar.google.com/citations?user=sAB4Cm4AAAAJ&hl=zh-CN), providing technical support for classroom instruction, designing educational experiments, and facilitating post-class Q&A sessions has garnered positive feedback and appreciation from students.',
        },
      ],
    },
    {
      title: 'Competition',
      position: 'left',
      data: [
        {
          date: 'Feb 2024 - May 2024',
          title: 'Tem',
          location: 'Beijing, China',
          description: 'Large language model consultant, research and development of automatic labeling system',
        },
      ],
    },
  ],
  awards: [],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
