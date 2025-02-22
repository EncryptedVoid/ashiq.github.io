import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const MobileSkillCategory = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  if (!category) return null;
  const { title, icon, experience, skills = [] } = category;

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
      className="relative w-full rounded-2xl overflow-hidden bg-black/40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Category Header */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-4 flex items-center justify-between
                  backdrop-blur-xl group relative"
        whileTap={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <motion.div
            className="w-12 h-12 flex-shrink-0 flex items-center justify-center
                      rounded-xl bg-rose-500/10 text-rose-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl">{icon}</div>
          </motion.div>

          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-white group-hover:text-rose-400
                        transition-colors truncate">
              {title}
            </h2>
            <p className="text-sm text-white/40 truncate">
              {experience} • {skills.length} skills
            </p>
          </div>
        </div>

        <motion.div
          className="ml-3 w-8 h-8 flex-shrink-0 rounded-full bg-white/5
                    flex items-center justify-center"
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
            className="border-t border-white/10"
          >
            {/* Navigation Bar */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="text-sm text-white/60 font-medium">
                Skill {currentSkillIndex + 1} of {skills.length}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigateSkill('prev')}
                  disabled={currentSkillIndex === 0}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center
                            disabled:opacity-40 transition-all active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4 text-white/60" />
                </button>
                <button
                  onClick={() => navigateSkill('next')}
                  disabled={currentSkillIndex === skills.length - 1}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center
                            disabled:opacity-40 transition-all active:scale-95"
                >
                  <ArrowRight className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            {/* Skills Slider */}
            <div
              className="px-4 pb-4"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="overflow-hidden rounded-xl">
                <motion.div
                  className="flex w-full"
                  animate={{ x: `${-currentSkillIndex * 100}%` }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                >
                  {skills.map((skill) => (
                    <div key={skill.name} className="w-full flex-shrink-0">
                      <div className="bg-white/5 rounded-xl p-4 space-y-4">
                        {/* Skill Header */}
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-rose-500/10 flex-shrink-0">
                            <Sparkles className="w-5 h-5 text-rose-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-semibold text-white truncate">
                              {skill.name}
                            </h3>
                            <p className="text-sm text-white/40">
                              Since {skill.yearStarted}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-white/80 line-clamp-2">
                          {skill.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(skill.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="p-3 rounded-lg bg-white/5 space-y-1"
                            >
                              <div className="text-xs text-white/40 capitalize truncate">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-sm font-semibold text-white truncate">
                                {value.toLocaleString()}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Recent Projects */}
                        {skill.recentProjects && skill.recentProjects.length > 0 && (
                          <div className="space-y-2">
                            <div className="text-xs text-white/40 uppercase">Recent Projects</div>
                            <div className="grid grid-cols-2 gap-2">
                              {skill.recentProjects.map((project, idx) => (
                                <div
                                  key={idx}
                                  className="p-2 rounded-lg bg-white/5 space-y-0.5"
                                >
                                  <div className="text-sm text-white/80 truncate">
                                    {project.name}
                                  </div>
                                  <div className="text-xs text-white/40">
                                    {project.metric}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {skill.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-lg bg-white/5
                                      text-white/60 text-xs truncate"
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