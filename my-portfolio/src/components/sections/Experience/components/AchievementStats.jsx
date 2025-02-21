// src/components/sections/Experience/components/AchievementStat.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AchievementStat = ({ achievement }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="
        rounded-lg
        bg-white/[0.03] hover:bg-white/[0.06]
        border border-white/[0.06] hover:border-white/[0.12]
        p-3
        transition-all duration-300
        hover:-translate-y-1
        group
        cursor-pointer
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-105 transition-transform">
        {achievement.stat}
      </div>
      <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
        {achievement.label}
      </div>
      {achievement.description && (
        <div className="
          mt-2 pt-2
          border-t border-white/10
          text-xs text-white/40
          group-hover:text-white/60
          transition-colors
          line-clamp-2
        ">
          {achievement.description}
        </div>
      )}

      {/* Tooltip on hover to show full description */}
      {isHovered && achievement.description && (
        <motion.div
          className="absolute z-10 p-3 rounded-lg bg-gray-800/95 border border-white/10 shadow-xl max-w-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'max-content',
            maxWidth: '200px'
          }}
        >
          <div className="text-xs text-white/80">{achievement.description}</div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AchievementStat;