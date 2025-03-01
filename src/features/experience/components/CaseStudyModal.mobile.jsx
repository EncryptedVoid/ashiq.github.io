// src/features/experience/components/MobileCaseStudyModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Calendar, MapPin, Award, Code, Target, ExternalLink } from 'lucide-react';
import { getTechnologiesByCategory } from '@/data/ExperienceData';

const TabButton = ({ label, isActive, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-all duration-300
      ${isActive
        ? 'text-rose-400 border-b-2 border-rose-400'
        : 'text-white/40 hover:text-white/60'
      }`}
  >
    {icon && <span className="mr-1.5">{icon}</span>}
    {label}
  </button>
);

const MobileCaseStudyModal = ({ isOpen, onClose, experience }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !experience) return null;

  const technologyCategories = getTechnologiesByCategory(experience);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-4 z-50 p-2 rounded-full
            hover:bg-rose-500/10 transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-rose-400" />
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto pt-20 pb-12">
          {/* Header */}
          <div className="px-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              {experience.title}
            </h2>
            <p className="text-lg text-rose-400 mb-4">
              {experience.company}
            </p>
            <div className="flex flex-col gap-2 text-white/50 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.period.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
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

          {/* Tabs */}
          <div className="border-b border-white/10 overflow-x-auto">
            <div className="px-4 flex gap-2 min-w-max">
              <TabButton
                label="Overview"
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <TabButton
                label="Tech"
                isActive={activeTab === 'tech'}
                onClick={() => setActiveTab('tech')}
              />
              <TabButton
                label="Projects"
                isActive={activeTab === 'projects'}
                onClick={() => setActiveTab('projects')}
              />
              <TabButton
                label="Impact"
                isActive={activeTab === 'impact'}
                onClick={() => setActiveTab('impact')}
              />
            </div>
          </div>

          {/* Tab Content */}
          <div className="px-6 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                      <p className="text-white/80 leading-relaxed">
                        {experience.fullDescription || experience.shortDescription}
                      </p>
                    </div>

                    {/* Key Responsibilities */}
                    {experience.responsibilities && (
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/70">
                              <span className="text-rose-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Case Study PDF Link */}
                    {experience.links?.caseStudy && typeof experience.links.caseStudy === 'string' && (
                      <a
                        href={experience.links.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 rounded-lg p-3 text-white transition-colors"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download Full Case Study</span>
                      </a>
                    )}
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="space-y-6">
                    {Object.entries(technologyCategories).map(([category, technologies]) => (
                      <div key={category} className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                        <h3 className="text-white font-medium mb-3">{category}</h3>
                        <div className="space-y-3">
                          {technologies.map((tech, index) => (
                            <div key={index} className="flex items-start gap-3 border-t border-gray-700/30 pt-3 first:border-t-0 first:pt-0">
                              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-xl text-rose-400 flex-shrink-0">
                                {tech.icon || '💻'}
                              </div>
                              <div>
                                <h4 className="text-white font-medium">{tech.name}</h4>
                                <p className="text-white/60 text-sm">{tech.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-4">
                    {experience.projects?.map((project, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="text-white font-medium mb-2">{project.name}</h3>
                        <p className="text-white/70 text-sm mb-3">{project.description}</p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies?.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-gray-700/30 space-y-3">
                          {project.challenge && (
                            <div>
                              <h4 className="text-xs font-medium text-white/50 uppercase mb-1">Challenge</h4>
                              <p className="text-white/70 text-sm">{project.challenge}</p>
                            </div>
                          )}

                          {project.solution && (
                            <div>
                              <h4 className="text-xs font-medium text-white/50 uppercase mb-1">Solution</h4>
                              <p className="text-white/70 text-sm">{project.solution}</p>
                            </div>
                          )}

                          {project.outcomes && (
                            <div>
                              <h4 className="text-xs font-medium text-white/50 uppercase mb-1">Outcomes</h4>
                              <p className="text-white/70 text-sm">{project.outcomes}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'impact' && (
                  <div className="space-y-6">
                    {/* Achievements */}
                    <div className="grid grid-cols-2 gap-3">
                      {experience.achievements?.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-center"
                        >
                          <div className="text-xl font-bold text-rose-400 mb-1">{achievement.stat}</div>
                          <div className="text-sm text-white mb-1">{achievement.label}</div>
                          <p className="text-xs text-white/60">{achievement.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Testimonials */}
                    {experience.testimonials && experience.testimonials.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider">
                          Testimonials
                        </h3>
                        {experience.testimonials.map((testimonial, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
                          >
                            <p className="text-white/70 italic mb-3 text-sm">"{testimonial.text}"</p>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-xs text-rose-400">
                                {testimonial.name[0]}
                              </div>
                              <div>
                                <p className="text-white text-sm">{testimonial.name}</p>
                                <p className="text-white/50 text-xs">{testimonial.position}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileCaseStudyModal;