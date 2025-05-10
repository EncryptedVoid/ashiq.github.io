// src/data/ProjectsData.js
import { getAssetPath } from '@utils/assetUtils';

const ProjectsData = [
  {
    id: 'conways-game',
    title: 'Conway\'s Game of Life Plus',
    description: 'Enhanced implementation of Conway\'s Game of Life with additional features, optimization algorithms, and interactive visualization.',
    image: getAssetPath('/project-thumbnails/conways-game-of-life.webp'),
    isTopProject: true,
    version: '0.18.5',
    difficulty: 4,
    timeInvestment: '30+ hours',
    startDate: '2024-01-15',
    lastUpdate: '2024-02-18',
    progress: 75,
    status: 'In Progress',
    type: 'Algorithm',
    technologies: ['Python', 'Algorithms', 'Data Structures', 'Visualization', 'Performance Optimization'],
    features: ['Custom pattern implementations', 'Performance optimizations', 'Interactive controls', 'Pattern analysis'],
    metrics: {
      patterns: '50+',
      performance: '100+ iterations/s',
      optimizations: '5+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/Conways-Game-Of-Life-Plus',
    },
    // New attributes:
    category: 'Personal',
    license: 'MIT',
    collaborators: 'Solo',
    clientType: 'Personal',
    platform: 'Cross-platform',
    problemStatement: 'Enhance Conway\'s Game of Life with better performance and visualization capabilities',
    architecture: 'Object-oriented with optimized data structures',
    dependencies: ['Python 3.x', 'Pygame', 'NumPy', 'Matplotlib'],
    testing: {
      framework: 'Pytest',
      coverage: '60%',
      types: ['Unit tests', 'Performance tests']
    },
    deployment: {
      hosting: 'GitHub Releases',
      type: 'Desktop application'
    },
    security: ['Input validation', 'Safe file operations'],
    database: null,
    apis: null,
    methodologies: ['Agile', 'Algorithm optimization'],
    tools: ['VSCode', 'Git', 'PyCharm', 'Profiling tools'],
    challenges: [
      'Optimizing large grid calculations',
      'Implementing efficient pattern storage',
      'Real-time visualization performance'
    ],
    solutions: [
      'Implemented sparse matrix representation',
      'Used hash-based pattern recognition',
      'Optimized rendering pipeline'
    ],
    learnings: [
      'Algorithm optimization techniques',
      'Data structure design',
      'Performance profiling'
    ],
    futurePlans: [
      'Multi-threading support',
      'Web-based interface',
      'Custom rule engine',
      'Pattern sharing community'
    ],
    budget: 'Personal time investment',
    stakeholders: ['Open source community'],
    deliverables: ['Python application', 'Pattern library', 'Documentation'],
    timeline: {
      planned: '6 weeks',
      actual: 'Ongoing (5 weeks completed)'
    },
    roi: 'Educational value and portfolio piece',
    impact: 'Learning resource for algorithm optimization',
    scalability: 'Designed for large grids and pattern databases',
    skillsDeveloped: [
      'Algorithm design',
      'Performance optimization',
      'Python programming',
      'Data visualization'
    ],
    concepts: [
      'Cellular automata',
      'Algorithm complexity',
      'Data structures',
      'Optimization patterns'
    ],
    resources: [
      'Conway\'s Game of Life academic papers',
      'Python optimization guides',
      'Algorithm design books'
    ],
    mentorship: 'Self-directed learning with community feedback',
    screenshots: [
      getAssetPath('/project-screenshots/conways-main.webp'),
      getAssetPath('/project-screenshots/conways-patterns.webp'),
      getAssetPath('/project-screenshots/conways-performance.webp')
    ],
    documentation: {
      readme: true,
      wiki: true,
      api: false,
      userGuide: true
    }
  },
  {
    id: 'russell-driving',
    title: 'Russell Driving School Website',
    description: 'Professional website development for a driving school, featuring modern design principles and interactive elements.',
    image: getAssetPath('/project-thumbnails/russell-driving-school.png'),
    isTopProject: true,
    version: '3.15.2',
    difficulty: 3,
    timeInvestment: '100+ hours',
    startDate: '2023-11-10',
    lastUpdate: '2024-01-22',
    progress: 75,
    status: 'Completed',
    type: 'Frontend',
    technologies: ['JavaScript', 'React', 'CSS', 'Responsive Design', 'Modern UI'],
    features: ['Responsive design', 'Course booking system', 'Contact forms', 'Service information', 'SEO Optimization'],
    metrics: {
      components: '62+',
      pages: '6+',
      responsiveness: '100%'
    },
    links: {
      live: 'https://russelldrivingschool.com/',
    },
    // New attributes:
    category: 'Professional',
    license: 'Proprietary',
    collaborators: 'Solo developer',
    clientType: 'Business',
    platform: 'Web',
    problemStatement: 'Create a professional online presence for a driving school to attract customers and manage bookings',
    architecture: 'Component-based React SPA',
    dependencies: [
      'React 18.2.0',
      'React Router 6.x',
      'Styled Components 5.x',
      'React Hook Form',
      'Axios',
      'Google Maps API'
    ],
    testing: {
      framework: 'React Testing Library',
      coverage: '70%',
      types: ['Unit tests', 'Integration tests', 'E2E tests']
    },
    deployment: {
      hosting: 'Vercel',
      pipeline: 'CI/CD with GitHub Actions',
      domain: 'Custom domain with SSL'
    },
    security: [
      'HTTPS encryption',
      'Form validation',
      'Input sanitization',
      'Rate limiting'
    ],
    database: 'Not applicable (static site)',
    apis: [
      'Google Maps API',
      'Contact form email service',
      'Analytics API'
    ],
    methodologies: ['Agile', 'Mobile-first design', 'SEO optimization'],
    tools: ['VSCode', 'Figma', 'Git', 'Chrome DevTools', 'Lighthouse'],
    challenges: [
      'Optimizing page load speeds',
      'Cross-browser compatibility',
      'Mobile responsiveness',
      'SEO optimization'
    ],
    solutions: [
      'Implemented code splitting and lazy loading',
      'Used polyfills for older browsers',
      'Applied responsive design patterns',
      'Optimized meta tags and schema markup'
    ],
    learnings: [
      'Professional client communication',
      'Production deployment workflow',
      'Performance optimization',
      'Business website requirements'
    ],
    futurePlans: [
      'Online booking integration',
      'Customer portal',
      'Payment processing',
      'Multi-language support'
    ],
    budget: 'Fixed freelance rate',
    stakeholders: ['Business owner', 'Customers', 'Search engines'],
    deliverables: [
      'Responsive website',
      'Contact forms',
      'Service pages',
      'Analytics setup',
      'Documentation'
    ],
    timeline: {
      planned: '6 weeks',
      actual: '10 weeks'
    },
    roi: 'Increased online visibility and customer inquiries',
    impact: 'Modern online presence for local business',
    scalability: 'Designed for easy content updates and feature additions',
    skillsDeveloped: [
      'React development',
      'Client communication',
      'SEO optimization',
      'Deployment workflows'
    ],
    concepts: [
      'Component architecture',
      'State management',
      'Performance optimization',
      'User experience design'
    ],
    resources: [
      'React documentation',
      'SEO best practices guides',
      'Web accessibility guidelines'
    ],
    mentorship: 'Client feedback and self-directed learning',
    screenshots: [
      getAssetPath('/project-screenshots/russell-home.webp'),
      getAssetPath('/project-screenshots/russell-services.webp'),
      getAssetPath('/project-screenshots/russell-contact.webp'),
      getAssetPath('/project-screenshots/russell-mobile.webp')
    ],
    documentation: {
      readme: true,
      wiki: false,
      api: false,
      userGuide: true
    }
  },
  {
    id: 'harvard-cs50',
    title: 'Harvard CS50 Web Development',
    description: 'Web development projects and assignments from Harvard\'s CS50 course, showcasing various web technologies.',
    image: getAssetPath('/project-thumbnails/harvard-cs50.webp'),
    isTopProject: false,
    version: '1.2.0',
    difficulty: 3,
    timeInvestment: '80+ hours',
    startDate: '2023-09-05',
    lastUpdate: '2024-02-10',
    progress: 60,
    status: 'In Progress',
    type: 'Educational',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
    features: ['Web applications', 'Database integration', 'Frontend design', 'Backend development'],
    metrics: {
      projects: '2+',
      technologies: '6+',
      concepts: '10+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/Harvard-CS50-Web-Development',
    },
    // New attributes:
    category: 'Educational',
    license: 'Academic Use',
    collaborators: 'Solo student',
    clientType: 'Academic',
    platform: 'Web',
    problemStatement: 'Complete Harvard CS50 web development coursework to learn full-stack development',
    architecture: 'MVC pattern with various web frameworks',
    dependencies: [
      'Python 3.x',
      'Django 4.x',
      'Flask',
      'PostgreSQL',
      'JavaScript ES6',
      'Bootstrap 5'
    ],
    testing: {
      framework: 'Django Test Suite',
      coverage: '50%',
      types: ['Unit tests', 'Integration tests']
    },
    deployment: {
      hosting: 'Heroku/GitHub Pages',
      type: 'Multiple small applications'
    },
    security: [
      'Django security middleware',
      'SQL injection prevention',
      'CSRF protection',
      'XSS prevention'
    ],
    database: 'PostgreSQL and SQLite',
    apis: null,
    methodologies: ['Academic project structure', 'Test-driven development'],
    tools: ['VSCode', 'Git', 'Docker', 'pgAdmin', 'Postman'],
    challenges: [
      'Learning multiple frameworks simultaneously',
      'Full-stack integration',
      'Database design',
      'Time management with other courses'
    ],
    solutions: [
      'Created study schedule with milestones',
      'Built practice projects between assignments',
      'Used documentation and online resources effectively',
      'Participated in study groups'
    ],
    learnings: [
      'Full-stack web development',
      'Database design and SQL',
      'Modern web frameworks',
      'Version control best practices'
    ],
    futurePlans: [
      'Complete remaining assignments',
      'Build final capstone project',
      'Explore advanced web topics',
      'Contribute to open source projects'
    ],
    budget: 'Course materials and time investment',
    stakeholders: ['Harvard CS50 instructors', 'Fellow students'],
    deliverables: [
      'Assignment submissions',
      'Project portfolios',
      'Technical documentation',
      'Final presentation'
    ],
    timeline: {
      planned: '12 weeks',
      actual: 'Ongoing (6 weeks completed)'
    },
    roi: 'Professional skill development and course certification',
    impact: 'Foundation for web development career',
    scalability: 'Skills transferable to enterprise projects',
    skillsDeveloped: [
      'Full-stack development',
      'SQL and database design',
      'Django and Flask frameworks',
      'Project planning'
    ],
    concepts: [
      'MVC architecture',
      'RESTful APIs',
      'Database normalization',
      'Web security principles'
    ],
    resources: [
      'Harvard CS50 lectures',
      'Official documentation',
      'Stack Overflow',
      'Course textbooks'
    ],
    mentorship: 'Harvard instructors and teaching assistants',
    screenshots: [
      getAssetPath('/project-screenshots/cs50-wiki.webp'),
      getAssetPath('/project-screenshots/cs50-commerce.webp'),
      getAssetPath('/project-screenshots/cs50-network.webp')
    ],
    documentation: {
      readme: true,
      wiki: false,
      api: false,
      userGuide: false
    }
  },
  {
    id: 'jonopoly',
    title: 'JONOPOLY - Java Monopoly',
    description: 'Java implementation of the classic Monopoly board game with custom features and modifications.',
    image: getAssetPath('/project-thumbnails/jonopoly.png'),
    isTopProject: false,
    version: '0.25.6',
    difficulty: 4,
    timeInvestment: '35+ hours',
    startDate: '2023-06-12',
    lastUpdate: '2023-07-15',
    progress: 40,
    status: 'In Progress',
    type: 'Game Development',
    technologies: ['Java', 'Object-Oriented Design', 'Game Logic', 'UI Development'],
    features: ['Custom game rules', 'Interactive gameplay', 'Property management', 'Player statistics'],
    metrics: {
      features: '15+',
      players: '2-4',
    },
    links: {
      github: 'https://github.com/EncryptedVoid/JONOPOLY-Java-Monopoly',
    },
    // New attributes:
    category: 'Personal',
    license: 'Creative Commons',
    collaborators: 'Solo',
    clientType: 'Personal',
    platform: 'Desktop',
    problemStatement: 'Create a digital version of Monopoly with custom rules and features',
    architecture: 'Object-oriented design with MVC pattern',
    dependencies: [
      'Java JDK 11+',
      'Swing/JavaFX',
      'JUnit 5',
      'Apache Commons'
    ],
    testing: {
      framework: 'JUnit 5',
      coverage: '45%',
      types: ['Unit tests', 'Integration tests']
    },
    deployment: {
      hosting: 'Standalone JAR distribution',
      type: 'Desktop application'
    },
    security: [
      'Input validation',
      'Save game encryption',
      'Anti-cheat measures'
    ],
    database: 'File-based save system',
    apis: null,
    methodologies: ['Object-oriented design', 'Test-driven development'],
    tools: ['IntelliJ IDEA', 'Git', 'Maven', 'JavaFX Scene Builder'],
    challenges: [
      'Implementing complex game rules',
      'Managing game state',
      'Creating intuitive UI',
      'Handling multiplayer logic'
    ],
    solutions: [
      'Created rule engine with strategy pattern',
      'Implemented state machine for game flow',
      'Designed modular UI components',
      'Used observer pattern for game events'
    ],
    learnings: [
      'Advanced Java programming',
      'Game development patterns',
      'UI/UX design',
      'Software architecture'
    ],
    futurePlans: [
      'Complete all Monopoly rules',
      'Add network multiplayer',
      'Implement AI players',
      'Create house rule customization',
      'Add sound effects and animations'
    ],
    budget: 'Personal time investment',
    stakeholders: ['Monopoly players', 'Java programming community'],
    deliverables: [
      'Playable game application',
      'Rule documentation',
      'Source code',
      'User manual'
    ],
    timeline: {
      planned: '8 weeks',
      actual: 'Ongoing (5 weeks completed)'
    },
    roi: 'Skill development in Java and game programming',
    impact: 'Open source implementation for digital Monopoly',
    scalability: 'Designed for easy rule modifications and extensions',
    skillsDeveloped: [
      'Java programming',
      'Object-oriented design',
      'Game development',
      'UI design'
    ],
    concepts: [
      'Design patterns',
      'Event-driven programming',
      'State management',
      'Game logic implementation'
    ],
    resources: [
      'Java documentation',
      'Game programming tutorials',
      'Monopoly official rules',
      'Design patterns books'
    ],
    mentorship: 'Online programming communities',
    screenshots: [
      getAssetPath('/project-screenshots/jonopoly-board.webp'),
      getAssetPath('/project-screenshots/jonopoly-trading.webp'),
      getAssetPath('/project-screenshots/jonopoly-properties.webp')
    ],
    documentation: {
      readme: true,
      wiki: false,
      api: true,
      userGuide: true
    }
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard WebApp',
    description: 'Interactive weather dashboard providing real-time weather data and forecasts.',
    image: getAssetPath('/project-thumbnails/weather-dashboard.webp'),
    isTopProject: false,
    version: '0.10.6',
    difficulty: 2,
    timeInvestment: '20+ hours',
    startDate: '2023-04-22',
    lastUpdate: '2023-05-07',
    progress: 30,
    status: 'In Progress',
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
    },
    // New attributes:
    category: 'Personal',
    license: 'MIT',
    collaborators: 'Solo',
    clientType: 'Personal',
    platform: 'Web',
    problemStatement: 'Create a comprehensive weather dashboard with multiple data sources and user-friendly interface',
    architecture: 'Client-side SPA with API integration',
    dependencies: [
      'JavaScript ES6',
      'Fetch API',
      'Chart.js 3.x',
      'Moment.js',
      'Bootstrap 5'
    ],
    testing: {
      framework: 'Manual testing',
      coverage: '20%',
      types: ['Manual testing', 'API integration tests']
    },
    deployment: {
      hosting: 'GitHub Pages',
      pipeline: 'GitHub Actions for deployment'
    },
    security: [
      'API key management',
      'CORS handling',
      'Input validation for location data'
    ],
    database: null,
    apis: [
      'OpenWeatherMap API',
      'Geolocation API',
      'Mapbox API'
    ],
    methodologies: ['Rapid prototyping', 'API-first development'],
    tools: ['VSCode', 'Browser DevTools', 'Postman', 'Git'],
    challenges: [
      'Handling multiple weather APIs',
      'Managing API rate limits',
      'Creating responsive layouts',
      'Real-time data updates'
    ],
    solutions: [
      'Implemented API fallback system',
      'Added caching mechanism for API data',
      'Used CSS Grid for responsive layout',
      'Created polling system for updates'
    ],
    learnings: [
      'API integration techniques',
      'Asynchronous JavaScript',
      'Data visualization',
      'UI/UX for data-heavy applications'
    ],
    futurePlans: [
      'Add weather alerts',
      'Implement historical data',
      'Add weather comparison features',
      'Create offline mode',
      'Add dark theme'
    ],
    budget: 'Free tier APIs',
    stakeholders: ['Weather enthusiasts', 'Travelers', 'General users'],
    deliverables: [
      'Weather dashboard web app',
      'API documentation',
      'User guide',
      'Responsive design'
    ],
    timeline: {
      planned: '4 weeks',
      actual: 'Ongoing (2 weeks completed)'
    },
    roi: 'Learning experience and portfolio piece',
    impact: 'Practical tool for weather information',
    scalability: 'Ready for premium API tiers and additional features',
    skillsDeveloped: [
      'API integration',
      'JavaScript async programming',
      'Data visualization',
      'Responsive web design'
    ],
    concepts: [
      'REST API consumption',
      'Asynchronous programming',
      'Data transformation',
      'UI state management'
    ],
    resources: [
      'MDN JavaScript guides',
      'OpenWeatherMap documentation',
      'CSS Grid tutorials',
      'Chart.js documentation'
    ],
    mentorship: 'Self-directed learning with online tutorials',
    screenshots: [
      getAssetPath('/project-screenshots/weather-main.webp'),
      getAssetPath('/project-screenshots/weather-forecast.webp'),
      getAssetPath('/project-screenshots/weather-mobile.webp')
    ],
    documentation: {
      readme: true,
      wiki: false,
      api: true,
      userGuide: false
    }
  },
  {
    id: 'judoku',
    title: 'JUDOKU - Java Sudoku',
    description: 'Java-based Sudoku game implementation with solver and difficulty levels.',
    image: getAssetPath('/project-thumbnails/judoku.webp'),
    isTopProject: false,
    version: '0.19.8',
    difficulty: 3,
    timeInvestment: '45+ hours',
    startDate: '2023-02-15',
    lastUpdate: '2023-03-10',
    progress: 50,
    status: 'In Progress',
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
    },
    // New attributes:
    category: 'Personal',
    license: 'MIT',
    collaborators: 'Solo',
    clientType: 'Personal',
    platform: 'Desktop',
    problemStatement: 'Create a complete Sudoku game with puzzle generation, solving capabilities, and multiple difficulty levels',
    architecture: 'MVC pattern with algorithmic core',
    dependencies: [
      'Java JDK 17+',
      'Swing/JavaFX',
      'JUnit 5',
      'Jackson for JSON'
    ],
    testing: {
      framework: 'JUnit 5',
      coverage: '65%',
      types: ['Unit tests', 'Algorithm tests', 'Integration tests']
    },
    deployment: {
      hosting: 'Standalone executable JAR',
      type: 'Desktop application'
    },
    security: [
      'Input validation',
      'Puzzle integrity checks',
      'Save file validation'
    ],
    database: 'JSON file storage for puzzles and scores',
    apis: null,
    methodologies: ['Algorithm-first design', 'TDD for solver logic'],
    tools: ['IntelliJ IDEA', 'Git', 'Maven', 'Java Profiler'],
    challenges: [
      'Implementing efficient puzzle generation',
      'Creating backtracking solver algorithm',
      'Balancing puzzle difficulty levels',
      'Optimizing performance for large grids'
    ],
    solutions: [
      'Implemented constraint satisfaction algorithm',
      'Used recursive backtracking with heuristics',
      'Created difficulty scoring system',
      'Optimized data structures for speed'
    ],
    learnings: [
      'Algorithm design and optimization',
      'Constraint satisfaction problems',
      'Java GUI programming',
      'Game state management'
    ],
    futurePlans: [
      'Add online leaderboards',
      'Implement custom themes',
      'Create tournament mode',
      'Add hint system',
      'Multi-grid Sudoku variants'
    ],
    budget: 'Personal time investment',
    stakeholders: ['Sudoku enthusiasts', 'Algorithm students'],
    deliverables: [
      'Sudoku game application',
      'Puzzle database',
      'Algorithm documentation',
      'User manual'
    ],
    timeline: {
      planned: '6 weeks',
      actual: 'Ongoing (4 weeks completed)'
    },
    roi: 'Algorithm expertise and game development skills',
    impact: 'Educational tool for Sudoku and algorithms',
    scalability: 'Designed for additional puzzle types and features',
    skillsDeveloped: [
      'Algorithm implementation',
      'Java programming',
      'Problem-solving techniques',
      'UI design'
    ],
    concepts: [
      'Backtracking algorithms',
      'Constraint satisfaction',
      'Combinatorial optimization',
      'Game theory'
    ],
    resources: [
      'Algorithm textbooks',
      'Sudoku generation papers',
      'Java documentation',
      'Algorithm visualization tools'
    ],
    mentorship: 'Online algorithm communities',
    screenshots: [
      getAssetPath('/project-screenshots/judoku-main.webp'),
      getAssetPath('/project-screenshots/judoku-solver.webp'),
      getAssetPath('/project-screenshots/judoku-difficulty.webp')
    ],
    documentation: {
      readme: true,
      wiki: false,
      api: true,
      userGuide: true
    }
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Experiments',
    description: 'Collection of machine learning experiments and implementations exploring various ML concepts.',
    image: getAssetPath('/project-thumbnails/machine-learning.webp'),
    isTopProject: true,
    version: '0.9.15',
    difficulty: 5,
    timeInvestment: '15+ hours',
    startDate: '2023-01-10',
    lastUpdate: '2024-02-15',
    progress: 45,
    status: 'In Progress',
    type: 'AI/ML',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Data Analysis'],
    features: ['ML algorithms', 'Data preprocessing', 'Model training', 'Performance analysis'],
    metrics: {
      experiments: '5+',
      algorithms: '5+',
      datasets: '6+'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/Machine-Learning-Experimenting',
    },
    // New attributes:
    category: 'Educational',
    license: 'MIT',
    collaborators: 'Solo',
    clientType: 'Personal',
    platform: 'Cross-platform',
    problemStatement: 'Explore and implement various machine learning algorithms to understand ML concepts and applications',
    architecture: 'Modular Python scripts with Jupyter notebooks',
    dependencies: [
      'Python 3.9+',
      'TensorFlow 2.x',
      'Scikit-learn 1.x',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Jupyter',
      'Seaborn'
    ],
    testing: {
      framework: 'Pytest',
      coverage: '40%',
      types: ['Unit tests', 'Model validation', 'Integration tests']
    },
    deployment: {
      hosting: 'GitHub repository',
      type: 'Python scripts and Jupyter notebooks'
    },
    security: [
      'Data anonymization',
      'Model validation',
      'Input sanitization'
    ],
    database: 'CSV and HDF5 for datasets',
    apis: [
      'Kaggle API',
      'scikit-learn datasets',
      'TensorFlow datasets'
    ],
    methodologies: ['Experimental design', 'Data science workflow', 'Cross-validation'],
    tools: ['VSCode', 'Jupyter Lab', 'Anaconda', 'TensorBoard', 'Git', 'Docker'],
    challenges: [
      'Understanding different ML algorithms',
      'Handling imbalanced datasets',
      'Optimizing model performance',
      'Feature engineering'
    ],
    solutions: [
      'Created systematic experiment framework',
      'Implemented SMOTE for imbalanced data',
      'Used hyperparameter tuning techniques',
      'Developed feature engineering pipeline'
    ],
    learnings: [
      'Machine learning fundamentals',
      'Deep learning concepts',
      'Data preprocessing techniques',
      'Model evaluation methods'
    ],
    futurePlans: [
      'Implement deep learning architectures',
      'Explore reinforcement learning',
      'Create ensemble models',
      'Build ML pipeline automation',
      'Experiment with NLP models'
    ],
    budget: 'Compute resources and datasets',
    stakeholders: ['ML community', 'Data science learners'],
    deliverables: [
      'Experiment notebooks',
      'Model implementations',
      'Performance reports',
      'Documentation'
    ],
    timeline: {
      planned: 'Ongoing research',
      actual: '12+ months of experimentation'
    },
    roi: 'Advanced ML skills and research capabilities',
    impact: 'Educational resource for ML implementation',
    scalability: 'Framework for ML experiment expansion',
    skillsDeveloped: [
      'Machine learning',
      'Data science',
      'Python programming',
      'Statistical analysis'
    ],
    concepts: [
      'Supervised learning',
      'Unsupervised learning',
      'Neural networks',
      'Model optimization',
      'Feature engineering'
    ],
    resources: [
      'Coursera ML courses',
      'Research papers',
      'Kaggle competitions',
      'ML textbooks',
      'Online tutorials'
    ],
    mentorship: 'Online ML community and forums',
    screenshots: [
      getAssetPath('/project-screenshots/ml-dashboard.webp'),
      getAssetPath('/project-screenshots/ml-results.webp'),
      getAssetPath('/project-screenshots/ml-visualization.webp')
    ],
    documentation: {
      readme: true,
      wiki: true,
      api: false,
      userGuide: true
    }
  },
  {
    id: 'todo-list',
    title: 'Todo List WebApp',
    description: 'Interactive todo list application with task management features.',
    image: getAssetPath('/project-thumbnails/todo-webapp.webp'),
    isTopProject: false,
    version: '0.8.14',
    difficulty: 2,
    timeInvestment: '16+ hours',
    startDate: '2022-11-05',
    lastUpdate: '2022-11-12',
    progress: 40,
    status: 'In Progress',
    type: 'Web Development',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Local Storage'],
    features: ['Task management', 'Priority levels', 'Data persistence', 'Filter options'],
    metrics: {
      features: '4+',
      interactions: '10+',
      storage: 'Local'
    },
    links: {
      github: 'https://github.com/EncryptedVoid/ToDo-List-WebApp',
    },
    // New attributes:
    category: 'Personal',
    license: 'MIT',
    collaborators: 'Solo',
    clientType: 'Personal',
    platform: 'Web',
    problemStatement: 'Create a simple yet functional todo list application with local storage persistence',
    architecture: 'Vanilla JavaScript with MVC-like structure',
    dependencies: [
      'Vanilla JavaScript',
      'CSS3',
      'HTML5',
      'Local Storage API'
    ],
    testing: {
      framework: 'Manual testing',
      coverage: '30%',
      types: ['Manual testing', 'User testing']
    },
    deployment: {
      hosting: 'GitHub Pages',
      type: 'Static web application'
    },
    security: [
      'Input sanitization',
      'XSS prevention',
      'Local storage validation'
    ],
    database: 'Browser Local Storage',
    apis: null,
    methodologies: ['Vanilla JS approach', 'Progressive enhancement'],
    tools: ['VSCode', 'Browser DevTools', 'Git'],
    challenges: [
      'Data persistence without backend',
      'Creating intuitive UI',
      'Managing task state',
      'Implementing drag-and-drop'
    ],
    solutions: [
      'Implemented robust local storage system',
      'Created clear visual hierarchy',
      'Used class-based state management',
      'Added basic drag functionality'
    ],
    learnings: [
      'Vanilla JavaScript proficiency',
      'Local storage management',
      'Event-driven programming',
      'UI/UX design principles'
    ],
    futurePlans: [
      'Add categories and tags',
      'Implement drag-and-drop reordering',
      'Create dark mode',
      'Add due dates and reminders',
      'Export/import functionality'
    ],
    budget: 'Personal time investment',
    stakeholders: ['Personal productivity users', 'Students'],
    deliverables: [
      'Todo list web application',
      'User documentation',
      'Feature list'
    ],
    timeline: {
      planned: '2 weeks',
      actual: 'Ongoing (1 week completed)'
    },
    roi: 'Improved JavaScript skills and personal tool',
    impact: 'Simple productivity tool for personal use',
    scalability: 'Ready for upgrade to full-stack application',
    skillsDeveloped: [
      'Vanilla JavaScript',
      'DOM manipulation',
      'Local storage APIs',
      'UI design'
    ],
    concepts: [
      'Event handling',
      'Data persistence',
      'State management',
      'Progressive enhancement'
    ],
    resources: [
      'MDN Web Docs',
      'JavaScript tutorials',
      'UI design guides'
    ],
    mentorship: 'Self-directed learning',
    screenshots: [
      getAssetPath('/project-screenshots/todo-main.webp'),
      getAssetPath('/project-screenshots/todo-filters.webp'),
      getAssetPath('/project-screenshots/todo-mobile.webp')
    ],
    documentation: {
      readme: true,
      wiki: false,
      api: false,
      userGuide: false
    }
  },
  {
    id: 'manim-animations',
    title: 'MANIM Math Animations',
    description: 'Mathematical animations and visualizations created using the MANIM engine.',
    image: getAssetPath('/project-thumbnails/manim-animations.webp'),
    isTopProject: false,
    version: '1.12.0',
    difficulty: 3,
    timeInvestment: '30+ hours',
    startDate: '2022-09-20',
    lastUpdate: '2024-01-30',
    progress: 35,
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
    },
    // New attributes:
    category: 'Educational',
    license: 'Creative Commons',
    collaborators: 'Solo',
    clientType: 'Educational',
    platform: 'Cross-platform',
    problemStatement: 'Create educational mathematical visualizations to explain complex concepts through animations',
    architecture: 'Python-based animation scripts with MANIM framework',
    dependencies: [
      'Python 3.9+',
      'Manim Community Edition 0.x',
      'NumPy',
      'Matplotlib',
      'LaTeX distribution',
      'FFmpeg',
      'Cairo graphics'
    ],
    testing: {
      framework: 'Manual visual testing',
      coverage: '20%',
      types: ['Visual testing', 'Animation validation']
    },
    deployment: {
      hosting: 'Video files on YouTube/GitHub',
      type: 'Rendered video animations'
    },
    security: [
      'Code review for animations',
      'Safe LaTeX rendering'
    ],
    database: null,
    apis: null,
    methodologies: ['Educational content design', 'Iterative animation development'],
    tools: ['VSCode', 'Manim CLI', 'Git', 'Video editors', 'LaTeX editors'],
    challenges: [
      'Learning MANIM framework',
      'Creating smooth animations',
      'Balancing detail with clarity',
      'Rendering performance',
      'Mathematical accuracy'
    ],
    solutions: [
      'Built animation template library',
      'Optimized rendering settings',
      'Created modular scene components',
      'Implemented custom easing functions',
      'Peer review for mathematical content'
    ],
    learnings: [
      'Mathematical visualization techniques',
      'Animation principles',
      'MANIM framework mastery',
      'Technical communication'
    ],
    futurePlans: [
      'Create full course series',
      'Add interactive elements',
      'Develop custom MANIM plugins',
      'Create 3D mathematical visualizations',
      'Build animation template library'
    ],
    budget: 'Personal time and computing resources',
    stakeholders: ['Mathematics educators', 'Students', 'YouTube viewers'],
    deliverables: [
      'Animation videos',
      'Python scripts',
      'Mathematical explanations',
      'Tutorial documentation'
    ],
    timeline: {
      planned: 'Ongoing educational project',
      actual: '16+ months of development'
    },
    roi: 'Educational impact and content creation skills',
    impact: 'Mathematical education and visualization resources',
    scalability: 'Template-based approach for rapid content creation',
    skillsDeveloped: [
      'Mathematical visualization',
      'Python programming',
      'Animation techniques',
      'Educational content creation'
    ],
    concepts: [
      'Calculus visualization',
      'Linear algebra concepts',
      'Geometry animations',
      'Mathematical modeling',
      'Vector graphics'
    ],
    resources: [
      'MANIM documentation',
      'Mathematical visualization books',
      '3Blue1Brown videos',
      'Linear algebra textbooks',
      'MANIM community tutorials'
    ],
    mentorship: 'MANIM community and YouTube creators',
    screenshots: [
      getAssetPath('/project-screenshots/manim-calculus.webp'),
      getAssetPath('/project-screenshots/manim-vectors.webp'),
      getAssetPath('/project-screenshots/manim-geometry.webp'),
      getAssetPath('/project-screenshots/manim-graphs.webp')
    ],
    documentation: {
      readme: true,
      wiki: false,
      api: false,
      userGuide: true
    }
  }
];

export default ProjectsData;