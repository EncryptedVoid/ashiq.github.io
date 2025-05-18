// src/features/experience/Experience.mobile.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ExperienceData } from '@data/ExperienceData';
import ExperienceCard from './components/ExperienceCard';
import ExperienceModal from './components/ExperienceModal.mobile';

const ExperienceMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Swipe functionality
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? ExperienceData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === ExperienceData.length - 1 ? 0 : prev + 1));
  };

  const openExperience = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    })
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-8 overflow-hidden relative">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(244,63,94,0.3) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          My Professional Journey
        </h2>
        <p className="text-gray-400 text-sm mt-2">Swipe to explore experiences</p>
      </motion.div>

      {/* Cards Container */}
      <div className="relative h-[70vh] overflow-hidden">
        <AnimatePresence custom={activeIndex === 0 ? 1 : -1} mode="wait">
          <motion.div
            key={activeIndex}
            custom={activeIndex === 0 ? 1 : -1}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 100) handlePrevious();
              else if (offset.x < -100) handleNext();
            }}
            className="absolute inset-0"
          >
            <ExperienceCard
              experience={ExperienceData[activeIndex]}
              onTap={() => openExperience(ExperienceData[activeIndex])}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center border border-red-500/20 z-10"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center border border-red-500/20 z-10"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {ExperienceData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'w-6 bg-red-500'
                : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={showModal}
        onClose={closeModal}
      />
    </section>
  );
};

export default ExperienceMobile;