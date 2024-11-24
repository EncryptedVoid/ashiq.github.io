// src/components/sections/Experience/Experience.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './components/ExperienceCard';
import { experienceData } from './experienceData';
import CaseStudyModal from './components/CaseStudyModal';

const Experience = () => {
  const [activeId, setActiveId] = useState(null);
  const [caseStudyData, setCaseStudyData] = useState(null);

  const handleCaseStudyOpen = (experience) => {
    setCaseStudyData(experience);
  };

  const handleCaseStudyClose = () => {
    setCaseStudyData(null);
  };

  return (
    <div className="py-20">
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <p className="text-lg text-white/60">
          A track record of delivering innovative solutions and driving technical excellence
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-4">
        {experienceData.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ExperienceCard
              experience={experience}
              isActive={activeId === experience.id}
              onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
              onCaseStudyClick={() => handleCaseStudyOpen(experience)}
            />
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={!!caseStudyData}
        onClose={handleCaseStudyClose}
        experience={caseStudyData}
      />
    </div>
  );
};

export default Experience;