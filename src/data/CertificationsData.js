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
    instructor: 'Mumshad Mannambeth, KodeKloud Training'
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
    instructor: 'Valentin Despa, Valentin Despa - Support'
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
    instructor: 'Valentin Despa, Valentin Despa - Support'
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
    instructor: 'Rick Crisci'
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
    instructor: 'Ozan Ilhan, Canberk Akduygu, Software Testing House By Ozan Ilhan'
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
    instructor: 'Hussein Nasser'
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
    instructor: 'Kumar S'
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
    instructor: 'Febin George'
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
    instructor: 'Kalob Taulien'
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
    instructor: 'Francesco Santi'
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
    instructor: 'David Joseph Katz'
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