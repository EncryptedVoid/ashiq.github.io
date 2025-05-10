// src/data/CertificationsData.js
import { getAssetPath } from '@utils/assetUtils';

export const Certifications = [
  {
    id: 1,
    type: 'docker',
    title: 'Docker for the Absolute Beginner - Hands On - DevOps',
    date: 'Oct. 12, 2024',
    length: '4.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/docker-logo.webp'),
    document: getAssetPath('/certifications/DOCKER-DEVOPS.pdf'),
    instructor: 'Mumshad Mannambeth, KodeKloud Training',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-12345678-1234-1234-1234-123456789012',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/docker-for-beginners',
    description: 'Learn Docker basics, containerization concepts, and hands-on DevOps practices. Master Docker commands, Dockerfile creation, and container orchestration fundamentals.',
    skills: ['Docker CLI', 'Containerization', 'Dockerfile creation', 'Image management', 'Container networking', 'Docker Compose'],
    category: 'DevOps',
    industry: ['Software Development', 'Cloud Computing', 'DevOps'],
    tags: ['docker', 'containerization', 'devops', 'beginner', 'hands-on'],
    timeInvestment: '5 hours',
    personalNotes: 'Great hands-on approach. Helped understand Docker fundamentals from scratch.',
    projects: [
      { name: 'Dockerized Web App', link: 'https://github.com/username/dockerized-web-app' },
      { name: 'Multi-Container Application', link: 'https://github.com/username/multi-container-app' }
    ]
  },
  {
    id: 2,
    type: 'jenkins',
    title: 'Jenkins: Jobs, Pipelines, CI/CD and DevOps for Beginners',
    date: 'Oct. 21, 2024',
    length: '10.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/jenkins-logo.webp'),
    document: getAssetPath('/certifications/JENKINS-FOR-BEGINNERS.pdf'),
    instructor: 'Valentin Despa, Valentin Despa - Support',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-23456789-2345-2345-2345-234567890123',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/jenkins-for-beginners',
    description: 'Master Jenkins from basics to advanced CI/CD pipelines. Learn to create jobs, configure pipelines, and implement continuous integration and deployment.',
    skills: ['Jenkins Pipeline', 'CI/CD', 'Job Configuration', 'Build Automation', 'Plugin Management', 'Jenkinsfile'],
    category: 'DevOps',
    industry: ['Software Development', 'DevOps', 'Automation'],
    tags: ['jenkins', 'ci/cd', 'automation', 'pipeline', 'devops'],
    timeInvestment: '12 hours',
    personalNotes: 'Comprehensive coverage of Jenkins. Great for understanding CI/CD concepts.',
    projects: [
      { name: 'Automated Build Pipeline', link: 'https://github.com/username/jenkins-pipeline' },
      { name: 'CI/CD Demo Project', link: 'https://github.com/username/cicd-demo' }
    ]
  },
  {
    id: 3,
    type: 'gitlab',
    title: 'GitLab CI/CD: Pipelines, CI/CD and DevOps for Beginners',
    date: 'Oct. 25, 2024',
    length: '5.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/gitlab-logo.webp'),
    document: getAssetPath('/certifications/GITLAB-CI-CD.pdf'),
    instructor: 'Valentin Despa, Valentin Despa - Support',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-34567890-3456-3456-3456-345678901234',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/gitlab-ci-cd-pipelines',
    description: 'Learn GitLab CI/CD from scratch. Create pipelines, implement automated testing, and deploy applications using GitLab\'s built-in CI/CD features.',
    skills: ['GitLab CI/CD', 'Pipeline Configuration', 'YAML', 'Auto DevOps', 'Container Registry', 'Deployment Strategies'],
    category: 'DevOps',
    industry: ['Software Development', 'DevOps', 'Version Control'],
    tags: ['gitlab', 'ci/cd', 'pipelines', 'automation', 'yaml'],
    timeInvestment: '6 hours',
    personalNotes: 'Great complement to Jenkins course. GitLab\'s integrated approach is very appealing.',
    projects: [
      { name: 'GitLab CI/CD Pipeline', link: 'https://gitlab.com/username/cicd-pipeline' },
      { name: 'Auto Deploy Project', link: 'https://gitlab.com/username/auto-deploy' }
    ]
  },
  {
    id: 4,
    type: 'networking',
    title: 'Introduction to Computer Networking - 4 Hour Crash Course',
    date: 'Oct. 5, 2024',
    length: '4.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('/certifications/COMPUTER-NETWORKING.pdf'),
    instructor: 'Rick Crisci',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-45678901-4567-4567-4567-456789012345',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/computer-networking-crash-course',
    description: 'Comprehensive introduction to computer networking fundamentals. Learn about protocols, OSI model, TCP/IP, networking devices, and basic network administration.',
    skills: ['TCP/IP', 'Network Protocols', 'OSI Model', 'Routing', 'Switching', 'Network Security Basics'],
    category: 'Infrastructure',
    industry: ['Networking', 'IT Infrastructure', 'Cybersecurity'],
    tags: ['networking', 'tcp/ip', 'protocols', 'infrastructure', 'basics'],
    timeInvestment: '5 hours',
    personalNotes: 'Solid foundation for understanding how networks work. Very helpful for DevOps work.',
    projects: [
      { name: 'Network Topology Lab', link: 'https://github.com/username/network-lab' },
      { name: 'Simple Network Monitor', link: 'https://github.com/username/network-monitor' }
    ]
  },
  {
    id: 5,
    type: 'performance',
    title: 'Performance Testing Foundations',
    date: 'Oct. 11, 2024',
    length: '2 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('/certifications/PERFORMANCE-TESTING.pdf'),
    instructor: 'Ozan Ilhan, Canberk Akduygu, Software Testing House By Ozan Ilhan',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-56789012-5678-5678-5678-567890123456',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/performance-testing-foundations',
    description: 'Learn the fundamentals of performance testing including load testing, stress testing, and performance monitoring. Understand key metrics and testing strategies.',
    skills: ['Load Testing', 'Performance Metrics', 'JMeter', 'Test Planning', 'Response Time Analysis', 'Throughput Testing'],
    category: 'Testing',
    industry: ['Software Testing', 'QA', 'Performance Engineering'],
    tags: ['performance', 'testing', 'load-testing', 'jmeter', 'qa'],
    timeInvestment: '2.5 hours',
    personalNotes: 'Good introduction to performance testing concepts. Need to dive deeper into tools.',
    projects: [
      { name: 'Load Test Suite', link: 'https://github.com/username/load-test-suite' },
      { name: 'Performance Dashboard', link: 'https://github.com/username/perf-dashboard' }
    ]
  },
  {
    id: 6,
    type: 'os',
    title: 'Fundamentals of Operating Systems',
    date: 'Nov. 10, 2024',
    length: '21.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('/certifications/OPERATING-SYSTEMS.pdf'),
    instructor: 'Hussein Nasser',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-67890123-6789-6789-6789-678901234567',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/fundamentals-of-operating-systems',
    description: 'Deep dive into operating system concepts including process management, memory management, file systems, and system calls. Covers Linux and Windows internals.',
    skills: ['Process Management', 'Memory Management', 'File Systems', 'System Calls', 'Threading', 'Kernel Concepts'],
    category: 'Systems',
    industry: ['Systems Engineering', 'Software Development', 'Infrastructure'],
    tags: ['operating-systems', 'linux', 'systems', 'kernel', 'internals'],
    timeInvestment: '25 hours',
    personalNotes: 'Excellent deep dive into OS concepts. Hussein Nasser\'s teaching style is fantastic.',
    projects: [
      { name: 'Custom Shell Implementation', link: 'https://github.com/username/custom-shell' },
      { name: 'Process Monitor Tool', link: 'https://github.com/username/process-monitor' }
    ]
  },
  {
    id: 7,
    type: 'python',
    title: 'Python Automation Testing With Pytest',
    date: 'Sept. 23, 2024',
    length: '7 hours',
    level: 'Intermediate',
    icon: getAssetPath('logo/python-logo.webp'),
    document: getAssetPath('/certifications/PYTEST-AUTOMATION.pdf'),
    instructor: 'Kumar S',
    platform: 'Udemy',
    completionScore: '95%',
    credentialId: 'UC-78901234-7890-7890-7890-789012345678',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/python-automation-testing-pytest',
    description: 'Master Python test automation using Pytest framework. Learn to write effective test cases, use fixtures, implement CI/CD integration, and generate reports.',
    skills: ['Pytest Framework', 'Test Automation', 'Python Testing', 'Fixtures', 'Test Reports', 'CI/CD Integration'],
    category: 'Programming',
    industry: ['Software Development', 'QA', 'Test Automation'],
    tags: ['python', 'pytest', 'automation', 'testing', 'tdd'],
    timeInvestment: '8 hours',
    personalNotes: 'Great practical examples. Now using pytest for all my Python testing needs.',
    projects: [
      { name: 'API Test Suite', link: 'https://github.com/username/api-test-suite' },
      { name: 'E2E Test Framework', link: 'https://github.com/username/e2e-framework' }
    ]
  },
  {
    id: 8,
    type: 'python',
    title: 'Python OOP : Four Pillars of OOP in Python 3 for Beginners',
    date: 'Sept. 24, 2024',
    length: '2.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/python-logo.webp'),
    document: getAssetPath('/certifications/PYTHON-OOP.pdf'),
    instructor: 'Febin George',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-89012345-8901-8901-8901-890123456789',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/python-oop-four-pillars',
    description: 'Master object-oriented programming in Python. Learn encapsulation, inheritance, polymorphism, and abstraction with practical examples and exercises.',
    skills: ['Object-Oriented Programming', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Class Design'],
    category: 'Programming',
    industry: ['Software Development', 'Education'],
    tags: ['python', 'oop', 'classes', 'inheritance', 'programming'],
    timeInvestment: '3 hours',
    personalNotes: 'Solid refresher on OOP concepts. Good for structuring larger Python projects.',
    projects: [
      { name: 'OOP Design Patterns', link: 'https://github.com/username/python-design-patterns' },
      { name: 'Class Library System', link: 'https://github.com/username/library-system' }
    ]
  },
  {
    id: 9,
    type: 'api',
    title: 'Understanding APIs and RESTful APIs Crash Course',
    date: 'Oct. 7, 2024',
    length: '43 mins',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('/certifications/REST-API.pdf'),
    instructor: 'Kalob Taulien',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-90123456-9012-9012-9012-901234567890',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/understanding-apis-restful-apis',
    description: 'Quick introduction to APIs and REST principles. Learn HTTP methods, status codes, API design best practices, and how to consume RESTful APIs.',
    skills: ['REST API Design', 'HTTP Methods', 'API Documentation', 'JSON', 'API Testing', 'API Security Basics'],
    category: 'Programming',
    industry: ['Software Development', 'Web Development', 'Backend Development'],
    tags: ['api', 'rest', 'http', 'backend', 'web-development'],
    timeInvestment: '1 hour',
    personalNotes: 'Concise and to the point. Good refresher on REST principles.',
    projects: [
      { name: 'REST API Server', link: 'https://github.com/username/rest-api-server' },
      { name: 'API Client Library', link: 'https://github.com/username/api-client' }
    ]
  },
  {
    id: 10,
    type: 'bash',
    title: 'Bash Shell Scripting: Crash Course For Beginners',
    date: 'Sept. 24, 2024',
    length: '5.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/bash-logo.webp'),
    document: getAssetPath('/certifications/BASH-SCRIPTING.pdf'),
    instructor: 'Francesco Santi',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-01234567-0123-0123-0123-012345678901',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/bash-shell-scripting-crash-course',
    description: 'Learn Bash scripting from scratch. Master shell commands, script automation, file manipulation, and system administration tasks using Bash.',
    skills: ['Bash Scripting', 'Shell Commands', 'File Processing', 'Automation', 'System Administration', 'Regular Expressions'],
    category: 'Systems',
    industry: ['Systems Administration', 'DevOps', 'Linux'],
    tags: ['bash', 'scripting', 'linux', 'automation', 'shell'],
    timeInvestment: '6 hours',
    personalNotes: 'Very practical course. Now using bash scripts for daily automation tasks.',
    projects: [
      { name: 'System Monitoring Scripts', link: 'https://github.com/username/system-monitor' },
      { name: 'Backup Automation', link: 'https://github.com/username/backup-scripts' }
    ]
  },
  {
    id: 11,
    type: 'docker',
    title: 'Docker - Introducing Docker Essentials, Containers, and more',
    date: 'Sept. 19, 2024',
    length: '9 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/docker-logo.webp'),
    document: getAssetPath('/certifications/DOCKER-FOR-BEGINNERS.pdf'),
    instructor: 'David Joseph Katz',
    platform: 'Udemy',
    completionScore: null,
    credentialId: 'UC-12345678-1234-1234-1234-123456789013',
    expirationDate: null,
    courseUrl: 'https://www.udemy.com/course/docker-essentials-containers',
    description: 'Comprehensive introduction to Docker and containerization. Learn container concepts, Docker commands, Dockerfile creation, and container orchestration basics.',
    skills: ['Docker Basics', 'Container Management', 'Dockerfile', 'Image Building', 'Container Networking', 'Volume Management'],
    category: 'DevOps',
    industry: ['Software Development', 'Cloud Computing', 'DevOps'],
    tags: ['docker', 'containers', 'devops', 'virtualization', 'microservices'],
    timeInvestment: '10 hours',
    personalNotes: 'Good foundational course. Great for understanding containerization concepts.',
    projects: [
      { name: 'Containerized Microservices', link: 'https://github.com/username/microservices-docker' },
      { name: 'Docker Registry Setup', link: 'https://github.com/username/docker-registry' }
    ]
  }
];

export const certStyles = {
  docker: {
    gradient: 'from-blue-300 to-blue-400',
    shadow: 'shadow-blue-300/30',
    iconBg: 'bg-blue-200',
    textColor: 'text-gray-800'
  },
  jenkins: {
    gradient: 'from-red-300 to-slate-300',
    shadow: 'shadow-red-300/30',
    iconBg: 'bg-red-200',
    textColor: 'text-gray-800'
  },
  gitlab: {
    gradient: 'from-orange-300 to-red-300',
    shadow: 'shadow-orange-300/30',
    iconBg: 'bg-orange-200',
    textColor: 'text-gray-800'
  },
  networking: {
    gradient: 'from-teal-300 to-cyan-300',
    shadow: 'shadow-teal-300/30',
    iconBg: 'bg-teal-200',
    textColor: 'text-gray-800'
  },
  performance: {
    gradient: 'from-red-300 to-amber-300',
    shadow: 'shadow-red-300/30',
    iconBg: 'bg-red-200',
    textColor: 'text-gray-800'
  },
  os: {
    gradient: 'from-gray-300 to-slate-300',
    shadow: 'shadow-gray-300/30',
    iconBg: 'bg-gray-200',
    textColor: 'text-gray-800'
  },
  python: {
    gradient: 'from-blue-300 to-yellow-300',
    shadow: 'shadow-blue-300/30',
    iconBg: 'bg-blue-200',
    textColor: 'text-gray-800'
  },
  api: {
    gradient: 'from-sky-300 to-blue-300',
    shadow: 'shadow-sky-300/30',
    iconBg: 'bg-sky-200',
    textColor: 'text-gray-800'
  },
  bash: {
    gradient: 'from-slate-300 to-green-300',
    shadow: 'shadow-slate-300/30',
    iconBg: 'bg-slate-200',
    textColor: 'text-gray-800'
  }
};