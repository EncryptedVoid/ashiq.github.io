import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => (
  <div className="w-full h-full p-8 relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl">
    {/* Company Badge */}
    <div className="absolute top-8 right-8 py-2 px-4 border border-white/[0.08] rounded-full bg-white/[0.03]">
      <span className="text-sm text-white/60">{testimonial.company}</span>
    </div>

    {/* LinkedIn Link */}
    <a
      href={testimonial.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-8 right-32 w-10 h-10 rounded-full bg-white/[0.03]
                 border border-white/[0.08] flex items-center justify-center
                 transition-transform hover:-translate-y-1"
    >
      <ExternalLink className="w-4 h-4 text-white" />
    </a>

    {/* Quote Icon */}
    <Quote className="absolute top-8 left-8 w-8 h-8 text-white/10" />

    {/* Main Content */}
    <div className="mt-16 flex gap-6">
      {/* Profile Image/Initials */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/90 to-purple-500/90
                      flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
        {testimonial.initials}
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
          <p className="text-white/60">{testimonial.role}</p>
        </div>
        <p className="text-lg text-white/80 leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
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

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500
                       bg-clip-text text-transparent">
          What People Say
        </h2>
        <p className="text-lg text-white/60">
          Trusted by industry leaders and professionals worldwide
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative px-16">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full
                     bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08]
                     flex items-center justify-center transition-transform hover:-translate-x-1"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full
                     bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08]
                     flex items-center justify-center transition-transform hover:translate-x-1"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Testimonial Cards Container */}
        <div className="overflow-hidden">
          <div
            className="transition-transform duration-500 ease-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-gradient-to-r from-red-500 to-purple-500'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
