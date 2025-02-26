// src/components/sections/Skills/components/SkillCategory.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import SkillCard from './SkillCard.desktop';

const SkillCategory = ({ category, isExpanded, onToggle }) => {
  return (
    <GlassCard hover={false} className="overflow-hidden">
      {/* Category Header */}
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className="
          grid grid-cols-[auto,1fr,auto,auto] items-center gap-6
          p-6
          group
        ">
          {/* Icon */}
          <div className="
            w-12 h-12
            flex items-center justify-center
            text-2xl
            bg-white/5
            rounded-xl
            group-hover:scale-110
            transition-transform duration-300
          ">
            {category.icon}
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="
              text-xl font-bold
              bg-gradient-to-r from-purple-500 to-blue-500
              bg-clip-text text-transparent
            ">
              {category.title}
            </h2>
            <p className="text-sm text-white/60 mt-1">
              {category.description}
            </p>
          </div>

          {/* Experience */}
          <div className="text-sm text-white/60">
            {category.experience}
          </div>

          {/* Toggle Button */}
          <div className="
            w-10 h-10
            bg-white/5
            rounded-xl
            flex items-center justify-center
            transition-all duration-300
            group-hover:bg-white/10
          ">
            {isExpanded ?
              <Minus className="w-5 h-5 text-white/60" /> :
              <Plus className="w-5 h-5 text-white/60" />
            }
          </div>
        </div>
      </button>

      {/* Skills Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
              gap-4 p-6
              border-t border-white/5
            ">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};

export default SkillCategory;