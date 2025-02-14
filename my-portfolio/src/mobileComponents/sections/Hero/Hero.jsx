import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Calendar } from 'lucide-react';
import ParticleField from '../../../styles/ParticleField';
import { TypewriterText } from '../../../styles/TypewriterText';
import { HeroData } from '../../../data/HeroData';

const MobileHero = () => {
  const { intro, status, profileImage, quickStats, booking } = HeroData;

  // Scroll handler for the contact button
  const scrollToContact = () => {
    // Find the contact section by ID
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-black pb-16 flex flex-col items-center"> {/* Added bottom padding and centered content */}
      <ParticleField />

      {/* Status Bar - Now in two rows */}
      <motion.div
        className="relative z-10 px-4 py-3 bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-lg w-full text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-2 mx-auto w-fit"> {/* Changed to column layout and centered */}
          {/* Availability Status */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-green-400 text-xs font-medium">{status.availability}</span>
          </div>
          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full">
            <MapPin className="w-3 h-3 text-white/60" />
            <span className="text-white/80 text-xs">{status.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 pt-6 w-full flex flex-col items-center"> {/* Added width and centered content */}
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8 w-full">
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
              <img
                src={profileImage.src}
                alt={profileImage.alt}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Title Section */}
          <motion.div
            className="space-y-3 mb-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm text-blue-400 font-mono w-full">
              <TypewriterText
                text={intro.terminalText}
                size={1.5}
                typingSpeed={100}
                delayBeforeRestart={60000}
              />
            </div>
            <h1 className="text-2xl font-bold w-full">
              <span className="bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {Object.values(intro.title).join(' ')}
              </span>
            </h1>
            <p className="text-sm text-white/80 leading-relaxed max-w-md mx-auto w-full">
              {intro.description[0]}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid - Reduced size */}
        <motion.div
          className="grid grid-cols-2 gap-2 mb-8 px-2 w-full" // Reduced gap and added padding
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {quickStats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-white/[0.03] to-white/[0.08] rounded-xl p-3 w-full" // Reduced padding
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <StatIcon className="w-4 h-4 text-blue-400 mb-1" /> {/* Reduced icon size */}
                <div className="text-lg font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-0.5"> {/* Reduced text size */}
                  {stat.value}
                </div>
                <div className="text-[10px] text-white/60">{stat.label}</div> {/* Reduced label size */}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col gap-3 px-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={status.resumeLink}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 text-white text-sm active:scale-[0.98] transition-all duration-300 w-full"
          >
            View Resume
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-white/[0.05] to-white/[0.02] rounded-xl border border-white/10 text-white/90 text-sm active:scale-[0.98] transition-all duration-300 w-full"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
          <a
            href={booking.link}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 text-white text-sm active:scale-[0.98] transition-all duration-300 w-full"
          >
            {booking.text}
            <Calendar className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileHero;
