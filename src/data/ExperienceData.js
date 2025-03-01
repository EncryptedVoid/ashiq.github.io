import { getAssetPath } from '@utils/assetUtils';

export const ExperienceData = [
  {
    id: 'company-id',
    title: 'Senior Developer',
    company: 'Company Name',
    companyLogo: getAssetPath('logo/company-logo.webp'),
    location: 'City, State, Country',
    period: {
      start: 'Jan 2022',
      end: null, // null means current
      display: 'Jan 2022 - Present'
    },
    gradient: 'from-rose-500/20 via-salmon-500/20 to-amber-500/20',
    shortDescription: 'Brief overview of your role and primary contributions.',
    fullDescription: 'More detailed overview of your position, team context, and primary areas of work.',

    // Key responsibilities - focus on WHAT you did
    responsibilities: [
      'Designed and implemented microservice architecture for high-traffic public API',
      'Led migration from legacy monolith to containerized services',
      'Mentored junior developers on test-driven development and CI/CD best practices',
      'Created comprehensive monitoring and observability infrastructure',
      'Established coding standards and review processes for the engineering team'
    ],

    // Detailed technologies - focus on HOW you did it and with WHAT
    technologies: [
      {
        name: 'Docker',
        icon: '🐳',
        category: 'DevOps',
        description: 'Used for containerizing microservices and ensuring consistent environments across development, testing, and production.'
      },
      {
        name: 'Kubernetes',
        icon: '⚙️',
        category: 'DevOps',
        description: 'Implemented autoscaling, self-healing clusters to manage containerized applications with high availability requirements.'
      },
      {
        name: 'Python',
        icon: '🐍',
        category: 'Languages',
        description: 'Primary language for backend services, ETL processes, and data processing pipelines. Used with FastAPI and SQLAlchemy.'
      },
      {
        name: 'AWS Lambda',
        icon: 'λ',
        category: 'Cloud Services',
        description: 'Implemented serverless functions for event-driven processing and API integrations, reducing operational costs.'
      },
      {
        name: 'Jenkins',
        icon: '🔄',
        category: 'DevOps',
        description: 'Created automated CI/CD pipelines for testing, building, and deploying applications across environments.'
      }
    ],

    // Projects section - specific accomplishments with technical details
    projects: [
      {
        name: 'Authentication Microservice',
        description: 'Redesigned legacy authentication system as a scalable, secure microservice with OAuth 2.0 support.',
        challenge: 'Needed to support 10x increase in traffic while maintaining sub-100ms response times and migrating existing users.',
        solution: 'Implemented token-based authentication with Redis caching and horizontal scaling, with blue-green deployment strategy.',
        technologies: ['Node.js', 'Redis', 'OAuth 2.0', 'Docker', 'AWS ECS'],
        outcomes: 'Reduced authentication latency by 65%, supported 20M daily requests, and achieved 99.99% uptime.'
      },
      {
        name: 'Data Processing Pipeline',
        description: 'Created a distributed system for processing and analyzing terabytes of customer interaction data.',
        challenge: 'Previous batch processing created 8-hour delays in analytics and frequent processing failures.',
        solution: 'Designed stream processing architecture with Apache Kafka and Spark for real-time analytics.',
        technologies: ['Python', 'Apache Kafka', 'Spark', 'AWS S3', 'Airflow'],
        outcomes: 'Enabled real-time data processing, reduced costs by 40%, and increased data reliability to 99.95%.'
      }
    ],

    // Results - metrics of your impact (keep this section more concise)
    achievements: [
      {
        stat: '99.99%',
        label: 'System Uptime',
        description: 'Improved from 98.5% through architecture redesign and automated recovery processes.'
      },
      {
        stat: '65%',
        label: 'Deployment Time',
        description: 'Reduced through CI/CD implementation and container orchestration.'
      },
      {
        stat: '3x',
        label: 'Developer Productivity',
        description: 'Increased through standardized environments, automated testing, and clear documentation.'
      }
    ],

    // Optional testimonials
    testimonials: [
      {
        name: 'Jane Smith',
        position: 'Engineering Director',
        text: 'Transformed our engineering processes and architecture, creating a solid foundation for our rapid growth while maintaining quality and reliability.'
      }
    ],

    // Links to company website and your custom case study PDF
    links: {
      company: 'https://company-website.com',
      caseStudy: '/case-studies/company-case-study.pdf'
    }
  },
  {
    id: 'company-id',
    title: 'Senior Developer',
    company: 'Company Name',
    companyLogo: getAssetPath('logo/company-logo.webp'),
    location: 'City, State, Country',
    period: {
      start: 'Jan 2022',
      end: null, // null means current
      display: 'Jan 2022 - Present'
    },
    gradient: 'from-rose-500/20 via-salmon-500/20 to-amber-500/20',
    shortDescription: 'Brief overview of your role and primary contributions.',
    fullDescription: 'More detailed overview of your position, team context, and primary areas of work.',

    // Key responsibilities - focus on WHAT you did
    responsibilities: [
      'Designed and implemented microservice architecture for high-traffic public API',
      'Led migration from legacy monolith to containerized services',
      'Mentored junior developers on test-driven development and CI/CD best practices',
      'Created comprehensive monitoring and observability infrastructure',
      'Established coding standards and review processes for the engineering team'
    ],

    // Detailed technologies - focus on HOW you did it and with WHAT
    technologies: [
      {
        name: 'Docker',
        icon: '🐳',
        category: 'DevOps',
        description: 'Used for containerizing microservices and ensuring consistent environments across development, testing, and production.'
      },
      {
        name: 'Kubernetes',
        icon: '⚙️',
        category: 'DevOps',
        description: 'Implemented autoscaling, self-healing clusters to manage containerized applications with high availability requirements.'
      },
      {
        name: 'Python',
        icon: '🐍',
        category: 'Languages',
        description: 'Primary language for backend services, ETL processes, and data processing pipelines. Used with FastAPI and SQLAlchemy.'
      },
      {
        name: 'AWS Lambda',
        icon: 'λ',
        category: 'Cloud Services',
        description: 'Implemented serverless functions for event-driven processing and API integrations, reducing operational costs.'
      },
      {
        name: 'Jenkins',
        icon: '🔄',
        category: 'DevOps',
        description: 'Created automated CI/CD pipelines for testing, building, and deploying applications across environments.'
      }
    ],

    // Projects section - specific accomplishments with technical details
    projects: [
      {
        name: 'Authentication Microservice',
        description: 'Redesigned legacy authentication system as a scalable, secure microservice with OAuth 2.0 support.',
        challenge: 'Needed to support 10x increase in traffic while maintaining sub-100ms response times and migrating existing users.',
        solution: 'Implemented token-based authentication with Redis caching and horizontal scaling, with blue-green deployment strategy.',
        technologies: ['Node.js', 'Redis', 'OAuth 2.0', 'Docker', 'AWS ECS'],
        outcomes: 'Reduced authentication latency by 65%, supported 20M daily requests, and achieved 99.99% uptime.'
      },
      {
        name: 'Data Processing Pipeline',
        description: 'Created a distributed system for processing and analyzing terabytes of customer interaction data.',
        challenge: 'Previous batch processing created 8-hour delays in analytics and frequent processing failures.',
        solution: 'Designed stream processing architecture with Apache Kafka and Spark for real-time analytics.',
        technologies: ['Python', 'Apache Kafka', 'Spark', 'AWS S3', 'Airflow'],
        outcomes: 'Enabled real-time data processing, reduced costs by 40%, and increased data reliability to 99.95%.'
      }
    ],

    // Results - metrics of your impact (keep this section more concise)
    achievements: [
      {
        stat: '99.99%',
        label: 'System Uptime',
        description: 'Improved from 98.5% through architecture redesign and automated recovery processes.'
      },
      {
        stat: '65%',
        label: 'Deployment Time',
        description: 'Reduced through CI/CD implementation and container orchestration.'
      },
      {
        stat: '3x',
        label: 'Developer Productivity',
        description: 'Increased through standardized environments, automated testing, and clear documentation.'
      }
    ],

    // Optional testimonials
    testimonials: [
      {
        name: 'Jane Smith',
        position: 'Engineering Director',
        text: 'Transformed our engineering processes and architecture, creating a solid foundation for our rapid growth while maintaining quality and reliability.'
      }
    ],

    // Links to company website and your custom case study PDF
    links: {
      company: 'https://company-website.com',
      caseStudy: '/case-studies/company-case-study.pdf'
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