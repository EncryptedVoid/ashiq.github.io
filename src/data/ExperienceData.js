import { getAssetPath } from '@utils/assetUtils';

export const ExperienceData = [
  {
    id: 'blackberry-qnx',
    title: 'Software Testing Specialist',
    company: 'QNX - Embedded Solutions',
    companyLogo: getAssetPath('logo/qnx-logo.jpg'),
    location: 'Kanata, Ontario, Canada',
    period: {
      start: 'Sep 2024',
      end: null, // null means current
      display: 'Sep 2024 - Present'
    },
    gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
    shortDescription: 'Software testing automation and quality assurance.',
    fullDescription: 'Developed automation testing framework for the QNX Everywhere project, improving testing efficiency and depth while providing quality assurance support.',

    // Key responsibilities - focus on WHAT you did
    responsibilities: [
      'Developed comprehensive automation testing framework for QNX Everywhere project',
      'Implemented continuous integration and delivery pipeline for test automation',
      'Created and maintained quality assurance documentation and testing standards',
      'Analyzed test results and provided detailed reports to development teams',
      'Collaborated with cross-functional teams to improve overall software quality'
    ],

    // Detailed technologies - focus on HOW you did it and with WHAT
    technologies: [
      {
        name: 'Test Automation',
        icon: '🔄',
        category: 'Testing',
        description: 'Designed and implemented automated test suites to streamline the testing process and ensure consistent coverage across releases.'
      },
      {
        name: 'CI/CD',
        icon: '⚙️',
        category: 'DevOps',
        description: 'Integrated testing into the CI/CD workflow to ensure immediate feedback on code changes and maintain high quality standards.'
      },
      {
        name: 'Python',
        icon: '🐍',
        category: 'Languages',
        description: 'Primary language for developing testing frameworks and automation scripts, leveraging libraries like PyTest and Selenium.'
      },
      {
        name: 'Testing Frameworks',
        icon: '🧪',
        category: 'Testing',
        description: 'Utilized industry-standard testing frameworks to structure tests and ensure comprehensive coverage of system functionality.'
      },
      {
        name: 'Performance Testing',
        icon: '📊',
        category: 'Testing',
        description: 'Conducted performance benchmarking and stress testing to ensure system stability under various load conditions.'
      }
    ],

    // Projects section - specific accomplishments with technical details
    projects: [
      {
        name: 'QNX Test Automation Framework',
        description: 'Built a custom test automation framework for the QNX Everywhere project to standardize testing procedures.',
        challenge: 'Manual testing processes were inconsistent and time-consuming, leading to delayed releases and quality issues.',
        solution: 'Developed a Python-based automation framework that integrated with CI/CD pipelines for immediate test feedback.',
        technologies: ['Python', 'PyTest', 'Jenkins', 'Docker', 'Git'],
        outcomes: 'Improved testing efficiency by 50% and increased test coverage depth by 25%.'
      },
      {
        name: 'QA Integration Pipeline',
        description: 'Established an integrated quality assurance workflow connected to the development process.',
        challenge: 'Disconnect between development and QA processes caused delays and communication issues.',
        solution: 'Created a seamless integration between development and testing workflows using CI/CD tools.',
        technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Bash', 'Python'],
        outcomes: 'Achieved 100% QA integration with development workflow, reducing handoff delays by 60%.'
      }
    ],

    // Results - metrics of your impact
    achievements: [
      {
        stat: '50%',
        label: 'Testing Efficiency',
        description: 'Improved through automation framework'
      },
      {
        stat: '25%',
        label: 'Test Case Depth',
        description: 'Increased coverage and complexity'
      },
      {
        stat: '100%',
        label: 'QA Integration',
        description: 'CICD workflow support'
      }
    ],

    // Optional testimonials
    testimonials: [
      {
        name: 'Alex Johnson',
        position: 'QA Manager',
        text: 'Implemented a transformative testing approach that significantly improved our quality processes and development velocity.'
      }
    ],

    // Links to company website and your custom case study PDF
    links: {
      company: 'https://blackberry.qnx.com',
      caseStudy: false
    }
  },
  {
    id: 'russell-driving-school',
    title: 'Front-End Developer & SEO Specialist',
    company: 'Russell Driving School',
    companyLogo: getAssetPath('/logo/russell-driving-school.png'),
    location: 'Ottawa, Ontario, Canada',
    period: {
      start: 'Sep 2024',
      end: null, // null means current
      display: 'Sep 2024 - Present'
    },
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    shortDescription: 'Frontend development for various clients.',
    fullDescription: 'Independent frontend development work focusing on creating responsive and user-friendly web applications.',

    // Key responsibilities - focus on WHAT you did
    responsibilities: [
      'Designed and built responsive web applications for various clients',
      'Collaborated directly with clients to understand requirements and provide solutions',
      'Implemented modern UI/UX principles to create intuitive user experiences',
      'Maintained ongoing client relationships through support and feature development',
      'Managed project timelines and deliverables independently'
    ],

    // Detailed technologies - focus on HOW you did it and with WHAT
    technologies: [
      {
        name: 'JavaScript',
        icon: '🌐',
        category: 'Languages',
        description: 'Core language for frontend development, using modern ES6+ features and frameworks to create interactive web applications.'
      },
      {
        name: 'React',
        icon: '⚛️',
        category: 'Frameworks',
        description: 'Primary framework for building component-based user interfaces with efficient state management and reusable components.'
      },
      {
        name: 'CSS',
        icon: '🎨',
        category: 'Styling',
        description: 'Used for styling web applications, implementing responsive designs and animations, often with preprocessors like SASS.'
      },
      {
        name: 'Responsive Design',
        icon: '📱',
        category: 'UI/UX',
        description: 'Created flexible layouts that adapt to any device size using media queries, flexbox, and CSS grid techniques.'
      },
      {
        name: 'Web Development',
        icon: '🔧',
        category: 'General',
        description: 'Full frontend development stack including HTML, JavaScript, CSS, and related tools to build complete web solutions.'
      }
    ],

    // Projects section - specific accomplishments with technical details
    projects: [
      {
        name: 'E-commerce Portal',
        description: 'Developed a responsive e-commerce website for a local boutique retailer.',
        challenge: 'Client needed an online presence that maintained their brand identity while providing modern shopping features.',
        solution: 'Built a custom React-based storefront with product catalog, cart functionality, and secure checkout.',
        technologies: ['React', 'Redux', 'Stripe API', 'CSS/SASS', 'Netlify'],
        outcomes: 'Increased client sales by 35% and expanded their customer base to new regions.'
      },
      {
        name: 'Portfolio Website',
        description: 'Created a customizable portfolio template for creative professionals.',
        challenge: 'Needed to showcase visual work effectively while maintaining fast load times and responsiveness.',
        solution: 'Designed a lightweight, image-optimized React application with lazy loading and responsive layouts.',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        outcomes: 'Template adopted by multiple clients with 100% satisfaction rate and positive feedback on performance.'
      }
    ],

    // Results - metrics of your impact (keep this section more concise)
    achievements: [
      {
        stat: '100%',
        label: 'Client Satisfaction',
        description: 'Successful project delivery'
      },
      {
        stat: '35%',
        label: 'Client Revenue',
        description: 'Average increase through web solutions'
      },
      {
        stat: '8',
        label: 'Completed Projects',
        description: 'With ongoing maintenance and support'
      }
    ],

    // Optional testimonials
    testimonials: [
      {
        name: 'Sarah Williams',
        position: 'Business Owner',
        text: 'The website perfectly captures our brand while providing a seamless shopping experience for our customers. Sales have increased significantly since launch.'
      }
    ],

    // Links to company website and your custom case study PDF
    links: {
      company: null,
      caseStudy: false
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