// src/data/educationData.js

export const educationData = {
    university: {
      name: "Stanford University",
      logo: "/path/to/stanford-logo.png",
      degree: "Master of Science in Computer Science",
      programDescription: "Specialized in Artificial Intelligence and Machine Learning with focus on Computer Vision and Natural Language Processing.",
      duration: {
        start: "2020",
        end: "2024",
      }
    },
    courses: [
      {
        id: 1,
        name: "Advanced Machine Learning",
        image: "/path/to/ml-course-image.jpg",
        skills: ["TensorFlow", "PyTorch", "Neural Networks", "Deep Learning"],
        description: "Deep dive into modern machine learning techniques and frameworks",
        grade: "A",
        professor: "Dr. Sarah Chen"
      },
      {
        id: 2,
        name: "Computer Vision",
        image: "/path/to/cv-course-image.jpg",
        skills: ["OpenCV", "CNNs", "Image Processing", "Object Detection"],
        description: "Comprehensive study of computer vision algorithms and applications",
        grade: "A+",
        professor: "Dr. Michael Wang"
      },
      {
        id: 3,
        name: "Natural Language Processing",
        image: "/path/to/nlp-course-image.jpg",
        skills: ["NLTK", "Transformers", "BERT", "Language Modeling"],
        description: "Advanced NLP techniques and modern language models",
        grade: "A",
        professor: "Dr. Emily Johnson"
      }
    ],
    achievements: [
      {
        id: 1,
        title: "Dean's List",
        year: "2023",
        description: "Maintained 4.0 GPA for three consecutive quarters"
      },
      {
        id: 2,
        title: "Research Publication",
        year: "2022",
        description: "Published paper on Novel Neural Architecture Search"
      }
    ],
    researchWork: {
      title: "Efficient Neural Architecture Search",
      advisor: "Dr. Robert Smith",
      description: "Developed novel approaches to automated machine learning model design",
      publications: 2,
      citations: 45
    }
  };