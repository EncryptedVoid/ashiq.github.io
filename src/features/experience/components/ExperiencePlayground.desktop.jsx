// src/features/experience/components/ExperiencePlayground.desktop.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Download, ExternalLink, Code, Target, Award } from 'lucide-react';
import { default as TechnologyDetail } from './TechnologyDetail.desktop';
import { default as ProjectCard } from './ProjectCard.desktop';
import { default as AchievementStat } from './AchievementStats.desktop';
import { getTechnologiesByCategory } from '@/data/ExperienceData';

const TabButton = ({ label, isActive, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 text-sm font-medium transition-all duration-300
      rounded-t-lg flex items-center gap-2
      ${isActive
        ? 'text-rose-400 border-b-2 border-rose-400 bg-gray-800/50'
        : 'text-gray-400 hover:text-white/80 hover:bg-gray-800/30'
      }
    `}
  >
    {icon}
    {label}
  </button>
);

const ExperiencePlayground = ({ experience }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const technologyCategories = getTechnologiesByCategory(experience);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-gray-700 bg-gray-800/90 mb-8 overflow-hidden"
      >
        {/* Section Tabs */}
        <div className="flex gap-1 border-b border-gray-700 px-4 pt-4 pb-0 bg-gray-900/50">
          <TabButton
            label="Overview"
            isActive={activeSection === 'overview'}
            onClick={() => setActiveSection('overview')}
            icon={<Briefcase className="w-4 h-4" />}
          />
          <TabButton
            label="Technologies"
            isActive={activeSection === 'technologies'}
            onClick={() => setActiveSection('technologies')}
            icon={<Code className="w-4 h-4" />}
          />
          <TabButton
            label="Projects"
            isActive={activeSection === 'projects'}
            onClick={() => setActiveSection('projects')}
            icon={<Target className="w-4 h-4" />}
          />
          <TabButton
            label="Impact"
            isActive={activeSection === 'impact'}
            onClick={() => setActiveSection('impact')}
            icon={<Award className="w-4 h-4" />}
          />
        </div>

        {/* Content based on active section */}
        <div className="p-6">
          {activeSection === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Company Info */}
              <div className="space-y-6">
                {/* Company Logo */}
                <div className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50 flex items-center justify-center">
                  {experience.companyLogo ? (
                    <img
                      src={experience.companyLogo}
                      alt={experience.company}
                      className="w-32 h-32 object-contain"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-lg bg-gray-700 flex items-center justify-center text-6xl text-white/40">
                      {experience.company.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Company Details */}
                <div className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50 space-y-4">
                  <h3 className="text-xl font-bold text-white">{experience.company}</h3>
                  <p className="text-rose-400 font-medium">{experience.title}</p>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{experience.period.display}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{experience.location}</span>
                  </div>

                  {experience.links?.company && (
                    <a
                      href={experience.links.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Company Website</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column - Description and Responsibilities */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50">
                  <h3 className="text-lg font-medium text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {experience.fullDescription}
                  </p>
                </div>

                {/* Responsibilities - Added per coworker feedback */}
                {experience.responsibilities && (
                  <div className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50">
                    <h3 className="text-lg font-medium text-white mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <span className="text-rose-400 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Case Study Link */}
                {experience.links?.caseStudy && (
                  <motion.a
                    href={typeof experience.links.caseStudy === 'string' ? experience.links.caseStudy : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-3 px-4 bg-rose-500/20 border border-rose-500/40 rounded-lg text-white flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(244, 63, 94, 0.3)' }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Full Case Study</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </motion.a>
                )}
              </div>
            </div>
          )}

          {activeSection === 'technologies' && (
            <div>
              {/* Group technologies by category */}
              <div className="space-y-8">
                {Object.entries(technologyCategories).map(([category, technologies]) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {technologies.map((tech, index) => (
                        <TechnologyDetail key={index} technology={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="space-y-6">
              {experience.projects && experience.projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50"
                >
                  <h3 className="text-lg font-medium text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {project.challenge && (
                      <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                        <h4 className="text-sm font-medium text-rose-400 mb-1">Challenge</h4>
                        <p className="text-gray-300 text-sm">{project.challenge}</p>
                      </div>
                    )}

                    {project.solution && (
                      <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                        <h4 className="text-sm font-medium text-rose-400 mb-1">Solution</h4>
                        <p className="text-gray-300 text-sm">{project.solution}</p>
                      </div>
                    )}

                    {project.outcomes && (
                      <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                        <h4 className="text-sm font-medium text-rose-400 mb-1">Outcomes</h4>
                        <p className="text-gray-300 text-sm">{project.outcomes}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700/30">
                    <h4 className="text-xs text-gray-400 w-full mb-2">Technologies Used:</h4>
                    {project.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-rose-500/10 text-rose-400 rounded-full border border-rose-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'impact' && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {experience.achievements && experience.achievements.map((achievement, index) => (
                  <AchievementStat key={index} achievement={achievement} />
                ))}
              </div>

              {/* Testimonials */}
              {experience.testimonials && experience.testimonials.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-white mb-4">Testimonials</h3>
                  <div className="space-y-4">
                    {experience.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50"
                        whileHover={{ y: -5 }}
                      >
                        <p className="text-gray-300 italic mb-3">"{testimonial.text}"</p>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                            {testimonial.name[0]}
                          </div>
                          <div>
                            <p className="text-white font-medium">{testimonial.name}</p>
                            <p className="text-gray-400 text-sm">{testimonial.position}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperiencePlayground;