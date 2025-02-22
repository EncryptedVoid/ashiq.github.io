// src/components/sections/Experience/components/ExperienceCard.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ExternalLink,
  Award,
  Briefcase,
  Target
} from 'lucide-react';
import AchievementStats from './AchievementStats.desktop';
import TechnologyTag from './TechnologyTag.desktop';
import ProjectItem from './ProjectItem.desktop';
import TestimonialItem from './TestimonialItem.desktop';

const ExperienceCard = ({ experience, isActive, onClick, onCaseStudyClick, index }) => {
  const isCurrentJob = experience.period.end === null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div
        className={`
          relative
          bg-white/[0.03] hover:bg-white/[0.05]
          border border-white/[0.06] hover:border-white/[0.12]
          rounded-2xl overflow-hidden
          cursor-pointer
          transition-all duration-300
          ${isActive ? 'shadow-lg shadow-blue-500/10 border-blue-500/20' : ''}
          ${isCurrentJob && !isActive ? 'before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-green-400/30 before:animate-pulse' : ''}
        `}
        onClick={onClick}
      >
        {/* Header */}
        <div className="px-6 py-5 flex items-start justify-between">
          <div className="flex gap-5">
            {/* Logo */}
            <div className={`
              rounded-xl
              bg-white/[0.03]
              border border-white/[0.06]
              w-16 h-16 md:w-20 md:h-20
              flex items-center justify-center
              flex-shrink-0
              p-3
            `}>
              {experience.companyLogo ? (
                <img
                  src={experience.companyLogo}
                  alt={experience.company}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Briefcase className="w-10 h-10 text-white/40" />
              )}
            </div>

            {/* Title and Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {experience.title}
              </h3>
              <div className="flex flex-col gap-1.5">
                <div className="text-lg text-white/80">{experience.company}</div>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {experience.period.display}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Expand button */}
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </div>

        {/* Short Description for Collapsed State */}
        {!isActive && (
          <div className="px-6 pb-5">
            <p className="text-white/70 mb-4">
              {experience.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies?.slice(0, 5).map((tech, index) => (
                <TechnologyTag key={index} technology={tech} />
              ))}
              {experience.technologies?.length > 5 && (
                <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-white/40">
                  +{experience.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-6">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                  {/* Left Column */}
                  <div className="lg:col-span-1 space-y-6">
                    {/* Team Image (if available) */}
                    {experience.teamImage && (
                      <div className="rounded-xl overflow-hidden border border-white/[0.06] aspect-video lg:aspect-square">
                        <img
                          src={experience.teamImage}
                          alt={`${experience.company} team`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Full Description */}
                    <div>
                      <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
                        Role Overview
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        {experience.fullDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies?.map((tech, index) => (
                          <TechnologyTag key={index} technology={tech} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Achievements */}
                    {experience.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {experience.achievements.map((achievement, index) => (
                            <AchievementStats
                              key={index}
                              achievement={achievement}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects - New addition */}
                    {experience.projects && (
                      <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-400" />
                          Notable Projects
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {experience.projects.map((project, index) => (
                            <ProjectItem key={index} project={project} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Testimonials - New addition */}
                    {experience.testimonials && experience.testimonials?.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
                          Testimonials
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {experience.testimonials.map((testimonial, index) => (
                            <TestimonialItem key={index} testimonial={testimonial} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-white/[0.06]">
                  {experience.links?.company && (
                    <a
                      href={experience.links.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex items-center gap-2
                        px-4 py-2
                        bg-white/[0.03] hover:bg-white/[0.06]
                        border border-white/[0.06] hover:border-white/[0.12]
                        rounded-lg
                        text-sm text-white/60
                        transition-all duration-300
                        hover:-translate-y-1
                      "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Visit Company</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}

                  {experience.links?.caseStudy && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCaseStudyClick();
                      }}
                      className="
                        group
                        flex items-center gap-2
                        px-4 py-2
                        bg-blue-500/20 hover:bg-blue-500/30
                        border border-blue-500/30 hover:border-blue-500/40
                        rounded-lg
                        text-sm text-white
                        transition-all duration-300
                        hover:-translate-y-1
                      "
                    >
                      <span>View Case Study</span>
                      <Award className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;