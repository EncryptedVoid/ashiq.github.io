import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const MobileSkillCategory = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  if (!category) return null;
  const { title, icon, experience, skills = [] } = category;

  const handleSwipe = useCallback((direction) => {
    setCurrentSkillIndex(prev => {
      if (direction === 'next' && prev < skills.length - 1) return prev + 1;
      if (direction === 'prev' && prev > 0) return prev - 1;
      return prev;
    });
  }, [skills.length]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    if (Math.abs(swipeDistance) > 50) {
      handleSwipe(swipeDistance > 0 ? 'prev' : 'next');
    }
    setSwipeDistance(0);
  };

  return (
    <motion.div
      className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between relative group"
        whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
        whileTap={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-500/10 text-rose-400"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>

          <div>
            <h2 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">
              {title}
            </h2>
            <p className="text-sm text-white/40">
              {experience} • {skills.length} skills
            </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-white/60" />
        </motion.div>
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Navigation and Progress */}
            <div className="px-4 py-3 border-t border-white/5 flex justify-between items-center">
              <div className="text-sm text-white/60">
                {currentSkillIndex + 1} of {skills.length}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSwipe('prev')}
                  disabled={currentSkillIndex === 0}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50
                            disabled:hover:bg-white/5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-white/60" />
                </button>
                <button
                  onClick={() => handleSwipe('next')}
                  disabled={currentSkillIndex === skills.length - 1}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50
                            disabled:hover:bg-white/5 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            {/* Skills Carousel */}
            <div className="px-4 pb-4">
              <motion.div
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                  x: swipeDistance,
                  transform: `translateX(-${currentSkillIndex * 100}%)`
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="w-full flex-shrink-0 px-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-4">
                      {/* Skill Header */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-rose-500/10">
                          <Sparkles className="w-4 h-4 text-rose-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-white/40">
                            Since {skill.yearStarted}
                          </p>
                        </div>
                      </div>

                      {/* Skill Description */}
                      <p className="text-sm text-white/60 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(skill.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="px-3 py-1.5 bg-white/5 rounded-lg text-sm"
                          >
                            <span className="text-white/40">{key}:</span>{' '}
                            <span className="text-white font-medium">{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {skill.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2.5 py-1 bg-white/5 rounded-full text-xs text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-rose-500 to-red-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentSkillIndex + 1) / skills.length) * 100}%`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileSkillCategory;