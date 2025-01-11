// src/mobileComponents/sections/Testimonials/index.jsx
import React, { useState, useRef } from 'react';
import { Quote, Star, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../../../data/testimonialsData'; // Add this import


const MobileTestimonialCard = ({ testimonial, isExpanded, onToggle }) => (
  <motion.div
    layout
    onClick={onToggle}
    className={`
      w-full p-6
      relative
      bg-white/[0.03]
      border border-white/[0.08]
      rounded-2xl
      ${isExpanded ? 'mb-4' : 'mb-2'}
    `}
  >
    {/* Header Section */}
    <div className="flex items-start gap-4">
      {/* Profile Initial Circle */}
      <div className="
        w-12 h-12
        rounded-xl
        bg-gradient-to-br from-pink-500 to-purple-500
        flex items-center justify-center
        text-base font-bold text-white
        flex-shrink-0
      ">
        {testimonial.initials}
      </div>

      {/* Name and Role */}
      <div className="flex-1">
        <h3 className="text-base font-semibold text-white">{testimonial.name}</h3>
        <p className="text-sm text-white/60">{testimonial.role}</p>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Company Badge */}
      <div className="
        py-1 px-3
        border border-white/[0.08]
        rounded-full
        bg-white/[0.03]
      ">
        <span className="text-xs text-white/60">{testimonial.company}</span>
      </div>
    </div>

    {/* Expandable Quote Section */}
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4"
        >
          <div className="relative">
            <Quote className="absolute top-0 left-0 w-4 h-4 text-white/20" />
            <p className="pl-7 text-sm text-white/80 leading-relaxed">
              {testimonial.quote}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Expand Indicator */}
    <div className="absolute bottom-2 right-2">
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronUp className="w-4 h-4 text-white/40" />
      </motion.div>
    </div>
  </motion.div>
);

const MobileTestimonials = () => {
  const [expandedId, setExpandedId] = useState(null);
  const scrollRef = useRef(null);

  const handleCardToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12">
      {/* Header */}
      <div className="px-6 mb-8 space-y-2">
        <h2 className="
          text-2xl font-bold
          bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
          bg-clip-text text-transparent
        ">
          Reviews & Testimonials
        </h2>
        <p className="text-sm text-gray-400">
          See what industry professionals say about working with me
        </p>
      </div>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="
          px-6 space-y-2
          max-h-[70vh] overflow-y-auto
          scrollbar-none
        "
      >
        {testimonials.map((testimonial) => (
          <MobileTestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isExpanded={expandedId === testimonial.id}
            onToggle={() => handleCardToggle(testimonial.id)}
          />
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <div className="px-6 mt-4">
        <div className="w-full h-1 bg-white/[0.03] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            style={{
              scaleX: 0.3,
              transformOrigin: 'left'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MobileTestimonials;