// Hero.mobile.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, MapPin, GraduationCap } from 'lucide-react';
import { ParticleField, TypewriterText } from '@/components';
import { HeroData } from '@/data/HeroData';
import { SocialsData } from '@/data/SocialsData';
import { ExperienceData } from '@/data/ExperienceData';
import { EducationData } from '@/data/EducationData';

const HeroMobile = () => {
  const { intro, profileImage } = HeroData;

  // Get current experience if any
  const currentExperience = ExperienceData.find(exp => exp.period.end === null);
  const isOpenToOpportunities = !currentExperience;

  // Calculate education progress
  const education = EducationData.university;
  const currentYear = new Date().getFullYear();
  const startYear = parseInt(education.duration.start);
  const endYear = parseInt(education.duration.end);
  const totalYears = endYear - startYear;
  const currentYearOfStudy = currentYear - startYear;
  const progress = Math.min(Math.max(currentYearOfStudy / totalYears, 0), 1);

  // Are we currently on break/internship?
  const currentlyOnInternship = currentExperience &&
    currentExperience.type.toLowerCase().includes('intern');

  // Function to scroll to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(`section-${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-start pt-8 overflow-hidden">
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

      <div className="px-5 relative z-10 flex flex-col items-center">
        {/* Profile Card */}
        <motion.div
          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-5 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-24 h-24 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            className="mb-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-white">{intro.title.line1}</h1>
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400">
              {intro.title.line2}
            </h2>
          </motion.div>
        </motion.div>

        {/* Status Section */}
        <motion.div
          className="w-full mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {isOpenToOpportunities ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-sm">Open to Opportunities</span>
              </div>
              <div className="flex items-center gap-1 text-white/60 text-xs">
                <MapPin className="w-3 h-3" />
                <span>{HeroData.status.location}</span>
              </div>
            </div>
          ) : (
            <motion.button
              onClick={() => scrollToSection('experience')}
              className="w-full bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 flex flex-col items-center"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-rose-400" />
                <span className="text-rose-400 font-medium">{currentExperience.title}</span>
              </div>
              <span className="text-rose-400/80 text-sm">{currentExperience.company}</span>
              <div className="flex items-center gap-1 text-rose-400/70 text-xs mt-1">
                <MapPin className="w-3 h-3" />
                <span>{currentExperience.location}</span>
              </div>
            </motion.button>
          )}
        </motion.div>

        {/* Education Section */}
        <motion.button
          onClick={() => scrollToSection('education')}
          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-4 flex flex-col items-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2 mb-2 w-full">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <h3 className="text-white font-medium text-sm">
              {education.name}
            </h3>
          </div>

          <p className="text-white/70 mb-2 text-xs w-full">
            {education.degree}
          </p>

          {/* Progress bar */}
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="flex justify-between text-xs w-full">
            <span className="text-white/60">
              Year {currentYearOfStudy} of {totalYears}
            </span>
            <span className="text-white/60">
              {Math.round(progress * 100)}% Complete
            </span>
          </div>

          {currentlyOnInternship && (
            <div className="mt-2 py-1 px-2 bg-blue-500/20 text-blue-400 text-xs rounded-full self-start">
              Currently on Internship
            </div>
          )}
        </motion.button>

        {/* Resume Button */}
        <motion.a
          href={HeroData.status.resumeLink}
          className="w-full py-3 px-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileTap={{ scale: 0.98 }}
        >
          Download Resume
          <Download className="w-4 h-4" />
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-3 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
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