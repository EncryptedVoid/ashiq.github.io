// src/features/testimonials/Testimonials.mobile.jsx
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterText } from '@/components/ui';
import { TestimonialData } from '@/data';
import { TestimonialCardMobile } from './components';

export const TestimonialsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % TestimonialData.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + TestimonialData.length) % TestimonialData.length);
  };

  // Touch handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? handleNext() : handlePrev();
    }
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <section className="w-full py-8 px-4">
      <div className="text-center mb-4 space-y-2">
        <TypewriterText
          text="What People Say"
          size={1.5}
          typingSpeed={100}
          delayBeforeRestart={60000}
        />
        <p className="text-sm text-white/60">
          Swipe to explore testimonials
        </p>
      </div>

      <div
        className="relative touch-pan-x"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCardMobile testimonial={TestimonialData[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {TestimonialData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              transition-all duration-300 rounded-full touch-manipulation
              ${index === currentIndex
                ? 'w-10 h-2 bg-gradient-to-r from-pink-500 to-purple-500'
                : 'w-2 h-2 bg-white/20 active:bg-white/30'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};