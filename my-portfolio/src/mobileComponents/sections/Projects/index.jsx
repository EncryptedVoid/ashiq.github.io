import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Clock, Tag, X } from 'lucide-react';
import { TypewriterText } from '../../../styles/TypewriterText';
import { ProjectsData } from '../../../data/ProjectsData';

const ProjectCard = ({ project, onOpen }) => {
  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      'Completed': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      'Planning': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    };
    return colors[status] || colors['Active'];
  };

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpen}
    >
      {/* Project Image or Gradient */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose-500/20 to-red-500/20" />
        )}

        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
          {project.status}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Clock className="w-4 h-4" />
            <span>{project.duration}</span>
          </div>
        </div>

        <p className="text-sm text-white/80 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
        >
          <div className="relative h-full overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-xl border-b border-white/10">
              <div className="px-4 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10"
                >
                  <X className="w-6 h-6 text-white/60" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl overflow-hidden"
                />
              )}

              {/* Description */}
              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20"
                    >
                      <div className="text-lg font-bold text-rose-400">{value}</div>
                      <div className="text-sm text-white/60">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full text-sm bg-rose-500/10 text-rose-300 border border-rose-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4
                        rounded-xl bg-white/5 text-white hover:bg-white/10
                        border border-white/10 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4
                        rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30
                        border border-rose-500/30 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [category, setCategory] = useState('all');

  const filteredProjects = ProjectsData.filter(project =>
    category === 'all' || project.type.toLowerCase() === category.toLowerCase()
  );

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-16 px-4">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <TypewriterText
          text="Featured Projects"
          size={2.5}
          fromColor="#FA8072"
          toColor="#FF6B6B"
        />
        <p className="text-white/60 text-center">
          Swipe to explore my latest work
        </p>
      </div>

      {/* Category Filter */}
      <div className="overflow-x-auto hide-scrollbar mb-8">
        <div className="flex gap-2 pb-4">
          {['All', 'Frontend', 'Backend', 'Full Stack'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat.toLowerCase());
                setCurrentIndex(0);
              }}
              className={`
                px-4 py-2 rounded-full text-sm whitespace-nowrap
                transition-all duration-300
                ${category === cat.toLowerCase()
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                  : 'bg-white/5 text-white/60'}
                border
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <ProjectCard
            key={currentIndex}
            project={filteredProjects[currentIndex]}
            onOpen={() => setSelectedProject(filteredProjects[currentIndex])}
          />
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                transition-all duration-300 rounded-full
                ${index === currentIndex
                  ? 'w-8 h-2 bg-gradient-to-r from-rose-500 to-red-500'
                  : 'w-2 h-2 bg-white/20'}
              `}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default MobileProjects;