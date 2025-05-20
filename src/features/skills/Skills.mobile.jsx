import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, X, ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { getSkillsByCategory } from '@/data/SkillsData';

const SkillsMobile = () => {
  const [categories, setCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Get skills grouped by category
    const skillsByCategory = getSkillsByCategory();
    setCategories(skillsByCategory);

    // Set initial active category
    if (Object.keys(skillsByCategory).length > 0) {
      setActiveCategory(Object.keys(skillsByCategory)[0]);
    }
  }, []);

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSkillDetails = () => {
    setSelectedSkill(null);
  };

  // Get current skills for active category
  const currentSkills = categories[activeCategory] || [];

  // Handle carousel navigation
  const nextSlide = () => {
    if (activeIndex < currentSkills.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(currentSkills.length - 1); // Loop to end
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-8 pb-16 px-4">
      {/* Category Selector */}
      <div className="mb-8 overflow-x-auto no-scrollbar">
        <div className="flex space-x-2 pb-2 min-w-max">
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {!selectedSkill ? (
        // Carousel View
        <div className="relative pb-12">
          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="w-full h-96 overflow-hidden relative rounded-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col items-center justify-center p-6 pb-12"
              >
                {currentSkills[activeIndex] && (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center text-center p-6 rounded-xl"
                    style={{
                      background: `linear-gradient(145deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.8))`,
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {/* Subtle glow effect */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${currentSkills[activeIndex].color || '#fa8c8c'}, transparent 70%)`,
                        filter: 'blur(15px)'
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                      {/* Logo/Emoji */}
                      <div className="w-24 h-24 mb-6 flex items-center justify-center">
                        {currentSkills[activeIndex].emoji ? (
                          <span className="text-6xl">{currentSkills[activeIndex].emoji}</span>
                        ) : (
                          <Code className="w-16 h-16 text-gray-400" />
                        )}
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-2xl font-bold mb-4 text-white">{currentSkills[activeIndex].name}</h3>

                      {/* Brief Description */}
                      <p className="text-gray-300 mb-6">{currentSkills[activeIndex].description}</p>

                      {/* View Details Button */}
                      <motion.button
                        onClick={() => handleSkillSelect(currentSkills[activeIndex])}
                        className="px-6 py-3 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 rounded-lg text-white"
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-4">
            {currentSkills.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 bg-rose-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Detailed Skill View
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="rounded-xl bg-gray-800 border border-gray-700 overflow-hidden"
        >
          {/* Header with back button */}
          <div className="relative p-4 border-b border-gray-700 flex items-center">
            <button
              onClick={closeSkillDetails}
              className="absolute left-4 p-2 rounded-full bg-gray-700 text-gray-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white text-center w-full">
              {selectedSkill.name}
            </h3>
          </div>

          <div className="p-6 space-y-6">
            {/* Logo/Emoji */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-4xl">
                {selectedSkill.emoji || <Code className="w-10 h-10" />}
              </div>
            </div>

            {/* Category */}
            <div className="text-center">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                {selectedSkill.category}
              </span>
            </div>

            {/* Description */}
            <div className="bg-gray-700/30 rounded-lg p-4">
              <p className="text-gray-300">{selectedSkill.description}</p>
            </div>

            {/* Links Section */}
            <div className="space-y-3">
              <h4 className="text-md font-semibold text-white">Resources & Examples</h4>

              {/* Official Link */}
              <a
                href={selectedSkill.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Official Documentation</span>
              </a>

              {/* Portfolio Links */}
              <div className="space-y-2">
                {selectedSkill.portfolioLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SkillsMobile;