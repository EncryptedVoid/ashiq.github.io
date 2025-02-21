// src/components/sections/Socials/components/SocialCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const SocialCard = ({
  icon: Icon,
  label,
  gradient,
  bgColor,
  hoverColor,
  onClick,
  stats,
  description,
  className,
  style
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl
        ${bgColor} backdrop-blur-md
        border border-gray-800
        transition-all duration-300 cursor-pointer
        h-full
        ${className || ''}
      `}
      onClick={onClick}
      style={style}
      whileHover={{
        y: -5,
        borderColor: 'rgb(75, 85, 99)'
      }}
    >
      {/* Background Gradient with Animation */}
      <motion.div
        className={`absolute inset-0 opacity-10 bg-gradient-to-br ${gradient}`}
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon and Label Row */}
        <div className="flex items-center mb-4">
          <div className={`
            w-12 h-12 rounded-lg flex items-center justify-center
            bg-black/30 backdrop-blur-sm mr-4
          `}>
            <Icon
              size={24}
              className={`transition-colors duration-300 text-white group-hover:${hoverColor}`}
            />
          </div>
          <h3 className="text-lg font-semibold text-white">{label}</h3>
        </div>

        {/* Stats if available */}
        {stats && (
          <div className="mb-2 text-gray-400 font-medium text-sm">
            {stats}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-sm flex-grow">
            {description}
          </p>
        )}

        {/* Call to Action */}
        <div className={`
          flex items-center mt-4 text-sm font-medium
          text-gray-300 hover:${hoverColor}
          transition-colors duration-300
        `}>
          <span>Visit {label}</span>
          <ExternalLink size={16} className="ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default SocialCard;