// src/features/experience/components/ExperienceTabs.desktop.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperiencePlayground } from '@/features/experience/components';
import { getTechnologyNames } from '@/data/ExperienceData';

const ExperienceTabs = ({ experienceData }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  // Background texture pattern with salmon-red accent
  const texturePattern = `
    radial-gradient(#fa8c8c10 1px, transparent 1px),
    radial-gradient(#fa8c8c08 1px, transparent 1px)
  `;

  return (
    <section
      className="py-16 md:px-8 lg:px-12"
      style={{
        backgroundImage: texturePattern,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px'
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Experience Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {experienceData.map((experience) => {
            const isActive = activeTab === experience.id;
            const technologies = getTechnologyNames(experience);

            return (
              <motion.div
                key={experience.id}
                onClick={() => handleTabClick(experience.id)}
                className={`
                  relative overflow-hidden
                  p-6 rounded-xl cursor-pointer
                  border-2 transition-all duration-300
                  ${isActive
                    ? 'border-rose-500 bg-gray-800/90'
                    : 'border-gray-700 hover:border-gray-500 bg-gray-800/70'}
                  ${activeTab && !isActive ? 'grayscale-[0.7] opacity-70' : ''}
                  w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]
                `}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Card background gradient */}
                <div
                  className={`absolute inset-0 opacity-30 ${experience.gradient || 'bg-gradient-to-br from-rose-500/20 to-blue-500/20'}`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    {/* Company Logo - Now more prominent */}
                    <div className="w-20 h-20 flex items-center justify-center bg-gray-700/50 rounded-lg p-2 border border-gray-600/50">
                      {experience.companyLogo ? (
                        <img
                          src={experience.companyLogo}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-3xl">{experience.company.charAt(0)}</div>
                      )}
                    </div>

                    {/* Company Info */}
                    <div>
                      <h3 className="font-bold text-xl text-white">{experience.company}</h3>
                      <p className="text-rose-400 font-medium">{experience.title}</p>
                      <p className="text-gray-400 text-sm mt-1">{experience.period.display}</p>
                    </div>
                  </div>

                  {/* Technologies/Skills */}
                  <div className="mt-5">
                    <h4 className="text-xs text-gray-400 uppercase mb-2">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {technologies.slice(0, 6).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {technologies.length > 6 && (
                        <span className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">
                          +{technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="mt-4 text-sm text-gray-300 line-clamp-2">
                    {experience.shortDescription}
                  </p>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-6 h-6 bg-gray-800 rotate-45 border-b-2 border-r-2 border-rose-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layoutId="tabActiveIndicator"
                    style={{ translateX: '-50%' }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Content Playground - Shows details when a tab is active */}
        <AnimatePresence mode="wait">
          {activeTab && (
            <ExperiencePlayground
              experience={experienceData.find(exp => exp.id === activeTab)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceTabs;