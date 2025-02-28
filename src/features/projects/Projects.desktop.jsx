import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsData from '@/data/ProjectsData';
import { ProjectCard, ProjectModal } from './components/';
import { Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'top', 'developed', 'construction'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Get available project types for filtering
  const availableTypes = useMemo(() => {
    const types = ProjectsData.map(project => project.type);
    // Return unique types that have at least one project
    return ['ALL', ...new Set(types)].filter(type =>
      type === 'ALL' || ProjectsData.some(project => project.type === type)
    );
  }, []);

  // Filter projects based on viewMode with smooth transition
  const filteredProjects = useMemo(() => {
    let filteredData;

    switch(viewMode) {
      case 'top':
        filteredData = ProjectsData.filter(project => project.isTopProject);
        break;
      case 'developed':
        // Sort by startDate (oldest first) and filter completed projects
        filteredData = [...ProjectsData]
          .filter(project => project.progress === 100)
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        break;
      case 'construction':
        filteredData = ProjectsData.filter(project => project.progress < 100);
        break;
      default:
        filteredData = [...ProjectsData];
    }

    // Sort projects - first by top, then by difficulty, then by recency
    return filteredData.sort((a, b) => {
      // First sort by featured/top projects
      if (a.isTopProject && !b.isTopProject) return -1;
      if (!a.isTopProject && b.isTopProject) return 1;

      // Then by difficulty
      if (a.difficulty !== b.difficulty) return b.difficulty - a.difficulty;

      // Then by recency of update
      return new Date(b.lastUpdate) - new Date(a.lastUpdate);
    });
  }, [viewMode]);

  // Handle filter changes with animation
  const handleFilterChange = (newMode) => {
    setIsTransitioning(true);

    // Wait for fade-out animation to complete
    setTimeout(() => {
      setViewMode(newMode);

      // Reset carousel scroll position
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }

      // Wait a bit before ending transition to ensure data is updated
      setTimeout(() => {
        setIsTransitioning(false);
        checkArrows();
      }, 50);
    }, 300);
  };

  // Scroll handlers for carousel
  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = Math.min(carouselRef.current.clientWidth * 0.8, 800);
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = Math.min(carouselRef.current.clientWidth * 0.8, 800);
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Check if arrows should be displayed
  const checkArrows = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkArrows);

      // Initial check
      checkArrows();

      return () => carousel.removeEventListener('scroll', checkArrows);
    }
  }, [filteredProjects]);

  // Recheck arrows when window is resized
  useEffect(() => {
    const handleResize = () => checkArrows();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="py-6 px-4 md:px-6 lg:px-8">
      {/* Filters Row */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-4 w-full mb-8">
          <div className="relative flex items-center mb-2">
            <Filter className="w-5 h-5 text-white/60 absolute left-3" />
            <select
              value={viewMode}
              onChange={(e) => handleFilterChange(e.target.value)}
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
              <option value="developed">COMPLETE PROJECTS</option>
              <option value="construction">IN DEVELOPMENT</option>
            </select>
            <div className="absolute right-3 pointer-events-none">
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {availableTypes.map((type, index) => (
            <motion.button
              key={type}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => {
                if (type === 'ALL') {
                  handleFilterChange('all');
                } else {
                  handleFilterChange(type.toLowerCase());
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
      </div>

      {/* Carousel Projects Section */}
      <div className="max-w-7xl mx-auto relative">
        {/* Left Navigation Arrow */}
        <AnimatePresence>
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                       w-14 h-14 rounded-full
                       bg-black/40 backdrop-blur-sm
                       border border-white/10 hover:border-white/20
                       flex items-center justify-center
                       shadow-lg shadow-black/20
                       transition-transform duration-300
                       hover:-translate-x-1"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Right Navigation Arrow */}
        <AnimatePresence>
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                       w-14 h-14 rounded-full
                       bg-black/40 backdrop-blur-sm
                       border border-white/10 hover:border-white/20
                       flex items-center justify-center
                       shadow-lg shadow-black/20
                       transition-transform duration-300
                       hover:translate-x-1"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Projects Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode} // Force re-render on viewMode change
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
                          <div
              ref={carouselRef}
              className="flex overflow-x-auto pb-8 pt-4 gap-8 pl-4 pr-8 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={checkArrows}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{ width: '400px', height: 'auto' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                    className="h-full"
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                      layout="grid" // Always use grid layout for carousel
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No projects matching the selected filter</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;