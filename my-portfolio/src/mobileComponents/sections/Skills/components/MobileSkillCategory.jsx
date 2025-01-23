// src/components/sections/Skills/components/MobileSkillCategory.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SkillCard from './MobileSkillCard';

const MobileSkillCategory = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Guard against undefined category
  if (!category) return null;

  const { title, icon, experience, skills = [] } = category;

  // Touch handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSkillIndex < skills.length - 1) {
      setCurrentSkillIndex(prev => prev + 1);
    } else if (isRightSwipe && currentSkillIndex > 0) {
      setCurrentSkillIndex(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white/[0.03] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex flex-col items-start"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 flex items-center justify-center text-lg bg-white/5 rounded-lg">
            {icon}
          </div>
          <h2 className="text-lg font-semibold text-white">
            {title}
          </h2>
        </div>

        <p className="text-sm text-white/40 ml-[52px]">
          {experience} • {skills.length} skills
        </p>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && skills.length > 0 && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="px-4 pb-4"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="mb-2 text-sm text-white/40">
                {currentSkillIndex + 1} of {skills.length}
              </div>

              <motion.div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSkillIndex * 100}%)` }}
              >
                {skills.map((skill) => (
                  <div key={skill.name} className="w-full flex-shrink-0">
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </motion.div>

              <div className="mt-3 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 transition-all duration-300"
                  style={{
                    width: `${(currentSkillIndex + 1) / skills.length * 100}%`
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSkillCategory;