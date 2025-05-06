// Experience.mobile.jsx - Corrected version
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceCard } from './components';
import { MobileCaseStudyModal } from './components'; // Fixed the import
import { ExperienceData } from '@/data/ExperienceData';

const ExperienceMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalExperience, setModalExperience] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const carouselRef = useRef(null);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    if (direction === 'left' && activeIndex < ExperienceData.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (direction === 'right' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleCardTap = (experience) => {
    setModalExperience(experience);
  };

  const closeModal = () => {
    setModalExperience(null);
  };

  // Animation variants based on swipe direction
  const cardVariants = {
    enter: (direction) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    },
    exit: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    })
  };

  return (
    <section className="relative min-h-screen px-4 py-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `radial-gradient(#fa8c8c15 1px, transparent 1px)`,
             backgroundSize: '20px 20px'
           }} />

      {/* Experience card carousel */}
      <div className="relative w-full h-full flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-xs mx-auto" ref={carouselRef}>
          <AnimatePresence
            mode="wait"
            custom={swipeDirection}
            initial={false}
          >
            <motion.div
              key={activeIndex}
              custom={swipeDirection}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -50) {
                  handleSwipe('left');
                } else if (offset.x > 50) {
                  handleSwipe('right');
                }
              }}
              className="w-full"
            >
              <ExperienceCard
                experience={ExperienceData[activeIndex]}
                onTap={() => handleCardTap(ExperienceData[activeIndex])}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {ExperienceData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-rose-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {modalExperience && (
        <MobileCaseStudyModal
          experience={modalExperience}
          onClose={closeModal}
          isOpen={!!modalExperience}
        />
      )}
    </section>
  );
};

export default ExperienceMobile;