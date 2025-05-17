// src/features/goals/components/TimelineItem.desktop.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, isHovered }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        relative mb-8 last:mb-0
        transition-all duration-300 ease-out
        ${item.isActive ? 'opacity-100' : 'opacity-70'}
      `}
    >
      {/* Timeline node */}
      <motion.div
        className={`
          absolute -left-8 top-0 flex items-center justify-center
          w-6 h-6 -ml-3 mt-1
        `}
        animate={{
          scale: item.isActive && isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={`
          absolute w-2.5 h-2.5 rounded-full
          ${item.isActive
            ? 'bg-gradient-to-r from-rose-400 to-purple-500 shadow-lg shadow-purple-500/30'
            : 'bg-white/30'
          }
        `} />

        {item.isActive && (
          <motion.div
            className="absolute w-5 h-5 rounded-full bg-purple-500/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        )}
      </motion.div>

      {/* Content */}
      <div>
        <div className="text-sm font-medium tracking-wide text-white/60 mb-2">
          {item.date}
        </div>

        <div className={`
          text-base text-white/90 leading-relaxed
          ${item.isActive ? 'font-medium' : ''}
        `}>
          {item.content}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;