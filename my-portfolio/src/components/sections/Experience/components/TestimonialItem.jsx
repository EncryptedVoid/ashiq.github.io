// src/components/sections/Experience/components/TestimonialItem.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialItem = ({ testimonial }) => {
  return (
    <motion.div
      className="
        p-4
        rounded-xl
        bg-white/[0.03] hover:bg-white/[0.06]
        border border-white/[0.06] hover:border-white/[0.12]
        transition-all duration-300
        hover:-translate-y-1
      "
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
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
              {testimonial.name && testimonial.name[0]}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2">
            <h4 className="font-semibold text-white truncate text-base">
              {testimonial.name}
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/40 hidden md:inline-block">•</span>
              <span className="text-sm text-white/60 truncate">
                {testimonial.position}
              </span>
            </div>
          </div>
          <p className="text-white/80 leading-relaxed text-sm">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialItem;