// src/data/educationData.js

export const EducationData = {
  university: {
    name: "University of Ottawa",
    logo: "/path/to/uottawa-logo.png",
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
      name: "Computer Architecture",
      image: "/path/to/architecture-image.jpg",
      skills: ["Systems Design", "Hardware Architecture", "Low-level Programming"],
      description: "Study of computer organization and architectural design principles",
      status: "Current",
      professor: "Department of Computer Science"
    },
    {
      id: 2,
      name: "Software Engineering Fundamentals",
      image: "/path/to/engineering-image.jpg",
      skills: ["Testing", "Development Methodologies", "Project Management"],
      description: "Core principles of software engineering and development practices",
      status: "Current",
      professor: "Department of Software Engineering"
    },
    {
      id: 3,
      name: "Data Science Foundations",
      image: "/path/to/data-science-image.jpg",
      skills: ["Python", "Data Analysis", "Statistical Methods"],
      description: "Fundamental concepts and tools in data science",
      status: "Current",
      professor: "Department of Mathematics"
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