// src/components/sections/Skills/components/SkillCategory.jsx
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import GlassCard from '../../../common/GlassCard';
import { SkillCard } from './SkillCard';

export const SkillCategory = ({ category, isExpanded, onToggle }) => {
  return (
    <GlassCard
      hover={false}
      className="overflow-hidden"
      onClick={onToggle}
      as="button"
    >
      <div className="grid grid-cols-[1fr,auto,auto,auto] items-center gap-8 group">
        {/* Title */}
        <h2 className="
          text-2xl font-bold text-left
          bg-gradient-to-r from-purple-500 to-blue-500
          bg-clip-text text-transparent
        ">
          {category.title}
        </h2>

        {/* Metadata */}
        <div className="text-sm text-white/60">
          {category.totalSkills} Skills
        </div>
        <div className="text-sm text-white/60">
          {category.experience}
        </div>

        {/* Toggle Button */}
        <div className="
          w-10 h-10
          bg-white/[0.03] hover:bg-white/[0.06]
          border border-white/[0.06] hover:border-white/[0.12]
          rounded-xl
          flex items-center justify-center
          transition-all duration-300
          hover:-translate-y-1
        ">
          {isExpanded ?
            <Minus className="w-4 h-4 text-white/60" /> :
            <Plus className="w-4 h-4 text-white/60" />
          }
        </div>
      </div>

      {/* Expanded Content */}
      <div className={`
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-4 px-6
        transition-all duration-300 ease-out
        ${isExpanded ? 'max-h-[1000px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}
        overflow-hidden
      `}>
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </GlassCard>
  );
};

export default SkillCategory;