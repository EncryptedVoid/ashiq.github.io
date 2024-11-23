// src/components/sections/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import GlassCard from '../../common/GlassCard';  // Updated import path
import {
  Briefcase,
  GraduationCap,
  Users,
  Code,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import ParticleField from './components/ParticleField';
import { TypewriterText } from './components/TypewriterText';
import { useMousePosition } from '../../../hooks/useMousePosition';  // Updated import path

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mousePosition = useMousePosition();

  // Parallax effect for background elements
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Update parallax effect based on mouse position
  useEffect(() => {
    if (mousePosition) {
      const { x: mouseX, y: mouseY } = mousePosition;
      x.set(mouseX / -20);
      y.set(mouseY / -20);
    }
  }, [mousePosition, x, y]);

  // Spring animations for smooth movement
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Particle Background */}
      <ParticleField />

      {/* Main Content */}
      <div className="relative w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Info Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="h-full p-8 md:p-10 relative overflow-hidden group">
              <div className="space-y-8 relative z-10">
                {/* Dynamic Title */}
                <div className="space-y-4">
                  <motion.div
                    className="text-sm text-blue-400 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <TypewriterText text="WHOAMI" />
                  </motion.div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold space-y-2">
                    <motion.span
                      className="block bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Senior Full Stack
                    </motion.span>
                    <motion.span
                      className="block bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      Developer
                    </motion.span>
                  </h1>
                </div>

                {/* Description */}
                <motion.div
                  className="space-y-4 text-lg text-white/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <p>
                    Crafting elegant, user-centric digital experiences with deep expertise
                    in both technical implementation and design philosophy.
                  </p>
                  <p>
                    Former Apple Interaction Developer and Meta UI/UX Developer,
                    specializing in creating seamless, responsive experiences.
                  </p>
                </motion.div>

                {/* Interactive Status */}
                <motion.div
                  className="flex items-center gap-4 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <div className="
                    flex items-center gap-3
                    px-4 py-2
                    bg-white/5
                    border border-white/10
                    rounded-full
                  ">
                    <span className="text-white/60">OTTAWA, ON, CANADA</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400">Available for Work</span>
                  </div>

                  <button className="
                    group
                    flex items-center gap-2
                    px-4 py-2
                    bg-blue-500/10
                    hover:bg-blue-500/20
                    border border-blue-500/20
                    hover:border-blue-500/30
                    rounded-full
                    transition-all duration-300
                    text-blue-400
                  ">
                    View Resume
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square"
            style={{
              perspective: '1000px',
            }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                rotateX: useTransform(ySpring, [-100, 100], [10, -10]),
                rotateY: useTransform(xSpring, [-100, 100], [-10, 10]),
              }}
            >
              <GlassCard className="h-full overflow-hidden group">
                {/* Image overlay effects */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-br from-blue-500/20 to-purple-500/20
                  opacity-0 group-hover:opacity-75
                  transition-opacity duration-700
                "/>

                <div className="
                  absolute inset-0
                  bg-gradient-to-br from-black/20 via-transparent to-transparent
                "/>

                <img
                  src="/profile-image.jpg"
                  alt="Profile"
                  className="
                    w-full h-full
                    object-cover
                    opacity-80
                    group-hover:scale-105
                    transition-transform duration-700
                  "
                />
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: Briefcase, label: "Years Experience", value: "15+" },
            { icon: GraduationCap, label: "Projects Completed", value: "200+" },
            { icon: Users, label: "Satisfied Clients", value: "50+" },
            { icon: Code, label: "Technologies", value: "30+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <GlassCard className="text-center p-4 md:p-6 group">
                <stat.icon className="
                  w-6 h-6 mx-auto mb-3
                  text-white/60
                  group-hover:text-blue-400
                  transition-colors duration-300
                "/>
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;