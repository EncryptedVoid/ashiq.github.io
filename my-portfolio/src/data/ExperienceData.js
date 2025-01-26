// src/data/ExperienceData.js
export const ExperienceData = [
  {
    id: 'senior-systems',
    title: 'Senior Systems Engineer',
    company: 'Tech Company Name',
    companyLogo: '/company-logos/tech-company.png',
    location: 'Ottawa, ON',
    period: {
      start: 'Jan 2022',
      end: null,  // null means current
      display: '2022 - Present'  // Pre-formatted for mobile
    },
    shortDescription: 'Lead system architect for large-scale embedded systems.',
    fullDescription: 'Lead system architect responsible for designing and implementing large-scale embedded systems and real-time applications. Spearheaded multiple critical projects while mentoring junior engineers.',

    // Simplified technology format
    technologies: [
      '💻 C/C++',
      '🐍 Python',
      '⚙️ RTOS',
      '🐧 Linux',
      '🐳 Docker',
      '🔄 Jenkins',
      '📚 Git',
      '⚡ Assembly'
    ],

    // Mobile-optimized achievements
    achievements: [
      {
        stat: '40%',
        label: 'System Response Time',
        description: 'Optimized RTOS scheduler'
      },
      {
        stat: '60%',
        label: 'Testing Time',
        description: 'New automated framework'
      },
      {
        stat: '87%',
        label: 'Deployment Speed',
        description: 'Improved CI/CD pipeline'
      }
    ],

    // Simplified links
    links: {
      company: 'https://company-website.com',
      caseStudy: true
    }
  }
];

// Optional: Add helper functions for common data operations
export const getExperienceDuration = (experience) => {
  const start = new Date(experience.duration.start);
  const end = experience.duration.end ? new Date(experience.duration.end) : new Date();
  const years = ((end - start) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
  return `${years} years`;
};

export const getTotalYearsOfExperience = (experiences) => {
  return experiences.reduce((total, exp) => {
    const duration = getExperienceDuration(exp);
    return total + parseFloat(duration);
  }, 0).toFixed(1);
};