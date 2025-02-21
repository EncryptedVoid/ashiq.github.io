// src/components/sections/Projects/index.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectsData from '../../../data/ProjectsData';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { TypewriterText } from '../../../styles/TypewriterText';
import { Filter, LayoutGrid, LayoutList } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'top', 'developed', 'construction'
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'

  // Get available project types for filtering
  const availableTypes = useMemo(() => {
    const types = ProjectsData.map(project => project.type);
    // Return unique types that have at least one project
    return ['ALL', ...new Set(types)].filter(type =>
      type === 'ALL' || ProjectsData.some(project => project.type === type)
    );
  }, []);

  // Filter projects based on viewMode
  const filteredProjects = useMemo(() => {
    switch(viewMode) {
      case 'top':
        return ProjectsData.filter(project => project.isTopProject);
      case 'developed':
        // Sort by startDate (oldest first) and filter completed projects
        return [...ProjectsData]
          .filter(project => project.progress === 100)
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      case 'construction':
        return ProjectsData.filter(project => project.progress < 100);
      default:
        return ProjectsData;
    }
  }, [viewMode]);

  return (
    <div className="py-20 px-4 md:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TypewriterText
          text="PROJECTS SHOWCASE"
          size={3}
          typingSpeed={100}
          delayBeforeRestart={60000}
        />
        <p className="text-lg text-white/60">
          A curated collection of my technical work, from professional projects to personal experiments
        </p>
      </motion.div>

      {/* Filters and View Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mb-8 gap-4">
        {/* View Mode Selector */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex items-center">
            <Filter className="w-5 h-5 text-white/60 absolute left-3" />
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className="
                pl-10 pr-4 py-2
                bg-white/5 text-white/80
                border border-white/10
                rounded-lg appearance-none
                focus:outline-none focus:ring-2 focus:ring-blue-500/50
                transition-all duration-300
                cursor-pointer
              "
            >
              <option value="all">ALL PROJECTS</option>
              <option value="top">TOP PROJECTS</option>
              <option value="developed">MOST DEVELOPED</option>
              <option value="construction">UNDER CONSTRUCTION</option>
            </select>
            <div className="absolute right-3 pointer-events-none">
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* View Layout Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLayout('grid')}
            className={`
              p-2 rounded-lg
              ${layout === 'grid'
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-white/5 text-white/60 border-white/10'}
              border
              transition-all duration-300
            `}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setLayout('list')}
            className={`
              p-2 rounded-lg
              ${layout === 'list'
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-white/5 text-white/60 border-white/10'}
              border
              transition-all duration-300
            `}
          >
            <LayoutList className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-5xl mx-auto">
        {availableTypes.map((type, index) => (
          <motion.button
            key={type}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => {
              if (type === 'ALL') {
                setViewMode('all');
              } else {
                setViewMode(type.toLowerCase());
              }
            }}
            className={`
              px-4 py-2 rounded-lg
              transition-all duration-300 text-sm
              ${viewMode === (type === 'ALL' ? 'all' : type.toLowerCase())
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-white/5 text-white/60 border-white/10'
              }
              border
              hover:bg-white/10
              hover:border-white/20
              uppercase font-medium tracking-wide
            `}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid/List */}
      <div className={`
        max-w-7xl mx-auto
        ${layout === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'space-y-6'
        }
      `}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={layout === 'list' ? 'w-full' : ''}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
              layout={layout}
            />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40 text-lg">No projects matching the selected filter</p>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;