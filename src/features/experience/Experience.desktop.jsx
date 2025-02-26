import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExperienceCard,
  CaseStudyModal,
  AchievementStats
} from '@/features/experience/components';
import { useMedia } from '@/context/MediaContext'
import { ExperienceData } from '@/data';

const ExperienceDesktop = ({ experienceData = ExperienceData }) => {
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
        {/* ExperienceDesktop Cards */}
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

export default ExperienceDesktop;