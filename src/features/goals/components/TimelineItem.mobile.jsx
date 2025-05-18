// src/features/goals/components/TimelineItem.mobile.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TimelineItemMobile = ({ item, isLast = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className={`
      relative
      transition-all duration-300 ease-out
      ${item.isActive ? 'opacity-100' : 'opacity-70'}
    `}
  >
    {/* Timeline connector line */}
    {!isLast && (
      <div className="absolute left-1 top-6 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
    )}

    {/* Timeline node with pulse animation */}
    <div className="flex items-center mb-2">
      <div className="relative">
        <div className={`
          w-2 h-2 flex-shrink-0
          rounded-full
          ${item.isActive
            ? 'bg-gradient-to-r from-rose-400 to-purple-500'
            : 'bg-white/30'
          }
          transition-all duration-300
        `} />

        {item.isActive && (
          <motion.div
            className="absolute -inset-1 rounded-full bg-purple-500/20"
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
      </div>

      <div className="ml-3 text-xs font-medium text-white/70">
        {item.date}
      </div>
    </div>

    {/* Content with conditional styling */}
    <motion.div
      className={`
        ml-6 text-sm text-white/90 leading-snug
        ${item.isActive
          ? 'font-medium text-white'
          : 'font-normal text-white/80'
        }
      `}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
    >
      {item.content}
    </motion.div>
  </motion.div>
);

export default TimelineItemMobile;