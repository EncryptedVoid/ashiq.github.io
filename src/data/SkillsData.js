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
                tags: ['Testing', 'Automation', 'QA']
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
                tags: ['GitLab', 'CI/CD', 'DevOps']
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
                tags: ['JavaScript', 'CSS', 'HTML']
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
                tags: ['React', 'Frontend', 'UI/UX']
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
                tags: ['Architecture', 'Systems', 'Hardware']
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
                tags: ['Algorithms', 'Data Structures', 'Optimization']
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
                tags: ['Machine Learning', 'Python', 'Data Analysis']
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
                tags: ['Data Science', 'Analytics', 'Statistics']
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