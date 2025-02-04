import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../common/GlassCard';
import SkillCategory from './components/SkillCategory';
import { Search, X, Clock, Code, GitBranch, Users, Activity, Folder, Tag } from 'lucide-react';
import { skillsData } from '../../../data/SkillsData';
import { TypewriterText } from '../../../styles/TypewriterText'


const Skills = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags - assuming this comes from your existing data
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
        <TypewriterText
          text="Skills & Expertise"
          size={3}
          typingSpeed={100}
          delayBeforeRestart={60000}
        />
        <p className="text-lg text-white/60">
          A comprehensive overview of my technical capabilities and professional experience
          across different domains.
        </p>
      </motion.div>

      {/* Filter Tags */}
      <div className="max-w-7xl mx-auto mb-12">
        <GlassCard className="p-6">
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag, index) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`
                  px-4 py-2
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all duration-300
                  ${selectedTag === tag
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5'
                  }
                  ${index >= 7 ? 'hidden lg:block' : ''}
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Skills Grid */}
      <div className="relative">
        {/* Grid of Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                              <button
                onClick={() => setExpandedId(expandedId === category.id ? null : category.id)}
                className="w-full text-left h-full"
              >
                <GlassCard className={`p-6 transition-all duration-300 hover:scale-105 h-48
                  ${expandedId === category.id ? 'border-blue-500' : 'border-white/10'}
                  flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h2 className="text-xl font-bold text-white leading-tight">{category.title}</h2>
                    </div>
                    <p className="text-white/60 text-sm line-clamp-2">{category.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/[0.06]">
                    <span className="text-sm text-white/40">{category.experience}</span>
                    <span className="text-sm text-white/40">{category.skills.length} skills</span>
                  </div>
                </GlassCard>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Expanded Category View */}
        <AnimatePresence>
          {expandedId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={(e) => {
                if (e.target === e.currentTarget) setExpandedId(null);
              }}
            >
              <motion.div
                className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">
                      {filteredSkills.find(c => c.id === expandedId)?.icon}
                    </span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {filteredSkills.find(c => c.id === expandedId)?.title}
                      </h2>
                      <p className="text-white/60 text-sm md:text-base mt-1">
                        {filteredSkills.find(c => c.id === expandedId)?.experience}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white/60" />
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {filteredSkills.find(c => c.id === expandedId)?.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06]"
                      >
                        {/* Skill Header */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {skill.name}
                            </h3>
                            <div className="flex items-center gap-2 text-white/40 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>Since {skill.yearStarted}</span>
                            </div>
                          </div>
                        </div>

                        {/* Metrics - Only shown on larger screens */}
                        <div className="hidden md:grid grid-cols-2 gap-4 mb-4">
                          {skill.metrics.linesOfCode > 0 && (
                            <div className="bg-white/[0.02] rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Code className="w-4 h-4 text-blue-400" />
                                <p className="text-white/40 text-sm">Lines Written</p>
                              </div>
                              <p className="text-white font-semibold">
                                {skill.metrics.linesOfCode.toLocaleString()} 📝
                              </p>
                            </div>
                          )}
                          <div className="bg-white/[0.02] rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Folder className="w-4 h-4 text-green-400" />
                              <p className="text-white/40 text-sm">Projects</p>
                            </div>
                            <p className="text-white font-semibold">
                              {skill.metrics.projectsCompleted} 🎯
                            </p>
                          </div>
                          <div className="bg-white/[0.02] rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <GitBranch className="w-4 h-4 text-purple-400" />
                              <p className="text-white/40 text-sm">Contributions</p>
                            </div>
                            <p className="text-white font-semibold">
                              {skill.metrics.contributions} 🔄
                            </p>
                          </div>
                          <div className="bg-white/[0.02] rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Activity className="w-4 h-4 text-orange-400" />
                              <p className="text-white/40 text-sm">Activity Level</p>
                            </div>
                            <p className="text-white font-semibold">
                              High ⚡
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex gap-2 text-white/60 text-sm md:text-base mb-4">
                          <Users className="w-5 h-5 flex-shrink-0 mt-1 text-white/40" />
                          <p>{skill.description}</p>
                        </div>

                        {/* Recent Projects */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Folder className="w-4 h-4 text-yellow-400" />
                            <p className="text-white/40 text-sm font-medium">Recent Projects:</p>
                          </div>
                          {skill.recentProjects.map((project, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm bg-white/[0.02] rounded-lg p-2">
                              <span className="text-white/80">📂 {project.name}</span>
                              <span className="text-white/40">📊 {project.metric}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          <div className="flex items-center gap-2 w-full mb-1">
                            <Tag className="w-4 h-4 text-blue-400" />
                            <span className="text-white/40 text-sm">Technologies:</span>
                          </div>
                          {skill.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-full bg-white/[0.06] text-white/60"
                            >
                              🔹 {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
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

export default Skills;