// ExperienceDetail.jsx - Updated with better data handling
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, Code, Target, Trophy, ExternalLink,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { TypewriterText } from '@/components';
import { getTechnologyNames } from '@/data/ExperienceData';

// Tab button component
const TabButton = ({ label, icon, id, activeTab, onClick }) => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(id)}
    className={`
      px-5 py-3 rounded-lg flex items-center gap-2 transition-all
      ${activeTab === id
        ? 'bg-rose-500/20 text-white border border-rose-500/30'
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700'}
    `}
  >
    {icon}
    <span>{label}</span>
  </motion.button>
);

// Horizontal carousel for displaying items
const HorizontalCarousel = ({ items, renderItem }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Ensure items is an array
  const safeItems = Array.isArray(items) ? items : [];

  const nextItem = () => {
    if (safeItems.length <= 1) return;
    setActiveIndex((prevIndex) => (prevIndex + 1) % safeItems.length);
  };

  const prevItem = () => {
    if (safeItems.length <= 1) return;
    setActiveIndex((prevIndex) => (prevIndex - 1 + safeItems.length) % safeItems.length);
  };

  if (safeItems.length === 0) {
    return <p className="text-gray-400 italic">No items available</p>;
  }

  return (
    <div className="relative">
      {/* Navigation arrows - only show if multiple items */}
      {safeItems.length > 1 && (
        <>
          <motion.button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-white/70 hover:text-white hover:bg-gray-700/80 border border-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevItem}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-white/70 hover:text-white hover:bg-gray-700/80 border border-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextItem}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </>
      )}

      {/* Items display */}
      <div className="overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex transition-all duration-500 ease-in-out"
          animate={{ x: `-${activeIndex * 100}%` }}
        >
          {safeItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {renderItem(item, index)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination dots - only show if multiple items */}
      {safeItems.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {safeItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-rose-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ExperienceDetail = ({ experience }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Add safety checks for undefined data
  if (!experience) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-400">No experience data selected</p>
      </div>
    );
  }

  // Safely access technologies data with error handling
  let technologies = [];
  try {
    // First try to get categorized technologies
    const technologyCategories = getTechnologiesByCategory(experience);
    if (technologyCategories) {
      technologies = Object.values(technologyCategories).flat();
    }
  } catch (error) {
    console.error("Error accessing technologies:", error);
    // Fallback to direct array if available
    if (Array.isArray(experience.technologies)) {
      technologies = experience.technologies;
    }
  }

  // Console log for debugging
  console.log("Experience data:", {
    id: experience.id,
    technologies: technologies.length,
    projects: experience.projects?.length || 0,
    achievements: experience.achievements?.length || 0
  });

  // Render functions for carousel items
  const renderTechnology = (tech, index) => {
    // Check if tech is an object or a string
    const isObject = typeof tech === 'object' && tech !== null;

    return (
      <div className="px-4 py-6">
        <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-4 flex gap-4 h-full">
          <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center text-2xl text-rose-400 flex-shrink-0">
            {isObject && tech.icon ? tech.icon : '💻'}
          </div>
          <div>
            <h4 className="text-white font-medium text-lg">
              {isObject ? tech.name : tech}
            </h4>
            {isObject && tech.description && (
              <p className="text-gray-400 mt-2">{tech.description}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderProject = (project, index) => {
    return (
      <div className="px-4 py-6">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
          <p className="text-white/70 mb-6">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {project.challenge && (
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h4 className="text-rose-400 font-medium mb-2">Challenge</h4>
                <p className="text-white/70 text-sm">{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h4 className="text-rose-400 font-medium mb-2">Solution</h4>
                <p className="text-white/70 text-sm">{project.solution}</p>
              </div>
            )}

            {project.outcomes && (
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h4 className="text-rose-400 font-medium mb-2">Outcomes</h4>
                <p className="text-white/70 text-sm">{project.outcomes}</p>
              </div>
            )}
          </div>

          {project.technologies && Array.isArray(project.technologies) && project.technologies.length > 0 && (
            <div className="border-t border-gray-700 pt-4">
              <h4 className="text-sm text-gray-400 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-rose-500/10 text-rose-400 rounded-full border border-rose-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderAchievement = (achievement, index) => {
    return (
      <motion.div
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
        whileHover={{ y: -4, backgroundColor: 'rgba(31, 41, 55, 0.4)' }}
      >
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-400">
          {achievement.stat}
        </div>
        <div className="text-white font-medium mt-2">{achievement.label}</div>
        {achievement.description && (
          <div className="text-gray-400 text-sm mt-2">{achievement.description}</div>
        )}
      </motion.div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="flex-1 h-full overflow-y-auto py-12 px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      key={experience.id}
    >
      {/* Header */}
      <motion.div
        className="mb-12 max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <div className="flex items-start gap-6 mb-6">
          {/* Company logo */}
          <div className="w-24 h-24 rounded-xl flex-shrink-0 bg-gray-800/80 border border-gray-700 p-3 flex items-center justify-center">
            {experience.companyLogo ? (
              <img
                src={experience.companyLogo}
                alt={experience.company}
                className="w-full h-full object-contain"
              />
            ) : (
              <Briefcase className="w-12 h-12 text-gray-400" />
            )}
          </div>

          <div>
            {/* Company and title */}
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
              {experience.company}
            </h1>

            <h2 className="text-2xl text-white/80 mt-2">
              {experience.title}
            </h2>

            <div className="flex items-center gap-4 mt-3 text-gray-400">
              <span>{experience.period.display}</span>
              <span>•</span>
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-4xl">
          <p className="text-lg text-white/70 leading-relaxed">
            {experience.fullDescription || experience.shortDescription}
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="flex flex-wrap gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2"
        variants={itemVariants}
      >
        <TabButton
          label="Overview"
          icon={<Briefcase className="w-5 h-5" />}
          id="overview"
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <TabButton
          label="Technologies"
          icon={<Code className="w-5 h-5" />}
          id="technologies"
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <TabButton
          label="Projects"
          icon={<Target className="w-5 h-5" />}
          id="projects"
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <TabButton
          label="Achievements"
          icon={<Trophy className="w-5 h-5" />}
          id="achievements"
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </motion.div>

      {/* Tab content */}
      <motion.div
        className="max-w-4xl mx-auto"
        layout
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h3>
                {Array.isArray(experience.responsibilities) && experience.responsibilities.length > 0 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        <span className="text-white/80">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">No responsibilities listed for this role</p>
                )}

                {/* External links */}
                {experience.links && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    {experience.links.company && (
                      <motion.a
                        href={experience.links.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-white border border-gray-700 transition-all"
                        whileHover={{ y: -2, x: 2 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Visit Company</span>
                      </motion.a>
                    )}

                    {experience.links.caseStudy && (
                      <motion.a
                        href={experience.links.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 rounded-lg text-white border border-rose-500/30 transition-all"
                        whileHover={{ y: -2, x: 2 }}
                      >
                        <Trophy className="w-5 h-5" />
                        <span>View Case Study</span>
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Technologies Tab */}
            {activeTab === 'technologies' && (
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Technologies & Skills</h3>
                {technologies.length > 0 ? (
                  <HorizontalCarousel
                    items={technologies}
                    renderItem={renderTechnology}
                  />
                ) : (
                  <p className="text-gray-400 italic">No technologies listed for this role</p>
                )}
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Notable Projects</h3>
                {Array.isArray(experience.projects) && experience.projects.length > 0 ? (
                  <HorizontalCarousel
                    items={experience.projects}
                    renderItem={renderProject}
                  />
                ) : (
                  <p className="text-gray-400 italic">No projects listed for this role</p>
                )}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Key Metrics & Achievements</h3>
                {Array.isArray(experience.achievements) && experience.achievements.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {experience.achievements.map((achievement, index) => (
                      renderAchievement(achievement, index)
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 italic">No achievements listed for this role</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceDetail;