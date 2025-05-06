// ExperienceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { getTechnologyNames } from '@/data/ExperienceData';

const ExperienceCard = ({ experience, onTap }) => {
  const technologies = getTechnologyNames(experience);

  return (
    <motion.div
      onClick={() => onTap(experience)}
      className="relative overflow-hidden bg-gray-800 rounded-xl border border-gray-700"
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -5 }}
    >
      {/* Subtle gradient background */}
      <div
        className={`absolute inset-0 opacity-20 ${experience.gradient || 'bg-gradient-to-br from-rose-500 to-purple-500'}`}
      />

      {/* Current job indicator */}
      {experience.period.end === null && (
        <div className="absolute -top-1 -right-1">
          <div className="relative bg-rose-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">
            Current
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-5">
        {/* Company Logo */}
        <div className="flex justify-center mb-5">
          <div className="w-24 h-24 rounded-xl bg-gray-700/50 border border-gray-600/50 p-3 flex items-center justify-center">
            {experience.companyLogo ? (
              <img
                src={experience.companyLogo}
                alt={experience.company}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-5xl text-white/70">{experience.company.charAt(0)}</div>
            )}
          </div>
        </div>

        {/* Title & Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white">{experience.company}</h3>
          <p className="text-rose-400 font-medium">{experience.title}</p>
          <p className="text-gray-400 text-sm mt-1">{experience.period.display}</p>
          <p className="text-gray-400 text-sm">{experience.location}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 text-center">
          {experience.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-xs uppercase text-gray-400 mb-2 text-center">Technologies</h4>
          <div className="flex flex-wrap justify-center gap-1.5">
            {technologies.slice(0, 6).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 6 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                +{technologies.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mt-5">
          {experience.links?.company && (
            <a
              href={experience.links.company}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-700 text-white text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Company</span>
            </a>
          )}

          <motion.button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/80 text-white text-sm"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4" />
            <span>View Details</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;