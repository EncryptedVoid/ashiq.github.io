import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Youtube, Book, FileText, Star, Calendar, Clock, ArrowUpRight, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import ProjectsData from '../../../data/ProjectsData';

// Custom Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="px-4 mb-6">
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
      {title}
    </h2>
    {subtitle && <p className="text-white/60 mt-1 text-sm">{subtitle}</p>}
  </div>
);

// Filter Toggle Button Component
const FilterToggle = ({ filters, activeFilter, onFilterChange }) => (
  <div className="px-4 mb-6">
    <div className="flex flex-wrap items-center justify-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-all duration-300
                     border ${
            activeFilter === filter.value
              ? 'bg-white/10 text-white border-white/30'
              : 'bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:text-white/80'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  </div>
);

// Enhanced Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  const TechTag = ({ tech }) => (
    <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10">
      {tech}
    </span>
  );

  const LinkButton = ({ href, icon: Icon, text, className = '' }) => {
    if (!href) return null;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg
                   bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80
                   group transition-all duration-300 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Icon className="w-4 h-4" />
        <span className="text-sm">{text}</span>
        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          onClick={e => e.stopPropagation()}
          className="bg-gray-900/90 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header with Image */}
          <div className="relative h-48">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 text-white/80" />
            </button>

            {/* Title */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  v{project.version}
                </span>
                <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Star className="w-3 h-3" />
                  <span>{project.difficulty}/5</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">{project.title}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Project Timeline */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Started {project.startDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{project.timeInvestment}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80">{project.description}</p>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Progress</span>
                <span className="text-white/80">{project.progress}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <div className="text-xs text-white/40 text-right">
                Last updated: {project.lastUpdate}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/80">TECHNOLOGIES</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <TechTag key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/80">METRICS</h3>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="p-2 rounded-lg bg-white/5 text-center">
                    <div className="text-sm font-medium text-white/80 truncate">{value}</div>
                    <div className="text-xs text-white/40 truncate capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {project.links.github && (
                <LinkButton href={project.links.github} icon={Github} text="Code" />
              )}
              {project.links.live && (
                <LinkButton href={project.links.live} icon={ExternalLink} text="Live Demo" />
              )}
              {project.links.caseStudy && (
                <LinkButton href={project.links.caseStudy} icon={FileText} text="Case Study" />
              )}
              {project.links.blog && (
                <LinkButton href={project.links.blog} icon={Book} text="Blog Post" />
              )}
              {project.links.video && (
                <LinkButton href={project.links.video} icon={Youtube} text="Video" />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Compact Project Card Component
const ProjectCard = ({ project, onClick }) => {
  const { title, description, image, version, difficulty, progress, technologies, links } = project;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group flex-shrink-0 w-[280px] sm:w-[320px] h-[280px] relative rounded-xl bg-white/[0.02] border border-white/[0.1]
                 hover:bg-white/[0.04] hover:border-white/[0.2] transition-all duration-300
                 cursor-pointer overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
            v{version}
          </span>
          <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Star className="w-3 h-3" />
            <span>{difficulty}/5</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="mt-auto">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent
                         group-hover:bg-clip-text group-hover:bg-gradient-to-r
                         group-hover:from-blue-400 group-hover:to-purple-400 mb-2">
            {title}
          </h3>
          <p className="text-sm text-white/70 line-clamp-2 mb-3">{description}</p>

          {/* Progress Bar */}
          <div className="space-y-1 mb-3">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Progress</span>
              <span className="text-white/80">{progress}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Tech Tags - Limited */}
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.slice(0, 2).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 2 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/60 border border-white/10">
                +{technologies.length - 2} more
              </span>
            )}
          </div>

          {/* Bottom Links */}
          <div className="flex gap-2">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <div className="ml-auto text-xs text-white/40 flex items-center">
              <span>View Details</span>
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Horizontal Scrolling Projects Container
const ProjectsContainer = ({ projects, onProjectClick }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="px-4 py-10 text-center text-white/40">
        No projects match the selected filter.
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white/80 hover:bg-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Horizontal Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 gap-4 pl-4 pr-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        {projects.map(project => (
          <div key={project.id} className="snap-start">
            <ProjectCard
              project={project}
              onClick={() => onProjectClick(project)}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white/80 hover:bg-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

// Main MobileProjects Component
const MobileProjects = () => {
  const [projects, setProjects] = useState(ProjectsData);
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Market-Ready', value: 'market-ready' },
    { label: 'Completed', value: 'completed' },
    { label: 'In Development', value: 'developing' }
  ];

  useEffect(() => {
    // Filter projects based on selected filter
    const filterProjects = () => {
      switch (activeFilter) {
        case 'market-ready':
          setFilteredProjects(projects.filter(p => p.isTopProject));
          break;
        case 'completed':
          setFilteredProjects(projects.filter(p => p.progress === 100 && !p.isTopProject));
          break;
        case 'developing':
          setFilteredProjects(projects.filter(p => p.progress < 100 && !p.isTopProject));
          break;
        default:
          setFilteredProjects(projects);
          break;
      }
    };

    filterProjects();
  }, [activeFilter, projects]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Get descriptions for filters
  const getFilterDescription = () => {
    switch (activeFilter) {
      case 'market-ready':
        return 'Production-grade projects solving real-world problems';
      case 'completed':
        return 'Polished solutions demonstrating technical expertise';
      case 'developing':
        return 'Ongoing projects exploring new technologies';
      default:
        return 'Showcasing my diverse range of technical projects';
    }
  };

  return (
    <div className="py-12">
      {/* Custom Section Header */}
      <SectionHeader
        title="PROJECT SHOWCASE"
        subtitle={getFilterDescription()}
      />

      {/* Filter Toggle */}
      <FilterToggle
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Horizontally Scrollable Projects */}
      <ProjectsContainer
        projects={filteredProjects}
        onProjectClick={handleProjectClick}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

// Apply scrollbar hiding styles for various browsers
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(style);

export default MobileProjects;