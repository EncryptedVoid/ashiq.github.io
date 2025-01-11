// src/components/sections/Experience/components/Testimonials.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from '../../../common/GlassCard';

const AUTOPLAY_DELAY = 5000;

const TestimonialCard = ({ testimonial }) => (
  <div className="flex items-start gap-4 p-6">
    {/* Headshot */}
    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
      {testimonial.image ? (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white">
          {testimonial.name[0]}
        </div>
      )}
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-2">
        <h4 className="font-semibold text-white truncate text-lg">
          {testimonial.name}
        </h4>
        <span className="text-sm text-white/40 flex-shrink-0">•</span>
        <span className="text-sm text-white/60 truncate">
          {testimonial.position}
        </span>
      </div>
      <p className="text-white/80 leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  </div>
);

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const previousTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  if (!testimonials?.length) return null;

  return (
    <div className="py-4">
      <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
        Testimonials
      </h4>

      <div
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <GlassCard>
          <div className="relative overflow-hidden min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </GlassCard>

        {/* Navigation Arrows - Made larger and more visible */}
        {testimonials.length > 1 && (
          <>
            <button
              onClick={previousTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5
                w-10 h-10
                rounded-xl
                bg-gray-900/90
                border border-white/20
                flex items-center justify-center
                hover:bg-gray-800
                hover:border-white/40
                transition-all duration-300
                z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5
                w-10 h-10
                rounded-xl
                bg-gray-900/90
                border border-white/20
                flex items-center justify-center
                hover:bg-gray-800
                hover:border-white/40
                transition-all duration-300
                z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                transition-all duration-300
                ${index === currentIndex
                  ? 'w-8 bg-white/60'
                  : 'w-2 bg-white/20 hover:bg-white/30'}
                h-2 rounded-full
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;