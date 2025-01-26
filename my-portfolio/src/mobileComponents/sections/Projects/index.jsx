import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Clock, Activity, Star, X, ChevronRight } from 'lucide-react';
import { ProjectsData as projectsData } from '../../../data/ProjectsData';

const MobileProjectCard = ({ project, onOpenDetails }) => {
  const statusColors = {
    'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'In Progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Planning': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };

  return (
    <div className="bg-white/[0.03] rounded-xl overflow-hidden">
      <div className="relative h-48">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <Activity className="w-12 h-12 text-white/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

        <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full border
          ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <div className="flex items-center gap-1 mt-1 text-xs text-white/40">
            <Clock className="w-3 h-3" />
            {project.duration}
          </div>
        </div>

        <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs bg-white/5 rounded-full text-white/60">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 text-xs bg-white/5 rounded-full text-white/60">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          {project.links.github && (
            <a href={`${project.links.github}/stargazers`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
              onClick={(e) => e.stopPropagation()}>
              <Star className="w-5 h-5" />
              <span className="text-sm">Star Project</span>
            </a>
          )}
          <button onClick={onOpenDetails}
            className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-400 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
        >
          <div className="min-h-screen">
            <div className="sticky top-0 z-10 p-4 bg-black/80 backdrop-blur-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <button onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6 text-white/60" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-6">
              {/* Rest of modal content remains the same */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = projectsData.filter(project =>
    filter === 'all' || project.type === filter
  );

  const filterTypes = ['all', 'Professional', 'Open Source', 'Personal'];

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? handleNext() : handlePrev();
    }
    setIsPaused(false);
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500
        bg-clip-text text-transparent mb-6 text-center uppercase">
        Featured Projects
      </h2>

      <div className="relative mb-6">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilter(type);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border uppercase
                ${filter === type
                  ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  : 'bg-white/5 text-white/60 border-white/10'}`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-full
          bg-gradient-to-l from-black to-transparent pointer-events-none flex items-center">
          <ChevronRight className="w-5 h-5 text-white/40 ml-auto" />
        </div>
      </div>

      <div className="relative touch-pan-x"
           onTouchStart={onTouchStart}
           onTouchMove={onTouchMove}
           onTouchEnd={onTouchEnd}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <MobileProjectCard
              project={filteredProjects[currentIndex]}
              onOpenDetails={() => setSelectedProject(filteredProjects[currentIndex])}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {filteredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              transition-all duration-300 rounded-full touch-manipulation
              ${index === currentIndex
                ? 'w-10 h-2 bg-gradient-to-r from-purple-500 to-blue-500'
                : 'w-2 h-2 bg-white/20 active:bg-white/30'
              }
            `}
          />
        ))}
      </div>

      <MobileProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default MobileProjects;