// src/features/experience/components/ExperienceDetail.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Calendar, ExternalLink, Download, Code, Target,
  Trophy, Star, ChevronRight, ChevronDown, CheckCircle
} from 'lucide-react';
import { getTechnologiesByCategory, getTechnologyNames } from '@data/ExperienceData';

const TabButton = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
      isActive
        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const ExperienceDetail = ({ experience }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedProject, setExpandedProject] = useState(null);

  const technologyCategories = getTechnologiesByCategory(experience);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={experience.id}
      className="flex-1 h-full overflow-y-auto p-8 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-start gap-6">
          {/* Company Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-red-500/20"
          >
            {experience.companyLogo ? (
              <img
                src={experience.companyLogo}
                alt={experience.company}
                className="w-full h-full object-contain bg-gray-800/50"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-3xl">
                {experience.company.charAt(0)}
              </div>
            )}
          </motion.div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">
              {experience.company}
            </h2>
            <p className="text-xl text-red-400 mb-3">{experience.title}</p>

            <div className="flex flex-wrap gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.period.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>{experience.type}</span>
              </div>
            </div>

            {/* Current role badge */}
            {experience.period.end === null && (
              <div className="mt-3 inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Current Position
              </div>
            )}
          </div>
        </div>

        {/* Quick description */}
        <p className="mt-6 text-gray-300 leading-relaxed">
          {experience.fullDescription}
        </p>
      </motion.div>

      {/* Navigation tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8 border-b border-gray-700/50 pb-4">
        <TabButton
          label="Overview"
          icon={<Star className="w-4 h-4" />}
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
          label="Technologies"
          icon={<Code className="w-4 h-4" />}
          isActive={activeTab === 'technologies'}
          onClick={() => setActiveTab('technologies')}
        />
        <TabButton
          label="Achievements"
          icon={<Trophy className="w-4 h-4" />}
          isActive={activeTab === 'achievements'}
          onClick={() => setActiveTab('achievements')}
        />
      </motion.div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Responsibilities */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {experience.responsibilities?.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <ChevronRight className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                {experience.links?.company && (
                  <motion.a
                    href={experience.links.company}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Company
                  </motion.a>
                )}

                {experience.links?.caseStudy && (
                  <motion.a
                    href={experience.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Case Study
                  </motion.a>
                )}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              {experience.projects?.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-red-500/10 overflow-hidden"
                >
                  {/* Project header */}
                  <div
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="p-6 cursor-pointer hover:bg-gray-800/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                        <p className="text-gray-400 mt-1">{project.description}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedProject === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded project details */}
                  <AnimatePresence>
                    {expandedProject === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 space-y-4">
                          {/* Challenge, Solution, Outcomes */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.challenge && (
                              <div className="p-4 bg-gray-900/50 rounded-lg">
                                <h4 className="text-sm font-medium text-red-400 mb-2">Challenge</h4>
                                <p className="text-gray-300 text-sm">{project.challenge}</p>
                              </div>
                            )}
                            {project.solution && (
                              <div className="p-4 bg-gray-900/50 rounded-lg">
                                <h4 className="text-sm font-medium text-blue-400 mb-2">Solution</h4>
                                <p className="text-gray-300 text-sm">{project.solution}</p>
                              </div>
                            )}
                            {project.outcomes && (
                              <div className="p-4 bg-gray-900/50 rounded-lg">
                                <h4 className="text-sm font-medium text-green-400 mb-2">Outcomes</h4>
                                <p className="text-gray-300 text-sm">{project.outcomes}</p>
                              </div>
                            )}
                          </div>

                          {/* Project technologies */}
                          {project.technologies && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 text-xs bg-red-500/10 text-red-400 rounded-full border border-red-500/20"
                                  >
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
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'technologies' && (
            <div className="space-y-6">
              {Object.entries(technologyCategories).map(([category, technologies]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-red-400" />
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-xl text-red-400 flex-shrink-0">
                          {tech.icon || <Code className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{tech.name}</h4>
                          <p className="text-gray-400 text-sm mt-1">{tech.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              {/* Achievement metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.achievements?.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-red-500/10 text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                      {achievement.stat}
                    </div>
                    <div className="text-white font-medium mt-2">{achievement.label}</div>
                    <div className="text-gray-400 text-sm mt-1">{achievement.description}</div>
                  </motion.div>
                ))}
              </div>

              {/* Recognition */}
              {experience.recognition && experience.recognition.length > 0 && (
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    Recognition
                  </h3>
                  <ul className="space-y-2">
                    {experience.recognition.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceDetail;