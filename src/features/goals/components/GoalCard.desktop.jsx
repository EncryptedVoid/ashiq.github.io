// src/features/goals/components/GoalCard.desktop.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gradientStyles, cardStyles } from '@/styles/styles';
import TimelineItem from './TimelineItem.desktop';

const GoalCard = ({ goal, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!goal || !goal.type) {
    return null;
  }

  const gradient = gradientStyles[goal.type] || 'from-gray-500/20 to-gray-500/20';
  const cardStyle = cardStyles[goal.type] || {};

  // Calculate a delay based on index for staggered animations
  const delayBase = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delayBase }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative overflow-hidden
        backdrop-blur-lg
        border border-white/[0.08] hover:border-white/[0.15]
        rounded-2xl
        h-full
        transition-all duration-700 ease-out
        ${cardStyle?.shadow || ''}
      `}
      style={{
        background: `linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`
      }}
    >
      {/* Background gradient glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0`}
        animate={{ opacity: isHovered ? 0.08 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Card decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${gradient} opacity-30`} />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <motion.div
            className={`
              w-14 h-14
              rounded-xl
              bg-gradient-to-br ${gradient}
              flex items-center justify-center
              shadow-lg
            `}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? -5 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <i className={`${goal.icon} text-white text-xl`} />
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {goal.title}
            </h3>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${gradient}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${goal.progress}%` }}
                  transition={{
                    duration: 1.5,
                    delay: delayBase + 0.5,
                  }}
                />
              </div>
              <span className="text-xs text-white/70">{goal.progress}% Complete</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 pl-4 border-l border-white/10">
          {goal.timeline && goal.timeline.map((item, idx) => (
            <TimelineItem
              key={idx}
              item={item}
              isHovered={isHovered}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GoalCard;