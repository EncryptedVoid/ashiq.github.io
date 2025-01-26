import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonial data - replace with proper import when available
const testimonialData = [
    {
      id: 1,
      name: "John Smith",
      role: "Senior Software Engineer",
      company: "Google",
      initials: "JS",
      quote: "Their technical expertise and commitment to quality are outstanding. They consistently deliver exceptional results.",
      linkedIn: "https://linkedin.com/in/johnsmith"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Engineering Manager",
      company: "Apple",
      initials: "SJ",
      quote: "One of the most talented developers I've had the pleasure to work with. Their problem-solving abilities are remarkable.",
      linkedIn: "https://linkedin.com/in/sarahjohnson"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Technical Lead",
      company: "Microsoft",
      initials: "MC",
      quote: "Outstanding technical skills combined with excellent communication. A true asset to any development team.",
      linkedIn: "https://linkedin.com/in/michaelchen"
    }
];

const MobileTestimonialCard = ({ testimonialData }) => (
  <div className="w-full relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-xl p-3">
    {/* Company Tag */}
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-white/60 bg-white/[0.03] px-3 py-1 rounded-full">
        {testimonialData.company}
      </span>
      <a
        href={testimonialData.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03]
                 active:scale-95 transition-all touch-manipulation"
        onClick={e => e.stopPropagation()}
      >
        <ExternalLink className="w-5 h-5 text-white/60" />
      </a>
    </div>

    {/* Content */}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/90 to-purple-500/90
                      flex items-center justify-center text-lg font-bold text-white">
          {testimonialData.initials}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonialData.name}</h3>
          <p className="text-sm text-white/60">{testimonialData.role}</p>
        </div>
      </div>

      <div className="relative">
        <Quote className="absolute top-0 left-0 w-5 h-5 text-white/20" />
        <p className="pl-8 text-base text-white/80 leading-relaxed">
          "{testimonialData.quote}"
        </p>
      </div>
    </div>
  </div>
);

const MobileTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonialData.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonialData.length) % testimonialData.length);
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
        <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                     bg-clip-text text-transparent">
          What People Say
        </h2>
        <p className="text-sm text-white/60">
          Swipe to explore testimonials
        </p>
      </div>

      <div className="relative touch-pan-x"
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
            <MobileTestimonialCard testimonialData={testimonialData[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Larger touch targets */}

      </div>

      {/* Progress Indicators - Optimized for touch */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonialData.map((_, index) => (
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

export default MobileTestimonials;