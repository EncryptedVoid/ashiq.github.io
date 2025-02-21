// src/data/ProjectsData.js
import { getAssetPath } from '../utils/assetUtils';

const ProjectsData = [
  {
    id: 'conways-game',
    title: 'Conway\'s Game of Life Plus',
    description: 'Enhanced implementation of Conway\'s Game of Life with additional features, optimization algorithms, and interactive visualization.',
    image: getAssetPath('/project-thumbnails/conways-game-of-life.webp'),
    isTopProject: true,
    version: '2.1.0',
    difficulty: 4,
    timeInvestment: '120+ hours',
    startDate: '2024-01-15',
    lastUpdate: '2024-02-18',
    progress: 85,
    status: 'In Progress',
    type: 'Algorithm',
    technologies: ['Python', 'Algorithms', 'Data Structures', 'Visualization', 'Performance Optimization'],
    features: ['Custom pattern implementations', 'Performance optimizations', 'Interactive controls', 'Pattern analysis'],
    metrics: {
      patterns: '50+',
      performance: '1000+ iterations/s',
      optimizations: '5+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/Conways-Game-Of-Life-Plus',
      live: 'https://conway-game-of-life-plus.vercel.app/',
      caseStudy: 'https://example.com/conways-case-study',
      blog: 'https://medium.com/conways-game-of-life',
      video: 'https://youtube.com/conways-game'
    }
  },
  {
    id: 'russell-driving',
    title: 'Russell Driving School Website',
    description: 'Professional website development for a driving school, featuring modern design principles and interactive elements.',
    image: getAssetPath('/project-thumbnails/russell-driving-school.png'),
    isTopProject: true,
    version: '1.5.0',
    difficulty: 3,
    timeInvestment: '100+ hours',
    startDate: '2023-11-10',
    lastUpdate: '2024-01-22',
    progress: 100,
    status: 'Completed',
    type: 'Frontend',
    technologies: ['JavaScript', 'React', 'CSS', 'Responsive Design', 'Modern UI'],
    features: ['Responsive design', 'Course booking system', 'Contact forms', 'Service information'],
    metrics: {
      components: '20+',
      pages: '10+',
      responsiveness: '100%'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/RussellDrivingSchool-Freelance',
      live: 'https://russell-driving-school.vercel.app/',
      caseStudy: 'https://example.com/russell-case-study'
    }
  },
  {
    id: 'harvard-cs50',
    title: 'Harvard CS50 Web Development',
    description: 'Web development projects and assignments from Harvard\'s CS50 course, showcasing various web technologies.',
    image: getAssetPath('/project-thumbnails/harvard-cs50.webp'),
    isTopProject: false,
    version: '3.2.0',
    difficulty: 3,
    timeInvestment: '80+ hours',
    startDate: '2023-09-05',
    lastUpdate: '2024-02-10',
    progress: 75,
    status: 'In Progress',
    type: 'Educational',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
    features: ['Web applications', 'Database integration', 'Frontend design', 'Backend development'],
    metrics: {
      projects: '5+',
      technologies: '10+',
      concepts: '15+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/Harvard-CS50-Web-Development',
      blog: 'https://medium.com/cs50-journey'
    }
  },
  {
    id: 'jonopoly',
    title: 'JONOPOLY - Java Monopoly',
    description: 'Java implementation of the classic Monopoly board game with custom features and modifications.',
    image: getAssetPath('/project-thumbnails/jonopoly.png'),
    isTopProject: false,
    version: '1.2.0',
    difficulty: 4,
    timeInvestment: '90+ hours',
    startDate: '2023-06-12',
    lastUpdate: '2023-07-15',
    progress: 100,
    status: 'Completed',
    type: 'Game Development',
    technologies: ['Java', 'Object-Oriented Design', 'Game Logic', 'UI Development'],
    features: ['Custom game rules', 'Interactive gameplay', 'Property management', 'Player statistics'],
    metrics: {
      features: '15+',
      players: '2-4',
      customRules: '5+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/JONOPOLY-Java-Monopoly',
      video: 'https://youtube.com/jonopoly-gameplay'
    }
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard WebApp',
    description: 'Interactive weather dashboard providing real-time weather data and forecasts.',
    image: getAssetPath('/project-thumbnails/weather-dashboard.webp'),
    isTopProject: false,
    version: '1.0.0',
    difficulty: 2,
    timeInvestment: '40+ hours',
    startDate: '2023-04-22',
    lastUpdate: '2023-05-07',
    progress: 100,
    status: 'Completed',
    type: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather APIs', 'Frontend Design'],
    features: ['Real-time weather data', 'Location-based forecasts', 'Interactive UI', 'Responsive design'],
    metrics: {
      apis: '3+',
      features: '10+',
      updates: 'Real-time'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/Weather-Dashboard-WebApp',
      live: 'https://weather-dashboard-demo.vercel.app/'
    }
  },
  {
    id: 'judoku',
    title: 'JUDOKU - Java Sudoku',
    description: 'Java-based Sudoku game implementation with solver and difficulty levels.',
    image: getAssetPath('/project-thumbnails/judoku.webp'),
    isTopProject: false,
    version: '1.1.0',
    difficulty: 3,
    timeInvestment: '60+ hours',
    startDate: '2023-02-15',
    lastUpdate: '2023-03-10',
    progress: 100,
    status: 'Completed',
    type: 'Game Development',
    technologies: ['Java', 'Algorithms', 'UI Design', 'Game Logic'],
    features: ['Puzzle generator', 'Difficulty levels', 'Solver algorithm', 'Score tracking'],
    metrics: {
      levels: '3+',
      puzzles: '100+',
      algorithms: '2+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/JUDOKU-Java-Sudoku'
    }
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Experiments',
    description: 'Collection of machine learning experiments and implementations exploring various ML concepts.',
    image: getAssetPath('/project-thumbnails/machine-learning.webp'),
    isTopProject: true,
    version: '2.3.0',
    difficulty: 5,
    timeInvestment: '150+ hours',
    startDate: '2023-01-10',
    lastUpdate: '2024-02-15',
    progress: 65,
    status: 'In Progress',
    type: 'AI/ML',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Data Analysis'],
    features: ['ML algorithms', 'Data preprocessing', 'Model training', 'Performance analysis'],
    metrics: {
      experiments: '10+',
      algorithms: '5+',
      datasets: '3+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/Machine-Learning-Experimenting',
      blog: 'https://medium.com/ml-experiments'
    }
  },
  {
    id: 'todo-list',
    title: 'Todo List WebApp',
    description: 'Interactive todo list application with task management features.',
    image: getAssetPath('/project-thumbnails/todo-webapp.webp'),
    isTopProject: false,
    version: '1.0.0',
    difficulty: 2,
    timeInvestment: '30+ hours',
    startDate: '2022-11-05',
    lastUpdate: '2022-11-12',
    progress: 100,
    status: 'Completed',
    type: 'Web Development',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Local Storage'],
    features: ['Task management', 'Priority levels', 'Data persistence', 'Filter options'],
    metrics: {
      features: '8+',
      interactions: '10+',
      storage: 'Local'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/ToDo-List-WebApp',
      live: 'https://todo-list-webapp-demo.vercel.app/'
    }
  },
  {
    id: 'manim-animations',
    title: 'MANIM Math Animations',
    description: 'Mathematical animations and visualizations created using the MANIM engine.',
    image: getAssetPath('/project-thumbnails/manim-animations.webp'),
    isTopProject: false,
    version: '1.4.0',
    difficulty: 4,
    timeInvestment: '110+ hours',
    startDate: '2022-09-20',
    lastUpdate: '2024-01-30',
    progress: 70,
    status: 'In Progress',
    type: 'Educational',
    technologies: ['Python', 'MANIM', 'Mathematics', 'Animation', 'LaTeX'],
    features: ['Mathematical animations', 'Complex visualizations', 'Educational content', 'Custom scenes'],
    metrics: {
      animations: '20+',
      concepts: '15+',
      visualizations: '10+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/MANIM-PersonalExperimenting',
      video: 'https://youtube.com/manim-animations'
    }
  }
];

export default ProjectsData;