// src/components/sections/Experience/Experience.jsx
import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import MobileExperienceCard from './components/MobileExperienceCard';
import MobileCaseStudyModal from './components/MobileCaseStudyModal';
import ExperienceCard from './components/ExperienceCard';
import CaseStudyModal from './components/CaseStudyModal';
import { experienceData } from '../../../data/ExperienceData';

const MobileExperience = () => {
  const [activeId, setActiveId] = React.useState(null);
  const [caseStudyData, setCaseStudyData] = React.useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleCaseStudyOpen = (experience) => {
    setCaseStudyData(experience);
  };

  const handleCaseStudyClose = () => {
    setCaseStudyData(null);
  };

  // Shared section content
  const SectionHeader = () => (
    <div className="text-center space-y-4">
      <motion.h1
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h1>
      <motion.p
        className="text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        A journey through impactful roles and transformative projects
      </motion.p>
    </div>
  );

  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
        <SectionHeader />

        {/* Experience Cards */}
        <div className="space-y-4 md:space-y-6">
          {experienceData.map((experience, index) => (
            <React.Fragment key={experience.id}>
              {isMobile ? (
                <MobileExperienceCard
                  experience={experience}
                  isActive={activeId === experience.id}
                  onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
                  onCaseStudyClick={() => handleCaseStudyOpen(experience)}
                  index={index}
                />
              ) : (
                <ExperienceCard
                  experience={experience}
                  isActive={activeId === experience.id}
                  onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
                  onCaseStudyClick={() => handleCaseStudyOpen(experience)}
                  index={index}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Case Study Modal */}
        {isMobile ? (
          <MobileCaseStudyModal
            isOpen={!!caseStudyData}
            onClose={handleCaseStudyClose}
            experience={caseStudyData}
          />
        ) : (
          <CaseStudyModal
            isOpen={!!caseStudyData}
            onClose={handleCaseStudyClose}
            experience={caseStudyData}
          />
        )}
      </div>
    </div>
  );
};

export default Experience;

// Hook to handle swipe gestures
const useSwipeHandlers = (onSwipeLeft, onSwipeRight) => {
  const touchStart = React.useRef(null);
  const touchEnd = React.useRef(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft?.();
    }
    if (isRightSwipe) {
      onSwipeRight?.();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};

// Testimonials swipe handler component
const SwipeableTestimonials = ({ testimonials, currentIndex, setCurrentIndex }) => {
  const handlers = useSwipeHandlers(
    () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
    () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  );

  return (
    <div
      {...handlers}
      className="touch-pan-y"
    >
      {/* Testimonials content */}
    </div>
  );
};

// Mobile-optimized section navigation
const MobileSectionNav = ({ sections, activeSection, onChange }) => (
  <div className="
    sticky top-0
    z-20
    bg-gray-900/80
    backdrop-blur-lg
    border-b border-white/10
  ">
    <div className="
      flex
      overflow-x-auto
      scrollbar-none
      gap-2
      p-4
    ">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onChange(section.id)}
          className={`
            flex-shrink-0
            px-4 py-2
            rounded-full
            text-sm
            transition-all
            ${activeSection === section.id
              ? 'bg-blue-500/20 text-blue-400'
              : 'bg-white/5 text-white/60'
            }
          `}
        >
          {section.label}
        </button>
      ))}
    </div>
  </div>
);

// Bottom action sheet for mobile
const MobileActionSheet = ({ actions, onClose }) => (
  <motion.div
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '100%' }}
    className="
      fixed
      inset-x-0
      bottom-0
      bg-gray-900/95
      backdrop-blur-xl
      rounded-t-3xl
      border-t border-white/10
      z-50
    "
  >
    <div className="p-4 space-y-4">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => {
            action.onClick();
            onClose();
          }}
          className="
            w-full
            py-4
            text-left
            text-white/80
            active:bg-white/5
            rounded-xl
            transition-colors
          "
        >
          {action.label}
        </button>
      ))}
    </div>
  </motion.div>
);

export default MobileExperience;