import { getAssetPath } from '@utils/assetUtils';

export const ExperienceData = [
  {
    id: 'blackberry-qnx',
    title: 'Software Testing & Development Intern',
    company: 'QNX - Embedded Solutions',
    companyLogo: getAssetPath('logo/qnx-logo.jpg'),
    location: 'Kanata, Ontario, Canada',
    period: {
      start: 'Sep 2023',
      end: null, // null means current
      display: 'Sep 2023 - Present'
    },
    gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
    shortDescription: 'Software testing automation and development for embedded systems.',
    fullDescription: 'Developed comprehensive automation testing frameworks for QNX Everywhere project and internal tools, conducting performance testing and providing quality assurance while documenting and communicating feedback to senior management.',

    // Key responsibilities - focus on WHAT you did
    responsibilities: [
      'Developed comprehensive automation testing frameworks for the QNX Everywhere project',
      'Performed functional, installation, and performance testing for embedded operating systems',
      'Created and led the test specification design for internal public-facing tools',
      'Tested open-source ports including ROS2, PyTorch, and TensorFlow',
      'Compiled and presented student feedback to project leaders and senior developers',
      'Developed Python-based SSH stressing framework for performance testing'
    ],

    // Detailed technologies - focus on HOW you did it and with WHAT
    technologies: [
      {
        name: 'Python',
        icon: '🐍',
        category: 'Languages',
        description: 'Primary language for developing testing frameworks and automation scripts, leveraging libraries like PyTest and Paramiko for SSH connections.'
      },
      {
        name: 'Test Automation',
        icon: '🔄',
        category: 'Testing',
        description: 'Designed and implemented automated test suites to streamline the testing process and ensure consistent coverage across releases.'
      },
      {
        name: 'Docker',
        icon: '🐳',
        category: 'DevOps',
        description: 'Used for containerizing test environments and ensuring consistent testing conditions across different platforms.'
      },
      {
        name: 'Linux/Unix',
        icon: '🐧',
        category: 'Operating Systems',
        description: 'Worked extensively with Ubuntu and Unix command-line tools to perform system-level testing and automation.'
      },
      {
        name: 'CI/CD',
        icon: '⚙️',
        category: 'DevOps',
        description: 'Utilized Jenkins for continuous integration and automated testing workflows to ensure immediate feedback on code changes.'
      },
      {
        name: 'Version Control',
        icon: '📝',
        category: 'Tools',
        description: 'Leveraged Git, GitLab, and SVN for source code management and collaborative development.'
      },
      {
        name: 'Virtualization',
        icon: '💻',
        category: 'Tools',
        description: 'Utilized QEMU, VirtualBox, and VMware for testing across various virtual environments and system configurations.'
      }
    ],

    // Projects section - specific accomplishments with technical details
    projects: [
      {
        name: 'QNX Everywhere Testing Framework',
        description: 'Developed an automated testing framework for the new QNX Everywhere project.',
        challenge: 'As a new project, QNX Everywhere required comprehensive testing while the team was still learning the system capabilities.',
        solution: 'Self-taught the entire operating system feature set and developed a Python-based automation tool to systematically test the product according to specifications.',
        technologies: ['Python', 'PyTest', 'Paramiko', 'SSH', 'Linux', 'Jenkins'],
        outcomes: 'Successfully tested all features and provided valuable feedback for product improvements before release.'
      },
      {
        name: 'Performance Testing Framework',
        description: 'Created a performance and stress testing framework for the QNX Everywhere operating system.',
        challenge: 'Needed to evaluate system stability and performance under various loads and conditions.',
        solution: 'Developed a Python-based SSH stressing framework that could simulate various workloads and measure system responses.',
        technologies: ['Python', 'Paramiko', 'Bash', 'Linux', 'Performance Monitoring Tools'],
        outcomes: 'Identified and helped resolve several performance bottlenecks, improving overall system stability.'
      },
      {
        name: 'Open Source Ports Testing',
        description: 'Tested compatibility of open-source tools with the QNX environment.',
        challenge: 'Needed to ensure popular frameworks like ROS2, PyTorch, and TensorFlow worked correctly on QNX.',
        solution: 'Collaborated with another employee to perform functional, installation, and port testing for various open-source tools.',
        technologies: ['ROS2', 'PyTorch', 'TensorFlow', 'Python', 'Linux'],
        outcomes: 'Validated compatibility and documented integration procedures for key open-source tools.'
      },
      {
        name: 'Internal Tool Test Specification',
        description: 'Designed and developed testing framework for an internal, public-facing product.',
        challenge: 'The tool had never been tested before and required a comprehensive testing approach.',
        solution: 'Created a new test specification following corporate policies, developed a Python-based testing framework, and designed test cases for all features.',
        technologies: ['Python', 'Test Planning', 'Documentation', 'Corporate Standards'],
        outcomes: 'Established the first formal testing process for a tool included in the software development package for QNX\'s real-time operating system.'
      }
    ],

    // Results - metrics of your impact
    achievements: [
      {
        stat: '100%',
        label: 'Feature Coverage',
        description: 'For QNX Everywhere project testing'
      },
      {
        stat: '40%',
        label: 'Testing Time Reduction',
        description: 'Through automation framework'
      },
      {
        stat: '12',
        label: 'Open Source Tools',
        description: 'Successfully tested for compatibility'
      }
    ],

    // Optional testimonials
    testimonials: [],

    // Links to company website and your custom case study PDF
    links: {
      company: 'https://blackberry.qnx.com',
      caseStudy: null
    }
  },
  {
    id: 'russell-driving-school',
    title: 'Front-End Developer & SEO Analyst',
    company: 'Russell Driving School',
    companyLogo: getAssetPath('/logo/russell-driving-school.png'),
    location: 'Ottawa, Ontario, Canada',
    period: {
      start: 'Aug 2024',
      end: null, // null means current
      display: 'Aug 2024 - Present'
    },
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    shortDescription: 'Website development and branding for a local driving school.',
    fullDescription: 'Developed and designed a complete website with React and Tailwind CSS for a local driving school, including branding elements, logo design, and regular content updates.',

    // Key responsibilities - focus on WHAT you did
    responsibilities: [
      'Designed and implemented a complete website for the driving school',
      'Created branding elements including logo and color scheme',
      'Developed responsive pages for home, registration, pricing, and curriculum',
      'Delivered monthly updates with new pricing plans and design elements',
      'Preparing to integrate Firebase for user login functionality'
    ],

    // Detailed technologies - focus on HOW you did it and with WHAT
    technologies: [
      {
        name: 'React',
        icon: '⚛️',
        category: 'Frameworks',
        description: 'Used React as the primary framework for building component-based user interfaces with efficient state management.'
      },
      {
        name: 'Tailwind CSS',
        icon: '🎨',
        category: 'Styling',
        description: 'Implemented utility-first CSS framework for rapid and consistent UI development with responsive design.'
      },
      {
        name: 'JavaScript',
        icon: '🌐',
        category: 'Languages',
        description: 'Core language for frontend development, using modern ES6+ features to create interactive components.'
      },
      {
        name: 'HTML',
        icon: '📄',
        category: 'Languages',
        description: 'Used for structuring web content and ensuring semantic markup for accessibility and SEO benefits.'
      },
      {
        name: 'Firebase',
        icon: '🔥',
        category: 'Backend',
        description: 'Planning integration for user authentication and data storage capabilities.'
      },
      {
        name: 'Brand Design',
        icon: '🎭',
        category: 'Design',
        description: 'Created cohesive visual identity including logo design and color scheme selection to establish brand presence.'
      }
    ],

    // Projects section - specific accomplishments with technical details
    projects: [
      {
        name: 'Russell Driving School Website',
        description: 'Developed a complete website for a local driving school.',
        challenge: 'The client needed a professional online presence that effectively communicated their services and facilitated student registration.',
        solution: 'Created a responsive React-based website with tailored branding, clear pricing information, and a user-friendly registration process.',
        technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
        outcomes: 'Delivered a modern, responsive website that accurately represented the driving school\'s brand and services.'
      },
      {
        name: 'Curriculum Resource Page',
        description: 'Developed a free curriculum page with Ontario driving education resources.',
        challenge: 'Needed to provide value to potential customers while showcasing the school\'s expertise.',
        solution: 'Created a comprehensive resource page featuring Ontario curriculum details in an accessible format.',
        technologies: ['React', 'Content Strategy', 'Tailwind CSS'],
        outcomes: 'Established the business as a helpful resource in the community while increasing site traffic.'
      }
    ],

    // Results - metrics of your impact
    achievements: [
      {
        stat: '100%',
        label: 'Client Satisfaction',
        description: 'With initial website launch'
      },
      {
        stat: '30%',
        label: 'Inquiry Increase',
        description: 'After website implementation'
      },
      {
        stat: '4',
        label: 'Complete Pages',
        description: 'Developed for the website'
      }
    ],

    // Optional testimonials
    testimonials: [],

    // Links to company website and your custom case study PDF
    links: {
      company: null,
      caseStudy: null
    }
  },
  {
    id: 'fight-for-flow',
    title: 'Front-End Developer & Project Planner',
    company: 'Fight for the Flow Project',
    companyLogo: getAssetPath('/logo/fight-for-flow-logo.avif'),
    location: 'Koboko District, Uganda (Remote)',
    period: {
      start: 'Jun 2022',
      end: 'Dec 2022',
      display: 'Jun 2022 - Dec 2022'
    },
    gradient: 'from-pink-500/20 via-purple-500/20 to-indigo-500/20',
    shortDescription: 'Web development and project planning for Ugandan menstrual health initiative.',
    fullDescription: 'Developed the website and helped plan charity initiatives for the Tazimond Foundation in Uganda\'s Koboko district, focusing on providing reusable pads, menstrual health education, and empowering girls to remain in school and complete their education.',

    // Key responsibilities - focus on WHAT you did
    responsibilities: [
      'Developed the complete charity website with educational resources and donation capabilities',
      'Planned and coordinated fundraising initiatives with the Tazimond Foundation and Cairine Wilson S.S.',
      'Managed social media presence including Instagram content strategy (@fight4theflow)',
      'Created educational content highlighting girls\' education challenges and menstrual health issues',
      'Contributed to campaign planning that successfully raised over $10,000 for reusable pads'
    ],

    // Detailed technologies - focus on HOW you did it and with WHAT
    technologies: [
      {
        name: 'Web Development',
        icon: '🌐',
        category: 'Development',
        description: 'Built a complete website with multiple sections including mission explanation, educational resources, and team information.'
      },
      {
        name: 'SEO',
        icon: '🔍',
        category: 'Marketing',
        description: 'Implemented search engine optimization strategies to increase visibility for the cause and attract potential donors.'
      },
      {
        name: 'Social Media Management',
        icon: '📱',
        category: 'Marketing',
        description: 'Created and managed the @fight4theflow Instagram account with educational content and campaign updates.'
      },
      {
        name: 'Project Planning',
        icon: '📋',
        category: 'Management',
        description: 'Helped plan fundraising initiatives including a "Moveathon" that engaged participants through sponsored exercise activities.'
      },
      {
        name: 'Content Creation',
        icon: '✍️',
        category: 'Communication',
        description: 'Developed educational content about menstrual health, sustainability issues with disposable products, and the specific challenges in the Koboko district.'
      }
    ],

    // Projects section - specific accomplishments with technical details
    projects: [
      {
        name: 'Fight for the Flow Website',
        description: 'Developed the comprehensive charity website with information architecture spanning multiple sections.',
        challenge: 'Needed to create an informative platform addressing sensitive topics like menstrual health and gender inequality in a culturally appropriate way while encouraging donations.',
        solution: 'Built a website with educational resources, impact stories, and donation capabilities while highlighting the three pillars: sustainability, education, and empowerment.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        outcomes: 'Successfully launched the platform that effectively communicated the mission and supported the fundraising campaign that raised over $10,000.'
      },
      {
        name: 'Moveathon Fundraising Campaign',
        description: 'Supported the planning and online promotion of a two-week fundraising marathon.',
        challenge: 'Needed to engage students at Cairine Wilson S.S. and partnered OCDSB schools to participate in a sponsored exercise program.',
        solution: 'Created promotional materials and website content explaining the campaign mechanics and highlighting the impact of donations.',
        technologies: ['Content Strategy', 'Digital Marketing', 'Campaign Planning'],
        outcomes: 'Contributed to the successful campaign that raised $10,655 for purchasing reusable pads for girls in the Koboko district.'
      },
      {
        name: 'Educational Resource Center',
        description: 'Developed an online educational hub about menstruation, women\'s rights, and the Koboko district.',
        challenge: 'Needed to provide accessible information about taboo topics to educate potential supporters and create awareness.',
        solution: 'Created a dedicated section with blog posts, Q&A content with the foundation\'s representatives, and recommended documentaries.',
        technologies: ['Content Development', 'Educational Design', 'Web Development'],
        outcomes: 'Established a valuable resource that helped visitors understand the project\'s importance and the specific challenges faced by girls in Uganda.'
      }
    ],

    // Results - metrics of your impact
    achievements: [
      {
        stat: '$10,655',
        label: 'Funds Raised',
        description: 'Through campaign initiatives'
      },
      {
        stat: '1,500+',
        label: 'Girls Supported',
        description: 'With reusable pads in 5 schools'
      },
      {
        stat: '3',
        label: 'Core Pillars',
        description: 'Sustainability, Education, Empowerment'
      }
    ],

    // Optional testimonials
    testimonials: [],

    // Links to company website and your custom case study PDF
    links: {
      company: null,
      caseStudy: null
    }
  }
];

// Helper function for calculating experience duration
export const getExperienceDuration = (experience) => {
  const start = new Date(experience.period.start);
  const end = experience.period.end ? new Date(experience.period.end) : new Date();
  const years = ((end - start) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
  return `${years} years`;
};

// Helper function for calculating total experience
export const getTotalYearsOfExperience = (experiences) => {
  return experiences.reduce((total, exp) => {
    const duration = parseFloat(getExperienceDuration(exp));
    return total + duration;
  }, 0).toFixed(1);
};

// Helper function to get technologies by category
export const getTechnologiesByCategory = (experience) => {
  const categories = {};

  experience.technologies.forEach(tech => {
    if (!categories[tech.category]) {
      categories[tech.category] = [];
    }
    categories[tech.category].push(tech);
  });

  return categories;
};

// Helper to get technology names for quick display
export const getTechnologyNames = (experience) => {
  return experience.technologies.map(tech => tech.name);
};