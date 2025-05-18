// src/features/goals/Goals.desktop.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GoalCard from './components/GoalCard.desktop';

const GoalsDesktop = ({ goals = [] }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsInView, setCardsInView] = useState(3);

  // Calculate the card width and visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = carouselRef.current?.clientWidth || 0;
      let visibleCards = 3; // default for large screens

      if (window.innerWidth < 768) {
        visibleCards = 1;
      } else if (window.innerWidth < 1280) {
        visibleCards = 2;
      }

      // Calculate card width including gap (24px)
      const calculatedCardWidth = containerWidth / visibleCards;
      setCardWidth(calculatedCardWidth);
      setCardsInView(visibleCards);
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigateToCard = (index) => {
    // Keep index within bounds
    const safeIndex = Math.max(0, Math.min(index, goals.length - 1));
    setActiveIndex(safeIndex);

    // Scroll to the card - centered if possible
    if (carouselRef.current) {
      const scrollPosition = safeIndex * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => navigateToCard(activeIndex + 1);
  const handlePrev = () => navigateToCard(activeIndex - 1);

  // Watch scroll to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && cardWidth > 0) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);

        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex, cardWidth]);

  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(250, 140, 140, 0.15) 2px, transparent 0),
                           radial-gradient(circle at 75px 75px, rgba(138, 92, 246, 0.1) 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Section content */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Future Aspirations
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A roadmap of goals and milestones guiding my professional journey
          </p>
        </motion.div>

        {/* Carousel container with navigation */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transform -translate-x-6
            ${activeIndex === 0 ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed' : 'bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-black/70'}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex >= goals.length - cardsInView}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transform translate-x-6
            ${activeIndex >= goals.length - cardsInView ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed' : 'bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-black/70'}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-x-auto hide-scrollbar snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory'
            }}
          >
            <div
              className="flex gap-8 pb-4"
              style={{
                width: `${goals.length * cardWidth}px`
              }}
            >
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="snap-center"
                  style={{
                    minWidth: `${cardWidth - 32}px`, // Subtract gap width
                    maxWidth: `${cardWidth - 32}px`
                  }}
                >
                  <GoalCard
                    goal={goal}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Card indicator dots */}
          {/* <div className="flex justify-center mt-12 gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {goals.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                  index === activeIndex
                    ? 'bg-gradient-to-r from-rose-400 to-purple-500 w-8'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                aria-label={`Navigate to goal ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GoalsDesktop;