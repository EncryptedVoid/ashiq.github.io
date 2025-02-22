// src/features/hero/Hero.mobile.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Calendar } from 'lucide-react';
import ParticleField from '@styles/ParticleField';
import { TypewriterText } from '@styles/TypewriterText';
import { HeroData } from '@data/HeroData';
import { getAssetPath } from '@utils/utils';

const HeroMobile = () => {
  const { intro, status, profileImage, quickStats, booking } = HeroData;

  // Unified animations config
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6 }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6 }
    }
  };

  // Unified gradient style
  const primaryGradient = "from-rose-400/20 to-red-500/20";

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen pb-16">
      <ParticleField />

      {/* Status Bar */}
      <motion.div
        className="relative z-10 w-full"
        {...animations.fadeIn}
      >
        <div className="px-4 py-3 backdrop-blur-xl border-b border-white/5">
          <div className="flex flex-col gap-2 items-center">
            {/* Availability Badge */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm"
              whileHover={{ scale: A1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">{status.availability}</span>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-3 h-3 text-white/60" />
              <span className="text-white/60 text-xs">{status.location}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 px-4 pt-8">
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          {...animations.slideUp}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400/20 to-red-500/20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
                <img
                  src={`/assets/${profileImage.src}`}
                  alt={profileImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Title Section */}
          <div className="space-y-4">
            <motion.div
              className="text-sm terminal-text"
              {...animations.fadeIn}
            >
              <TypewriterText
                text={intro.terminalText}
                size={1.5}
                typingSpeed={100}
                delayBeforeRestart={60000}
                fromColor="#F43F5E"
                toColor="#FB7185"
              />
            </motion.div>

            <motion.h1
              className="tech-heading text-2xl font-bold text-white"
              {...animations.slideUp}
            >
              {Object.values(intro.title).join(' ')}
            </motion.h1>

            <motion.p
              className="tech-text text-sm text-white/60 leading-relaxed max-w-md mx-auto"
              {...animations.slideUp}
            >
              {intro.description[0]}
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {quickStats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
              >
                <StatIcon className="w-4 h-4 text-rose-400 mb-2" />
                <div className="text-lg font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {[
            {
              icon: ArrowRight,
              text: 'View Resume',
              href: `/assets/${status.resumeLink}`,
              primary: true
            },
            {
              icon: Mail,
              text: 'Contact Me',
              onClick: scrollToContact,
              primary: false
            },
            booking && {
              icon: Calendar,
              text: booking.text,
              href: booking.link,
              primary: true
            }
          ].filter(Boolean).map((button, index) => (
            <motion.div
              key={button.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {button.href ? (
                <motion.a
                  href={button.href}
                  className={`
                    w-full flex items-center justify-center gap-2 py-3 px-4
                    rounded-xl backdrop-blur-sm border
                    ${button.primary ?
                      'bg-gradient-to-r ' + primaryGradient + ' border-rose-500/20 text-white' :
                      'bg-white/5 border-white/10 text-white/80'
                    }
                  `}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm font-medium">{button.text}</span>
                  <button.icon className="w-4 h-4" />
                </motion.a>
              ) : (
                <motion.button
                  onClick={button.onClick}
                  className={`
                    w-full flex items-center justify-center gap-2 py-3 px-4
                    rounded-xl backdrop-blur-sm border
                    ${button.primary ?
                      'bg-gradient-to-r ' + primaryGradient + ' border-blue-500/20 text-white' :
                      'bg-white/5 border-white/10 text-white/80'
                    }
                  `}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm font-medium">{button.text}</span>
                  <button.icon className="w-4 h-4" />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;