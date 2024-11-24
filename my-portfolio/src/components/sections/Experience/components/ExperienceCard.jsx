// src/components/sections/Experience/components/ExperienceCard.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';
import GlassCard from '../../../common/GlassCard';
import AchievementStats from './AchievementStats';
import Testimonials from './Testimonials';

const TechnologyTag = ({ tech }) => (
  <span className="
    px-2 py-1
    text-xs
    bg-white/5
    border border-white/10
    rounded-full
    text-white/60
    hover:bg-white/10
    hover:border-white/20
    transition-all duration-300
  ">
    {tech}
  </span>
);

const ExperienceCard = ({ experience, isActive, onClick, onCaseStudyClick }) => {
  const isCurrentJob = !experience.endDate;

  return (
    <GlassCard
      className={`
        cursor-pointer
        transition-all duration-500
        ${isActive ? 'border-blue-500/50' : ''}
        ${isCurrentJob && !isActive ? 'active-job' : ''}
        relative
      `}
      onClick={onClick}
    >
      {/* Pulsating border for current job */}
      {isCurrentJob && !isActive && (
        <div className="
          absolute inset-0
          rounded-2xl
          border-2 border-green-500/50
          animate-pulse
          pointer-events-none
        "/>
      )}

      {/* Header Content */}
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          {/* Title and Company Section */}
          <div className="flex items-center gap-3">
            {experience.companyLogo ? (
              <div className="w-8 h-8 rounded-lg bg-white/10 p-1">
                <img
                  src={experience.companyLogo}
                  alt={experience.company}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <Building className="w-8 h-8 text-white/40" />
            )}

            <div>
              <h3 className="text-lg font-bold text-white">
                {experience.title}
              </h3>
              {experience.company && (
                <div className="text-sm text-white/60">
                  {experience.company}
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Calendar className="w-4 h-4" />
              <span>{experience.startDate} - </span>
              <span className={isCurrentJob && !isActive ? 'animate-pulse text-green-400' : ''}>
                {experience.endDate || 'Present'}
              </span>
            </div>
          </div>
        </div>

        {/* Location & Technologies Preview */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <MapPin className="w-4 h-4" />
            {experience.location}
          </div>

          {!isActive && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies?.map((tech, index) => (
                <TechnologyTag key={index} tech={tech} />
              ))}
            </div>
          )}
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-6">
                {/* Description */}
                <p className="text-sm text-white/80">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/60 uppercase">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies?.map((tech, index) => (
                      <TechnologyTag key={index} tech={tech} />
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <AchievementStats achievements={experience.achievements} />

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {experience.links?.company && (
                    <a
                      href={experience.links.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Visit Company</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {experience.links?.caseStudy && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCaseStudyClick();
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 transition-all duration-300"
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}

                {/* Testimonials */}
                {experience.testimonials?.length > 0 && (
                  <Testimonials testimonials={experience.testimonials} />
                )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlassCard>
  );
};

export default ExperienceCard;