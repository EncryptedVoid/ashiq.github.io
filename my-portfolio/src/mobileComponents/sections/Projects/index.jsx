import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, Clock, Activity, X,
  ChevronLeft, ChevronRight, Heart, Share2, MessageCircle
} from 'lucide-react';
import { ProjectsData } from '../../../data/ProjectsData';


const MobileProjectCard = ({ project, onOpenDetails }) => {
  const statusColors = {
    'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'In Progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Planning': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };

  return (
    <div className="bg-white/[0.03] rounded-xl overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <Activity className="w-12 h-12 text-white/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full border
            ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <div className="flex items-center gap-1 mt-1 text-xs text-white/40">
              <Clock className="w-3 h-3" />
              {project.duration}
            </div>
          </div>
        </div>

        <p className="text-sm text-white/60 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
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

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <div className="flex gap-4">
            <Heart className="w-5 h-5 text-white/40" />
            <MessageCircle className="w-5 h-5 text-white/40" />
            <Share2 className="w-5 h-5 text-white/40" />
          </div>
          <button
            onClick={onOpenDetails}
            className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-400 rounded-lg"
          >
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
          className="fixed inset-0 z-50 bg-black"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-black/80 backdrop-blur-lg">
            <button onClick={onClose}>
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <h2 className="text-lg font-semibold text-white">{project.title}</h2>
            <div className="w-6" /> {/* Spacer for alignment */}
          </div>

          {/* Content */}
          <div className="h-[calc(100vh-64px)] overflow-y-auto">
            {/* Hero Image */}
            <div className="relative h-64">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <Activity className="w-16 h-16 text-white/20" />
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="p-4 space-y-6">
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border
                    ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-white/40">{project.duration}</span>
                </div>
                <p className="text-white/80">{project.description}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 py-4 bg-white/[0.03] rounded-xl p-4">
                {Object.entries(project.metrics).map(([label, value]) => (
                  <div key={label} className="text-center">
                    <div className="text-lg font-bold text-white">{value}</div>
                    <div className="text-xs text-white/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-sm font-medium text-white/60 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm bg-white/5 rounded-full text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl text-white"
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500/10 text-blue-400 rounded-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTypes = ['all', 'Professional', 'Open Source', 'Personal'];
  const filteredProjects = ProjectsData.filter(project =>
    activeFilter === 'all' || project.type === activeFilter
  );

  return (
    <section className="py-12">
      {/* Header */}
      <div className="px-4 mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <p className="text-sm text-white/60 mt-2">
          A showcase of my technical projects and contributions
        </p>
      </div>

      {/* Filter Pills */}
      <div className="mb-6 px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
                ${activeFilter === type
                  ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  : 'bg-white/5 text-white/60 border-white/10'
                } border`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="px-4 space-y-4">
        {filteredProjects.map((project) => (
          <MobileProjectCard
            key={project.id}
            project={project}
            onOpenDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      <MobileProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default MobileProjects;