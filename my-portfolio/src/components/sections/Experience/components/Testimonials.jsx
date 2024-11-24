// src/components/sections/Experience/components/Testimonials.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from '../../../common/GlassCard';

const TestimonialCard = ({ testimonial }) => (
<div className="flex items-start gap-4 p-4">
    {/* Headshot */}
    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
    {testimonial.image ? (
        <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover"
        />
    ) : (
        <div className="w-full h-full bg-white/10 flex items-center justify-center text-white/40">
        {testimonial.name[0]}
        </div>
    )}
    </div>

    {/* Content */}
    <div className="flex-1">
    <div className="flex items-center gap-2 mb-1">
        <h4 className="font-medium text-white">
        {testimonial.name}
        </h4>
        <span className="text-sm text-white/40">
        •
        </span>
        <span className="text-sm text-white/60">
        {testimonial.position}
        </span>
    </div>
    <p className="text-sm text-white/80">
        {testimonial.text}
    </p>
    </div>
</div>
);

const Testimonials = ({ testimonials }) => {
const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevious = () => {
    setCurrentIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
    );
};

const handleNext = () => {
    setCurrentIndex((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
    );
};

return (
    <div className="py-6">
    <h4 className="text-sm font-semibold text-white/60 uppercase mb-4">
        Testimonials
    </h4>

    <div className="relative">
        <GlassCard>
        <div className="relative overflow-hidden">
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

        {/* Navigation Buttons */}
        {testimonials.length > 1 && (
        <>
            <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                w-8 h-8 rounded-full bg-white/5 border border-white/10
                flex items-center justify-center
                hover:bg-white/10 transition-colors duration-300"
            >
            <ChevronLeft className="w-4 h-4 text-white/60" />
            </button>
            <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                w-8 h-8 rounded-full bg-white/5 border border-white/10
                flex items-center justify-center
                hover:bg-white/10 transition-colors duration-300"
            >
            <ChevronRight className="w-4 h-4 text-white/60" />
            </button>
        </>
        )}

        {/* Dots Indicator */}
        {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex
                    ? 'bg-white/60 w-4'
                    : 'bg-white/20 hover:bg-white/30'}
                `}
            />
            ))}
        </div>
        )}
    </div>
    </div>
);
};

export default Testimonials;