// src/components/sections/Skills/skillsData.js

export const skillsData = [
    {
        id: 'testing-automation',
        title: 'Testing & Automation',
        icon: '🧪',
        description: 'Software testing automation and quality assurance expertise',
        experience: '2024-Present',
        skills: [
            {
                name: 'Test Automation',
                yearStarted: '2024',
                metrics: {
                    linesOfCode: 5000,
                    projectsCompleted: 2,
                    contributions: 100
                },
                description: 'Development of automation testing frameworks and quality assurance',
                recentProjects: [
                    { name: 'QNX Automation Framework', metric: '3K lines' },
                    { name: 'Performance Testing', metric: '2K lines' }
                ],
                tags: ['Testing', 'Automation', 'QA'],

                // Skill Details
                category: 'DevOps',
                status: 'Proficient',
                prerequisites: ['Programming fundamentals', 'Software testing concepts', 'CI/CD basics'],
                relatedSkills: ['DevOps', 'Python', 'Jenkins', 'GitLab', 'Performance Testing'],
                certifications: ['ISTQB Foundation Level (Planned)', 'Jenkins Certified Professional (Planned)'],

                // Experience & Progress
                hoursInvested: 300,
                recentAchievements: [
                    'Built comprehensive test framework for QNX Everywhere',
                    'Increased testing efficiency by 40%',
                    'Led test specification design for internal tools'
                ],
                goals: [
                    'Master advanced test automation patterns',
                    'Achieve 90% test coverage across projects',
                    'Implement AI-driven testing strategies'
                ],
                resources: [
                    'Internal QNX documentation',
                    'Test automation patterns guides',
                    'Python testing libraries documentation'
                ],
                mentors: ['Michael Chen (QA Manager)', 'Sarah Li (Senior Developer)'],
                challenges: [
                    'Testing embedded systems with limited access',
                    'Creating maintainable test suites',
                    'Balancing test coverage with execution speed'
                ],

                // Professional Context
                toolStack: ['PyTest', 'Selenium', 'Jenkins', 'GitLab CI', 'Docker', 'SSH', 'Paramiko'],
                frameworks: ['PyTest', 'Robot Framework', 'JUnit', 'TestNG'],

                // Learning & Development
                practiceProjects: [
                    'QNX Everywhere Testing Framework',
                    'SSH Performance Testing Tool',
                    'Open Source Ports Validation Suite'
                ],
                courses: [
                    'Test Automation Foundations',
                    'Advanced Python for Testing',
                    'CI/CD Pipeline Design'
                ],
                books: [
                    'The Pragmatic Programmer',
                    'Effective Modern C++ Testing',
                    'Continuous Delivery: Reliable Software Releases'
                ],
                tutorials: [
                    'PyTest Official Tutorial',
                    'Jenkins Pipeline as Code',
                    'Docker for Test Environments'
                ],
                communities: ['QNX Developer Forums', 'Test Automation Community', 'Python Testing Group'],
                conferences: ['TestCon 2024', 'QA Summit Ottawa'],
                workshops: [
                    'Advanced Test Automation Techniques',
                    'Performance Testing Workshop',
                    'DevOps Testing Integration'
                ]
            },
            {
                name: 'CI/CD Pipelines',
                yearStarted: '2024',
                metrics: {
                    linesOfCode: 2000,
                    projectsCompleted: 1,
                    contributions: 50
                },
                description: 'Implementation of continuous integration and deployment workflows',
                recentProjects: [
                    { name: 'CICD Workflow', metric: '2K lines' }
                ],
                tags: ['GitLab', 'CI/CD', 'DevOps'],

                // Skill Details
                category: 'DevOps',
                status: 'Learning',
                prerequisites: ['Git version control', 'Basic scripting', 'Software development lifecycle'],
                relatedSkills: ['Docker', 'GitLab', 'Jenkins', 'Bash scripting', 'Test Automation'],
                certifications: ['GitLab CI/CD Fundamentals (In Progress)'],

                // Experience & Progress
                hoursInvested: 150,
                recentAchievements: [
                    'Implemented automated deployment pipeline',
                    'Reduced deployment time by 60%',
                    'Set up multi-stage CI/CD workflow'
                ],
                goals: [
                    'Design production-ready CI/CD pipelines',
                    'Implement blue-green deployments',
                    'Master infrastructure as code'
                ],
                resources: [
                    'GitLab CI/CD documentation',
                    'Jenkins official guides',
                    'Docker deployment tutorials'
                ],
                mentors: ['DevOps team at QNX', 'Online DevOps community'],
                challenges: [
                    'Managing complex pipeline dependencies',
                    'Ensuring security in automated deployments',
                    'Optimizing pipeline performance'
                ],

                // Professional Context
                toolStack: ['GitLab CI', 'Jenkins', 'Docker', 'Ansible', 'Terraform', 'AWS CLI'],
                frameworks: ['GitLab CI/CD', 'Jenkins Pipeline', 'GitHub Actions'],

                // Learning & Development
                practiceProjects: [
                    'Personal Portfolio CI/CD',
                    'QNX Project Deployment Pipeline',
                    'Multi-Environment Test Automation'
                ],
                courses: [
                    'GitLab CI/CD: Pipelines for Beginners',
                    'Jenkins: Jobs, Pipelines, CI/CD',
                    'Docker for DevOps'
                ],
                books: [
                    'The Phoenix Project',
                    'Continuous Delivery',
                    'DevOps Handbook'
                ],
                tutorials: [
                    'GitLab CI/CD Tutorial',
                    'Jenkins Pipeline Tutorial',
                    'Docker Compose for CI/CD'
                ],
                communities: ['DevOps Canada', 'GitLab Community', 'Jenkins Users Group'],
                conferences: ['DevOps Days Ottawa'],
                workshops: [
                    'CI/CD Best Practices',
                    'Container Orchestration',
                    'Infrastructure as Code'
                ]
            }
        ]
    },
    {
        id: 'frontend-dev',
        title: 'Frontend Development',
        icon: '🎨',
        description: 'Web development and user interface design',
        experience: '2023-Present',
        skills: [
            {
                name: 'Web Development',
                yearStarted: '2023',
                metrics: {
                    linesOfCode: 10000,
                    projectsCompleted: 8,
                    contributions: 200
                },
                description: 'Frontend development focusing on responsive and interactive web applications',
                recentProjects: [
                    { name: 'Russell Driving School', metric: '4K lines' },
                    { name: 'Weather Dashboard', metric: '2K lines' }
                ],
                tags: ['JavaScript', 'CSS', 'HTML'],

                // Skill Details
                category: 'Frontend',
                status: 'Proficient',
                prerequisites: ['Basic programming concepts', 'HTML/CSS fundamentals', 'JavaScript basics'],
                relatedSkills: ['React', 'Responsive Design', 'UI/UX', 'API Integration', 'Version Control'],
                certifications: ['Frontend Web Developer (Planned)', 'JavaScript Algorithms and Data Structures (freeCodeCamp)'],

                // Experience & Progress
                hoursInvested: 500,
                recentAchievements: [
                    'Built responsive website for local business',
                    'Achieved 92+ Lighthouse score',
                    'Implemented custom UI components library'
                ],
                goals: [
                    'Master modern frontend frameworks',
                    'Develop pixel-perfect UI implementations',
                    'Optimize web performance for all devices'
                ],
                resources: [
                    'MDN Web Docs',
                    'Frontend Masters courses',
                    'React documentation'
                ],
                mentors: ['Online development community', 'Client project feedback'],
                challenges: [
                    'Cross-browser compatibility',
                    'Performance optimization',
                    'Responsive design complexities'
                ],

                // Professional Context
                toolStack: ['VS Code', 'Chrome DevTools', 'Figma', 'Git', 'npm/yarn', 'Lighthouse'],
                frameworks: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material-UI'],

                // Learning & Development
                practiceProjects: [
                    'Personal Portfolio Website',
                    'Russell Driving School Website',
                    'Weather Dashboard',
                    'Todo List Application'
                ],
                courses: [
                    'The Complete Web Developer in 2024',
                    'Advanced CSS and Sass',
                    'JavaScript: Understanding the Weird Parts'
                ],
                books: [
                    'Eloquent JavaScript',
                    'You Don\'t Know JS',
                    'CSS Secrets',
                    'Responsive Web Design'
                ],
                tutorials: [
                    'MDN Web Docs Tutorials',
                    'React Official Tutorial',
                    'CSS Tricks Guides'
                ],
                communities: ['Dev.to', 'Stack Overflow', 'Reddit WebDev', 'Frontend Developers Discord'],
                conferences: ['Frontend Conf 2024', 'JavaScript Conference'],
                workshops: [
                    'Advanced Responsive Design',
                    'Performance Optimization',
                    'Accessibility Best Practices'
                ]
            },
            {
                name: 'React Development',
                yearStarted: '2023',
                metrics: {
                    linesOfCode: 5000,
                    projectsCompleted: 3,
                    contributions: 150
                },
                description: 'Building modern web applications using React',
                recentProjects: [
                    { name: 'Mock ThreeJS Portfolio', metric: '3K lines' },
                    { name: 'Todo List WebApp', metric: '2K lines' }
                ],
                tags: ['React', 'Frontend', 'UI/UX'],

                // Skill Details
                category: 'Frontend',
                status: 'Proficient',
                prerequisites: ['JavaScript ES6+', 'HTML/CSS', 'Component-based thinking', 'State management concepts'],
                relatedSkills: ['JavaScript', 'Redux', 'Next.js', 'TypeScript', 'React Native'],
                certifications: ['React Developer Certification (Planned)'],

                // Experience & Progress
                hoursInvested: 350,
                recentAchievements: [
                    'Built component library with custom hooks',
                    'Implemented complex state management patterns',
                    'Created reusable UI component system'
                ],
                goals: [
                    'Master advanced React patterns',
                    'Build scalable React applications',
                    'Contribute to open source React projects'
                ],
                resources: [
                    'React documentation',
                    'Kent C. Dodds courses',
                    'Epic React workshops'
                ],
                mentors: ['React community experts', 'Senior developers online'],
                challenges: [
                    'State management complexity',
                    'Performance optimization',
                    'Testing React components effectively'
                ],

                // Professional Context
                toolStack: ['Create React App', 'Next.js', 'React DevTools', 'ESLint', 'Prettier', 'Jest'],
                frameworks: ['React', 'Next.js', 'Gatsby', 'React Hook Form', 'React Query'],

                // Learning & Development
                practiceProjects: [
                    'Personal Portfolio (React)',
                    'Todo App with Advanced Features',
                    'Weather Dashboard',
                    'E-commerce Product Showcase'
                ],
                courses: [
                    'Epic React',
                    'Complete React Developer in 2024',
                    'Advanced React Patterns',
                    'React Testing with Jest and RTL'
                ],
                books: [
                    'Learning React',
                    'Effective React',
                    'React Design Patterns',
                    'Fullstack React'
                ],
                tutorials: [
                    'React Official Tutorial',
                    'React Hooks Tutorial',
                    'Advanced React Patterns',
                    'Testing React Apps'
                ],
                communities: ['React Developers Facebook Group', 'Reactiflux Discord', 'Hashnode React Community'],
                conferences: ['React Conf', 'React Ottawa Meetup'],
                workshops: [
                    'Advanced React Hooks',
                    'React Performance',
                    'React Testing Workshop'
                ]
            }
        ]
    },
    {
        id: 'computer-science',
        title: 'Computer Science Fundamentals',
        icon: '💻',
        description: 'Core computer science concepts and implementations',
        experience: '2023-Present',
        skills: [
            {
                name: 'Computer Architecture',
                yearStarted: '2023',
                metrics: {
                    linesOfCode: 3000,
                    projectsCompleted: 4,
                    contributions: 80
                },
                description: 'Understanding and implementation of computer architecture concepts',
                recentProjects: [
                    { name: 'CUDA Samples', metric: '2K lines' },
                    { name: 'Architecture Projects', metric: '1K lines' }
                ],
                tags: ['Architecture', 'Systems', 'Hardware'],

                // Skill Details
                category: 'Systems',
                status: 'Learning',
                prerequisites: ['Basic programming', 'Logic design', 'Mathematics', 'Operating systems basics'],
                relatedSkills: ['Operating Systems', 'Performance Optimization', 'CUDA Programming', 'Embedded Systems'],
                certifications: ['Computer Architecture Specialization (Coursera) - In Progress'],

                // Experience & Progress
                hoursInvested: 200,
                recentAchievements: [
                    'Implemented basic CPU simulator',
                    'Optimized memory access patterns',
                    'Completed CUDA programming projects'
                ],
                goals: [
                    'Master parallel computing concepts',
                    'Understand modern processor design',
                    'Implement efficient low-level optimizations'
                ],
                resources: [
                    'Computer Organization and Design (Patterson)',
                    'University of Ottawa course materials',
                    'CUDA documentation'
                ],
                mentors: ['University professors', 'Computer architecture course instructors'],
                challenges: [
                    'Complex hardware-software interactions',
                    'Debugging low-level code',
                    'Understanding modern CPU optimizations'
                ],

                // Professional Context
                toolStack: ['GCC', 'Valgrind', 'CUDA Toolkit', 'Intel VTune', 'Assembly debuggers'],
                frameworks: ['CUDA', 'OpenMP', 'MPI'],

                // Learning & Development
                practiceProjects: [
                    'CPU Simulator',
                    'Memory Hierarchy Simulator',
                    'CUDA Matrix Multiplication',
                    'Cache Performance Analysis'
                ],
                courses: [
                    'Computer Architecture (University)',
                    'Parallel Computing Fundamentals',
                    'CUDA Programming'
                ],
                books: [
                    'Computer Organization and Design',
                    'Architecture of Parallel Computer Systems',
                    'Programming Massively Parallel Processors'
                ],
                tutorials: [
                    'NVIDIA CUDA Tutorials',
                    'Assembly Programming Basics',
                    'CPU Design Fundamentals'
                ],
                communities: ['ACM Student Chapter', 'Computer Architecture Research Group'],
                conferences: ['ACM SIGARCH Conference (attended virtually)'],
                workshops: [
                    'Parallel Programming Workshop',
                    'GPU Computing Fundamentals',
                    'Performance Optimization Techniques'
                ]
            },
            {
                name: 'Algorithms',
                yearStarted: '2023',
                metrics: {
                    linesOfCode: 4000,
                    projectsCompleted: 5,
                    contributions: 100
                },
                description: 'Implementation of scheduling and optimization algorithms',
                recentProjects: [
                    { name: 'Conway\'s Game of Life', metric: '2K lines' },
                    { name: 'JUDOKU Sudoku', metric: '2K lines' }
                ],
                tags: ['Algorithms', 'Data Structures', 'Optimization'],

                // Skill Details
                category: 'Computer Science',
                status: 'Proficient',
                prerequisites: ['Programming fundamentals', 'Mathematics', 'Discrete mathematics', 'Data structures'],
                relatedSkills: ['Data Structures', 'Complexity Analysis', 'Dynamic Programming', 'Graph Theory'],
                certifications: ['Algorithms Specialization (Stanford) - Completed'],

                // Experience & Progress
                hoursInvested: 400,
                recentAchievements: [
                    'Optimized Game of Life algorithm performance',
                    'Implemented efficient Sudoku solver',
                    'Solved 100+ LeetCode problems'
                ],
                goals: [
                    'Master advanced algorithms and complexity analysis',
                    'Compete in programming contests',
                    'Implement algorithms for research projects'
                ],
                resources: [
                    'Introduction to Algorithms (CLRS)',
                    'Algorithm Design Manual',
                    'LeetCode problems'
                ],
                mentors: ['University algorithm instructors', 'Competitive programming community'],
                challenges: [
                    'Optimizing time and space complexity',
                    'Implementing advanced data structures',
                    'Proving algorithm correctness'
                ],

                // Professional Context
                toolStack: ['Python', 'Java', 'C++', 'Jupyter Notebooks', 'Algorithm visualization tools'],
                frameworks: ['Standard libraries', 'Custom implementations'],

                // Learning & Development
                practiceProjects: [
                    'Conway\'s Game of Life Optimization',
                    'Sudoku Solver with Heuristics',
                    'Graph Algorithm Visualizer',
                    'Sorting Algorithm Comparison'
                ],
                courses: [
                    'Data Structures and Algorithms (University)',
                    'Stanford Algorithms Specialization',
                    'Competitive Programming'
                ],
                books: [
                    'Introduction to Algorithms (CLRS)',
                    'The Algorithm Design Manual',
                    'Cracking the Coding Interview'
                ],
                tutorials: [
                    'Algorithms Explained',
                    'Dynamic Programming Tutorials',
                    'Graph Algorithms Guide'
                ],
                communities: ['Codeforces', 'LeetCode Community', 'Algorithm Study Group'],
                conferences: ['ACM ICPC Regional Competition'],
                workshops: [
                    'Competitive Programming Bootcamp',
                    'Advanced Algorithms Workshop',
                    'Dynamic Programming Masterclass'
                ]
            }
        ]
    },
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        icon: '🧠',
        description: 'Artificial Intelligence and Machine Learning projects',
        experience: '2023-Present',
        skills: [
            {
                name: 'ML Development',
                yearStarted: '2023',
                metrics: {
                    linesOfCode: 6000,
                    projectsCompleted: 3,
                    contributions: 120
                },
                description: 'Development of machine learning applications and analysis tools',
                recentProjects: [
                    { name: 'ASGARD Investment Analysis', metric: '3K lines' },
                    { name: 'FortuneAI', metric: '3K lines' }
                ],
                tags: ['Machine Learning', 'Python', 'Data Analysis'],

                // Skill Details
                category: 'AI/ML',
                status: 'Learning',
                prerequisites: ['Python programming', 'Linear algebra', 'Calculus', 'Statistics', 'Data structures'],
                relatedSkills: ['Data Science', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps'],
                certifications: ['Machine Learning Specialization (Coursera) - In Progress'],

                // Experience & Progress
                hoursInvested: 300,
                recentAchievements: [
                    'Implemented neural network from scratch',
                    'Built investment analysis ML model',
                    'Created sentiment analysis tool'
                ],
                goals: [
                    'Master deep learning frameworks',
                    'Develop production-ready ML models',
                    'Contribute to ML research projects'
                ],
                resources: [
                    'Deep Learning book (Goodfellow)',
                    'Andrew Ng\'s ML course',
                    'Kaggle competitions'
                ],
                mentors: ['Research supervisors', 'ML engineer connections'],
                challenges: [
                    'Feature engineering',
                    'Model optimization and deployment',
                    'Understanding cutting-edge research'
                ],

                // Professional Context
                toolStack: ['Python', 'Jupyter', 'TensorFlow', 'PyTorch', 'scikit-learn', 'MLflow'],
                frameworks: ['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'Hugging Face Transformers'],

                // Learning & Development
                practiceProjects: [
                    'Investment Analysis Tool',
                    'Sentiment Analysis App',
                    'Image Classification Model',
                    'Time Series Forecasting'
                ],
                courses: [
                    'Machine Learning Specialization (Coursera)',
                    'Deep Learning Specialization',
                    'Practical Deep Learning for Coders',
                    'Natural Language Processing'
                ],
                books: [
                    'Deep Learning (Goodfellow)',
                    'Pattern Recognition and Machine Learning',
                    'Hands-On Machine Learning',
                    'The Hundred-Page Machine Learning Book'
                ],
                tutorials: [
                    'PyTorch Tutorials',
                    'TensorFlow Getting Started',
                    'Kaggle Learn ML',
                    'Fast.ai Practical Deep Learning'
                ],
                communities: ['Kaggle Community', 'PyTorch Forums', 'r/MachineLearning', 'AI University Group'],
                conferences: ['NeurIPS (virtual attendance)', 'Local ML Meetups'],
                workshops: [
                    'Deep Learning Fundamentals',
                    'ML Model Deployment',
                    'Neural Architecture Search'
                ]
            },
            {
                name: 'Data Science',
                yearStarted: '2023',
                metrics: {
                    linesOfCode: 3000,
                    projectsCompleted: 2,
                    contributions: 60
                },
                description: 'Data analysis and scientific computing',
                recentProjects: [
                    { name: 'SCIKIT Experimenting', metric: '2K lines' },
                    { name: 'ML Experimenting', metric: '1K lines' }
                ],
                tags: ['Data Science', 'Analytics', 'Statistics'],

                // Skill Details
                category: 'Data Science',
                status: 'Learning',
                prerequisites: ['Statistics', 'Python', 'Mathematics', 'Research methodology'],
                relatedSkills: ['Machine Learning', 'Data Visualization', 'Statistical Analysis', 'Big Data'],
                certifications: ['IBM Data Science Professional Certificate (Planned)'],

                // Experience & Progress
                hoursInvested: 250,
                recentAchievements: [
                    'Completed exploratory data analysis projects',
                    'Built predictive models for financial data',
                    'Created interactive data dashboards'
                ],
                goals: [
                    'Master statistical analysis techniques',
                    'Develop expertise in big data processing',
                    'Apply data science to research problems'
                ],
                resources: [
                    'Python for Data Analysis',
                    'Data Science from Scratch',
                    'Kaggle datasets and competitions'
                ],
                mentors: ['Data science professors', 'Industry data scientists'],
                challenges: [
                    'Handling large datasets efficiently',
                    'Statistical inference',
                    'Communicating insights effectively'
                ],

                // Professional Context
                toolStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
                frameworks: ['Pandas', 'NumPy', 'SciPy', 'Statsmodels', 'Dask'],

                // Learning & Development
                practiceProjects: [
                    'Financial Market Analysis',
                    'Healthcare Data Exploration',
                    'Social Media Sentiment Analysis',
                    'A/B Testing Framework'
                ],
                courses: [
                    'Applied Data Science with Python',
                    'Statistics for Data Science',
                    'Data Visualization with Python',
                    'Big Data Analytics'
                ],
                books: [
                    'Python for Data Analysis',
                    'The Art of Statistics',
                    'Storytelling with Data',
                    'Think Stats'
                ],
                tutorials: [
                    'Pandas Documentation',
                    'Kaggle Learn Data Science',
                    'Data Camp Tutorials',
                    'Towards Data Science Articles'
                ],
                communities: ['Data Science Toronto', 'Kaggle Community', 'PyData', 'Data Science Discord'],
                conferences: ['Data Science Conference Toronto', 'PyData Conference'],
                workshops: [
                    'Advanced Pandas Techniques',
                    'Statistical Modeling Workshop',
                    'Data Visualization Masterclass'
                ]
            }
        ]
    }
];

// Complete list of all GitHub projects
export const allProjects = [
    {
        name: 'Conways-Game-Of-Life-Plus',
        type: 'Private',
        language: 'Python',
        lastUpdated: 'Active'
    },
    {
        name: 'RussellDrivingSchool-Freelance',
        type: 'Private',
        language: 'JavaScript',
        lastUpdated: 'Active'
    },
    {
        name: 'Harvard-CS50-Web-Development',
        type: 'Public',
        language: 'CSS',
        lastUpdated: 'Active'
    },
    {
        name: 'PersonalPortfolio',
        type: 'Public',
        language: 'JavaScript',
        lastUpdated: 'Active'
    },
    {
        name: 'MiniProjects',
        type: 'Private',
        language: 'Java',
        lastUpdated: 'Active'
    },
    {
        name: 'BrowserDashboardProject',
        type: 'Private',
        language: 'HTML',
        lastUpdated: 'Active'
    },
    {
        name: 'ASGARD-Automated-Investing-Analysis',
        type: 'Private',
        language: 'Python',
        lastUpdated: 'Dec 2024'
    },
    {
        name: 'FortuneAI',
        type: 'Public',
        language: 'Java',
        lastUpdated: 'Aug 2024'
    },
    {
        name: 'cuda-samples',
        type: 'Public',
        language: 'C',
        lastUpdated: 'Jul 2024'
    },
    {
        name: 'MANIM-PersonalExperimenting',
        type: 'Private',
        language: 'Python',
        lastUpdated: 'Jul 2024'
    },
    {
        name: 'Mock-AI-Chatbot-Webpage',
        type: 'Private',
        language: 'CSS',
        lastUpdated: 'Jun 2024'
    },
    {
        name: 'Mock-ThreeJS-Personal-Portfolio',
        type: 'Private',
        language: 'JavaScript',
        lastUpdated: 'Jun 2024'
    },
    {
        name: 'JONOPOLY-Java-Monopoly',
        type: 'Private',
        language: 'Java',
        lastUpdated: 'Jun 2024'
    },
    {
        name: 'Mock-Restaurant-Webpage',
        type: 'Private',
        language: 'JavaScript',
        lastUpdated: 'May 2024'
    },
    {
        name: 'JUDOKU-Java-Sudoku',
        type: 'Public',
        language: 'Java',
        lastUpdated: 'May 2024'
    },
    {
        name: 'Python-SCIKIT-Experimenting',
        type: 'Private',
        language: 'Python',
        lastUpdated: 'May 2024'
    },
    {
        name: 'ITI1121-LABS-ASSIGNMENTS',
        type: 'Private',
        language: 'Java',
        lastUpdated: 'May 2024'
    },
    {
        name: 'Machine-Learning-Experimenting',
        type: 'Public',
        language: 'Python',
        lastUpdated: 'Feb 2024'
    },
    {
        name: 'ToDo-List-WebApp',
        type: 'Public',
        language: 'HTML',
        lastUpdated: 'Jan 2024'
    },
    {
        name: 'Weather-Dashboard-WebApp',
        type: 'Public',
        language: 'CSS',
        lastUpdated: 'Jan 2024'
    },
    {
        name: 'Mock-Login-Page',
        type: 'Public',
        language: 'CSS',
        lastUpdated: 'Jan 2024'
    },
    {
        name: 'Alarms-Times-Clocks-Dashboard-WebApp',
        type: 'Public',
        language: 'JavaScript',
        lastUpdated: 'Jan 2024'
    },
    {
        name: 'Mock-Sushi-Restaurant-Webpage',
        type: 'Public',
        language: 'CSS',
        lastUpdated: 'Jan 2024'
    },
    {
        name: 'Mock-Gardening-Business-Webpage',
        type: 'Public',
        language: 'HTML',
        lastUpdated: 'Dec 2023'
    },
    {
        name: 'WalkForWenjack.github.io',
        type: 'Public',
        language: 'HTML',
        lastUpdated: 'Nov 2021'
    }
];

export default skillsData;