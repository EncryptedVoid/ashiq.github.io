// src/features/experience/components/ExperienceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, ExternalLink, Building } from 'lucide-react';
import { getTechnologyNames } from '@data/ExperienceData';

const ExperienceCard = ({ experience, onTap }) => {
  const technologies = getTechnologyNames(experience);

  return (
    <motion.div
      onClick={onTap}
      whileTap={{ scale: 0.95 }}
      className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-red-500/20 overflow-hidden relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(244,63,94,0.2) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      {/* Current role indicator */}
      {experience.period.end === null && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Current
          </div>
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Company Logo */}
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-700/50 flex-shrink-0">
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

          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{experience.company}</h3>
            <p className="text-red-400 font-medium">{experience.title}</p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{experience.period.display}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
          {experience.shortDescription}
        </p>

        {/* Technologies Preview */}
        <div className="mb-6">
          <h4 className="text-xs text-gray-400 uppercase mb-2">Key Technologies</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-red-500/10 text-red-400 rounded-full border border-red-500/20"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-400 rounded-full">
                +{technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-red-400 text-sm">
            <span>View Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {experience.links?.company && (
            <a
              href={experience.links.company}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-gray-700/50 text-gray-300"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;