// src/data/config.js
export const siteConfig = {
    name: 'Your Name',
    role: 'Full Stack Developer',
    email: 'your.email@example.com',
    location: 'Your Location',

    // Social links
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername',
    },

    // Section visibility and order
    sections: {
      hero: { enabled: true, order: 1 },
      skills: { enabled: true, order: 2 },
      experience: { enabled: true, order: 3 },
      projects: { enabled: true, order: 4 },
      testimonials: { enabled: true, order: 5 },
      contact: { enabled: true, order: 6 },
      goals: { enabled: true, order: 7 },
      socials: { enabled: true, order: 8 },
    },

    // Theme configuration
    theme: {
      primaryColor: 'purple',
      accentColor: 'blue',
      darkMode: true,
    }
  };