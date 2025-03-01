// src/components/sections/Experience/ExperienceCarousel.mobile.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Award } from 'lucide-react';
import { getTechnologyNames } from '@/data/ExperienceData';
import MobileCaseStudyModal from './CaseStudyModal.mobile';

const ExperienceCarousel = ({ experienceData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // For pagination dots
  const totalItems = experienceData.length;

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left - go to next
      handleNext();
    }

    if (touchEnd - touchStart > 100) {
      // Swipe right - go to previous
      handlePrev();
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const openCaseStudy = (experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'auto';
  };

  // Add a small animation for cards
  const cardVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } }
  };

  // Dynamic salmon-red pattern background
  const patternStyle = {
    backgroundImage: `radial-gradient(#fa8c8c10 1px, transparent 1px), radial-gradient(#fa8c8c05 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
  };

  return (
    <section className="py-4 px-6 min-h-[80vh] relative" style={patternStyle}>
      {/* Swipe Instructions */}
      <div className="text-center text-gray-400 text-sm mb-8 flex items-center justify-center gap-2">
        <ChevronLeft className="w-4 h-4" />
        <span>Swipe to explore my roles</span>
        <ChevronRight className="w-4 h-4" />
      </div>

      {/* Card Carousel */}
      <div
        className="w-full max-w-xs mx-auto relative"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          {experienceData.map((experience, index) => {
            const isActive = index === activeIndex;
            const technologies = getTechnologyNames(experience);

            if (!isActive) return null;

            return (
              <motion.div
                key={experience.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
              >
                {/* Subtle gradient background */}
                <div
                  className={`absolute inset-0 opacity-20 ${experience.gradient || 'bg-gradient-to-br from-rose-500 to-purple-500'}`}
                />

                {/* Current job indicator */}
                {experience.period.end === null && (
                  <div className="absolute -top-1 -right-1">
                    <div className="relative bg-rose-500 text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg">
                      Current
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 p-5">
                  {/* Company Logo - Made more prominent */}
                  <div className="flex justify-center mb-5">
                    <div className="w-24 h-24 rounded-xl bg-gray-700/50 border border-gray-600/50 p-3 flex items-center justify-center">
                      {experience.companyLogo ? (
                        <img
                          src={experience.companyLogo}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-5xl text-white/70">{experience.company.charAt(0)}</div>
                      )}
                    </div>
                  </div>

                  {/* Title & Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white">{experience.company}</h3>
                    <p className="text-rose-400 font-medium">{experience.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{experience.period.display}</p>
                    <p className="text-gray-400 text-sm">{experience.location}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {experience.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs uppercase text-gray-400 mb-2 text-center">Technologies</h4>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {technologies.length > 6 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                          +{technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-3 mt-5">
                    {experience.links?.company && (
                      <a
                        href={experience.links.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-700 text-white text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Company</span>
                      </a>
                    )}

                    <motion.button
                      onClick={() => openCaseStudy(experience)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/80 text-white text-sm"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Award className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Arrows - with subtle animations */}
        <motion.button
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400"
          onClick={handlePrev}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(244, 63, 94, 0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400"
          onClick={handleNext}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(244, 63, 94, 0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Pagination Dots - Now with salmon-red accent */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-rose-500 w-4' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedExperience && (
        <MobileCaseStudyModal
          isOpen={!!selectedExperience}
          onClose={closeCaseStudy}
          experience={selectedExperience}
        />
      )}
    </section>
  );
};

export default ExperienceCarousel;