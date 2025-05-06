import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, ArrowLeft, ArrowRight, Zap, Code, GitBranch } from 'lucide-react';
import { skillsData } from '@/data/SkillsData';
import { TypewriterText } from '@/components/TypewriterText';

const SkillsMobile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const searchInputRef = useRef(null);

  // All skills flattened into a single array
  const allSkills = skillsData.flatMap(category => category.skills);

  // Filter skills based on search and category
  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = !selectedCategory ||
      skillsData.find(c => c.id === selectedCategory)?.skills.includes(skill);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-20">
      {/* Header with search */}
      <div className="sticky top-0 z-30 pt-4 pb-4 bg-gradient-to-b from-gray-900 via-gray-900/95 to-transparent">
        <div className="flex items-center gap-2 mb-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-white/40" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-9 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="w-4 h-4 text-white/40" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
              showFilters || selectedCategory
                ? 'bg-blue-500/20 border-blue-500/40 text-blue-400'
                : 'bg-white/5 border-white/10 text-white/60'
            }`}
          >
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Category filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    selectedCategory === null
                      ? 'bg-blue-500/80 text-white'
                      : 'bg-white/5 text-white/60'
                  }`}
                >
                  All
                </button>
                {skillsData.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-500/80 text-white'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skills Grid */}
      <div className="px-4 space-y-3">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 active:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-white/60">
                  {skill.yearStarted}
                </span>
              </div>

              <p className="text-sm text-white/60 line-clamp-2 mb-3">{skill.description}</p>

              {/* Metrics preview */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="text-xs text-white/40 mb-0.5">Code</div>
                  <div className="text-sm font-medium text-white">{skill.metrics.linesOfCode?.toLocaleString()}+</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="text-xs text-white/40 mb-0.5">Projects</div>
                  <div className="text-sm font-medium text-white">{skill.metrics.projectsCompleted}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 bg-white/5 rounded-lg text-xs text-white/60">
                    {tag}
                  </span>
                ))}
                {skill.tags.length > 2 && (
                  <span className="px-2 py-0.5 bg-white/5 rounded-lg text-xs text-white/60">
                    +{skill.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* No results message */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold text-white mb-2">No skills found</h3>
            <p className="text-sm text-white/60 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ translateY: '100%' }}
            animate={{ translateY: 0 }}
            exit={{ translateY: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-gray-900 overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5"
                >
                  <ArrowLeft className="w-5 h-5 text-white/60" />
                </button>
                <h2 className="text-lg font-semibold text-white">{selectedSkill.name}</h2>
                <div className="w-8 h-8" /> {/* Empty div for flex spacing */}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 space-y-6">
              {/* Overview */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs">
                    Since {selectedSkill.yearStarted}
                  </span>
                  {selectedSkill.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white/80 text-base">{selectedSkill.description}</p>
              </div>

              {/* Metrics */}
              <div className="space-y-3">
                <h3 className="text-base font-medium text-white">Skill Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <Code className="w-5 h-5 text-blue-400 mb-1" />
                    <div className="text-xl font-bold text-white mb-0.5">
                      {selectedSkill.metrics.linesOfCode?.toLocaleString()}+
                    </div>
                    <div className="text-xs text-white/60">Lines of Code</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <GitBranch className="w-5 h-5 text-green-400 mb-1" />
                    <div className="text-xl font-bold text-white mb-0.5">
                      {selectedSkill.metrics.projectsCompleted}
                    </div>
                    <div className="text-xs text-white/60">Projects</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <Zap className="w-5 h-5 text-yellow-400 mb-1" />
                    <div className="text-xl font-bold text-white mb-0.5">
                      {selectedSkill.metrics.contributions}
                    </div>
                    <div className="text-xs text-white/60">Contributions</div>
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              {selectedSkill.recentProjects && selectedSkill.recentProjects.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-white">Recent Projects</h3>
                  <div className="space-y-2">
                    {selectedSkill.recentProjects.map((project, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm font-medium text-white">{project.name}</h4>
                          <span className="px-2 py-0.5 bg-white/10 rounded-lg text-xs text-white/60">
                            {project.metric}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Technologies/Tags */}
              <div className="space-y-3">
                <h3 className="text-base font-medium text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/5 rounded-lg text-sm text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsMobile;