// src/data/experienceData.js
import { getAssetPath } from '../utils/assetUtils';


export const ExperienceData = [
  {
    id: 'blackberry-qnx',
    title: 'Software Testing Specialist',
    company: 'BlackBerry QNX',
    companyLogo: getAssetPath('logo/qnx-logo.webp'),
    location: 'Kanata, Ontario, Canada',
    period: {
      start: 'Sep 2024',
      end: null,  // null means current
      display: 'Sep 2024 - Present'
    },
    shortDescription: 'Software testing automation and quality assurance.',
    fullDescription: 'Developed automation testing framework for the QNX Everywhere project, improving testing efficiency and depth while providing quality assurance support.',

    technologies: [
      '🔄 Test Automation',
      '⚙️ CI/CD',
      '🐍 Python',
      '🧪 Testing Frameworks',
      '📊 Performance Testing'
    ],

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

    links: {
      company: 'https://blackberry.qnx.com',
      caseStudy: false
    }
  },
  {
    id: 'freelance-dev',
    title: 'Frontend Developer',
    company: 'Freelance',
    companyLogo: getAssetPath('/logo/freelance-logo.webp'),
    location: 'Ottawa, Ontario, Canada',
    period: {
      start: 'Sep 2024',
      end: null,
      display: 'Sep 2024 - Present'
    },
    shortDescription: 'Frontend development for various clients.',
    fullDescription: 'Independent frontend development work focusing on creating responsive and user-friendly web applications.',

    technologies: [
      '🌐 JavaScript',
      '⚛️ React',
      '🎨 CSS',
      '📱 Responsive Design',
      '🔧 Web Development'
    ],

    achievements: [
      {
        stat: '100%',
        label: 'Client Satisfaction',
        description: 'Successful project delivery'
      }
    ],

    links: {
      company: null,
      caseStudy: false
    }
  },
  // {
  //   id: 'key-club',
  //   title: 'Lieutenant Governor',
  //   company: 'Key Club International',
  //   companyLogo: getAssetPath('company-logos/key-club.png'),
  //   location: 'Orleans, Ontario, Canada',
  //   period: {
  //     start: 'Apr 2022',
  //     end: 'Apr 2023',
  //     display: 'Apr 2022 - Apr 2023'
  //   },
  //   shortDescription: 'Leadership role in community service organization.',
  //   fullDescription: 'Led the Capital Division, organizing major events and managing various service projects while developing leadership and organizational skills.',

  //   technologies: [
  //     '👥 Leadership',
  //     '📅 Event Planning',
  //     '🤝 Team Management',
  //     '📊 Project Management'
  //   ],

  //   achievements: [
  //     {
  //       stat: '3+',
  //       label: 'Major Events',
  //       description: 'Fall Rally, DLTC, Spring Rally'
  //     },
  //     {
  //       stat: '100%',
  //       label: 'Project Success',
  //       description: 'Service activities and fundraisers'
  //     }
  //   ],

  //   links: {
  //     company: 'https://www.keyclub.org',
  //     caseStudy: false
  //   }
  // },
  // {
  //   id: 'purdys',
  //   title: 'Sales Associate',
  //   company: 'Purdys Chocolatier',
  //   companyLogo: getAssetPath('company-logos/purdys.png'),
  //   location: 'Orleans, Ontario, Canada',
  //   period: {
  //     start: 'Sep 2022',
  //     end: null,
  //     display: 'Sep 2022 - Present'
  //   },
  //   shortDescription: 'Retail sales and customer service.',
  //   fullDescription: 'Provide exceptional customer service, manage transactions, and maintain store presentation while contributing to team sales goals.',

  //   technologies: [
  //     '💼 Customer Service',
  //     '🏷️ Sales',
  //     '📦 Inventory Management',
  //     '💰 Transaction Processing'
  //   ],

  //   achievements: [
  //     {
  //       stat: '100%',
  //       label: 'Customer Satisfaction',
  //       description: 'Exceptional service delivery'
  //     },
  //     {
  //       stat: '99%',
  //       label: 'Transaction Accuracy',
  //       description: 'Precise processing'
  //     }
  //   ]
  // }
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
    const duration = getExperienceDuration(exp);
    return total + parseFloat(duration);
  }, 0).toFixed(1);
};