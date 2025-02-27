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
    }
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
      term: "Fall 2023"
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
      term: "Fall 2023"
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
      term: "Fall 2023"
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
      term: "Fall 2023"
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
      term: "Fall 2023"
    },
    {
      id: 6,
      name: "Digital Systems I",
      code: "ITI 1100",
      image: getAssetPath("course-thumbnails/year1/digital-systems-thumbnail.webp"),
      skills: ["Digital Logic", "Circuit Design", "Hardware Fundamentals"],
      description: "Introduction to digital systems and logic design fundamentals",
      status: "Current",
      grade: "A+",
      professor: "School of Electrical Engineering and Computer Science",
      term: "Winter 2024"
    },
    {
      id: 7,
      name: "Introduction to Computing II",
      code: "ITI 1121",
      image: getAssetPath("course-thumbnails/year1/computing-2-thumbnail.jpg"),
      skills: ["Java", "Object-Oriented Programming", "Data Structures"],
      description: "Advanced programming concepts and introduction to object-oriented programming",
      status: "Current",
      grade: "A+",
      professor: "School of Electrical Engineering and Computer Science",
      term: "Winter 2024"
    },
    {
      id: 8,
      name: "Calculus II",
      code: "MAT 1322",
      image: getAssetPath("course-thumbnails/year1/calculus-2-thumbnail.png"),
      skills: ["Integral Calculus", "Series", "Mathematical Analysis"],
      description: "Study of integral calculus and infinite series with engineering applications",
      status: "Current",
      grade: "B+",
      professor: "Department of Mathematics and Statistics",
      term: "Winter 2024"
    },
    {
      id: 9,
      name: "Discrete Mathematics for Computing",
      code: "MAT 1348",
      image: getAssetPath("course-thumbnails/year1/discrete-math-thumbnail.jpg"),
      skills: ["Logic", "Set Theory", "Graph Theory", "Combinatorics"],
      description: "Mathematical foundations of computer science and software engineering",
      status: "Current",
      grade: "B+",
      professor: "Department of Mathematics and Statistics",
      term: "Winter 2024"
    },
    {
      id: 10,
      name: "Principles of Physics II",
      code: "PHY 1322",
      image: getAssetPath("course-thumbnails/year1/physics-2-thumbnail.jpg"),
      skills: ["Electromagnetism", "Waves", "Modern Physics"],
      description: "Advanced physics principles including electromagnetism and waves",
      status: "Current",
      grade: "B+",
      professor: "Department of Physics",
      term: "Winter 2024"
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
      proficiency: "Native or Bilingual"
    },
    {
      language: "French",
      proficiency: "Limited Working"
    },
    {
      language: "Bengali",
      proficiency: "Limited Working"
    }
  ],

  // If you don't have research work yet, you can either omit this field
  // or explicitly set it to null
  researchWork: null,

  // Or if you do have research work, structure it like this:
  /*
  researchWork: {
    title: "Research Project Title",
    advisor: "Professor Name",
    description: "Description of research work",
    publications: 2,
    citations: 10
  }
  */
};

export default EducationData;