// Hero.mobile.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { ParticleField, TypewriterText } from '@/components';
import { HeroData } from '@/data/HeroData';
import { SocialsData } from '@/data/SocialsData';
import { TestimonialData } from '@/data/TestimonialsData';

// Mobile testimonial carousel component
const MobileTestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = TestimonialData;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <p className="text-white/80 text-xs italic mb-3">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-semibold">
                {testimonials[currentIndex].initials}
              </div>
              <div>
                <p className="text-white text-xs font-medium">{testimonials[currentIndex].name}</p>
                <p className="text-white/60 text-xs">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          onClick={prevTestimonial}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextTestimonial}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const HeroMobile = () => {
  const { intro, status, profileImage, quickStats } = HeroData;

  // Function to scroll to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(`section-${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />

        {/* Circuit pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(#fa8c8c 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="px-5 py-6 relative z-10 flex flex-col items-center text-center">
        {/* Profile Image */}
        <motion.div
          className="relative w-28 h-28 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Red halo effect */}
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-rose-500/30 to-transparent blur-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
            <img
              src={profileImage.src}
              alt={profileImage.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Terminal text */}
        <motion.div
          className="mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypewriterText
            text={intro.terminalText}
            size={0.9}
            typingSpeed={100}
            fromColor="#FA8072"
            toColor="#FA8072"
          />
        </motion.div>

        {/* Name & Title */}
        <motion.div
          className="mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-white">{intro.title.line1}</h1>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400">
            {intro.title.line2}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm text-white/70 mb-3 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {intro.description[0]}
        </motion.p>

        {/* Status & Availability */}
        <motion.div
          className="flex flex-col items-center gap-2 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-xs">{status.availability}</span>
          </div>

          <div className="flex items-center gap-1 text-white/60 text-xs">
            <MapPin className="w-3 h-3" />
            <span>{status.location}</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel - Mobile */}
        <motion.div
          className="w-full mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MobileTestimonialCarousel />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 gap-3 w-full max-w-xs mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {quickStats.map((stat, index) => {
            const StatIcon = stat.icon;

            // Map stat labels to section IDs
            const sectionMap = {
              'Skills': 'skills',
              'Certifications': 'certifications',
              'Technologies': 'experience',
              'GitHub Repos': 'projects'
            };

            const sectionId = sectionMap[stat.label] || '';

            return (
              <motion.button
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center text-center"
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                onClick={() => scrollToSection(sectionId)}
              >
                <StatIcon className="w-4 h-4 text-rose-400 mb-2" />
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Resume Button */}
        <motion.a
          href={status.resumeLink}
          className="flex items-center justify-center gap-2 w-full max-w-xs py-2.5 px-4 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileTap={{ scale: 0.98 }}
        >
          Resume
          <ArrowRight className="w-4 h-4" />
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {Object.values(SocialsData).map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.button
                key={index}
                onClick={social.onClick}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60"
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMobile;