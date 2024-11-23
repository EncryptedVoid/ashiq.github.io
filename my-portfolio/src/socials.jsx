import React from 'react';
import { Github, Code, Brain, Linkedin, Youtube, Instagram } from 'lucide-react';

const SocialCard = ({
  platform,
  icon: Icon,
  stats,
  description,
  href,
  gradient
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
  >
    {/* Border Gradient */}
    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
      <div className={`absolute inset-0 ${gradient} opacity-10`} />
      <div className="absolute inset-[1px] rounded-3xl bg-[#1a1a1a]" />
    </div>

    {/* Left Accent Line */}
    <div className={`
      absolute left-0 top-0 h-full w-1
      ${gradient} opacity-0
      origin-top scale-y-0
      transition-all duration-700
      group-hover:scale-y-100 group-hover:opacity-100
    `} />

    {/* Content */}
    <div className="relative p-8 md:p-10 h-full flex flex-col">
      {/* Stats Badge */}
      <div className="
        absolute right-8 top-8
        px-4 py-2 rounded-xl
        bg-white/[0.03] backdrop-blur-sm
        border border-white/[0.08]
        text-sm text-white/70
        transform translate-y-4 opacity-0
        transition-all duration-700
        group-hover:translate-y-0 group-hover:opacity-100
      ">
        {stats}
      </div>

      {/* Icon */}
      <Icon className="
        w-10 h-10 mb-6 text-white/80
        transition-transform duration-700
        group-hover:-translate-y-2 group-hover:scale-110 group-hover:-rotate-12
      " />

      {/* Title & Description */}
      <div className="mt-auto">
        <h2 className={`
          inline-block px-4 py-2 rounded-xl text-xl font-bold
          ${gradient} mb-4
          transition-all duration-700
          group-hover:-translate-y-1 group-hover:shadow-lg
        `}>
          {platform}
        </h2>
        <p className="
          text-white/60 text-lg max-w-[280px]
          transform translate-y-4 opacity-0
          transition-all duration-700 delay-100
          group-hover:translate-y-0 group-hover:opacity-100
        ">
          {description}
        </p>
      </div>
    </div>
  </a>
);

const Socials = () => {
  const socialPlatforms = [
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

  return (
    <div className="w-full py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="
          text-4xl md:text-5xl font-bold mb-6
          bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
          bg-clip-text text-transparent
        ">
          Digital Presence
        </h1>
        <p className="text-lg text-gray-400">
          Explore my work, contributions, and professional journey across different platforms
        </p>
        {/* Decorative Line */}
        <div className="
          w-24 h-1 mx-auto mt-8
          bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
          rounded-full
        " />
      </div>

      {/* Grid */}
      <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-6 max-w-7xl mx-auto
      ">
        {socialPlatforms.map((platform, index) => (
          <SocialCard
            key={platform.platform}
            {...platform}
            className={`opacity-0 animate-[fadeIn_1s_ease-out_forwards]`}
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Socials;