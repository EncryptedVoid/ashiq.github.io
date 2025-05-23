// src/features/education/Education.mobile.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Target,
  BookOpen
} from 'lucide-react';
import { EducationData } from '@data/EducationData';
import { useScrollAnimation } from '@hooks/useAnimation';

// Mobile University Hero Card
const UniversityHeroMobile = ({ university }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const quickStats = [
    { label: 'GPA', value: university.GPA, color: 'text-emerald-400' },
    { label: 'Year', value: '2nd', color: 'text-blue-400' },
    { label: 'Dean\'s List', value: '2x', color: 'text-yellow-400' }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-teal-500/10 rounded-2xl" />

      <div className="relative bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6 backdrop-blur-xl">

        {/* Header with Logo and Basic Info */}
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="w-16 h-16 bg-white/[0.05] border border-white/[0.15] rounded-xl overflow-hidden">
              <img
                src={university.logo}
                alt={university.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-bold text-white mb-1 truncate"
            >
              {university.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-blue-300 mb-2 line-clamp-2"
            >
              {university.degree}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 text-xs text-white/60"
            >
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{university.duration.start} - {university.duration.end}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-3 mb-6"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="bg-white/[0.05] border border-white/[0.1] rounded-xl p-3 text-center"
            >
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-white/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Briefcase className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Currently on Internship</div>
              <div className="text-xs text-blue-300">Software Testing Specialist at QNX</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Mobile Course Card with Swipe Carousel
const MobileCourseCarousel = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < courses.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const gradeColors = {
    'A+': 'from-emerald-400 to-green-400',
    'A': 'from-blue-400 to-cyan-400',
    'A-': 'from-purple-400 to-blue-400',
    'B+': 'from-yellow-400 to-orange-400',
    'B': 'from-orange-400 to-red-400'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Course History
          </h2>
        </div>

        <div className="text-xs text-white/60">
          {currentIndex + 1} / {courses.length}
        </div>
      </div>

      {/* Swipe Hint */}
      <div className="text-center mb-4">
        <div className="text-xs text-white/40 italic">Swipe to browse courses</div>
      </div>

      {/* Course Cards Container */}
      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm"
          >
            {/* Course Image */}
            <div className="relative h-40">
              <img
                src={courses[currentIndex].image}
                alt={courses[currentIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Grade Badge */}
              <div className="absolute top-3 right-3">
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradeColors[courses[currentIndex].grade] || 'from-gray-400 to-gray-500'} text-white font-bold text-sm`}>
                  {courses[currentIndex].grade}
                </div>
              </div>

              {/* Course Code */}
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
                  {courses[currentIndex].code}
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                {courses[currentIndex].name}
              </h3>

              <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
                {courses[currentIndex].description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {courses[currentIndex].skills.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-white/[0.1] border border-white/[0.2] rounded-full text-white/80"
                  >
                    {skill}
                  </span>
                ))}
                {courses[currentIndex].skills.length > 4 && (
                  <span className="px-2 py-1 text-xs bg-white/[0.05] border border-white/[0.1] rounded-full text-white/60">
                    +{courses[currentIndex].skills.length - 4}
                  </span>
                )}
              </div>

              {/* Course Meta */}
              <div className="flex items-center justify-between text-xs text-white/60 pt-3 border-t border-white/[0.1]">
                <span>{courses[currentIndex].term}</span>
                <span>{courses[currentIndex].year}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {courses.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-6 h-2 bg-gradient-to-r from-blue-400 to-cyan-400'
                : 'w-2 h-2 bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className={`p-2 rounded-lg transition-all duration-300 ${
            currentIndex === 0
              ? 'bg-white/[0.02] text-white/30 cursor-not-allowed'
              : 'bg-white/[0.05] hover:bg-white/[0.1] text-white hover:-translate-x-1'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentIndex(prev => Math.min(courses.length - 1, prev + 1))}
          disabled={currentIndex === courses.length - 1}
          className={`p-2 rounded-lg transition-all duration-300 ${
            currentIndex === courses.length - 1
              ? 'bg-white/[0.02] text-white/30 cursor-not-allowed'
              : 'bg-white/[0.05] hover:bg-white/[0.1] text-white hover:translate-x-1'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

// Mobile Achievements Carousel
const MobileAchievementsCarousel = ({ achievements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-500/20 rounded-lg">
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements
          </h2>
        </div>

        <div className="text-xs text-white/60">
          {currentIndex + 1} / {achievements.length}
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-5 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  {achievements[currentIndex].title}
                </h3>

                <div className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-sm text-yellow-300 font-medium mb-3">
                  {achievements[currentIndex].year}
                </div>

                <p className="text-white/70 leading-relaxed text-sm">
                  {achievements[currentIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {achievements.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-6 h-2 bg-gradient-to-r from-yellow-400 to-orange-400'
                : 'w-2 h-2 bg-white/20'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Mobile Research Section
const MobileResearchSection = ({ research }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  if (!research) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-500/20 rounded-lg">
          <Target className="w-5 h-5 text-purple-400" />
        </div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Current Research
        </h2>
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-5 backdrop-blur-sm">
        <h3 className="text-base font-bold text-white mb-2">
          {research.title}
        </h3>

        {research.advisor && (
          <p className="text-purple-300 text-sm mb-3">
            <span className="text-white/60">Advisor:</span> {research.advisor}
          </p>
        )}

        <p className="text-white/80 leading-relaxed text-sm mb-4">
          {research.description}
        </p>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-2 text-center">
            <div className="text-sm font-bold text-purple-300">{research.publications || 0}</div>
            <div className="text-xs text-white/60">Publications</div>
          </div>

          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 text-center">
            <div className="text-sm font-bold text-blue-300">{research.citations || 0}</div>
            <div className="text-xs text-white/60">Citations</div>
          </div>

          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2 text-center">
            <div className="text-sm font-bold text-green-300">{research.status}</div>
            <div className="text-xs text-white/60">Status</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationMobile = () => {
  const { university, courses = [], achievements = [], researchWork } = EducationData || {};

  if (!EducationData || !university) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-sm">Loading education data...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 px-4">
      {/* University Hero */}
      <UniversityHeroMobile university={university} />

      {/* Course History Carousel */}
      {courses.length > 0 && (
        <MobileCourseCarousel courses={courses} />
      )}

      {/* Achievements Carousel */}
      {achievements.length > 0 && (
        <MobileAchievementsCarousel achievements={achievements} />
      )}

      {/* Research Section */}
      {researchWork && <MobileResearchSection research={researchWork} />}
    </section>
  );
};

export default EducationMobile;