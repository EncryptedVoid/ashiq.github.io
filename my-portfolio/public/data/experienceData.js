// src/components/sections/Experience/experienceData.js
export const experienceData = [
    {
      id: 'senior-systems',
      title: 'Senior Systems Engineer',
      company: 'Tech Company Name',
      companyLogo: '/company-logos/tech-company.png', // Add your logo path
      location: 'Ottawa, ON',
      startDate: 'Jan 2022',
      endDate: null, // null indicates current job
      type: 'Full-time',
      description: 'Lead system architect responsible for designing and implementing large-scale embedded systems and real-time applications. Spearheaded multiple critical projects while mentoring junior engineers.',
      achievements: [
        {
          stat: '40%',
          label: 'System Response Time Improvement',
          description: 'Redesigned the core RTOS scheduler using advanced optimization techniques'
        },
        {
          stat: '60%',
          label: 'Testing Time Reduction',
          description: 'Developed and implemented a new automated testing framework'
        },
        {
          stat: '87%',
          label: 'Deployment Time Reduction',
          description: 'Implemented a new CI/CD pipeline reducing deployment from 2 hours to 15 minutes'
        }
      ],
      technologies: [
        'C/C++',
        'Python',
        'RTOS',
        'Linux',
        'Docker',
        'Jenkins',
        'Git',
        'Assembly'
      ],
      testimonials: [
        {
          name: 'Sarah Chen',
          position: 'Engineering Manager',
          image: '/testimonials/sarah.jpg',
          text: 'Outstanding leadership in driving our core infrastructure modernization.'
        },
        // Add more testimonials
      ],
      links: {
        company: 'https://company-website.com',
        caseStudy: true // Indicates if there's a case study available
      }
    },
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      company: 'Previous Company Name',
      companyLogo: '/company-logos/prev-company.png',
      location: 'Ottawa, ON',
      startDate: 'Jun 2020',
      endDate: 'Dec 2021',
      type: 'Contract',
      description: 'Developed embedded software solutions and implemented automated testing frameworks.',
      achievements: [
        {
          stat: '35%',
          label: 'Memory Usage Reduction',
          description: 'Developed a custom memory management system'
        },
        {
          stat: '25%',
          label: 'Performance Improvement',
          description: 'Optimized critical system components through profiling and analysis'
        }
      ],
      technologies: [
        'C++',
        'Python',
        'Linux',
        'GCC',
        'Git',
        'pytest',
        'Docker'
      ],
      testimonials: [
        {
          name: 'Sarah Chen',
          position: 'Engineering Manager',
          image: '/testimonials/sarah.jpg',
          text: 'Outstanding leadership in driving our core infrastructure modernization. Their technical expertise and ability to mentor team members has been invaluable.'
        },
        {
          name: 'Michael Johnson',
          position: 'Tech Lead',
          image: '/testimonials/michael.jpg',
          text: 'Exceptional problem-solving skills and attention to detail. They consistently delivered high-quality solutions while maintaining excellent documentation standards.'
        },
        {
          name: 'Emily Rodriguez',
          position: 'Senior Developer',
          image: '/testimonials/emily.jpg',
          text: 'A true team player with remarkable technical skills. Their contributions to our testing framework revolutionized our development process.'
        },
        {
          name: 'David Kim',
          position: 'Product Manager',
          image: '/testimonials/david.jpg',
          text: 'Demonstrated excellent communication skills and technical leadership. Always went above and beyond to ensure project success.'
        },
        {
          name: 'Lisa Wang',
          position: 'DevOps Lead',
          image: '/testimonials/lisa.jpg',
          text: 'Implemented innovative solutions that significantly improved our deployment pipeline. A pleasure to work with and highly knowledgeable.'
        }
      ],
      links: {
        company: 'https://prev-company-website.com',
        caseStudy: false
      }
    }
    // Add more experiences...
  ];

// // Summary statistics
// export const experienceStats = {
//     yearsOfExperience: '5+',
//     projectsDelivered: '50+',
//     teamMembersLed: '20+'
// };