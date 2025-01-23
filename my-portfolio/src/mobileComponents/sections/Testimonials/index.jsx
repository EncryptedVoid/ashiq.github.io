import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import { testimonials } from '../../../data/TestimonialsData';

const TestimonialCard = ({ testimonial }) => (
  <div className="w-full min-h-[300px] relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
    {/* Company Badge */}
    <div className="absolute top-4 right-4 py-1.5 px-3 border border-white/[0.08] rounded-full bg-white/[0.03]">
      <span className="text-sm text-white/60">{testimonial.company}</span>
    </div>

    {/* LinkedIn Link - Made larger for touch */}
    <a
      href={testimonial.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 right-24 w-8 h-8 rounded-full bg-white/[0.03]
                border border-white/[0.08] flex items-center justify-center
                active:scale-95 transition-all"
    >
      <ExternalLink className="w-4 h-4 text-white" />
    </a>

    {/* Quote Icon */}
    <Quote className="absolute top-4 left-4 w-6 h-6 text-white/10" />

    {/* Main Content - Adjusted spacing for mobile */}
    <div className="mt-12 space-y-4">
      {/* Profile Circle */}
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/90 to-purple-500/90
                    flex items-center justify-center text-lg font-bold text-white">
        {testimonial.initials}
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
        <p className="text-white/60 text-sm">{testimonial.role}</p>
      </div>
      <p className="text-base text-white/80 leading-relaxed">
        "{testimonial.quote}"
      </p>
    </div>
  </div>
);

const MobileTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext, isAutoPlaying]);

  return (
    <section className="w-full py-12 px-4">
      {/* Mobile-optimized header */}
      <div className="text-center mb-8 space-y-3">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          What People Say
        </h2>
        <p className="text-base text-gray-400 px-4">
          Trusted by industry professionals
        </p>
      </div>

      {/* Touch-enabled slider */}
      <div className="relative max-w-md mx-auto"
           onTouchStart={onTouchStart}
           onTouchMove={onTouchMove}
           onTouchEnd={onTouchEnd}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Swipe indicator */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none">
          <div className="text-sm text-white/40 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
            Swipe to navigate
          </div>
        </div>
      </div>

      {/* Progress dots - Larger for touch */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              transition-all duration-300 rounded-full touch-manipulation
              ${index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-pink-500 to-purple-500'
                : 'w-3 h-3 bg-white/20 active:bg-white/30'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileTestimonials;