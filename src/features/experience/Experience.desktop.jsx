// Experience.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExperienceTimeline, ExperienceDetail } from './components';
import { ExperienceData } from '@/data/ExperienceData';

const ExperienceDesktop = () => {
  const [activeExperience, setActiveExperience] = useState(null);

  // Set first experience as active by default with proper checking
  useEffect(() => {
    if (ExperienceData && ExperienceData.length > 0 && !activeExperience) {
      setActiveExperience(ExperienceData[0].id);
    }
  }, [activeExperience]);

  const handleExperienceSelect = (id) => {
    setActiveExperience(id);
  };

  // Make sure to handle potential undefined data
  const currentExperience = ExperienceData &&
    Array.isArray(ExperienceData) &&
    ExperienceData.find(exp => exp.id === activeExperience);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 flex">
      {/* Make sure to safely pass experiences array */}
      <ExperienceTimeline
        experiences={ExperienceData || []}
        activeId={activeExperience}
        onSelect={handleExperienceSelect}
      />

      {/* Experience detail view */}
      {currentExperience ? (
        <ExperienceDetail experience={currentExperience} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-400">Select an experience to view details</p>
        </div>
      )}
    </section>
  );
};

export default ExperienceDesktop;