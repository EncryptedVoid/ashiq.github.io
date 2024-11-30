// src/components/sections/Socials/data/socialsData.js
import { Github, Code, Brain, Linkedin, Youtube, Instagram } from 'lucide-react';

export const socialPlatforms = [
  {
    platform: 'GitHub',
    icon: Github,
    stats: '200+ Contributions',
    description: 'Explore my open source contributions and personal projects in UI/UX development',
    href: 'https://github.com',
    gradient: 'bg-gradient-to-r from-[#2ea043] to-[#238636]'
  },
  {
    platform: 'LeetCode',
    icon: Code,
    stats: '500+ Problems Solved',
    description: 'Check out my problem-solving approach and algorithmic thinking',
    href: 'https://leetcode.com',
    gradient: 'bg-gradient-to-r from-[#ffa116] to-[#ff6b6b]'
  },
  {
    platform: 'W&B',
    icon: Brain,
    stats: '15+ Projects',
    description: 'View my machine learning experiments and research projects',
    href: 'https://wandb.ai',
    gradient: 'bg-gradient-to-r from-[#ff9d00] to-[#ff0080]'
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    stats: '5000+ Network',
    description: 'Connect professionally and explore my career journey',
    href: 'https://linkedin.com',
    gradient: 'bg-gradient-to-r from-[#0077b5] to-[#00a0dc]'
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    stats: '10K+ Views',
    description: 'Watch my technical tutorials and design process videos',
    href: 'https://youtube.com',
    gradient: 'bg-gradient-to-r from-[#ff0000] to-[#ff4e45]'
  },
  {
    platform: 'Instagram',
    icon: Instagram,
    stats: '1000+ Followers',
    description: 'Follow my design inspiration and creative process',
    href: 'https://instagram.com',
    gradient: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]'
  }
];