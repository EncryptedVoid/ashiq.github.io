// src/components/sections/Projects/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Clock, Activity, Star, Video, BookOpen } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const MetricItem = ({ label, value, className = "" }) => (
  <div className={`text-center ${className}`}>
    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent truncate">
      {value}
    </div>
    <div className="text-xs text-white/60 mt-1 truncate max-w-full">
      {label}
    </div>
  </div>
);

const DifficultyRating = ({ level }) => {
  const maxLevel = 5;
  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxLevel)].map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-5 rounded-full ${
            i < level
              ? 'bg-gradient-to-r from-blue-400 to-purple-400'
              : 'bg-white/20'
          }`}
        />
      ))}
    </div>
  );
};

const ProgressBar = ({ progress }) => (
  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const ProjectCard = ({ project, onClick, layout = 'grid' }) => {
  const statusColors = {
    'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'In Progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Planning': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  if (layout === 'list') {
    return (
      <GlassCard
        className="group cursor-pointer w-full overflow-hidden transition-all duration-300 hover:border-blue-500/30"
        onClick={onClick}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/4 h-48 md:h-auto relative overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/10" />

            {/* Version & Difficulty */}
            <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
              <span className="bg-black/60 backdrop-blur-sm text-white/80 px-2 py-1 rounded text-xs">
                v{project.version}
              </span>
              <DifficultyRating level={project.difficulty} />
            </div>

            {/* Status */}
            <div className="absolute bottom-2 left-2">
              <span className={`
                px-3 py-1 text-xs font-medium rounded-full border
                ${statusColors[project.status]}
              `}>
                {project.status}
              </span>
            </div>

            {/* Top Project */}
            {project.isTopProject && (
              <div className="absolute top-2 right-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:w-3/4 flex flex-col">
            <div className="mb-2 flex justify-between items-start">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {project.title}
              </h3>
              <div className="flex items-center text-xs text-white/40 gap-3">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(project.startDate)}
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {project.timeInvestment}
                </div>
              </div>
            </div>

            <p className="text-sm text-white/60 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded-full text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-white/60">Progress</span>
                <span className="text-xs text-white/80">{project.progress}%</span>
              </div>
              <ProgressBar progress={project.progress} />

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white/80 transition-colors duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white/80 transition-colors duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.blog && (
                    <a
                      href={project.links.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white/80 transition-colors duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <BookOpen className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.video && (
                    <a
                      href={project.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white/80 transition-colors duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <Video className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="text-xs text-white/40">
                  Updated: {formatDate(project.lastUpdate)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    );
  }

  // Grid layout
  return (
    <GlassCard
      className="group cursor-pointer h-full transition-all duration-300 hover:border-blue-500/30"
      onClick={onClick}
    >
      {/* Image Section with gradient overlay */}
      <div className="relative h-48 rounded-t-xl overflow-hidden">
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
        <div className="
          absolute inset-0
          bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30
          group-hover:opacity-70
          transition-opacity duration-300
        "/>

        {/* Version & Difficulty */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
          <span className="bg-black/60 backdrop-blur-sm text-white/80 px-2 py-1 rounded text-xs">
            v{project.version}
          </span>
          <DifficultyRating level={project.difficulty} />
        </div>

        {/* Status */}
        <div className="absolute bottom-2 left-2">
          <span className={`
            px-3 py-1 text-xs font-medium rounded-full border
            ${statusColors[project.status]}
          `}>
            {project.status}
          </span>
        </div>

        {/* Top Project */}
        {project.isTopProject && (
          <div className="absolute top-2 right-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Dates */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {project.title}
          </h3>
          <div className="flex justify-between items-center text-xs text-white/40">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDate(project.startDate)}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {project.timeInvestment}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/60 line-clamp-2">
          {project.description}
        </p>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/60">Progress</span>
            <span className="text-xs text-white/80">{project.progress}%</span>
          </div>
          <ProgressBar progress={project.progress} />
        </div>

        {/* Metrics - Dynamically spread based on count */}
        <div className="grid grid-cols-3 gap-2 py-2">
          {Object.entries(project.metrics).map(([label, value], index) => (
            <MetricItem
              key={label}
              label={label}
              value={value}
              className={Object.keys(project.metrics).length <= 3 ? "col-span-1" : ""}
            />
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded-full text-white/60 truncate"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded-full text-white/60">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <div className="flex gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors duration-300"
                onClick={e => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors duration-300"
                onClick={e => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.links.blog && (
              <a
                href={project.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors duration-300"
                onClick={e => e.stopPropagation()}
              >
                <BookOpen className="w-5 h-5" />
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors duration-300"
                onClick={e => e.stopPropagation()}
              >
                <Video className="w-5 h-5" />
              </a>
            )}
          </div>

          <div className="text-xs text-white/40">
            Updated: {formatDate(project.lastUpdate)}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;