import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  Award,
  Briefcase,
  Target
} from 'lucide-react';
import { TypewriterText } from '@styles/TypewriterText';
import ExperienceCard from './components/ExperienceCard.desktop';
import CaseStudyModal from './components/CaseStudyModal.desktop';
// Import the ExperienceData directly to ensure it's available
import { ExperienceData } from '@data/ExperienceData';

const Experience = ({ experienceData = ExperienceData }) => {
  const [activeId, setActiveId] = useState(null);
  const [caseStudyData, setCaseStudyData] = useState(null);

  const handleCardClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleCaseStudyOpen = (experience) => {
    setCaseStudyData(experience);
  };

  const handleCaseStudyClose = () => {
    setCaseStudyData(null);
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <TypewriterText
            text="Professional Experience"
            size={3}
            typingSpeed={100}
            delayBeforeRestart={60000}
          />
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A journey through impactful roles and transformative projects
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-6">
          {experienceData && experienceData.length > 0 ? (
            experienceData.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isActive={activeId === experience.id}
                onClick={() => handleCardClick(experience.id)}
                onCaseStudyClick={() => handleCaseStudyOpen(experience)}
                index={index}
              />
            ))
          ) : (
            <div className="text-center p-8 bg-white/[0.03] border border-white/[0.06] rounded-xl">
              <p className="text-white/60">No experience data available</p>
            </div>
          )}
        </div>
      </div>

      {/* Case Study Modal */}
      {caseStudyData && (
        <CaseStudyModal
          isOpen={!!caseStudyData}
          onClose={handleCaseStudyClose}
          experience={caseStudyData}
        />
      )}
    </section>
  );
};

export default Experience;