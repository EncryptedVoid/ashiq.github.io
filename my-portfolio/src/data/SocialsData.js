// src/components/sections/Socials/data/SocialsData.js
import { Github, Code, Brain, Linkedin, Youtube, Instagram } from 'lucide-react';

export const socialPlatforms = [
  {
    platform: 'GitHub',
    icon: Github,
    stats: '25+ Repos',
    description: 'Explore my open source contributions and personal projects in UI/UX development',
    href: 'https://github.com/EncryptedVoid',
    gradient: 'bg-gradient-to-r from-[#2ea043] to-[#238636]'
  },
  // {
  //   platform: 'LeetCode',
  //   icon: Code,
  //   stats: '5+ Problems Solved',
  //   description: 'Check out my problem-solving approach and algorithmic thinking',
  //   href: 'https://leetcode.com/u/EncryptedAsh/',
  //   gradient: 'bg-gradient-to-r from-[#ffa116] to-[#ff6b6b]'
  // },
  // {
  //   platform: 'W&B',
  //   icon: Brain,
  //   stats: '15+ Projects',
  //   description: 'View my machine learning experiments and research projects',
  //   href: 'https://wandb.ai',
  //   gradient: 'bg-gradient-to-r from-[#ff9d00] to-[#ff0080]'
  // },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    stats: '100+ Connections',
    description: 'Connect professionally and explore my career journey',
    href: 'https://www.linkedin.com/in/ashiq-gazi-090a6b213/',
    gradient: 'bg-gradient-to-r from-[#0077b5] to-[#00a0dc]'
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    stats: '40+ Videos',
    description: 'Watch my technical tutorials and design process videos',
    href: 'https://www.youtube.com/@DOCTOR-ASH',
    gradient: 'bg-gradient-to-r from-[#ff0000] to-[#ff4e45]'
  },
  // {
  //   platform: 'Instagram',
  //   icon: Instagram,
  //   stats: '1000+ Followers',
  //   description: 'Follow my design inspiration and creative process',
  //   href: 'https://instagram.com',
  //   gradient: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]'
  // }
];

export default socialPlatforms;