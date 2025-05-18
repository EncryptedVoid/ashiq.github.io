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

    // General Experience Fields
    type: 'Internship',
    department: 'Quality Assurance and Testing',
    supervisor: 'Michael Chen, Senior QA Manager',
    companyDetails: {
      industry: 'Embedded Systems Software',
      size: '500-1000 employees',
      description: 'Leading provider of real-time operating systems and embedded software solutions for automotive, industrial, and medical applications',
      parentCompany: 'BlackBerry Limited'
    },
    companyWebsite: 'https://blackberry.qnx.com',
    skillsGained: [
      'Test Automation Framework Development',
      'Embedded Systems Testing',
      'Performance Testing',
      'Python Automation',
      'Technical Documentation',
      'Cross-team Collaboration'
    ],
    mentorship: [
      { name: 'Michael Chen', role: 'Direct Supervisor', focus: 'QA Best Practices' },
      { name: 'Sarah Li', role: 'Senior Developer', focus: 'Python Development' },
      { name: 'James Wilson', role: 'Test Lead', focus: 'Automation Frameworks' }
    ],
    workStyle: 'Hybrid (3 days in-office, 2 days remote)',
    teamSize: 12,

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
        outcomes: 'Successfully tested all features and provided valuable feedback for product improvements before release.',
        duration: '4 months',
        role: 'Lead Tester and Framework Developer',
        budget: null,
        timeline: 'Sep 2023 - Jan 2024',
        deliverables: [
          'Automated test suite covering 100% of features',
          'Test execution reports and documentation',
          'Framework maintenance documentation',
          'Product feedback presentation to stakeholders'
        ],
        challenges: 'Learning new embedded OS while developing comprehensive test coverage',
        learnings: 'Gained deep understanding of embedded systems, improved Python automation skills, learned agile testing methodologies',
        metrics: {
          'Test Coverage': '100%',
          'Automation Rate': '85%',
          'Bug Detection': '47 issues found',
          'Time Saved': '40% reduction in testing time'
        },
        links: {
          documentation: '/internal/qnx-everywhere-testing-docs',
          repository: '/internal/qnx-test-automation'
        }
      },
      {
        name: 'Performance Testing Framework',
        description: 'Created a performance and stress testing framework for the QNX Everywhere operating system.',
        challenge: 'Needed to evaluate system stability and performance under various loads and conditions.',
        solution: 'Developed a Python-based SSH stressing framework that could simulate various workloads and measure system responses.',
        technologies: ['Python', 'Paramiko', 'Bash', 'Linux', 'Performance Monitoring Tools'],
        outcomes: 'Identified and helped resolve several performance bottlenecks, improving overall system stability.',
        duration: '2 months',
        role: 'Performance Testing Specialist',
        budget: null,
        timeline: 'Feb 2024 - Mar 2024',
        deliverables: [
          'SSH stress testing framework',
          'Performance baseline reports',
          'Stress test scenarios documentation',
          'Performance optimization recommendations'
        ],
        challenges: 'Creating realistic stress test scenarios for embedded systems',
        learnings: 'Advanced Python networking, performance optimization techniques, embedded system resource management',
        metrics: {
          'Performance Improvement': '25%',
          'Bottlenecks Identified': '12',
          'Test Scenarios Created': '30+',
          'System Uptime Under Load': '99.8%'
        },
        links: {
          documentation: '/internal/performance-testing-docs',
          framework: '/internal/ssh-stress-framework'
        }
      },
      {
        name: 'Open Source Ports Testing',
        description: 'Tested compatibility of open-source tools with the QNX environment.',
        challenge: 'Needed to ensure popular frameworks like ROS2, PyTorch, and TensorFlow worked correctly on QNX.',
        solution: 'Collaborated with another employee to perform functional, installation, and port testing for various open-source tools.',
        technologies: ['ROS2', 'PyTorch', 'TensorFlow', 'Python', 'Linux'],
        outcomes: 'Validated compatibility and documented integration procedures for key open-source tools.',
        duration: '3 months',
        role: 'Open Source Integration Tester',
        budget: null,
        timeline: 'Jan 2024 - Mar 2024',
        deliverables: [
          'Compatibility test reports for 12 tools',
          'Integration documentation',
          'Installation guides',
          'Known issues and workarounds'
        ],
        challenges: 'Adapting x86-based tools for embedded ARM architectures',
        learnings: 'Cross-platform development, open source licensing, machine learning framework internals',
        metrics: {
          'Tools Tested': '12',
          'Successful Ports': '10',
          'Documentation Pages': '45',
          'Integration Success Rate': '83%'
        },
        links: {
          documentation: '/internal/open-source-ports-guide',
          testResults: '/internal/oss-compatibility-report'
        }
      },
      {
        name: 'Internal Tool Test Specification',
        description: 'Designed and developed testing framework for an internal, public-facing product.',
        challenge: 'The tool had never been tested before and required a comprehensive testing approach.',
        solution: 'Created a new test specification following corporate policies, developed a Python-based testing framework, and designed test cases for all features.',
        technologies: ['Python', 'Test Planning', 'Documentation', 'Corporate Standards'],
        outcomes: 'Established the first formal testing process for a tool included in the software development package for QNX\'s real-time operating system.',
        duration: '2 months',
        role: 'Test Architect and Lead Developer',
        budget: null,
        timeline: 'Apr 2024 - May 2024',
        deliverables: [
          'Complete test specification document',
          'Automated testing framework',
          'Test case library (150+ cases)',
          'Quality assurance checklist'
        ],
        challenges: 'Creating comprehensive tests from scratch with no existing documentation',
        learnings: 'Enterprise test design, corporate policy compliance, test documentation standards',
        metrics: {
          'Test Cases Created': '150+',
          'Feature Coverage': '100%',
          'Framework Adoption': 'Company-wide standard',
          'Documentation Pages': '85'
        },
        links: {
          testSpec: '/internal/tool-test-specification',
          framework: '/internal/internal-tool-testing'
        }
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

    // Career Development
    promotion: null,
    recognition: [
      'Outstanding Intern Performance - Q2 2024',
      'Innovation Award for Test Automation Framework',
      'Team Collaboration Excellence - Q1 2024'
    ],
    conferences: [
      { name: 'QNX Developer Conference 2024', role: 'Attendee', date: 'March 2024' },
      { name: 'Ottawa Tech Summit', role: 'Presenter', topic: 'Embedded Systems Testing' }
    ],

    // Technical Details
    methodologies: ['Agile/Scrum', 'Test-Driven Development', 'Continuous Integration'],
    tools: [
      'Jenkins', 'GitLab CI', 'Docker', 'QEMU', 'VirtualBox', 'VMware',
      'PyTest', 'Paramiko', 'Ansible', 'Grafana', 'Prometheus'
    ],
    frameworks: [
      'PyTest for test automation',
      'SSH/Paramiko for remote testing',
      'Jenkins Pipeline for CI/CD'
    ],
    databases: ['SQLite for test results', 'Redis for caching'],
    deployment: [
      'Docker containers for test environments',
      'Jenkins for automated deployments',
      'Git-based deployment workflows'
    ],
    testing: [
      'Unit Testing', 'Integration Testing', 'Performance Testing',
      'Stress Testing', 'Functional Testing', 'Automated Regression Testing'
    ],

    // Soft Skills & Impact
    leadership: [
      'Led test framework development for QNX Everywhere',
      'Mentored new intern on testing best practices',
      'Coordinated cross-team collaboration for open source testing'
    ],
    collaboration: [
      'Worked with development team on bug resolution',
      'Collaborated with product managers on feature specifications',
      'Partnered with DevOps team on CI/CD integration'
    ],
    communication: [
      'Presented findings to senior management',
      'Created detailed technical documentation',
      'Conducted knowledge transfer sessions'
    ],
    problemSolving: [
      'Resolved complex embedded system testing challenges',
      'Debugged performance issues in real-time OS',
      'Optimized test automation for resource-constrained environments'
    ],
    innovation: [
      'Developed novel SSH-based stress testing approach',
      'Created first-of-its-kind test framework for internal tool',
      'Implemented automated reporting system'
    ],
    feedback: {
      midYear: 'Exceptional performance, exceeding expectations in test automation',
      annual: 'Demonstrates strong technical skills and innovative problem-solving'
    },
    growth: [
      'Advanced Python programming skills',
      'Embedded systems expertise',
      'Leadership and project management',
      'Technical writing and documentation'
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

    // General Experience Fields
    type: 'Freelance',
    department: 'Business Development',
    supervisor: 'Mike Russell, Owner',
    companyDetails: {
      industry: 'Driver Education',
      size: '1-10 employees',
      description: 'Local driving school serving Ottawa area with comprehensive driver education programs',
      parentCompany: null
    },
    companyWebsite: 'https://russelldriving.ca',
    skillsGained: [
      'Full-Stack Web Development',
      'Brand Identity Design',
      'Client Communication',
      'SEO Optimization',
      'Project Management',
      'Business Strategy'
    ],
    mentorship: [],
    workStyle: 'Remote',
    teamSize: 2,

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
        outcomes: 'Delivered a modern, responsive website that accurately represented the driving school\'s brand and services.',
        duration: '2 months',
        role: 'Full-Stack Developer & Designer',
        budget: '$1,500 CAD',
        timeline: 'Aug 2024 - Oct 2024',
        deliverables: [
          'Complete website with 4 main pages',
          'Custom logo and branding materials',
          'Responsive design for all devices',
          'SEO-optimized content structure'
        ],
        challenges: 'Balancing professional design with user-friendly navigation for diverse age groups',
        learnings: 'Client communication, brand development, local business needs',
        metrics: {
          'Page Load Time': '<2s',
          'Mobile Responsiveness': '100%',
          'SEO Score': '92/100',
          'Client Satisfaction': '100%'
        },
        links: {
          live: 'https://russelldriving.ca',
          github: 'https://github.com/username/russell-driving'
        }
      },
      {
        name: 'Curriculum Resource Page',
        description: 'Developed a free curriculum page with Ontario driving education resources.',
        challenge: 'Needed to provide value to potential customers while showcasing the school\'s expertise.',
        solution: 'Created a comprehensive resource page featuring Ontario curriculum details in an accessible format.',
        technologies: ['React', 'Content Strategy', 'Tailwind CSS'],
        outcomes: 'Established the business as a helpful resource in the community while increasing site traffic.',
        duration: '2 weeks',
        role: 'Content Developer & Developer',
        budget: null,
        timeline: 'Sep 2024',
        deliverables: [
          'Curriculum overview page',
          'Downloadable study materials',
          'Interactive FAQ section',
          'Resource links to official documents'
        ],
        challenges: 'Organizing complex curriculum information in user-friendly format',
        learnings: 'Educational content design, information architecture',
        metrics: {
          'Page Views': '+45%',
          'Average Time on Page': '3.2 minutes',
          'Resource Downloads': '120+',
          'Inquiries Generated': '+30%'
        },
        links: {
          live: 'https://russelldriving.ca/curriculum',
          documentation: '/docs/curriculum-page'
        }
      },
      {
        name: 'Brand Identity Development',
        description: 'Created complete brand identity including logo, colors, and visual guidelines.',
        challenge: 'Startup business needed professional brand identity to compete with established schools.',
        solution: 'Developed comprehensive brand package with modern logo, cohesive color scheme, and visual guidelines.',
        technologies: ['Adobe Illustrator', 'Figma', 'Color Theory', 'Typography'],
        outcomes: 'Established strong brand identity that resonated with target demographic.',
        duration: '1 month',
        role: 'Brand Designer',
        budget: '$500 CAD',
        timeline: 'Aug 2024',
        deliverables: [
          'Logo variations (primary, secondary, icon)',
          'Color palette with hex codes',
          'Typography guidelines',
          'Brand style guide'
        ],
        challenges: 'Creating modern design while maintaining professionalism and trustworthiness',
        learnings: 'Brand strategy, design psychology, client feedback incorporation',
        metrics: {
          'Logo Variations': '4',
          'Color Palette Options': '3',
          'Revision Rounds': '2',
          'Brand Recognition': '+65%'
        },
        links: {
          brandGuide: '/docs/russell-brand-guide',
          assets: '/assets/russell-brand'
        }
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

    // Career Development
    promotion: null,
    recognition: [],
    conferences: [],

    // Technical Details
    methodologies: ['Iterative Development', 'Client-Centric Design', 'Agile Approach'],
    tools: [
      'VS Code', 'Git', 'Figma', 'Adobe Illustrator', 'Google Analytics',
      'Chrome DevTools', 'Lighthouse', 'SEO Tools'
    ],
    frameworks: [
      'React for component-based UI',
      'Tailwind CSS for styling',
      'React Router for navigation'
    ],
    databases: ['Local Storage', 'Firebase (planned)'],
    deployment: [
      'Netlify for static site hosting',
      'Git-based deployment workflow',
      'Custom domain setup'
    ],
    testing: [
      'Browser compatibility testing',
      'Responsive design testing',
      'User acceptance testing',
      'SEO validation'
    ],

    // Soft Skills & Impact
    leadership: [
      'Managed entire project from conception to delivery',
      'Led client meetings and requirement gathering'
    ],
    collaboration: [
      'Direct client collaboration',
      'Iterative feedback implementation'
    ],
    communication: [
      'Regular client updates',
      'Technical explanations to non-technical client',
      'Design presentation and rationale'
    ],
    problemSolving: [
      'Balanced competing design requirements',
      'Optimized site performance on limited budget',
      'Created scalable design system'
    ],
    innovation: [
      'Implemented modern design trends for traditional business',
      'Created unique value proposition through curriculum page'
    ],
    feedback: {
      client: 'Exceeded expectations with professional design and functionality'
    },
    growth: [
      'Client relationship management',
      'Full-stack development skills',
      'Business strategy understanding',
      'Brand development expertise'
    ],

    // Optional testimonials
    testimonials: [],

    // Links to company website and your custom case study PDF
    links: {
      company: 'https://russelldriving.ca',
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

    // General Experience Fields
    type: 'Volunteer',
    department: 'Communications and Technology',
    supervisor: 'Janet Loebach, Project Coordinator',
    companyDetails: {
      industry: 'Non-profit/NGO',
      size: '5-10 volunteers',
      description: 'Charitable initiative focused on menstrual health and education for girls in Uganda',
      parentCompany: 'Tazimond Foundation'
    },
    companyWebsite: 'https://www.instagram.com/fight4theflow/',
    skillsGained: [
      'Non-profit Project Management',
      'Cause Marketing',
      'Cross-cultural Communication',
      'Social Media Strategy',
      'Web Development for NGOs',
      'Fundraising Campaign Planning'
    ],
    mentorship: [
      { name: 'Janet Loebach', role: 'Project Coordinator', focus: 'Non-profit Management' },
      { name: 'Sarah Tazimond', role: 'Foundation Leader', focus: 'Cultural Sensitivity' }
    ],
    workStyle: 'Remote',
    teamSize: 8,

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
        outcomes: 'Successfully launched the platform that effectively communicated the mission and supported the fundraising campaign that raised over $10,000.',
        duration: '3 months',
        role: 'Web Developer & Content Strategist',
        budget: null,
        timeline: 'Jun 2022 - Aug 2022',
        deliverables: [
          'Complete website with 6 main sections',
          'Educational resource library',
          'Donation integration',
          'Team and impact pages'
        ],
        challenges: 'Creating culturally sensitive content while maintaining educational value',
        learnings: 'Cross-cultural web design, non-profit digital strategy, sensitive topic communication',
        metrics: {
          'Unique Visitors': '2,500+',
          'Donation Conversions': '12%',
          'Resource Downloads': '400+',
          'Social Shares': '300+'
        },
        links: {
          live: 'https://fightfortheflow.org',
          github: 'https://github.com/username/fight-for-flow'
        }
      },
      {
        name: 'Moveathon Fundraising Campaign',
        description: 'Supported the planning and online promotion of a two-week fundraising marathon.',
        challenge: 'Needed to engage students at Cairine Wilson S.S. and partnered OCDSB schools to participate in a sponsored exercise program.',
        solution: 'Created promotional materials and website content explaining the campaign mechanics and highlighting the impact of donations.',
        technologies: ['Content Strategy', 'Digital Marketing', 'Campaign Planning'],
        outcomes: 'Contributed to the successful campaign that raised $10,655 for purchasing reusable pads for girls in the Koboko district.',
        duration: '1 month',
        role: 'Digital Campaign Coordinator',
        budget: null,
        timeline: 'Oct 2022 - Nov 2022',
        deliverables: [
          'Campaign landing page',
          'Promotional materials',
          'Progress tracking system',
          'Impact visualization'
        ],
        challenges: 'Engaging students during exam period while maintaining campaign momentum',
        learnings: 'Fundraising campaign management, student engagement strategies, impact communication',
        metrics: {
          'Total Raised': '$10,655',
          'Participants': '200+',
          'Pads Purchased': '1,500+',
          'Schools Involved': '5'
        },
        links: {
          landingPage: '/moveathon',
          results: '/impact-report'
        }
      },
      {
        name: 'Educational Resource Center',
        description: 'Developed an online educational hub about menstruation, women\'s rights, and the Koboko district.',
        challenge: 'Needed to provide accessible information about taboo topics to educate potential supporters and create awareness.',
        solution: 'Created a dedicated section with blog posts, Q&A content with the foundation\'s representatives, and recommended documentaries.',
        technologies: ['Content Development', 'Educational Design', 'Web Development'],
        outcomes: 'Established a valuable resource that helped visitors understand the project\'s importance and the specific challenges faced by girls in Uganda.',
        duration: '2 months',
        role: 'Content Developer & Information Architect',
        budget: null,
        timeline: 'Jul 2022 - Aug 2022',
        deliverables: [
          'Resource center with 15+ articles',
          'Q&A section with video content',
          'Downloadable educational materials',
          'Documentary recommendation list'
        ],
        challenges: 'Balancing educational content with cultural sensitivity and accessibility',
        learnings: 'Educational content design, cross-cultural communication, health topic presentation',
        metrics: {
          'Articles Published': '15',
          'Video Views': '1,200+',
          'Resource Downloads': '500+',
          'Average Session Time': '4.5 minutes'
        },
        links: {
          resourceCenter: '/resources',
          blog: '/blog'
        }
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

    // Career Development
    promotion: null,
    recognition: [
      'Outstanding Volunteer Contribution Award',
      'Featured in OCDSB Student Showcase',
      'Community Impact Recognition'
    ],
    conferences: [
      { name: 'NGO Youth Leadership Summit', role: 'Presenter', date: 'November 2022' }
    ],

    // Technical Details
    methodologies: ['Human-Centered Design', 'Agile Project Management', 'Impact-Based Planning'],
    tools: [
      'WordPress', 'Canva', 'Google Workspace', 'Instagram Creator Studio',
      'Zoom', 'Slack', 'PayPal', 'Analytics Tools'
    ],
    frameworks: [
      'WordPress CMS',
      'Bootstrap for responsive design',
      'Social media content calendar'
    ],
    databases: ['WordPress database', 'Contact management'],
    deployment: [
      'WordPress hosting',
      'Domain management',
      'SSL certificate setup'
    ],
    testing: [
      'User experience testing',
      'Cross-browser compatibility',
      'Mobile responsiveness testing',
      'Accessibility testing'
    ],

    // Soft Skills & Impact
    leadership: [
      'Led content strategy for multi-platform campaign',
      'Coordinated between Canadian and Ugandan teams',
      'Mentored other student volunteers'
    ],
    collaboration: [
      'Cross-cultural team collaboration',
      'Partnership with multiple schools',
      'Foundation leadership collaboration'
    ],
    communication: [
      'Translated complex issues for diverse audiences',
      'Presented campaign results to stakeholders',
      'Created culturally sensitive content'
    ],
    problemSolving: [
      'Addressed sensitive topics appropriately',
      'Overcame technical limitations on budget',
      'Navigated cross-cultural communication challenges'
    ],
    innovation: [
      'Developed new engagement strategy for youth fundraising',
      'Created educational content framework for NGOs',
      'Integrated exercise with charitable giving'
    ],
    feedback: {
      projectCoordinator: 'Exceptional dedication and technical skills that significantly advanced our mission',
      volunteers: 'Natural leader who made complex topics accessible to everyone'
    },
    growth: [
      'Non-profit sector understanding',
      'Cross-cultural communication',
      'Social impact measurement',
      'Community outreach strategies'
    ],

    // Optional testimonials
    testimonials: [],

    // Links to company website and your custom case study PDF
    links: {
      company: 'https://www.instagram.com/fight4theflow/',
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