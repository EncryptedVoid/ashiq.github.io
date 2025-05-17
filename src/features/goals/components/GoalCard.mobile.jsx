// GoalCard.mobile.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TimelineItemMobile from './TimelineItem.mobile';
import { gradientStyles } from '@styles/styles';

const GoalCardMobile = ({ goal, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!goal || !goal.type) {
    return null;
  }

  const gradient = gradientStyles[goal.type] || 'from-gray-500/20 to-gray-500/20';

  // Staggered entrance animation
  const delay = index * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 1, 0.5, 1]
      }}
      className={`
        relative overflow-hidden
        bg-white/[0.03]
        backdrop-blur-md
        border border-white/[0.08]
        rounded-xl
        shadow-lg shadow-black/20
      `}
    >
      {/* Gradient indicator - thicker and more prominent */}
      <div className={`
        absolute top-0 left-0 right-0 h-1.5
        bg-gradient-to-r ${gradient}
        opacity-80
      `} />

      {/* Card Header */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="p-5 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className={`
              w-12 h-12
              rounded-lg
              bg-gradient-to-br ${gradient}
              flex items-center justify-center
              shadow-md
            `}
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: isExpanded
                ? '0 0 15px rgba(186, 104, 200, 0.3)'
                : '0 0 5px rgba(186, 104, 200, 0.1)'
            }}
            transition={{ duration: 0.4 }}
          >
            <i className={`${goal.icon} text-white text-sm`} />
          </motion.div>

          <div>
            <h3 className="text-base font-semibold text-white leading-snug">
              {goal.title}
            </h3>

            <div className="mt-2 flex items-center space-x-2">
              <div className="h-1.5 w-20 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${gradient}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${goal.progress}%` }}
                  transition={{
                    duration: 1,
                    delay: delay + 0.3,
                    ease: "easeOut"
                  }}
                />
              </div>
              <span className="text-xs text-white/70">{goal.progress}%</span>
            </div>
          </div>
        </div>

        {/* Animated chevron */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </motion.div>

      {/* Expandable Content with smooth animation */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              className="px-5 pb-5 pt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="pl-4 ml-4 border-l border-white/10 space-y-4">
                {goal.timeline.map((item, idx) => (
                  <TimelineItemMobile
                    key={idx}
                    item={item}
                    isLast={idx === goal.timeline.length - 1}
                    delay={0.1 + (idx * 0.1)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GoalCardMobile;