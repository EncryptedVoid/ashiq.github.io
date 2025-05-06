import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, Code, Zap, PenTool, GitBranch, Database, Layers } from 'lucide-react';
import { skillsData } from '@/data/SkillsData';
import { TypewriterText } from '@/components/TypewriterText';
import GlassCard from '@/components/GlassCard';

const SkillsDesktop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillsByCategory, setSkillsByCategory] = useState({});
  const mainContainerRef = useRef(null);

  // Extract all skills and organize by category
  useEffect(() => {
    const categorizedSkills = {};
    skillsData.forEach(category => {
      categorizedSkills[category.id] = category.skills;
    });
    setSkillsByCategory(categorizedSkills);
  }, []);

  // Get all unique tags across all skills
  const allSkills = skillsData.flatMap(category => category.skills);
  const allTags = [...new Set(allSkills.flatMap(skill => skill.tags))];

  // Filter skills based on search and category
  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === null ||
      skillsByCategory[selectedCategory]?.includes(skill);

    return matchesSearch && matchesCategory;
  });

  // Category icon mapping
  const categoryIcons = {
    'frontend-dev': <PenTool className="w-5 h-5" />,
    'testing-automation': <GitBranch className="w-5 h-5" />,
    'computer-science': <Code className="w-5 h-5" />,
    'ai-ml': <Database className="w-5 h-5" />
  };

  return (
    <div className="min-h-screen pb-24" ref={mainContainerRef}>
      {/* Header with search and filters */}
      <div className="mb-8 sticky top-0 z-30 bg-gradient-to-b from-gray-900 via-gray-900/95 to-transparent pb-8 pt-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Left: Search Bar */}
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-white/40" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, technologies, projects..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="w-5 h-5 text-white/40 hover:text-white/80" />
              </button>
            )}
          </div>

          {/* Right: Category Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${selectedCategory === null
                  ? 'bg-blue-500/80 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
            >
              <Layers className="w-4 h-4 inline-block mr-2" />
              All Skills
            </button>

            {skillsData.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-blue-500/80 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              >
                {categoryIcons[category.id] || <Zap className="w-4 h-4 inline-block mr-2" />}
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <GlassCard className="h-full cursor-pointer group">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-blue-500/10 blur-xl rounded-3xl"></div>

              {/* Skill content */}
              <div className="flex flex-col h-full">
                <div className="mb-3 flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-300">
                    {skill.name}
                  </h3>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    Since {skill.yearStarted}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-4 line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Metrics display */}
                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-xs text-white/40 mb-1">Code</div>
                      <div className="font-semibold text-white">
                        {skill.metrics.linesOfCode?.toLocaleString()}+
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-xs text-white/40 mb-1">Projects</div>
                      <div className="font-semibold text-white">
                        {skill.metrics.projectsCompleted}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {skill.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 group-hover:bg-white/10 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {skill.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                        +{skill.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* No results message */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-2">No skills found</h3>
          <p className="text-white/60 mb-6">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
            }}
            className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-0 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with sticky position */}
              <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-white/10 bg-gradient-to-b from-gray-900/95 to-gray-900/80 backdrop-blur-md">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  {selectedSkill.name}
                </h2>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Skill Overview */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                      Since {selectedSkill.yearStarted}
                    </span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                      {selectedSkill.metrics.projectsCompleted} Projects
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                      {selectedSkill.metrics.contributions} Contributions
                    </span>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Metrics in Detail */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Skill Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <Code className="w-6 h-6 text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {selectedSkill.metrics.linesOfCode?.toLocaleString()}+
                      </div>
                      <div className="text-white/60">Lines of Code</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <GitBranch className="w-6 h-6 text-green-400 mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {selectedSkill.metrics.projectsCompleted}
                      </div>
                      <div className="text-white/60">Projects Completed</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {selectedSkill.metrics.contributions}
                      </div>
                      <div className="text-white/60">Contributions</div>
                    </div>
                  </div>
                </div>

                {/* Recent Projects */}
                {selectedSkill.recentProjects && selectedSkill.recentProjects.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Recent Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedSkill.recentProjects.map((project, idx) => (
                        <div
                          key={idx}
                          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-semibold text-white mb-1">
                              {project.name}
                            </h4>
                            <span className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/60">
                              {project.metric}
                            </span>
                          </div>
                          {/* We could add more project details here if available */}
                          <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                              initial={{ width: 0 }}
                              animate={{ width: '70%' }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies/Tags */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsDesktop;