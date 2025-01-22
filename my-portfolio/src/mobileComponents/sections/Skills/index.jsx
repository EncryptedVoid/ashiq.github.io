import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, Clock, Code, GitBranch,
  ChevronDown, ChevronUp, Tag, Activity
} from 'lucide-react';
import { skillsData } from '../../../data/SkillsData';


const MobileSkillCard = ({ skill }) => (
  <motion.div
    layout
    className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]"
  >
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="text-base font-semibold text-white">{skill.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Clock className="w-3 h-3 text-white/40" />
          <span className="text-xs text-white/40">Since {skill.yearStarted}</span>
        </div>
      </div>
      <div className="flex gap-1">
        {skill.tags.slice(0, 2).map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs rounded-full bg-white/[0.06] text-white/60"
          >
            {tag}
          </span>
        ))}
        {skill.tags.length > 2 && (
          <span className="px-2 py-1 text-xs rounded-full bg-white/[0.06] text-white/60">
            +{skill.tags.length - 2}
          </span>
        )}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-2 mb-3">
      <div className="bg-white/[0.02] rounded-lg p-2">
        <div className="flex items-center gap-1 mb-1">
          <Code className="w-3 h-3 text-blue-400" />
          <p className="text-xs text-white/40">Projects</p>
        </div>
        <p className="text-sm font-medium text-white">
          {skill.metrics.projectsCompleted} 🎯
        </p>
      </div>
      <div className="bg-white/[0.02] rounded-lg p-2">
        <div className="flex items-center gap-1 mb-1">
          <Activity className="w-3 h-3 text-green-400" />
          <p className="text-xs text-white/40">Activity</p>
        </div>
        <p className="text-sm font-medium text-white">High ⚡</p>
      </div>
    </div>

    <p className="text-sm text-white/60 mb-3 line-clamp-2">
      {skill.description}
    </p>

    {skill.recentProjects.length > 0 && (
      <div className="space-y-1">
        {skill.recentProjects.slice(0, 2).map((project, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center text-xs bg-white/[0.02] rounded-lg p-2"
          >
            <span className="text-white/80">📂 {project.name}</span>
            <span className="text-white/40">{project.metric}</span>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

const MobileSkillCategory = ({ category, isExpanded, onToggle }) => (
  <div className="bg-white/[0.03] rounded-xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center text-xl bg-white/5 rounded-lg">
          {category.icon}
        </div>
        <div className="text-left">
          <h2 className="text-base font-semibold text-white">
            {category.title}
          </h2>
          <p className="text-xs text-white/60">
            {category.experience} • {category.skills.length} skills
          </p>
        </div>
      </div>
      {isExpanded ?
        <ChevronUp className="w-5 h-5 text-white/40" /> :
        <ChevronDown className="w-5 h-5 text-white/40" />
      }
    </button>

    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-4 pt-0 space-y-3">
            {category.skills.map((skill) => (
              <MobileSkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileSkills = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills based on search
  const filteredSkills = skillsData.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  return (
    <section className="py-12">
      {/* Header */}
      <div className="px-4 mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-sm text-white/60 mt-2">
          Technical capabilities and professional experience
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl py-3 pl-10 pr-4
                     text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
          />
        </div>
      </div>

      {/* Skills Categories */}
      <div className="px-4 space-y-3">
        {filteredSkills.map((category) => (
          <MobileSkillCategory
            key={category.id}
            category={category}
            isExpanded={expandedId === category.id}
            onToggle={() => setExpandedId(expandedId === category.id ? null : category.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileSkills;