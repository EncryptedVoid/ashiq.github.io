import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, X, Link, ExternalLink, Github } from 'lucide-react';
import { getSkillsByCategory } from '@/data/SkillsData';

const SkillsDesktop = () => {
  const [categories, setCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Get skills grouped by category
    const skillsByCategory = getSkillsByCategory();
    setCategories(skillsByCategory);

    // Set initial active category
    if (Object.keys(skillsByCategory).length > 0) {
      setActiveCategory(Object.keys(skillsByCategory)[0]);
    }
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300); // Clear after animation
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Tabs */}
        <div className="mb-12 overflow-x-auto no-scrollbar">
          <div className="flex space-x-4 pb-2 min-w-max">
            {Object.keys(categories).map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {categories[activeCategory]?.map((skill) => (
              <motion.div
                key={skill.id}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => handleSkillClick(skill)}
              >
                <div
                  className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-500 cursor-pointer transition-all duration-300"
                  style={{
                    background: `linear-gradient(145deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.7))`,
                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2)`
                  }}
                >
                  {/* Subtle glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color || '#fa8c8c'}, transparent 70%)`,
                      filter: 'blur(10px)'
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Logo/Emoji */}
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      {skill.emoji ? (
                        <span className="text-4xl">{skill.emoji}</span>
                      ) : (
                        <Code className="w-10 h-10 text-gray-400" />
                      )}
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-lg font-semibold mb-1 text-white">{skill.name}</h3>

                    {/* Brief hint at more info */}
                    <div className="text-xs text-gray-400 mt-2">Click for details</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skill Modal */}
        <AnimatePresence>
          {isModalOpen && selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-3xl rounded-2xl bg-gray-900 border border-gray-700 p-6 md:p-8 overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${selectedSkill.color || '#fa8c8c'}, transparent 70%)`
                  }}
                />

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10">
                  {/* Header with Logo & Name */}
                  <div className="flex items-center gap-6 mb-6 pb-4 border-b border-gray-700">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gray-800 text-4xl">
                      {selectedSkill.emoji || <Code className="w-8 h-8" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                      <p className="text-rose-400">{selectedSkill.category}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-300 mb-2">Description</h4>
                    <p className="text-gray-300">{selectedSkill.description}</p>
                  </div>

                  {/* Links Section */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-300 mb-3">Resources & Examples</h4>

                    {/* Official Link */}
                    <a
                      href={selectedSkill.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
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
                          className="flex items-center gap-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsDesktop;