// src/components/sections/Skills/skillsData.js

export const skillsData = [
    {
    id: 'core-programming',
    title: 'Programming Languages & Development',
    icon: '💻',
    description: 'Expertise in low-level and high-level programming languages',
    experience: '2018-Present',
    skills: [
        {
        name: 'C/C++',
        yearStarted: '2018',
        metrics: {
            linesOfCode: 145000,
            projectsCompleted: 28,
            contributions: 920
        },
        description: 'System programming, embedded systems, and performance-critical applications',
        recentProjects: [
            { name: 'RTOS Scheduler', metric: '12K lines' },
            { name: 'Memory Manager', metric: '8K lines' }
        ],
        tags: ['Systems', 'Performance', 'Embedded']
        },
        {
        name: 'Python',
        yearStarted: '2019',
        metrics: {
            linesOfCode: 98000,
            projectsCompleted: 42,
            contributions: 1240
        },
        description: 'Automation, data analysis, and backend development',
        recentProjects: [
            { name: 'Test Automation Framework', metric: '15K lines' },
            { name: 'Data Processing Pipeline', metric: '10K lines' }
        ],
        tags: ['Scripting', 'Automation', 'Backend']
        },
        {
        name: 'Assembly/Low-Level',
        yearStarted: '2018',
        metrics: {
            linesOfCode: 25000,
            projectsCompleted: 12,
            contributions: 340
        },
        description: 'Embedded systems programming and hardware optimization',
        recentProjects: [
            { name: 'Bootloader Implementation', metric: '5K lines' },
            { name: 'ISR Handlers', metric: '3K lines' }
        ],
        tags: ['Low-Level', 'Embedded', 'Hardware']
        }
    ]
    },
    {
    id: 'systems',
    title: 'Operating Systems & Infrastructure',
    icon: '🖥️',
    description: 'Deep understanding of operating systems and infrastructure',
    experience: '2018-Present',
    skills: [
        {
        name: 'Linux/RTOS',
        yearStarted: '2018',
        metrics: {
            linesOfCode: 82000,
            projectsCompleted: 34,
            contributions: 760
        },
        description: 'System administration, kernel modules, and real-time systems',
        recentProjects: [
            { name: 'Custom RTOS Implementation', metric: '20K lines' },
            { name: 'Linux Kernel Module', metric: '5K lines' }
        ],
        tags: ['Operating Systems', 'Linux', 'RTOS']
        },
        {
        name: 'Docker/Virtualization',
        yearStarted: '2020',
        metrics: {
            linesOfCode: 45000,
            projectsCompleted: 23,
            contributions: 480
        },
        description: 'Container orchestration and virtual environment management',
        recentProjects: [
            { name: 'Docker Swarm Cluster', metric: '8K lines' },
            { name: 'VM Automation', metric: '6K lines' }
        ],
        tags: ['Containers', 'DevOps', 'Infrastructure']
        }
    ]
    },
    {
    id: 'software-arch',
    title: 'Software Architecture & Development',
    icon: '🏗️',
    description: 'Architecture design and development practices',
    experience: '2019-Present',
    skills: [
        {
        name: 'System Architecture',
        yearStarted: '2019',
        metrics: {
            linesOfCode: 120000,
            projectsCompleted: 18,
            contributions: 580
        },
        description: 'Distributed systems, scalable architecture, and system design',
        recentProjects: [
            { name: 'Microservices Platform', metric: '25K lines' },
            { name: 'IPC Framework', metric: '15K lines' }
        ],
        tags: ['Architecture', 'Design', 'Systems']
        },
        {
        name: 'Concurrent Programming',
        yearStarted: '2019',
        metrics: {
            linesOfCode: 75000,
            projectsCompleted: 15,
            contributions: 420
        },
        description: 'Multi-threading, parallel computing, and synchronization',
        recentProjects: [
            { name: 'Thread Pool Implementation', metric: '12K lines' },
            { name: 'Parallel Processor', metric: '8K lines' }
        ],
        tags: ['Concurrency', 'Performance', 'Systems']
        }
    ]
    },
    {
    id: 'testing-qa',
    title: 'Testing & Quality Assurance',
    icon: '🔍',
    description: 'Comprehensive testing methodologies and tools',
    experience: '2020-Present',
    skills: [
        {
        name: 'Automated Testing',
        yearStarted: '2020',
        metrics: {
            linesOfCode: 65000,
            projectsCompleted: 32,
            contributions: 840
        },
        description: 'Test automation frameworks and continuous testing',
        recentProjects: [
            { name: 'E2E Test Framework', metric: '18K lines' },
            { name: 'Performance Test Suite', metric: '12K lines' }
        ],
        tags: ['Testing', 'Automation', 'Quality']
        },
        {
        name: 'Performance Testing',
        yearStarted: '2020',
        metrics: {
            linesOfCode: 48000,
            projectsCompleted: 24,
            contributions: 560
        },
        description: 'Load testing, stress testing, and performance optimization',
        recentProjects: [
            { name: 'Load Test Framework', metric: '15K lines' },
            { name: 'System Benchmarks', metric: '10K lines' }
        ],
        tags: ['Performance', 'Testing', 'Optimization']
        }
    ]
    },
    {
    id: 'devops',
    title: 'DevOps & Continuous Integration',
    icon: '🔄',
    description: 'Automation and deployment pipeline expertise',
    experience: '2020-Present',
    skills: [
        {
        name: 'CI/CD',
        yearStarted: '2020',
        metrics: {
            linesOfCode: 52000,
            projectsCompleted: 28,
            contributions: 680
        },
        description: 'Pipeline automation and continuous deployment',
        recentProjects: [
            { name: 'Jenkins Pipeline', metric: '12K lines' },
            { name: 'Deployment Automation', metric: '8K lines' }
        ],
        tags: ['DevOps', 'Automation', 'CI/CD']
        },
        {
        name: 'Git & Version Control',
        yearStarted: '2018',
        metrics: {
            linesOfCode: 0, // Not applicable for version control
            projectsCompleted: 85,
            contributions: 2400
        },
        description: 'Advanced version control and collaboration workflows',
        recentProjects: [
            { name: 'Git Workflow Automation', metric: '5K lines' },
            { name: 'Custom Git Hooks', metric: '3K lines' }
        ],
        tags: ['Version Control', 'Collaboration', 'DevOps']
        }
    ]
    },
    {
    id: 'networking',
    title: 'Networking & Web Technologies',
    icon: '🌐',
    description: 'Network protocols and web development',
    experience: '2019-Present',
    skills: [
        {
        name: 'Network Programming',
        yearStarted: '2019',
        metrics: {
            linesOfCode: 58000,
            projectsCompleted: 22,
            contributions: 480
        },
        description: 'Protocol implementation and network analysis',
        recentProjects: [
            { name: 'Network Monitor', metric: '15K lines' },
            { name: 'Protocol Parser', metric: '10K lines' }
        ],
        tags: ['Networking', 'Protocols', 'Analysis']
        },
        {
        name: 'Web Development',
        yearStarted: '2020',
        metrics: {
            linesOfCode: 72000,
            projectsCompleted: 26,
            contributions: 620
        },
        description: 'Full-stack web development with modern frameworks',
        recentProjects: [
            { name: 'React Dashboard', metric: '20K lines' },
            { name: 'REST API Service', metric: '15K lines' }
        ],
        tags: ['Web', 'Frontend', 'Backend']
        }
    ]
    }
];

export default skillsData;