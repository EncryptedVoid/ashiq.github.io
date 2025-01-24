import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const MobileTestimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    touchEnd.current = null;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distance = touchStart.current - touchEnd.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0 && currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (distance < 0 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="py-4">
      <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
        Testimonials
      </h4>

      <div className="relative">
        {/* Swipeable Container */}
        <div
          className="overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="transition-transform duration-300 ease-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-4"
              >
                <Quote className="w-6 h-6 text-white/20 mb-4" />
                <div className="space-y-4">
                  <p className="text-sm text-white/80 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-medium text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-white/60">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-1.5 rounded-full transition-all
                ${index === currentIndex ? 'w-6 bg-blue-400' : 'w-1.5 bg-white/20'}
              `}
            />
          ))}
        </div>

        {/* Pagination Info */}
        <div className="absolute bottom-4 right-4 text-sm text-white/40">
          {currentIndex + 1}/{testimonials.length}
        </div>
      </div>
    </div>
  );
};

export default MobileTestimonials;