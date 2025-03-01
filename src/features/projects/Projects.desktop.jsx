import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsData from '@/data/ProjectsData';
import { ProjectCard, ProjectModal } from './components/';
import { ChevronLeft, ChevronRight, ArrowDown, Star, Award, Clock, Calendar } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'top', 'developed', 'construction'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Get available project types for filtering
  const availableTypes = useMemo(() => {
    const types = ProjectsData.map(project => project.type);
    // Return unique types that have at least one project
    return [...new Set(types)].filter(type =>
      ProjectsData.some(project => project.type === type)
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

  // Calculate top 3 projects based on difficulty, time investment and recency
  const topThreeProjects = useMemo(() => {
    // Create a scoring function to rank projects
    const scoreProject = (project) => {
      // Convert timeInvestment string (e.g., "60+ hours") to a number
      const timeScore = parseInt(project.timeInvestment.match(/\d+/)[0]);

      // Calculate days since last update (lower is better)
      const daysSinceUpdate = (new Date() - new Date(project.lastUpdate)) / (1000 * 60 * 60 * 24);
      const recencyScore = 100 - Math.min(daysSinceUpdate, 100); // Cap at 100 days old

      // Weight each factor (adjust these weights as needed)
      const difficultyWeight = 0.4;
      const timeWeight = 0.3;
      const recencyWeight = 0.3;

      // Calculate total score
      return (
        project.difficulty * 20 * difficultyWeight +
        timeScore * timeWeight +
        recencyScore * recencyWeight
      );
    };

    // Score all projects
    const scoredProjects = [...ProjectsData].map(project => ({
      ...project,
      score: scoreProject(project)
    }));

    // Sort projects by score and get top 3
    return scoredProjects
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, []);

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

  // Toggle between top 3 and all projects
  const toggleProjectView = () => {
    setIsTransitioning(true);

    // Wait for fade-out animation to complete
    setTimeout(() => {
      setShowAllProjects(prev => !prev);

      // Reset view mode to 'all' when showing all projects
      if (!showAllProjects) {
        setViewMode('all');
      }

      // Reset carousel scroll position if switching to all projects
      if (!showAllProjects && carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }

      // Wait a bit before ending transition
      setTimeout(() => {
        setIsTransitioning(false);
        if (!showAllProjects) {
          checkArrows();
        }
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
    if (carousel && showAllProjects) {
      carousel.addEventListener('scroll', checkArrows);

      // Initial check
      checkArrows();

      return () => carousel.removeEventListener('scroll', checkArrows);
    }
  }, [filteredProjects, showAllProjects]);

  // Recheck arrows when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (showAllProjects) {
        checkArrows();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showAllProjects]);

  return (
    <div className="py-1 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-8">
        {/* Top Projects Section Header */}
        {!showAllProjects && (
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-2"
            >
              <Award className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/60"
            >
              Showcasing my top projects based on technical complexity, time investment, and recency
            </motion.p>
          </div>
        )}

        {/* Filter Tags - Only visible when showAllProjects is true */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleFilterChange('all')}
                  className={`
                    px-4 py-2 rounded-lg
                    transition-all duration-300 text-sm
                    ${viewMode === 'all'
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      : 'bg-white/5 text-white/60 border-white/10'
                    }
                    border
                    hover:bg-white/10
                    hover:border-white/20
                    uppercase font-medium tracking-wide
                  `}
                >
                  ALL
                </motion.button>
                {availableTypes.map((type, index) => (
                  <motion.button
                    key={type}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index + 1) * 0.05 }}
                    onClick={() => handleFilterChange(type.toLowerCase())}
                    className={`
                      px-4 py-2 rounded-lg
                      transition-all duration-300 text-sm
                      ${viewMode === type.toLowerCase()
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Conditional Display: Top 3 Projects or Carousel */}
      <AnimatePresence mode="wait">
        {!showAllProjects ? (
          /* Top 3 Projects Grid */
          <motion.div
            key="top-three"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {topThreeProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Top Project Indicator */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm text-white text-sm font-semibold shadow-lg flex items-center gap-2 border border-white/30">
                      <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                      {index === 0 && "Top Project"}
                      {index === 1 && "Featured Project"}
                      {index === 2 && "Highlighted Project"}
                    </div>
                  </div>

                  {/* Project Ranking Criteria */}
                  <div className="absolute -right-2 top-12 z-10 flex flex-col gap-1">
                    <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white/80 shadow-md border border-white/10 flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-blue-400" />
                      <span>Difficulty: {project.difficulty}/5</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white/80 shadow-md border border-white/10 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-purple-400" />
                      <span>{project.timeInvestment}</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white/80 shadow-md border border-white/10 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-green-400" />
                      <span>Updated {new Date(project.lastUpdate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>

                  {/* Glowing Highlight Effect for Top Projects */}
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/40 to-blue-500/30 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>

                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                    layout="grid"
                  />
                </motion.div>
              ))}
            </div>

            {/* Show All Projects Button */}
            <div className="flex justify-center">
              <motion.button
                onClick={toggleProjectView}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-6 py-3 rounded-full
                  bg-gradient-to-r from-blue-500/30 to-purple-500/30
                  hover:from-blue-500/40 hover:to-purple-500/40
                  text-white font-medium
                  border border-blue-500/40
                  shadow-lg shadow-blue-500/10
                  flex items-center gap-2
                  transition-all duration-300
                  animate-pulse-slow
                "
              >
                <span>View All Projects</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* Carousel Projects Section */
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto relative"
          >
            {/* Section header with back to top projects button */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">All Projects</h2>
              <motion.button
                onClick={toggleProjectView}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex items-center gap-2 px-4 py-2
                  bg-white/5
                  hover:bg-white/10
                  text-white/80 font-medium
                  border border-white/10
                  rounded-lg transition-colors duration-300
                "
              >
                <span>Back to Featured</span>
              </motion.button>
            </div>

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

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-4">
                <p className="text-white/40 text-lg">No projects matching the selected filter</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Hide scrollbar and define animations */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
          }
          50% {
            opacity: 0.85;
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.7);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;