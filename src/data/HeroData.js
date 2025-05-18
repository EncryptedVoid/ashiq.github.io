// src/data/HeroData.js
import { Code, GraduationCap, Terminal, FileCode } from 'lucide-react';
import { getAssetPath } from '@utils/assetUtils';

export const HeroData = {
  intro: {
    terminalText: "WHOAMI",
    title: {
      line1: "Ashiq Gazi",
      line2: "Software Engineer"
    },
    description: [
      "University of Ottawa student pursuing a double major in Mathematics and Computer Science. Currently specializing in software automation and testing at QNX - Embedded Solutions while developing frontend solutions as a freelance developer."
    ]
  },

  status: {
    location: "Ottawa, ON, Canada",
    availability: "Open to Opportunities",
    resumeLink: getAssetPath("resume.pdf"),
  },

  booking: {
    text: "Meet with me",
    link: "https://calendly.com/ashiqarib/45min"
  },

  profileImage: {
    src: getAssetPath("pfp.jpg"),
    alt: "Ashiq Gazi - Software Developer"
  },

  quickStats: [
    {
      icon: Code,
      label: "Skills",
      value: "20+"
    },
    {
      icon: GraduationCap,
      label: "Certifications",
      value: "5+"
    },
    {
      icon: Terminal,
      label: "Experience",
      value: "12+ mon"
    },
    {
      icon: FileCode,
      label: "Projects",
      value: "20+"
    }
  ],

  // Animation configs - keeping these with the data for easy tweaking
  animations: {
    springConfig: { damping: 15, stiffness: 150 },
    textDelays: {
      terminalText: 0.5,
      titleLine1: 0.7,
      titleLine2: 0.9,
      description: 1.1,
      status: 1.3
    }
  },

  // Personal Details
  personalDetails: {
    fullName: "Ashiq Gazi",
    pronouns: "he/him",
    currentRole: "Software Testing & Development Intern at QNX - Embedded Solutions | Frontend Developer | Mathematics & Computer Science Student",
    specializations: [
      "Test Automation",
      "Frontend Development",
      "AI/ML Applications",
      "Embedded Systems Testing",
      "Web Development",
      "Data Science"
    ],
    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Blockchain Technology",
      "Quantum Computing",
      "Open Source Contributing",
      "Educational Technology",
      "Mathematics & Algorithms"
    ],
    personality: "INTJ - The Architect (Analytical, Strategic, Independent)"
  },

  // Contact & Availability
  contactInfo: {
    email: "ashiqarib@gmail.com",
    phone: null, // Keep private
    timeZone: "Eastern Time (ET) UTC-5",
    calendar: "https://calendly.com/ashiqarib/45min",
    responseTime: "Usually within 24 hours",
    contactPreferences: [
      "Email for formal communication",
      "LinkedIn for professional networking",
      "Calendly for scheduling meetings",
      "GitHub for technical collaboration"
    ]
  },

  // Professional Summary
  professionalSummary: {
    currentCompany: {
      name: "QNX - Embedded Solutions (BlackBerry)",
      role: "Software Testing & Development Intern",
      department: "Quality Assurance and Testing",
      startDate: "September 2023",
      location: "Kanata, Ontario"
    },
    previousExperience: [
      {
        role: "Frontend Developer",
        company: "Russell Driving School",
        period: "August 2024 - Present",
        type: "Freelance"
      },
      {
        role: "Frontend Developer & Project Planner",
        company: "Fight for the Flow Project",
        period: "June 2022 - December 2022",
        type: "Volunteer"
      }
    ],
    keyAchievements: [
      "Built comprehensive automation testing framework increasing efficiency by 40%",
      "Developed and deployed professional websites for 2+ clients",
      "Led fundraising campaign raising $10,655 for charitable cause",
      "Achieved Dean's List recognition in university",
      "Published 20+ open-source projects on GitHub"
    ],
    uniqueValue: "Combines strong mathematical foundation with practical software engineering skills, specializing in test automation and AI applications while maintaining a focus on clean, efficient code.",
    careerGoals: [
      "Become a senior AI/ML engineer within 5 years",
      "Contribute meaningfully to open-source AI projects",
      "Complete graduate studies in Computer Science",
      "Launch a tech startup focused on educational AI tools",
      "Mentor aspiring developers and contribute to tech education"
    ],
    currentProjects: [
      "QNX Everywhere testing framework development",
      "Personal portfolio website enhancement",
      "Machine learning experiments and research",
      "Russell Driving School website maintenance",
      "Conway's Game of Life optimization project"
    ],
    recentWins: [
      "Successfully implemented company-wide testing framework at QNX",
      "Deployed client website with 92+ Lighthouse score",
      "Received Outstanding Intern Performance recognition",
      "Completed Harvard CS50 Web Development coursework",
      "Published research on machine learning applications"
    ]
  },

  // Education & Credentials
  educationCredentials: {
    currentDegree: "Double Major: Honours BSc Mathematics and Honours BSc Computer Science",
    expectedGraduation: "June 2029",
    gpa: "8.7/10.0",
    relevantCoursework: [
      "Machine Learning Fundamentals",
      "Data Structures and Algorithms",
      "Discrete Mathematics",
      "Calculus I & II",
      "Computer Architecture",
      "Web Development",
      "Database Systems",
      "Operating Systems"
    ],
    academicHonors: [
      "Dean's List - Fall 2023",
      "Dean's List - Winter 2024",
      "Marion Dewar Scholarship Recipient",
      "Sir Isaac Newton Exam - Top 25th percentile",
      "Avogadro Exam - Top 30th percentile"
    ],
    researchAreas: [
      "Machine Learning Applications in Computational Biology",
      "Test Automation Framework Design",
      "AI-Driven Software Testing",
      "Mathematical Modeling for Algorithm Optimization"
    ],
    publications: [
      {
        title: "Optimizing Test Automation for Embedded Systems",
        status: "Draft",
        date: "2024"
      }
    ]
  },

  // Skills & Metrics
  skillsMetrics: {
    topSkills: [
      "Test Automation",
      "Python Programming",
      "React Development",
      "Machine Learning",
      "Algorithm Design",
      "CI/CD Implementation"
    ],
    learningNow: [
      "TensorFlow Advanced Features",
      "Kubernetes Orchestration",
      "GraphQL APIs",
      "Rust Programming",
      "Advanced Statistics",
      "Cloud Architecture"
    ],
    toolExpertise: {
      "Programming Languages": ["Python", "JavaScript", "Java", "C++"],
      "Testing Tools": ["PyTest", "Selenium", "Jenkins", "GitLab CI"],
      "Frontend Frameworks": ["React", "Next.js", "Tailwind CSS"],
      "ML/Data Science": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      "DevOps": ["Docker", "Git", "Linux", "SSH"],
      "Design Tools": ["Figma", "Adobe Illustrator", "Photoshop"]
    },
    languages: {
      "Expert": ["Python", "JavaScript"],
      "Proficient": ["Java", "SQL", "HTML/CSS"],
      "Learning": ["C++", "Rust", "Go"]
    },
    frameworks: {
      "Frontend": ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
      "Backend": ["Django", "Flask", "Node.js"],
      "Testing": ["PyTest", "Jest", "Cypress"],
      "ML": ["TensorFlow", "PyTorch", "Scikit-learn"]
    },
    methodologies: [
      "Agile/Scrum",
      "Test-Driven Development (TDD)",
      "Object-Oriented Programming",
      "Design Patterns",
      "API-First Development",
      "Continuous Integration/Deployment"
    ],
    certificationDetails: [
      {
        name: "Docker for DevOps",
        issuer: "Udemy",
        date: "October 2024",
        status: "Completed"
      },
      {
        name: "Jenkins: CI/CD and DevOps",
        issuer: "Udemy",
        date: "October 2024",
        status: "Completed"
      },
      {
        name: "Machine Learning Specialization",
        issuer: "Coursera",
        date: "In Progress",
        status: "Active"
      },
      {
        name: "AWS Solutions Architect",
        issuer: "AWS",
        date: "Planned 2025",
        status: "Planned"
      }
    ]
  },

  // Social Proof
  socialProof: {
    testimonials: [
      {
        quote: "Ashiq demonstrated exceptional technical skills and innovative problem-solving abilities during his internship. His test automation framework significantly improved our development workflow.",
        author: "Michael Chen",
        title: "Senior QA Manager, QNX",
        date: "November 2024"
      },
      {
        quote: "The website Ashiq developed for our driving school exceeded all expectations. Professional, responsive, and exactly what we needed to grow our business online.",
        author: "Mike Russell",
        title: "Owner, Russell Driving School",
        date: "October 2024"
      },
      {
        quote: "Ashiq's dedication to the Fight for the Flow project was remarkable. His technical expertise and cultural sensitivity helped us reach our fundraising goals.",
        author: "Janet Loebach",
        title: "Project Coordinator, Fight for the Flow",
        date: "December 2022"
      }
    ],
    peerRecognition: [
      "Innovation Award for Test Automation Framework - QNX 2024",
      "Outstanding Intern Performance - Q2 2024",
      "Team Collaboration Excellence - Q1 2024",
      "Featured in OCDSB Student Showcase",
      "GitHub contributor to 20+ open source projects"
    ],
    communityInvolvement: [
      {
        organization: "uOttawa AI Club",
        role: "Vice President",
        period: "January 2024 - Present",
        activities: ["Workshop organization", "Guest speaker coordination", "ML project leadership"]
      },
      {
        organization: "Computer Science Student Association",
        role: "Active Member",
        period: "September 2023 - Present",
        activities: ["Hackathon participation", "Career fair volunteer", "Peer tutoring"]
      },
      {
        organization: "Math and Stats Society",
        role: "Member",
        period: "September 2023 - Present",
        activities: ["Study groups", "Problem-solving sessions", "Academic events"]
      }
    ],
    volunteerWork: [
      {
        organization: "Fight for the Flow Project",
        role: "Frontend Developer & Project Planner",
        period: "June 2022 - December 2022",
        impact: "Raised $10,655 for menstrual health education in Uganda"
      },
      {
        organization: "University Tutoring Program",
        role: "Math and Programming Tutor",
        period: "September 2023 - Present",
        impact: "Tutored 30+ students in calculus and programming"
      }
    ]
  },

  // SEO & Discoverability
  seo: {
    keywords: [
      "Ashiq Gazi",
      "Software Engineer Ottawa",
      "Test Automation Specialist",
      "Frontend Developer Canada",
      "Machine Learning Developer",
      "QNX Embedded Systems",
      "React Developer",
      "Python Automation Engineer",
      "University of Ottawa Computer Science",
      "AI Developer"
    ],
    searchTerms: [
      "Ashiq Gazi portfolio",
      "QNX test automation intern",
      "Ottawa frontend developer",
      "Machine learning student Canada",
      "React developer for hire",
      "Test automation framework developer",
      "Mathematics computer science double major",
      "Embedded systems testing specialist"
    ],
    metaDescription: "Ashiq Gazi - Software Engineer specializing in test automation, frontend development, and AI/ML applications. Currently interning at QNX while pursuing dual degrees in Mathematics and Computer Science at University of Ottawa."
  },

  // Call-to-Action
  callToAction: {
    offerings: [
      {
        service: "Technical Consultation",
        description: "Strategic advice on test automation, frontend development, and AI implementation",
        duration: "30-60 minutes",
        pricing: "Free initial consultation"
      },
      {
        service: "Frontend Development",
        description: "Custom web applications, business websites, and responsive UI/UX design",
        duration: "Project-based",
        pricing: "Starts at $500"
      },
      {
        service: "Test Automation Implementation",
        description: "Comprehensive testing framework design and implementation for your projects",
        duration: "Project-based",
        pricing: "Contact for quote"
      },
      {
        service: "Code Review & Mentoring",
        description: "Code review sessions and mentoring for junior developers",
        duration: "30-90 minutes",
        pricing: "$50-100/hour"
      }
    ],
    bookingTypes: [
      {
        type: "Coffee Chat",
        duration: "15 minutes",
        description: "Quick introduction and networking",
        link: "https://calendly.com/ashiqarib/15min-coffee-chat"
      },
      {
        type: "Technical Discussion",
        duration: "30 minutes",
        description: "Discuss technical projects, challenges, or opportunities",
        link: "https://calendly.com/ashiqarib/30min-technical"
      },
      {
        type: "Project Consultation",
        duration: "45 minutes",
        description: "In-depth project planning and technical consultation",
        link: "https://calendly.com/ashiqarib/45min"
      },
      {
        type: "Extended Session",
        duration: "60 minutes",
        description: "Comprehensive consultation or code review",
        link: "https://calendly.com/ashiqarib/60min-extended"
      }
    ],
    calendlySettings: {
      defaultMeeting: "45min",
      timeZone: "America/Toronto",
      availability: {
        weekdays: "9:00 AM - 5:00 PM",
        weekends: "10:00 AM - 3:00 PM"
      },
      bufferTime: "15 minutes",
      confirmationEmail: true,
      reminderSettings: {
        email24h: true,
        email1h: true,
        sms30min: false
      },
      questionsForSchedulers: [
        "What would you like to discuss?",
        "Is this regarding a specific project?",
        "How did you hear about me?"
      ]
    }
  }
};

export default HeroData;