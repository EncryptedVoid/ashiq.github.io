// src/data/educationData.js
import { getAssetPath } from '@utils/assetUtils';

export const EducationData = {
  university: {
    name: "University of Ottawa",
    logo: getAssetPath("/logo/uottawa-logo.jpg"),
    degree: "Honours BSc Mathematics and Honours BSc Computer Science",
    programDescription: "Double major program specializing in Data Science, combining advanced mathematics with practical computer science applications.",
    duration: {
      start: "2023",
      end: "2029",
    },
    campus: "Main Campus, Sandy Hill",
    faculty: "Faculty of Science",
    GPA: "8.7/10.0",
    expectedGraduation: "June 2029",
    specializations: ["Data Science", "Machine Learning", "Mathematical Statistics", "Software Engineering"],
    honors: ["Dean's List Fall 2023", "Dean's List Winter 2024", "Honour Roll", "Merit Scholarship 2024"]
  },

  courses: [
    {
      id: 1,
      name: "Introduction to Computing I",
      code: "ITI 1120",
      image: getAssetPath("course-thumbnails/year1/computing-1-thumbnail.webp"),
      skills: ["Python", "Programming Fundamentals", "Problem Solving"],
      description: "Introduction to problem solving and computational thinking using Python programming language",
      status: "Completed",
      grade: "B",
      professor: "School of Electrical Engineering and Computer Science",
      term: "Fall 2023",
      year: "1st Year",
      semester: "Semester 1",
      courseType: "Core",
      classSize: 250,
      assignments: [
        { title: "Basic Python Programming", worth: "10%" },
        { title: "Data Structures Implementation", worth: "15%" },
        { title: "Final Project: Simple Game", worth: "25%" }
      ],
      relatedProjects: [
        { name: "Snake Game", link: "https://github.com/username/snake-game" },
        { name: "Calculator App", link: "https://github.com/username/calculator" }
      ],
      textbooks: [
        { title: "Python Crash Course", author: "Eric Matthes", required: true },
        { title: "Automate the Boring Stuff", author: "Al Sweigart", required: false }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123456",
      isCoreCourse: true
    },
    {
      id: 2,
      name: "Technical Report Writing",
      code: "ENG 1112",
      image: getAssetPath("course-thumbnails/year1/technical-writing-thumbnail.webp"),
      skills: ["Technical Writing", "Documentation", "Professional Communication"],
      description: "Development of technical writing and professional communication skills for engineers",
      status: "Completed",
      grade: "A",
      professor: "Faculty of Engineering",
      term: "Fall 2023",
      year: "1st Year",
      semester: "Semester 1",
      courseType: "Core",
      classSize: 180,
      assignments: [
        { title: "Technical Report", worth: "30%" },
        { title: "Research Proposal", worth: "20%" },
        { title: "Presentation", worth: "25%" }
      ],
      relatedProjects: [
        { name: "Technical Documentation", link: "https://github.com/username/tech-docs" },
        { name: "Research Report", link: "https://docs.google.com/document/d/research-report" }
      ],
      textbooks: [
        { title: "Technical Communication Today", author: "Johnson-Sheehan", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123457",
      isCoreCourse: true
    },
    {
      id: 3,
      name: "Calculus I",
      code: "MAT 1320",
      image: getAssetPath("course-thumbnails/year1/calculus-1-thumbnail.png"),
      skills: ["Differential Calculus", "Mathematical Analysis", "Problem Solving"],
      description: "Introduction to differential calculus and its applications in engineering",
      status: "Completed",
      grade: "B+",
      professor: "Department of Mathematics and Statistics",
      term: "Fall 2023",
      year: "1st Year",
      semester: "Semester 1",
      courseType: "Core",
      classSize: 300,
      assignments: [
        { title: "Weekly Problem Sets", worth: "20%" },
        { title: "Midterm 1", worth: "25%" },
        { title: "Midterm 2", worth: "25%" },
        { title: "Final Exam", worth: "30%" }
      ],
      relatedProjects: [
        { name: "Derivative Calculator", link: "https://github.com/username/derivative-calc" }
      ],
      textbooks: [
        { title: "Calculus: Early Transcendentals", author: "Stewart", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123458",
      isCoreCourse: true
    },
    {
      id: 4,
      name: "Principles of Physics I",
      code: "PHY 1321",
      image: getAssetPath("course-thumbnails/year1/physics-1-thumbnail.jpg"),
      skills: ["Mechanics", "Physics Fundamentals", "Scientific Method"],
      description: "Study of fundamental physics principles and mechanics for engineering applications",
      status: "Completed",
      grade: "A-",
      professor: "Department of Physics",
      term: "Fall 2023",
      year: "1st Year",
      semester: "Semester 1",
      courseType: "Core",
      classSize: 200,
      assignments: [
        { title: "Lab Reports", worth: "20%" },
        { title: "Problem Sets", worth: "15%" },
        { title: "Midterm", worth: "30%" },
        { title: "Final Exam", worth: "35%" }
      ],
      relatedProjects: [
        { name: "Physics Simulation", link: "https://github.com/username/physics-sim" }
      ],
      textbooks: [
        { title: "University Physics", author: "Young & Freedman", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123459",
      isCoreCourse: true
    },
    {
      id: 5,
      name: "Professional Communication and Responsibility",
      code: "SEG 2900",
      image: getAssetPath("course-thumbnails/year1/ethics-thumbnail.webp"),
      skills: ["Professional Ethics", "Communication", "Engineering Practice"],
      description: "Study of professional ethics and communication in software engineering practice",
      status: "Completed",
      grade: "A+",
      professor: "School of Electrical Engineering and Computer Science",
      term: "Fall 2023",
      year: "1st Year",
      semester: "Semester 1",
      courseType: "Core",
      classSize: 120,
      assignments: [
        { title: "Ethics Case Studies", worth: "25%" },
        { title: "Professional Portfolio", worth: "30%" },
        { title: "Group Presentation", worth: "25%" },
        { title: "Final Paper", worth: "20%" }
      ],
      relatedProjects: [
        { name: "Ethics Website", link: "https://github.com/username/ethics-site" }
      ],
      textbooks: [
        { title: "Engineering Ethics", author: "Martin", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123460",
      isCoreCourse: true
    },
    {
      id: 6,
      name: "Digital Systems I",
      code: "ITI 1100",
      image: getAssetPath("course-thumbnails/year1/digital-systems-thumbnail.webp"),
      skills: ["Digital Logic", "Circuit Design", "Hardware Fundamentals"],
      description: "Introduction to digital systems and logic design fundamentals",
      status: "Completed",
      grade: "A+",
      professor: "School of Electrical Engineering and Computer Science",
      term: "Winter 2024",
      year: "1st Year",
      semester: "Semester 2",
      courseType: "Core",
      classSize: 150,
      assignments: [
        { title: "Logic Design Lab", worth: "25%" },
        { title: "Circuit Implementation", worth: "20%" },
        { title: "Midterm", worth: "25%" },
        { title: "Final Project", worth: "30%" }
      ],
      relatedProjects: [
        { name: "Digital Clock Design", link: "https://github.com/username/digital-clock" },
        { name: "Logic Simulator", link: "https://github.com/username/logic-sim" }
      ],
      textbooks: [
        { title: "Digital Design", author: "Mano & Ciletti", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123461",
      isCoreCourse: true
    },
    {
      id: 7,
      name: "Introduction to Computing II",
      code: "ITI 1121",
      image: getAssetPath("course-thumbnails/year1/computing-2-thumbnail.jpg"),
      skills: ["Java", "Object-Oriented Programming", "Data Structures"],
      description: "Advanced programming concepts and introduction to object-oriented programming",
      status: "Completed",
      grade: "A+",
      professor: "School of Electrical Engineering and Computer Science",
      term: "Winter 2024",
      year: "1st Year",
      semester: "Semester 2",
      courseType: "Core",
      classSize: 220,
      assignments: [
        { title: "OOP Assignments", worth: "20%" },
        { title: "Data Structures Project", worth: "25%" },
        { title: "Final Project", worth: "35%" },
        { title: "Midterm", worth: "20%" }
      ],
      relatedProjects: [
        { name: "Student Management System", link: "https://github.com/username/student-mgmt" },
        { name: "Library System", link: "https://github.com/username/library-sys" }
      ],
      textbooks: [
        { title: "Java: How to Program", author: "Deitel", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123462",
      isCoreCourse: true
    },
    {
      id: 8,
      name: "Calculus II",
      code: "MAT 1322",
      image: getAssetPath("course-thumbnails/year1/calculus-2-thumbnail.png"),
      skills: ["Integral Calculus", "Series", "Mathematical Analysis"],
      description: "Study of integral calculus and infinite series with engineering applications",
      status: "Completed",
      grade: "B+",
      professor: "Department of Mathematics and Statistics",
      term: "Winter 2024",
      year: "1st Year",
      semester: "Semester 2",
      courseType: "Core",
      classSize: 280,
      assignments: [
        { title: "Weekly Problem Sets", worth: "20%" },
        { title: "Midterm 1", worth: "25%" },
        { title: "Midterm 2", worth: "25%" },
        { title: "Final Exam", worth: "30%" }
      ],
      relatedProjects: [
        { name: "Integration Visualizer", link: "https://github.com/username/integration-viz" }
      ],
      textbooks: [
        { title: "Calculus: Early Transcendentals", author: "Stewart", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123463",
      isCoreCourse: true
    },
    {
      id: 9,
      name: "Discrete Mathematics for Computing",
      code: "MAT 1348",
      image: getAssetPath("course-thumbnails/year1/discrete-math-thumbnail.jpg"),
      skills: ["Logic", "Set Theory", "Graph Theory", "Combinatorics"],
      description: "Mathematical foundations of computer science and software engineering",
      status: "Completed",
      grade: "B+",
      professor: "Department of Mathematics and Statistics",
      term: "Winter 2024",
      year: "1st Year",
      semester: "Semester 2",
      courseType: "Core",
      classSize: 140,
      assignments: [
        { title: "Weekly Assignments", worth: "25%" },
        { title: "Graph Theory Project", worth: "20%" },
        { title: "Midterm", worth: "25%" },
        { title: "Final Exam", worth: "30%" }
      ],
      relatedProjects: [
        { name: "Graph Algorithm Visualizer", link: "https://github.com/username/graph-viz" },
        { name: "Logic Proof Checker", link: "https://github.com/username/proof-checker" }
      ],
      textbooks: [
        { title: "Discrete Mathematics and Its Applications", author: "Rosen", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123464",
      isCoreCourse: true
    },
    {
      id: 10,
      name: "Principles of Physics II",
      code: "PHY 1322",
      image: getAssetPath("course-thumbnails/year1/physics-2-thumbnail.jpg"),
      skills: ["Electromagnetism", "Waves", "Modern Physics"],
      description: "Advanced physics principles including electromagnetism and waves",
      status: "Completed",
      grade: "B+",
      professor: "Department of Physics",
      term: "Winter 2024",
      year: "1st Year",
      semester: "Semester 2",
      courseType: "Core",
      classSize: 190,
      assignments: [
        { title: "Lab Reports", worth: "20%" },
        { title: "Problem Sets", worth: "15%" },
        { title: "Midterm", worth: "30%" },
        { title: "Final Exam", worth: "35%" }
      ],
      relatedProjects: [
        { name: "EM Field Simulator", link: "https://github.com/username/em-sim" }
      ],
      textbooks: [
        { title: "University Physics", author: "Young & Freedman", required: true }
      ],
      courseWebsite: "https://brightspace.uottawa.ca/d2l/home/123465",
      isCoreCourse: true
    }
  ],

  achievements: [
    {
      id: 1,
      title: "2022 Orleans Outstanding Youth Award",
      year: "2022",
      description: "Recognized for exceptional youth achievement in the Orleans community"
    },
    {
      id: 2,
      title: "Sir Isaac Newton Exam Achievement",
      year: "2022",
      description: "Placed in top 25th percentile of the Sir Isaac Newton Exam"
    },
    {
      id: 3,
      title: "Avogadro Exam Achievement",
      year: "2022",
      description: "Placed in top 30th percentile of the Avogadro Exam"
    },
    {
      id: 4,
      title: "Marion Dewar Scholarship",
      year: "2023",
      description: "Recipient of the Marion Dewar Scholarship Fund"
    },
    {
      id: 5,
      title: "Toshiba ExploraVision Competition",
      year: "2022",
      description: "Completed research essay on 'The Applications of Bacteriophages'"
    }
  ],

  highSchool: {
    name: "Cairine Wilson Secondary School",
    degree: "Ontario Secondary School Diploma (OSSD)",
    duration: {
      start: "2019",
      end: "2023"
    },
    location: "Orleans, Ontario"
  },

  languages: [
    {
      language: "English",
      proficiency: "Native or Bilingual",
      certifications: ["Native Speaker"],
      years: "Lifetime",
      context: "First language, spoken at home and school",
      testScores: null
    },
    {
      language: "French",
      proficiency: "Limited Working",
      certifications: ["DELF A2"],
      years: "6 years",
      context: "Studied in school, French Immersion grades 1-8",
      testScores: { "DELF A2": "Pass", "Ontario French Test": "Level 2" }
    },
    {
      language: "Bengali",
      proficiency: "Limited Working",
      certifications: null,
      years: "Childhood",
      context: "Spoken at home with family members",
      testScores: null
    }
  ],

  researchWork: {
    title: "Machine Learning Applications in Computational Biology",
    advisor: "Dr. Sarah Chen, Department of Computer Science",
    description: "Investigating the use of deep learning techniques for protein structure prediction and drug discovery applications.",
    status: "Current",
    startDate: "September 2024",
    endDate: null,
    funding: "NSERC Undergraduate Research Award",
    collaborators: [
      "Dr. Michael Johnson (Biology Department)",
      "PhD student: James Li",
      "MSc student: Priya Patel"
    ],
    methodology: ["Deep Learning", "Bioinformatics", "Statistical Analysis"],
    keywords: ["machine learning", "protein folding", "drug discovery", "computational biology"],
    conference: "Presented preliminary findings at UOttawa Research Day 2024",
    publications: 0,
    citations: 0
  },

  thesis: {
    title: "Deep Learning Approaches to Protein Structure Prediction",
    status: "Planning",
    expectedDefense: "March 2029",
    advisor: "Dr. Sarah Chen",
    committee: [
      "Dr. Michael Johnson (Biology)",
      "Dr. Emma Davis (Mathematics)",
      "Dr. Robert Wilson (Computer Science)"
    ],
    abstract: "Exploring novel deep learning architectures for improved accuracy in protein structure prediction, with applications in drug discovery and personalized medicine.",
    keywords: ["deep learning", "protein structure", "bioinformatics", "neural networks"]
  },

  exchanges: [
    {
      id: 1,
      program: "Summer Research Exchange",
      university: "McGill University",
      duration: "Summer 2025 (Planned)",
      focus: "AI Research Lab Experience",
      credits: 3
    }
  ],

  workshops: [
    {
      id: 1,
      title: "Advanced Python for Data Science",
      date: "October 2023",
      organizer: "University of Ottawa Career Centre",
      skills: ["pandas", "numpy", "scikit-learn"]
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      date: "February 2024",
      organizer: "IEEE Student Branch",
      skills: ["supervised learning", "unsupervised learning", "model evaluation"]
    },
    {
      id: 3,
      title: "Technical Interview Preparation",
      date: "March 2024",
      organizer: "CS Student Association",
      skills: ["algorithms", "data structures", "system design"]
    }
  ],

  tutoring: [
    {
      id: 1,
      position: "Math Tutor",
      subject: "Calculus I & II",
      duration: "September 2023 - Present",
      students: 15,
      description: "Providing one-on-one and group tutoring for first-year calculus students"
    },
    {
      id: 2,
      position: "Programming TA Assistant",
      subject: "Introduction to Computing II",
      duration: "January 2024 - April 2024",
      students: 30,
      description: "Assisting with lab sessions and helping students with Java programming assignments"
    }
  ],

  clubs: [
    {
      id: 1,
      name: "Computer Science Student Association",
      position: "Member",
      duration: "September 2023 - Present",
      activities: ["Hackathons", "Career fairs", "Tech talks"]
    },
    {
      id: 2,
      name: "uOttawa AI Club",
      position: "Vice President",
      duration: "January 2024 - Present",
      activities: ["Workshop organization", "Guest speaker coordination", "ML projects"]
    },
    {
      id: 3,
      name: "Math and Stats Society",
      position: "Member",
      duration: "September 2023 - Present",
      activities: ["Study groups", "Problem-solving sessions", "Social events"]
    }
  ],

  conferences: [
    {
      id: 1,
      name: "uOttawa Research Day",
      role: "Presenter",
      date: "April 2024",
      title: "Machine Learning in Computational Biology",
      type: "Local"
    },
    {
      id: 2,
      name: "Canadian Undergraduate Conference on AI",
      role: "Attendee",
      date: "March 2024",
      type: "National"
    },
    {
      id: 3,
      name: "IEEE Student Branch Conference",
      role: "Volunteer",
      date: "January 2024",
      type: "Regional"
    }
  ]
};

export default EducationData;