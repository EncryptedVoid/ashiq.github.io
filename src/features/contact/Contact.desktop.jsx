// src/components/sections/Socials/index.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SocialsData } from '../../data/SocialsData';
import { ExternalLink } from 'lucide-react';

const Socials = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full py-24 px-8 bg-gradient-to-b from-gray-900 to-black">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-300 mt-4">
          Explore my work, contributions, and professional journey across different platforms
        </p>
        {/* Decorative Line */}
        <div className="
          w-32 h-1 mx-auto mt-8
          bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
          rounded-full
        " />
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Featured Row (Email and Calendly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Email Card */}
          <FeaturedSocialCard
            data={SocialsData.email}
            isHovered={hoveredCard === 'email'}
            onHover={() => setHoveredCard('email')}
            onLeave={() => setHoveredCard(null)}
          />

          {/* Calendly Card */}
          <FeaturedSocialCard
            data={SocialsData.calendly}
            isHovered={hoveredCard === 'calendly'}
            onHover={() => setHoveredCard('calendly')}
            onLeave={() => setHoveredCard(null)}
          />
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SocialsData)
            .filter(([key]) => key !== 'email' && key !== 'calendly')
            .map(([key, data], index) => (
              <PlatformCard
                key={key}
                data={data}
                index={index}
                isHovered={hoveredCard === key}
                onHover={() => setHoveredCard(key)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

// Featured Social Card (Email and Calendly)
const FeaturedSocialCard = ({ data, isHovered, onHover, onLeave }) => {
  const Icon = data.icon;

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl p-8
        ${data.bgColor} backdrop-blur-md
        border border-gray-800 hover:border-gray-700
        transition-all duration-300 cursor-pointer
        h-64
      `}
      onClick={data.onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      {/* Background Gradient */}
      <div
        className={`
          absolute inset-0 opacity-10 transition-opacity duration-300
          bg-gradient-to-br ${data.gradient}
          ${isHovered ? 'opacity-20' : 'opacity-10'}
        `}
      />

      {/* Icon */}
      <div
        className={`
          w-16 h-16 rounded-xl flex items-center justify-center mb-6
          ${isHovered ? data.hoverColor : 'text-white'}
          bg-black/30 backdrop-blur-sm
          transition-all duration-300
        `}
      >
        <Icon size={32} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{data.label}</h3>
        {data.description && (
          <p className="text-gray-300 mb-4">{data.description}</p>
        )}

        {/* Call to Action */}
        <div className={`
          flex items-center mt-6 text-sm font-medium
          ${isHovered ? data.hoverColor : 'text-gray-300'}
          transition-colors duration-300
        `}>
          <span>Get in touch</span>
          <ExternalLink size={16} className="ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

// Platform Card (GitHub, LinkedIn, YouTube, etc.)
const PlatformCard = ({ data, index, isHovered, onHover, onLeave }) => {
  const Icon = data.icon;

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl p-6
        ${data.bgColor} backdrop-blur-md
        border border-gray-800 hover:border-gray-700
        transition-all duration-300 cursor-pointer
        h-64
      `}
      onClick={data.onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Background Gradient */}
      <div
        className={`
          absolute inset-0 opacity-10 transition-opacity duration-300
          bg-gradient-to-br ${data.gradient}
          ${isHovered ? 'opacity-20' : 'opacity-10'}
        `}
      />

      {/* Icon */}
      <div
        className={`
          w-12 h-12 rounded-lg flex items-center justify-center mb-4
          ${isHovered ? data.hoverColor : 'text-white'}
          bg-black/30 backdrop-blur-sm
          transition-all duration-300
        `}
      >
        <Icon size={24} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{data.label}</h3>
        {data.stats && (
          <p className="text-gray-400 text-sm font-medium mb-1">{data.stats}</p>
        )}
        {data.description && (
          <p className="text-gray-300 text-sm mt-2">{data.description}</p>
        )}

        {/* Call to Action */}
        <div className={`
          flex items-center mt-4 text-xs font-medium
          ${isHovered ? data.hoverColor : 'text-gray-300'}
          transition-colors duration-300
        `}>
          <span>View profile</span>
          <ExternalLink size={14} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default Socials;