module.exports = {
  pathPrefix: '/',
  siteUrl: 'https://nagi-ovo.github.io',
  title: 'Jesse Zhang',
  siteDescription: 'Homepage of Jesse Zhang',
  author: 'Jesse Zhang',
  authorAlternative: '张泽西',
  introduction: [
    'I\'m a PhD candidate at [MESL](http://mesl.ucsd.edu/) of UCSD CSE, advised by [Xiaoyan Li](https://scholar.google.com/citations?user=MCzJnAQAAAAJ&hl=en). I obtained my bachelor degree in Electrical and Computer Engineering from University of Michigan-Shanghai Jiaotong University Joint Institute ([UM-SJTU JI](https://www.ji.sjtu.edu.cn/)).',
    'My research interest spans widely, including CPS-IoT (smart buildings in particular), security, privacy, and applied cryptography. I missioned myself to help the general public embrace the utility and productivity of evolving technologies such as AI, smart hardware, etc. **without** being worried about various security, privacy, and safety issues including but not limited to ubiquitous surveillance, personal info leakage, and data misusage. ',
    "**News:**",
    "- [Imprompter](https://imprompter.ai) is covered by [WIRED](https://www.wired.com/story/ai-imprompter-malware-llm/) and [acknowledged](https://docs.mistral.ai/getting-started/changelog/) by Mistral AI (9-13-2024)!",
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
      icon: ['fab', 'LLMs'],
      title: '/openai.png',
    }, {
      icon: 'robot',
      title: 'Robotics & RL',
    }, {
      icon: 'user-secret',
      title: 'Secure & Privacy',
    }],
  experience: [
    {
      title: 'Work',
      position: 'left',
      data: [
        {
          date: 'Jun 2022 - Sep 2022',
          title: 'R&D Intern at Synopsys',
          location: 'Remote',
          description: 'Developed a verification tool (NDA). Patent in progress.',
        },
      ],
    },
    {
      title: 'Work',
      position: 'left',
      data: [
        {
          date: 'Mar 2017 - Sep 2017',
          title: 'Software Design Engineer Intern at Apple',
          location: 'Shanghai, China',
          description: 'Worked in HWTE team for Macbook and iWatch. Piloted in the transition from old fixture framework to new one.',
        },
      ],
    }, {
      title: 'Teaching',
      position: 'right',
      data: [
        {
          date: 'Jan 2022 - Apr 2022',
          title: 'Teaching Assistant of [CSE120 Intro to Operating Systems](https://cseweb.ucsd.edu//classes/wi22/cse120-a/) (undergrad upper level)',
          location: 'UCSD',
          description: 'Worked with Prof. [Joe Pasquale](https://cseweb.ucsd.edu/~pasquale/) remotely. Hosted a lot of office hours (>10h/week) and helped a lot of students:-)',
        }, {
          date: 'Apr 2020 - Jun 2020',
          title: 'Teaching Assistant of [CSE127 Computer Security](https://cseweb.ucsd.edu/classes/sp20/cse127-a/index.html) (undergrad upper level)',
          location: 'UCSD',
          description: 'Worked with Prof. [Stefan Savage](http://cseweb.ucsd.edu/~savage/) remotely. Modified the testcases and autograder script for one programming assignment.',
        }, {
          date: 'May 2019 - Aug 2019',
          title: 'Teaching Assistant of [VE280 Programming & Elementary Data Structures](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=246) (undergrad)',
          location: 'Shanghai Jiao Tong University',
          description: 'Worked with Prof. [Weikang Qian](http://umji.sjtu.edu.cn/~wkqian/people/weikang-qian.html) and Prof. [Paul Weng](https://weng.fr/). Designed testcases for a new project (game Quarto).',
        }, {
          date: 'Sep 2018 - Dec 2018',
          title: 'Teaching Assistant of [VE477 Intro to Algorithms](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=442) (undergrad upper level) *Concurrent with VE370*',
          location: 'Shanghai Jiao Tong University',
          description: 'Worked with Prof. [Manuel Charlemagne](https://www.ji.sjtu.edu.cn/about/faculty-staff/faculty-directory/faculty-detail/76/). Introduced gomoku AI competition to this course as a bonus challenge and undertook more sophisticated anti-plagarism policy with [turnitin](https://www.turnitin.com/) and [moss](https://theory.stanford.edu/~aiken/moss/).',
        }, {
          date: 'Sep 2018 - Dec 2018',
          title: 'Teaching Assistant of [VE370 Computer Organizations](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=393) (undergrad upper level) *Concurrent with VE477*',
          location: 'Shanghai Jiao Tong University',
          description: 'Worked with Prof. [Gang Zhen](https://www.ji.sjtu.edu.cn/about/faculty-staff/faculty-directory/faculty-detail/154/). Proposed a more effective peer evaluation policy to ensure fairness which was later promoted to whole institute.',
        }, {
          date: 'Sep 2017 - Dec 2017',
          title: 'Teaching Assistant of [VG101 Intro to Programming](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=74) (undergrad)',
          location: 'Shanghai Jiao Tong University',
          description: 'Worked with Prof. [Manuel Charlemagne](https://www.ji.sjtu.edu.cn/about/faculty-staff/faculty-directory/faculty-detail/76/). Reformed grading scheme to focus more on team projects than individual assignments. Designed one new programming project, exam questions and wrote plenty tutorial documents.',
        }, {
          date: 'May 2017 - Aug 2017',
          title: 'Teaching Assistant of [VG100 Intro to Engineering](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=73) (undergrad)',
          location: 'Shanghai Jiao Tong University',
          description: 'Worked with Prof. [Yu Zheng](https://www.linkedin.com/in/yu-zheng-2392292a/). Designed a new project named "puzzle pathfinder" and manufactured the game court with acrylic boards. This project along with the court were reused in later offerings.',
        },
      ],
    }, {
      title: 'Volunteer',
      position: 'left',
      data: [
        {
          date: 'Dec 2016 - Jan 2017',
          title: 'Volunteer Teacher at [Sanhe Junior School](https://map.baidu.com/poi/%E4%B8%89%E6%B2%B3%E5%88%9D%E7%BA%A7%E4%B8%AD%E5%AD%A6/@11548194.64205,2820438.08482,19z?uid=691305230c149d09725e804f&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl)',
          location: 'Sanhe, Yunnan, China',
          description: 'Sanhe Junior School is located in Honghe County, one of the poorest rural area in Yunnan. I was the math and class teacher of a grade 8 class of 40 local students.',
        },
      ],
    }, {
      title: 'Service',
      position: 'left',
      data: [
        {
          date: 'Mar - May 2023/2022',
          title: 'UCSD CSE PhD Visit Day and DEI Fellowship Committee',
          location: 'San Diego',
        },
        {
          date: 'Sep 2020 - Present',
          title: 'USENIX Security \'21 [Artifact Evaluation Committee](https://www.usenix.org/conference/usenixsecurity21/call-for-artifacts)',
          location: 'Remote',
        }, {
          date: 'Sep 2017 - Aug 2019',
          title: 'President of SSTIA at UM-SJTU JI',
          location: 'Shanghai Jiao Tong University',
          description: 'SSTIA stands for Student Science and Technology Innovative Association. Together with my colleages, we organized the 9th SJTU Freshman Robotic Contest with nearly 400 participants from various departments of SJTU and more than 300 audience for such a competition lasting 2 months',
        }, {
          date: 'Sep 2017 - Aug 2019',
          title: 'Investigator of [Honor Council](https://www.ji.sjtu.edu.cn/academics/academic-integrity/honor-council/) at UM-SJTU JI',
          location: 'Shanghai Jiao Tong University',
          description: 'Investigated near ten cases of suspected violations of the [Honor Code](https://www.ji.sjtu.edu.cn/academics/academic-integrity/honor-code/) (Academic Integrity).',
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
