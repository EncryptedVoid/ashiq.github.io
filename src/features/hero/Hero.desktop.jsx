// Hero.desktop.jsx
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMousePosition } from '@/hooks';
import { HeroData } from '@/data/HeroData';
import { SocialsData } from '@/data/SocialsData';
import { ParticleField, TypewriterText } from '@/components';
import { TestimonialData } from '@/data/TestimonialsData';

// Simple testimonial carousel component
const TestimonialCarousel = () => {
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
    <div className="relative w-full max-w-xl">
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 min-h-[120px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <p className="text-white/80 text-sm italic mb-3">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 font-semibold">
                {testimonials[currentIndex].initials}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{testimonials[currentIndex].name}</p>
                <p className="text-white/60 text-xs">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-rose-400 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-rose-400 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const HeroDesktop = () => {
  const { intro, status, profileImage, quickStats } = HeroData;

  // For 3D tilt effect on profile image
  const mousePosition = useMousePosition();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (mousePosition && mousePosition.position) {
      const { x: mouseX, y: mouseY } = mousePosition.position;
      x.set(mouseX / -25);
      y.set(mouseY / -25);
    }
  }, [mousePosition, x, y]);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Function to scroll to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(`section-${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />

        {/* Circuit board pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(#fa8c8c 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left Column: Text & Content */}
          <div className="col-span-7">
            <div className="space-y-5">
              {/* Terminal text animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <TypewriterText
                  text={intro.terminalText}
                  typingSpeed={100}
                  size={1.1}
                  fromColor="#FA8072"
                  toColor="#FA8072"
                />
              </motion.div>

              {/* Title with animation */}
              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  {intro.title.line1}
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400">
                  {intro.title.line2}
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg text-white/80 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {intro.description[0]}
              </motion.p>

              {/* Status & Resume button */}
              <motion.div
                className="flex items-center gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400">{status.availability}</span>
                  <div className="w-px h-4 bg-white/10 mx-2" />
                  <span className="text-white/60">{status.location}</span>
                </div>

                <motion.a
                  href={status.resumeLink}
                  className="flex items-center gap-2 px-5 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/30 rounded-full text-rose-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Resume
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {Object.values(SocialsData).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={social.onClick}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-rose-400 transition-all duration-300"
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Testimonial Carousel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-5"
              >
                <TestimonialCarousel />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Profile & Stats */}
          <div className="col-span-5">
            <div className="space-y-5">
              {/* Profile image with 3D tilt effect */}
              <motion.div
                className="relative max-w-md mx-auto aspect-square"
                style={{ perspective: '1000px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10"
                  style={{
                    rotateX: useTransform(ySpring, [-100, 100], [10, -10]),
                    rotateY: useTransform(xSpring, [-100, 100], [-10, 10]),
                  }}
                >
                  {/* Subtle animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-black/10 z-10" />
                  <img
                    src={profileImage.src}
                    alt={profileImage.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Red accent glow */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-rose-500/20 to-transparent -z-10 blur-xl opacity-50"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
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
                      className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-4 flex items-center gap-4 text-left cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                      whileHover={{
                        y: -5,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        borderColor: "rgba(250,128,114,0.2)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(sectionId)}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <StatIcon className="w-5 h-5 text-rose-400" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;