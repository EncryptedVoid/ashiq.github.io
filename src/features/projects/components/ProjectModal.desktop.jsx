// src/components/sections/Projects/components/ProjectModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ExternalLink, Github, Video, BookOpen, FileText, Code, CheckCircle } from 'lucide-react';

const MetricBlock = ({ label, value }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
    <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm text-white/60">
      {label}
    </div>
  </div>
);

const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
    <span className="text-white/80">{text}</span>
  </div>
);

const DifficultyRating = ({ level }) => {
  const maxLevel = 5;
  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxLevel)].map((_, i) => (
        <div
          key={i}
          className={`h-2 w-10 rounded-full ${
            i < level
              ? 'bg-gradient-to-r from-blue-400 to-purple-400'
              : 'bg-white/20'
          }`}
        />
      ))}
      <span className="ml-2 text-white/60 text-sm">{level}/5</span>
    </div>
  );
};

const ProgressBar = ({ progress }) => (
  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const TechnologyTag = ({ name }) => (
  <span className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-white/80">
    {name}
  </span>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const statusColors = {
    'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'In Progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Planning': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          onClick={e => e.stopPropagation()}
          className="bg-gray-900/90 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          {/* Image Header */}
          <div className="relative h-64 w-full overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

            {/* Status Badge */}
            <div className="absolute top-4 left-6">
              <span className={`
                px-4 py-1 text-sm font-medium rounded-full border
                ${statusColors[project.status]}
              `}>
                {project.status}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white/80" />
            </button>

            {/* Project Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-6 mt-3">
                <div className="flex items-center text-white/60">
                  <Code className="w-4 h-4 mr-2" />
                  <span>v{project.version}</span>
                </div>
                <div className="flex items-center text-white/60">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Started {formatDate(project.startDate)}</span>
                </div>
                <div className="flex items-center text-white/60">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{project.timeInvestment}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-white/90 mb-3">Overview</h3>
              <p className="text-white/70 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white/90">Project Progress</h3>
                <span className="text-lg font-medium text-blue-400">{project.progress}%</span>
              </div>
              <ProgressBar progress={project.progress} />
              <div className="flex justify-between mt-2 text-sm text-white/60">
                <span>Started: {formatDate(project.startDate)}</span>
                <span>Last Updated: {formatDate(project.lastUpdate)}</span>
              </div>
            </div>

            {/* Project Difficulty */}
            <div>
              <h3 className="text-xl font-semibold text-white/90 mb-3">Difficulty Level</h3>
              <DifficultyRating level={project.difficulty} />
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-white/90 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechnologyTag key={tech} name={tech} />
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h3 className="text-xl font-semibold text-white/90 mb-4">Key Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(project.metrics).map(([label, value]) => (
                  <MetricBlock key={label} label={label} value={value} />
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <FeatureItem key={index} text={feature} />
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white/90 mb-4">Project Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-white/80" />
                    <span className="text-white/80">GitHub</span>
                  </a>
                )}

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-white/80" />
                    <span className="text-white/80">Live Demo</span>
                  </a>
                )}

                {project.links.caseStudy && (
                  <a
                    href={project.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors duration-300"
                  >
                    <FileText className="w-5 h-5 text-white/80" />
                    <span className="text-white/80">Case Study</span>
                  </a>
                )}

                {project.links.blog && (
                  <a
                    href={project.links.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors duration-300"
                  >
                    <BookOpen className="w-5 h-5 text-white/80" />
                    <span className="text-white/80">Blog</span>
                  </a>
                )}

                {project.links.video && (
                  <a
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors duration-300"
                  >
                    <Video className="w-5 h-5 text-white/80" />
                    <span className="text-white/80">Video</span>
                  </a>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 text-white/40 text-sm">
              <p>Last updated on {formatDate(project.lastUpdate)}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;