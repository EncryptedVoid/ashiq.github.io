// Hero.desktop.jsx
import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Download, Briefcase, Building, MapPin, GraduationCap } from 'lucide-react';
import { useMousePosition } from '@/hooks';
import { HeroData } from '@/data/HeroData';
import { SocialsData } from '@/data/SocialsData';
import { ParticleField, TypewriterText } from '@/components';
import { ExperienceData } from '@/data/ExperienceData';
import { EducationData } from '@/data/EducationData';

const HeroDesktop = () => {
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
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Column: Text & Content */}
          <div className="col-span-7">
            <div className="space-y-6">
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

              {/* Job Status / Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {isOpenToOpportunities ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400">Open to Opportunities</span>
                    <div className="w-px h-4 bg-white/10 mx-2" />
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-white/60" />
                      <span className="text-white/60">{HeroData.status.location}</span>
                    </div>
                  </div>
                ) : (
                  <motion.button
                    onClick={() => scrollToSection('experience')}
                    className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full w-fit"
                    whileHover={{
                      backgroundColor: "rgba(244, 63, 94, 0.2)",
                      borderColor: "rgba(244, 63, 94, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Briefcase className="w-4 h-4 text-rose-400" />
                    <span className="text-rose-400 max-w-[150px] truncate" title={currentExperience.title}>
                      {currentExperience.title}
                    </span>
                    <div className="w-px h-4 bg-rose-500/20 mx-2" />
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4 text-rose-400" />
                      <span className="text-rose-400 max-w-[150px] truncate" title={currentExperience.company}>
                        {currentExperience.company}
                      </span>
                    </div>
                  </motion.button>
                )}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
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
            </div>
          </div>

          {/* Right Column: Profile Image & Education */}
          <div className="col-span-5">
            <div className="flex flex-col items-center space-y-5">
              {/* Profile image with 3D tilt effect */}
              <motion.div
                className="relative w-72 h-72"
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

              {/* Education Status */}
              <motion.button
                onClick={() => scrollToSection('education')}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 hover:border-white/15 transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-medium text-white">
                    {education.name}
                  </h3>
                </div>

                <p className="text-white/70 mb-3 text-sm">
                  {education.degree}
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-white/60">
                    Year {currentYearOfStudy} of {totalYears}
                  </span>
                  <span className="text-white/60">
                    {Math.round(progress * 100)}% Complete
                  </span>
                </div>

                {currentlyOnInternship && (
                  <div className="mt-2 py-1 px-3 bg-blue-500/20 text-blue-400 text-xs rounded-full w-fit">
                    Currently on Internship
                  </div>
                )}
              </motion.button>

              {/* Resume button */}
              <motion.a
                href={HeroData.status.resumeLink}
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/30 rounded-full text-rose-400 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <Download className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;