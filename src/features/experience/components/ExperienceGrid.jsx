// src/features/experience/components/ExperienceGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Trophy, Building, ChevronRight } from 'lucide-react';
import { getTechnologyNames } from '@data/ExperienceData';

const ExperienceGrid = ({ experiences, activeId, onSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {experiences.map((experience) => {
        const isActive = experience.id === activeId;
        const technologies = getTechnologyNames(experience);
        const isCurrent = experience.period.end === null;

        return (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            onClick={() => onSelect(experience.id)}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative cursor-pointer rounded-2xl overflow-hidden
              border-2 transition-all duration-300
              ${isActive
                ? 'border-red-500 bg-gradient-to-br from-red-500/10 to-purple-500/10 shadow-lg shadow-red-500/20'
                : 'border-gray-700 bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:border-red-500/50'
              }
            `}
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(244,63,94,0.5) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />

            {/* Current role indicator */}
            {isCurrent && (
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Current
                </div>
              </div>
            )}

            {/* Card content */}
            <div className="relative z-10 p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Company logo */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-700/50 flex-shrink-0 border border-gray-600/50">
                  {experience.companyLogo ? (
                    <img
                      src={experience.companyLogo}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Building className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white truncate">{experience.company}</h3>
                  <p className={`text-sm font-medium truncate ${isActive ? 'text-red-400' : 'text-gray-400'}`}>
                    {experience.title}
                  </p>
                </div>
              </div>

              {/* Meta info */}
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-3 h-3" />
                  <span>{experience.period.display}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {experience.shortDescription}
              </p>

              {/* Technologies preview */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${
                        isActive
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-gray-700/50 text-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-400 rounded-full">
                      +{technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Key achievements preview */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {experience.achievements.slice(0, 2).map((achievement, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-2 text-center">
                      <div className={`text-sm font-bold ${isActive ? 'text-red-400' : 'text-purple-400'}`}>
                        {achievement.stat}
                      </div>
                      <div className="text-xs text-gray-400 truncate">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action row */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Trophy className="w-4 h-4" />
                  <span>{experience.achievements?.length || 0} achievements</span>
                </div>

                <div className="flex items-center gap-1">
                  {experience.links?.company && (
                    <a
                      href={experience.links.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                  )}

                  <div className={`p-2 rounded-lg flex items-center gap-1 text-sm ${
                    isActive ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active border glow effect */}
            {isActive && (
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(244,63,94,0.3)] pointer-events-none" />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ExperienceGrid;