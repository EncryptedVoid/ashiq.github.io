// src/data/config.js
export const siteConfig = {
  name: 'Ashiq Gazi',
  role: 'Software Testing Specialist & Frontend Developer',
  email: 'ashiqarib@gmail.com',
  location: 'Ottawa, Ontario, Canada',

  // Social links
  social: {
    github: 'https://github.com/EncryptedVoid',
    linkedin: 'https://linkedin.com/in/ashiq-gazi-090a6b213',
    wandb: 'https://wandb.ai/ashiqarib'
  },

  // Featured Projects
  featuredProjects: [
    {
      name: 'ASGARD-Automated-Investing-Analysis',
      tech: ['Python'],
      type: 'Private',
      description: 'Automated investment analysis tool'
    },
    {
      name: 'FortuneAI',
      tech: ['Java'],
      type: 'Public',
      description: 'AI-based predictive analysis system'
    },
    {
      name: 'RussellDrivingSchool-Freelance',
      tech: ['JavaScript'],
      type: 'Private',
      description: 'Frontend development for driving school'
    }
  ],

  // Professional Experience
  experience: {
    current: {
      role: 'Software Testing Specialist',
      company: 'QNX - Embedded Solutions',
      period: 'September 2024 - Present',
      highlights: [
        'Developed automation testing framework',
        'Improved testing efficiency by 50%',
        'Enhanced test case depth by 25%'
      ]
    }
  },

  // Education
  education: {
    university: 'University of Ottawa',
    degree: 'Honours BSc Mathematics and Honours BSc Computer Science (Data Science)',
    period: '2023-2029'
  },

  // Section visibility and order
  sections: {
    hero: { enabled: true, order: 1 },
    skills: { enabled: true, order: 2 },
    experience: { enabled: true, order: 3 },
    projects: { enabled: true, order: 4 },
    testimonials: { enabled: true, order: 5 },
    education: { enabled: true, order: 6 },
    certifications: { enabled: true, order: 7 },
    contact: { enabled: true, order: 8 }
  },

  // Skills & Certifications
  skills: {
    technical: [
      'Computer Architecture',
      'Scheduling Algorithms',
      'Multithreading',
      'Python',
      'Java',
      'JavaScript',
      'Test Automation',
      'Frontend Development'
    ],
    certifications: [
      'Performance Testing Foundations',
      'Python Automation Testing With Pytest',
      'Docker Essentials and Development',
      'Computer Networking',
      'GitLab CI/CD'
    ]
  },

  // Theme configuration
  theme: {
    primaryColor: 'red',
    accentColor: 'purple',
    darkMode: true
  }
}