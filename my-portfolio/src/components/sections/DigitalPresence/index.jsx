// src/components/sections/Socials/index.jsx
import React from 'react';
import SocialCard from './components/SocialCard';
import { socialPlatforms } from '../../../data/socialsData';

const Socials = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
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
    </section>
  );
};

export default Socials;