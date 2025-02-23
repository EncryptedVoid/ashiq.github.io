// src/data/CertificationsData.js
import { getAssetPath, getCertificationPath } from '@utils/assetUtils';

export const Certifications = [
  {
    id: 1,
    type: 'docker',
    title: 'Docker for the Absolute Beginner - Hands On - DevOps',
    date: 'Oct. 12, 2024',
    length: '4.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('certifications/DOCKER-FOR-BEGINNERS.pdf')
  },
  {
    id: 2,
    type: 'jenkins',
    title: 'Jenkins: Jobs, Pipelines, CI/CD and DevOps for Beginners',
    date: 'Oct. 21, 2024',
    length: '10.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/jenkins-logo.webp'),
    document: getAssetPath('certifications/JENKINS-FOR-BEGINNERS.pdf')
  },
  {
    id: 3,
    type: 'gitlab',
    title: 'GitLab CI/CD: Pipelines, CI/CD and DevOps for Beginners',
    date: 'Oct. 25, 2024',
    length: '5.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/gitlab-logo.webp'),
    document: getAssetPath('certifications/GITLAB-CI-CD.pdf')
  },
  {
    id: 4,
    type: 'networking',
    title: 'Introduction to Computer Networking - 4 Hour Crash Course',
    date: 'Oct. 5, 2024',
    length: '4.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('certifications/COMPUTER-NETWORKING.pdf')
  },
  {
    id: 5,
    type: 'performance',
    title: 'Performance Testing Foundations',
    date: 'Oct. 11, 2024',
    length: '2 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('certifications/PERFORMANCE-TESTING.pdf')
  },
  {
    id: 6,
    type: 'os',
    title: 'Fundamentals of Operating Systems',
    date: 'Nov. 10, 2024',
    length: '21.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('certifications/OPERATING-SYSTEMS.pdf')
  },
  {
    id: 7,
    type: 'python',
    title: 'Python Automation Testing With Pytest',
    date: 'Sept. 23, 2024',
    length: '7 hours',
    level: 'Intermediate',
    icon: getAssetPath('logo/python-logo.webp'),
    document: getAssetPath('certifications/PYTEST-AUTOMATION.pdf')
  },
  {
    id: 8,
    type: 'python',
    title: 'Python OOP : Four Pillars of OOP in Python 3 for Beginners',
    date: 'Sept. 24, 2024',
    length: '2.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/python-logo.webp'),
    document: getAssetPath('certifications/PYTHON-OOP.pdf')
  },
  {
    id: 9,
    type: 'api',
    title: 'Understanding APIs and RESTful APIs Crash Course',
    date: 'Oct. 7, 2024',
    length: '43 mins',
    level: 'Beginner',
    icon: getAssetPath('logo/udemy-logo.webp'),
    document: getAssetPath('certifications/REST-API.pdf')
  },
  {
    id: 10,
    type: 'bash',
    title: 'Bash Shell Scripting: Crash Course For Beginners',
    date: 'Sept. 24, 2024',
    length: '5.5 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/bash-logo.webp'),
    document: getAssetPath('certifications/BASH-SCRIPTING.pdf')
  },
  {
    id: 11,
    type: 'docker',
    title: 'Docker - Introducing Docker Essentials, Containers, and more',
    date: 'Sept. 19, 2024',
    length: '9 hours',
    level: 'Beginner',
    icon: getAssetPath('logo/docker-logo.webp'),
    document: getAssetPath('certifications/DOCKER-DEVOPS.pdf')
  }
];

export const certStyles = {
  docker: {
    gradient: 'from-blue-200 to-blue-300',
    shadow: 'shadow-blue-200/20',
    iconBg: 'bg-blue-50'
  },
  jenkins: {
    gradient: 'from-red-200 to-slate-200',
    shadow: 'shadow-red-200/20',
    iconBg: 'bg-red-50'
  },
  gitlab: {
    gradient: 'from-orange-200 to-red-200',
    shadow: 'shadow-orange-200/20',
    iconBg: 'bg-orange-50'
  },
  networking: {
    gradient: 'from-teal-200 to-cyan-200',
    shadow: 'shadow-teal-200/20',
    iconBg: 'bg-teal-50'
  },
  performance: {
    gradient: 'from-red-200 to-amber-200',
    shadow: 'shadow-red-200/20',
    iconBg: 'bg-red-50'
  },
  os: {
    gradient: 'from-gray-200 to-slate-200',
    shadow: 'shadow-gray-200/20',
    iconBg: 'bg-gray-50'
  },
  python: {
    gradient: 'from-blue-200 to-yellow-200',
    shadow: 'shadow-blue-200/20',
    iconBg: 'bg-blue-50'
  },
  api: {
    gradient: 'from-sky-200 to-blue-200',
    shadow: 'shadow-sky-200/20',
    iconBg: 'bg-sky-50'
  },
  bash: {
    gradient: 'from-slate-200 to-green-200',
    shadow: 'shadow-slate-200/20',
    iconBg: 'bg-slate-50'
  }
};