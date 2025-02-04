// src/components/sections/Certifications/certificationsData.js
export const Certifications = [
  {
    id: 1,
    type: 'performance',
    title: 'Performance Testing Foundations',
    date: '2023',
    level: 'Professional',
    icon: '/images/certs/performance-icon.png',
    image: '/images/certs/performance-cert.png'
  },
  {
    id: 2,
    type: 'python',
    title: 'Python Automation Testing With Pytest',
    date: '2023',
    level: 'Professional',
    icon: '/images/certs/python-icon.png',
    image: '/images/certs/python-cert.png'
  },
  {
    id: 3,
    type: 'docker',
    title: 'Docker Essentials and Development',
    date: '2023',
    level: 'Professional',
    icon: '/images/certs/docker-icon.png',
    image: '/images/certs/docker-cert.png'
  },
  {
    id: 4,
    type: 'networking',
    title: 'Computer Networking & IoT',
    date: '2023',
    level: 'Professional',
    icon: '/images/certs/networking-icon.png',
    image: '/images/certs/networking-cert.png'
  },
  {
    id: 5,
    type: 'gitlab',
    title: 'GitLab CI/CD: Pipelines & DevOps',
    date: '2023',
    level: 'Professional',
    icon: '/images/certs/gitlab-icon.png',
    image: '/images/certs/gitlab-cert.png'
  }
];

export const certStyles = {
  performance: {
    gradient: 'from-[#FF4D4D] to-[#F9CB28]',
    shadow: 'shadow-[#FF4D4D]/20',
    iconBg: 'bg-[#FF4D4D]'
  },
  python: {
    gradient: 'from-[#4B8BBE] to-[#FFE873]',
    shadow: 'shadow-[#4B8BBE]/20',
    iconBg: 'bg-[#4B8BBE]'
  },
  docker: {
    gradient: 'from-[#2496ED] to-[#0DB7ED]',
    shadow: 'shadow-[#2496ED]/20',
    iconBg: 'bg-[#2496ED]'
  },
  networking: {
    gradient: 'from-[#00C7B7] to-[#59E0C5]',
    shadow: 'shadow-[#00C7B7]/20',
    iconBg: 'bg-[#00C7B7]'
  },
  gitlab: {
    gradient: 'from-[#FCA121] to-[#FC6D26]',
    shadow: 'shadow-[#FC6D26]/20',
    iconBg: 'bg-[#FC6D26]'
  }
};