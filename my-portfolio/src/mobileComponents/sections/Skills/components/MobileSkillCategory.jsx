import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, ArrowRight, Sparkles, Touch } from 'lucide-react';

const MobileSkillCategory = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  if (!category) return null;
  const { title, icon, experience, skills = [] } = category;

  // Fix useCallback with proper dependencies
  const navigateSkill = useCallback((direction) => {
    setCurrentSkillIndex(prev => {
      const nextIndex = direction === 'next' ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(nextIndex, skills.length - 1));
    });
  }, [skills.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (Math.abs(distance) > 50) {
      navigateSkill(distance > 0 ? 'next' : 'prev');
    }
    touchStartX.current = null;
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Category Header */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full h-20 px-5 flex items-center justify-between relative
                  bg-black/40 backdrop-blur-xl group"
        whileTap={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
      >
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-xl
                      bg-rose-500/10 text-rose-400 text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>

          <div>
            <h2 className="text-xl font-semibold text-white group-hover:text-rose-400
                          transition-colors">
              {title}
            </h2>
            <p className="text-sm text-white/40">
              {experience} • {skills.length} skills
            </p>
          </div>
        </div>

        {/* Expand Icon */}
        <motion.div
          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/40 backdrop-blur-xl border-t border-white/10"
          >
            {/* Navigation Bar */}
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="text-white/60 font-medium">
                Skill {currentSkillIndex + 1} of {skills.length}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigateSkill('prev')}
                  disabled={currentSkillIndex === 0}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center
                            disabled:opacity-40 transition-all active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5 text-white/60" />
                </button>
                <button
                  onClick={() => navigateSkill('next')}
                  disabled={currentSkillIndex === skills.length - 1}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center
                            disabled:opacity-40 transition-all active:scale-95"
                >
                  <Touch className="w-5 h-5 text-white/60" />
                </button>
              </div>
            </div>

            {/* Skills Slider */}
            <div
              className="px-5 pb-5"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  className="flex w-full"
                  animate={{ x: `${-currentSkillIndex * 100}%` }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                >
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="w-full flex-shrink-0 pr-5">
                      <div className="bg-white/5 rounded-2xl p-5 space-y-4 h-full">
                        {/* Skill Header */}
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-rose-500/10 shrink-0">
                            <Sparkles className="w-5 h-5 text-rose-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-xl font-semibold text-white truncate">
                              {skill.name}
                            </h3>
                            <p className="text-sm text-white/40 mt-0.5">
                              Since {skill.yearStarted}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-white/80 line-clamp-3">
                          {skill.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(skill.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="p-3 rounded-xl bg-white/5 space-y-1"
                            >
                              <div className="text-sm text-white/40 capitalize truncate">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-lg font-semibold text-white">
                                {value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {skill.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 rounded-xl bg-white/5 text-white/80 text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-rose-500 to-red-500"
                  animate={{
                    width: `${((currentSkillIndex + 1) / skills.length) * 100}%`
                  }}
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