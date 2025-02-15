import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Code, Activity, Sparkles } from 'lucide-react';
import { skillsData } from '../../../data/SkillsData';

const MobileSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [skillIndex, setSkillIndex] = useState(0);

  // Full page modal for skill details
  const SkillDetailsView = ({ skill, onClose, onNext, onPrev, index, total }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-b border-white/10 z-10">
        <div className="px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
            <span>All Skills</span>
          </button>
          <span className="text-white/60 text-sm font-medium">{index + 1} of {total}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-20 pb-24 space-y-8">
        {/* Skill Title */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-rose-500/10">
            <Sparkles className="w-6 h-6 text-rose-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{skill.name}</h2>
            <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
              <Clock className="w-4 h-4" />
              <span>Since {skill.yearStarted}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-white/80 leading-relaxed">{skill.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(skill.metrics).map(([key, value]) => (
            <div
              key={key}
              className="p-4 rounded-xl bg-white/5 space-y-1"
            >
              <span className="text-white/40 text-sm capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <div className="text-xl font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Recent Work</h3>
          <div className="grid grid-cols-2 gap-3">
            {skill.recentProjects.map((project, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 space-y-1"
              >
                <div className="text-white/80 font-medium">{project.name}</div>
                <div className="text-sm text-white/40">{project.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-white/5 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-lg border-t border-white/10">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={index === 0}
            className="flex-1 p-4 rounded-xl bg-white/5 disabled:opacity-50 disabled:pointer-events-none
                     text-white font-medium text-center"
          >
            Previous
          </button>

          <button
            onClick={onNext}
            disabled={index === total - 1}
            className="flex-1 p-4 rounded-xl bg-rose-500/10 text-rose-400
                     disabled:opacity-50 disabled:pointer-events-none
                     font-medium text-center"
          >
            Next Skill
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <motion.div
        className="py-8 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1
          className="text-2xl font-bold text-center bg-gradient-to-r from-rose-400 to-red-500
                     bg-clip-text text-transparent mb-2"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        >
          Skills & Expertise
        </motion.h1>
        <p className="text-white/60 text-sm text-center">
          Tap a category to explore skills
        </p>
      </motion.div>

      {/* Categories */}
      <div className="px-4 space-y-3">
        {skillsData.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category);
              setSkillIndex(0);
            }}
            className="w-full group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Category Card */}
            <div className="relative w-full h-20 rounded-2xl bg-gradient-to-r from-white/5 to-white/10
                          border border-white/10 overflow-hidden group-hover:bg-white/10
                          transition-all duration-300">
              {/* Content */}
              <div className="absolute inset-0 p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center
                              justify-center text-2xl group-hover:scale-110
                              transition-transform duration-300">
                  {category.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-0.5">
                    {category.skills.length} skills • {category.experience}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:translate-x-1
                                      transition-transform duration-300" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <SkillDetailsView
            skill={selectedCategory.skills[skillIndex]}
            index={skillIndex}
            total={selectedCategory.skills.length}
            onClose={() => setSelectedCategory(null)}
            onNext={() => skillIndex < selectedCategory.skills.length - 1 && setSkillIndex(i => i + 1)}
            onPrev={() => skillIndex > 0 && setSkillIndex(i => i - 1)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSkills;