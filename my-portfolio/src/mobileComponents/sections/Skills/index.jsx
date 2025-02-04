import React, { useState, useCallback } from 'react';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';
import { skillsData } from '../../../data/SkillsData';
import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterText } from '../../../styles/TypewriterText'


const MobileSkills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [skillIndex, setSkillIndex] = useState(0);

  const handleCategorySelect = useCallback((category) => {
    setActiveCategory(category);
    setSkillIndex(0);
  }, []);

  return (
    <section className="min-h-screen bg-gray-900">
      {/* Title Bar */}
      <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="px-4 py-3">
          <TypewriterText
            text="Skills & Expertise"
            size={3}
            typingSpeed={100}
            delayBeforeRestart={60000}
          />
          <p className="text-sm text-white/60">Expertise & capabilities</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-4">
        {!activeCategory ? (
          <CategoryList onSelect={handleCategorySelect} />
        ) : (
          <SkillView
            category={activeCategory}
            skillIndex={skillIndex}
            onBack={() => setActiveCategory(null)}
            onNext={() => setSkillIndex(i => i + 1)}
            onPrev={() => setSkillIndex(i => i - 1)}
          />
        )}
      </div>
    </section>
  );
};

const CategoryList = ({ searchQuery, onSelect }) => (
  <div className="grid grid-cols-2 gap-2 px-2">
    <AnimatePresence>
      {skillsData.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            onClick={() => onSelect(category)}
            className="w-full bg-white/5 hover:bg-white/10 rounded-xl p-3 text-left
                     transition-all duration-300 active:scale-98"
          >
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-base">
                {category.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-0.5 line-clamp-2">{category.title}</h3>
                <p className="text-xs text-white/60">{category.skills.length} skills</p>
              </div>
            </div>
          </button>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

const SkillView = ({ category, skillIndex, onBack, onNext, onPrev }) => {
  const skill = category.skills[skillIndex];
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

    if (isLeftSwipe && skillIndex < category.skills.length - 1) {
      onNext();
    }
    if (isRightSwipe && skillIndex > 0) {
      onPrev();
    }
  };

  return (
    <div className="px-4">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/60 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </button>
        <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
        <p className="text-white/60">
          {skillIndex + 1} of {category.skills.length} skills
        </p>
      </div>

      {/* Skill Card */}
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white/5 rounded-xl p-4 mb-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
        <p className="text-white/80 mb-6">{skill.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {Object.entries(skill.metrics).slice(0, 2).map(([key, value]) => (
            <button key={key}
              className="bg-white/5 hover:bg-white/10 rounded-lg p-3 text-left transition-all
                       active:scale-95 h-16 flex flex-col justify-center">
              <div className="text-xs text-white/60">{key}</div>
              <div className="text-sm font-semibold text-white">{value}</div>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <div className="fixed bottom-6 left-4 right-4">
        <div className="bg-white/10 h-1 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${(skillIndex + 1) / category.skills.length * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileSkills;