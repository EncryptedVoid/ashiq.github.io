// src/features/experience/components/ExperienceMobileModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronDown, ChevronRight, Calendar, MapPin, ExternalLink,
  Download, Code, Target, Trophy, CheckCircle, Building
} from 'lucide-react';
import { getTechnologiesByCategory } from '@data/ExperienceData';

const TabButton = ({ label, isActive, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-all rounded-lg flex items-center gap-2 ${
      isActive
        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    {icon}
    {label}
  </button>
);

const ExperienceMobileModal = ({ experience, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedProject, setExpandedProject] = useState(null);

  if (!experience) return null;

  const technologyCategories = getTechnologiesByCategory(experience);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-gray-900 to-black rounded-t-2xl max-h-[85vh] overflow-hidden"
          >
            {/* Handle */}
            <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mt-2 mb-4" />

            {/* Header */}
            <div className="px-4 pb-4 border-b border-gray-700/50">
              <div className="flex items-start gap-3">
                {/* Company Logo */}
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-700/50 flex-shrink-0">
                  {experience.companyLogo ? (
                    <img
                      src={experience.companyLogo}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white">{experience.company}</h2>
                  <p className="text-red-400 text-sm font-medium">{experience.title}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {experience.period.display}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-800/50 text-gray-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-4 overflow-x-auto border-b border-gray-700/50">
              <TabButton
                label="Overview"
                icon={<CheckCircle className="w-4 h-4" />}
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <TabButton
                label="Projects"
                icon={<Target className="w-4 h-4" />}
                isActive={activeTab === 'projects'}
                onClick={() => setActiveTab('projects')}
              />
              <TabButton
                label="Tech"
                icon={<Code className="w-4 h-4" />}
                isActive={activeTab === 'technologies'}
                onClick={() => setActiveTab('technologies')}
              />
              <TabButton
                label="Impact"
                icon={<Trophy className="w-4 h-4" />}
                isActive={activeTab === 'achievements'}
                onClick={() => setActiveTab('achievements')}
              />
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 180px)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      {/* Description */}
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {experience.fullDescription}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      {experience.responsibilities && (
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4">
                          <h3 className="text-white font-medium text-sm mb-3">Key Responsibilities</h3>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                                <ChevronRight className="w-3 h-3 text-red-400 mt-1 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        {experience.links?.company && (
                        <a
                            href={experience.links.company}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 text-sm"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Visit Company
                          </a>
                        )}

                        {experience.links?.caseStudy && (
                        <a
                            href={experience.links.caseStudy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 text-sm"
                        >
                            <Download className="w-4 h-4" />
                            Case Study
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'projects' && (
                    <div className="space-y-3">
                      {experience.projects?.map((project, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/30 backdrop-blur-sm rounded-lg overflow-hidden"
                        >
                          <div
                            onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                            className="p-4 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-white font-medium text-sm">{project.name}</h4>
                                <p className="text-gray-400 text-xs mt-1">{project.description}</p>
                              </div>
                              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                                expandedProject === index ? 'rotate-180' : ''
                              }`} />
                            </div>
                          </div>

                          <AnimatePresence>
                            {expandedProject === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="p-4 pt-0 space-y-3">
                                  {project.challenge && (
                                    <div className="p-3 bg-gray-900/50 rounded">
                                      <h5 className="text-xs font-medium text-red-400 mb-1">Challenge</h5>
                                      <p className="text-gray-300 text-xs">{project.challenge}</p>
                                    </div>
                                  )}

                                  {project.solution && (
                                    <div className="p-3 bg-gray-900/50 rounded">
                                      <h5 className="text-xs font-medium text-blue-400 mb-1">Solution</h5>
                                      <p className="text-gray-300 text-xs">{project.solution}</p>
                                    </div>
                                  )}

                                  {project.outcomes && (
                                    <div className="p-3 bg-gray-900/50 rounded">
                                      <h5 className="text-xs font-medium text-green-400 mb-1">Outcomes</h5>
                                      <p className="text-gray-300 text-xs">{project.outcomes}</p>
                                    </div>
                                  )}

                                  {project.technologies && (
                                    <div className="pt-2 border-t border-gray-700/50">
                                      <div className="flex flex-wrap gap-1">
                                        {project.technologies.map((tech, i) => (
                                          <span key={i} className="px-2 py-1 text-xs bg-red-500/10 text-red-400 rounded-full">
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'technologies' && (
                    <div className="space-y-4">
                      {Object.entries(technologyCategories).map(([category, technologies]) => (
                        <div key={category} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4">
                          <h3 className="text-white font-medium text-sm mb-3">{category}</h3>
                          <div className="space-y-3">
                            {technologies.map((tech, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                                  {tech.icon || <Code className="w-4 h-4" />}
                                </div>
                                <div>
                                  <h4 className="text-white font-medium text-sm">{tech.name}</h4>
                                  <p className="text-gray-400 text-xs mt-1">{tech.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'achievements' && (
                    <div className="space-y-4">
                      {/* Achievement metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        {experience.achievements?.map((achievement, index) => (
                          <div key={index} className="p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg text-center">
                            <div className="text-xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                              {achievement.stat}
                            </div>
                            <div className="text-white text-sm mt-1">{achievement.label}</div>
                            <div className="text-gray-400 text-xs mt-1">{achievement.description}</div>
                          </div>
                        ))}
                      </div>

                      {/* Recognition */}
                      {experience.recognition && experience.recognition.length > 0 && (
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4">
                          <h3 className="text-white font-medium text-sm mb-3 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            Recognition
                          </h3>
                          <ul className="space-y-2">
                            {experience.recognition.map((item, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-300 text-xs">
                                <ChevronRight className="w-3 h-3 text-yellow-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceMobileModal;