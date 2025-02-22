// src/components/sections/Testimonials/index.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './components/TestimonialCard';
import { TestimonialData } from '../../../data/TestimonialsData';
import { TypewriterText } from '../../../styles/TypewriterText';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TestimonialData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? TestimonialData.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full py-20 min-h-[600px]">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
                <TypewriterText
                    text="So What Do People Say About Me?"
                    size={2.5}
                    typingSpeed={100}
                    delayBeforeRestart={60000}
                />
                <p className="text-lg text-gray-400">
                    Know who you are hiring with industry professionals' testimony
                </p>
            </div>

            {/* Testimonials Slider */}
            <div className="relative max-w-6xl mx-auto px-4">
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                        w-12 h-12 rounded-full
                        bg-white/[0.03] hover:bg-white/[0.08]
                        border border-white/[0.08]
                        flex items-center justify-center
                        transition-transform hover:-translate-x-1"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                        w-12 h-12 rounded-full
                        bg-white/[0.03] hover:bg-white/[0.08]
                        border border-white/[0.08]
                        flex items-center justify-center
                        transition-transform hover:translate-x-1"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <div className="overflow-hidden">
                    {/* Slider track */}
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {TestimonialData.map((testimonial) => (
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
                    {TestimonialData.map((_, index) => (
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