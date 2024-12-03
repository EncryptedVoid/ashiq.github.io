// src/components/sections/Skills/index.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../common/GlassCard';
import SkillCategory from './components/SkillCategory';
import { Search } from 'lucide-react';
import { skillsData } from '../../../data/SkillsData';

const Skills = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags
  const allTags = [...new Set(
    skillsData.flatMap(category =>
      category.skills.flatMap(skill => skill.tags)
    )
  )];

  // Filter skills based on search and tags
  const filteredSkills = skillsData.map(category => ({
    ...category,
    skills: category.skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || skill.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    })
  })).filter(category => category.skills.length > 0);

  return (
    <div className="py-20">
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-lg text-white/60">
          A comprehensive overview of my technical capabilities and professional experience
          across different domains.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto mb-12">
        <GlassCard className="p-4">
          <div className="flex flex-wrap gap-4">
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full py-2 px-10
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  text-white
                  placeholder:text-white/40
                  focus:outline-none focus:border-white/20
                  transition-colors duration-300
                "
              />
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`
                    px-3 py-1
                    rounded-full
                    text-sm
                    transition-all duration-300
                    ${selectedTag === tag
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }
                  `}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Skills Grid */}
      <div className="space-y-6">
        {filteredSkills.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <SkillCategory
              category={category}
              isExpanded={expandedId === category.id}
              onToggle={() => setExpandedId(expandedId === category.id ? null : category.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;