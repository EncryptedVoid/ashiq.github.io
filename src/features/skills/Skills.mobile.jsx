import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Code, Activity, Sparkles } from 'lucide-react';
import { skillsData } from '@/data/SkillsData';

const MobileSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [skillIndex, setSkillIndex] = useState(0);

  // Category Card Component
  const CategoryCard = ({ category, onClick, index }) => (
    <motion.button
      onClick={onClick}
      className="w-full group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative w-full rounded-xl bg-white/5 border border-white/10
                    overflow-hidden group-hover:bg-white/10 transition-all duration-300">
        <div className="p-3 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center
                       justify-center text-xl group-hover:scale-110
                       transition-transform duration-300 flex-shrink-0">
            {category.icon}
          </div>
          <div className="flex-1 min-w-0 text-left py-1">
            <h3 className="text-base font-semibold text-white leading-snug">
              {category.title}
            </h3>
            <p className="text-xs text-white/60 mt-0.5">
              {category.skills.length} skills • {category.experience}
            </p>
          </div>
          <div className="pt-2 flex-shrink-0">
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1
                                  transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.button>
  );

  // Skill Details Modal
  const SkillDetailsView = ({ skill, onClose, onNext, onPrev, index, total }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-black/20 backdrop-blur-xl border-b border-white/10 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/60"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </button>
          <span className="text-sm text-white/60">
            {index + 1} of {total}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4 space-y-6">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-rose-500/10">
            <Sparkles className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{skill.name}</h2>
            <div className="flex items-center gap-1.5 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>Since {skill.yearStarted}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-white/80 leading-relaxed">{skill.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(skill.metrics).map(([key, value]) => (
            <div key={key} className="p-3 rounded-lg bg-white/5 space-y-1">
              <span className="text-xs text-white/40 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <div className="text-sm font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-white">Recent Work</h3>
          <div className="grid grid-cols-2 gap-2">
            {skill.recentProjects.map((project, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/5 space-y-0.5">
                <div className="text-sm text-white/80">{project.name}</div>
                <div className="text-xs text-white/40">{project.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-white">Technologies</h3>
          <div className="flex flex-wrap gap-1.5">
            {skill.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 rounded-lg bg-white/5 text-xs text-white/60">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 p-4 bg-black/20 backdrop-blur-xl border-t border-white/10">
        <div className="flex gap-2">
          <button
            onClick={onPrev}
            disabled={index === 0}
            className="flex-1 py-2 rounded-lg bg-white/5 disabled:opacity-50
                     text-white text-sm font-medium"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={index === total - 1}
            className="flex-1 py-2 rounded-lg bg-rose-500/10 text-rose-400
                     disabled:opacity-50 text-sm font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Categories */}
      <div className="px-4 space-y-2">
        {skillsData.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            index={index}
            onClick={() => {
              setSelectedCategory(category);
              setSkillIndex(0);
            }}
          />
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