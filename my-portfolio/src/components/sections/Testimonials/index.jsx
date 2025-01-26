// src/components/sections/Testimonials/index.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './components/TestimonialCard';
import { testimonials } from '../../../data/TestimonialsData';


const Testimonials = () => {
const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
};

useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
}, []);

return (
    <section className="w-full py-20 min-h-[600px]">
    {/* Header */}
    <div className="text-center mb-16 space-y-4">
        <h2 className="
        text-4xl md:text-5xl font-bold
        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
        bg-clip-text text-transparent
        ">
        So What Do People Say About Me?
        </h2>
        <p className="text-lg text-gray-400">
        Know who you are hiring with industry leaders and professionals' testimony
        </p>
    </div>

    {/* Testimonials Slider */}
    <div className="relative max-w-6xl mx-auto px-4">
        <div className="overflow-hidden">
        {/* Slider track */}
        <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {testimonials.map((testimonial) => (
            <div
                key={testimonial.id}
                className="w-full flex-shrink-0 p-4"
            >
                <TestimonialCard testimonial={testimonial} />
            </div>
            ))}
        </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
                transition-all duration-300 rounded-full
                ${index === currentIndex
                ? 'w-8 h-2 bg-gradient-to-r from-pink-500 to-purple-500'
                : 'w-2 h-2 bg-white/20 hover:bg-white/30'
                }
            `}
            />
        ))}
        </div>
    </div>
    </section>
);
};

export default Testimonials;