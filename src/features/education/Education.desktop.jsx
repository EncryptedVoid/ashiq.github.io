// src/features/education/Education.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EducationData } from '@data/EducationData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Award, 
  BookOpen, 
  Briefcase,
  Star,
  Target,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { useScrollAnimation } from '@hooks/useAnimation';

// University Hero Section with dynamic stats
const UniversityHero = ({ university }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });
  
  const stats = [
    { label: 'Current GPA', value: university.GPA, icon: TrendingUp, color: 'from-emerald-400 to-teal-400' },
    { label: 'Courses Completed', value: '10+', icon: BookOpen, color: 'from-blue-400 to-cyan-400' },
    { label: 'Dean\'s List', value: '2x', icon: Award, color: 'from-yellow-400 to-orange-400' },
    { label: 'Expected Grad', value: '2029', icon: Calendar, color: 'from-purple-400 to-pink-400' }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-16 overflow-hidden"
    >
      {/* Background gradient with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 lg:p-12 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 items-center">
          
          {/* University Logo - Enhanced */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-white/[0.05] border border-white/[0.1] rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-white/[0.2] transition-all duration-500">
              <img 
                src={university.logo} 
                alt={`${university.name} logo`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </motion.div>

          {/* University Info */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-2"
            >
              {university.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-white/90 mb-2 font-medium"
            >
              {university.degree}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 leading-relaxed max-w-2xl"
            >
              {university.programDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-4 text-white/60"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{university.duration.start} - {university.duration.end}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{university.campus}</span>
              </div>
            </motion.div>
          </div>

          {/* Current Status Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:w-80 mx-auto lg:mx-0"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-blue-400 font-medium">Currently</div>
                  <div className="text-white font-semibold">On Internship</div>
                </div>
              </div>
              <div className="text-sm text-white/80 leading-relaxed">
                Software Testing Specialist at <span className="text-blue-400">QNX - Embedded Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:mt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 lg:p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                  <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
              </div>
              <div className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-white/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Horizontal Carousel Component
const HorizontalCarousel = ({ title, items, renderItem, itemsPerView = 3, icon: Icon, gradientColors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Responsive itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1536) setItemsToShow(4); // 2xl
      else if (width >= 1280) setItemsToShow(3); // xl
      else if (width >= 1024) setItemsToShow(2); // lg
      else setItemsToShow(1); // smaller
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, Math.ceil(items.length / itemsToShow) - 1);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex(prev => prev - 1);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {Icon && (
            <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientColors} bg-opacity-20`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <h2 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
            {title}
          </h2>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`p-2 rounded-lg transition-all duration-300 ${
              canGoPrev 
                ? 'bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] text-white hover:-translate-x-1' 
                : 'bg-white/[0.02] border border-white/[0.05] text-white/30 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`p-2 rounded-lg transition-all duration-300 ${
              canGoNext 
                ? 'bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] text-white hover:translate-x-1' 
                : 'bg-white/[0.02] border border-white/[0.05] text-white/30 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1 ml-4">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? `w-6 h-2 bg-gradient-to-r ${gradientColors}`
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: -currentIndex * (100 / itemsToShow) + '%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className={`flex-shrink-0`}
              style={{ width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 1.5 / itemsToShow}rem)` }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Course Card Component with enhanced design
const CourseCard = ({ course, index }) => {
  const gradeColors = {
    'A+': 'from-emerald-400 to-green-400',
    'A': 'from-blue-400 to-cyan-400',
    'A-': 'from-purple-400 to-blue-400',
    'B+': 'from-yellow-400 to-orange-400',
    'B': 'from-orange-400 to-red-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 h-full"
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Grade Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradeColors[course.grade] || 'from-gray-400 to-gray-500'} text-white font-bold text-sm shadow-lg`}>
            {course.grade}
          </div>
        </div>

        {/* Course Code */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white/90 text-sm font-medium border border-white/20">
            {course.code}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
          {course.name}
        </h3>
        
        <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-white/[0.1] border border-white/[0.2] rounded-full text-white/80 hover:bg-white/[0.2] transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
          {course.skills.length > 3 && (
            <span className="px-2 py-1 text-xs bg-white/[0.05] border border-white/[0.1] rounded-full text-white/60">
              +{course.skills.length - 3}
            </span>
          )}
        </div>

        {/* Course Meta */}
        <div className="flex items-center justify-between text-xs text-white/60 pt-3 border-t border-white/[0.1]">
          <span>{course.term}</span>
          <span>{course.year}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Achievement Card Component
const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-sm hover:from-yellow-500/20 hover:to-orange-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/20 h-full"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Award className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
            {achievement.title}
          </h3>
          
          <div className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-sm text-yellow-300 font-medium mb-3">
            {achievement.year}
          </div>
          
          <p className="text-white/70 leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Research Section Component
const ResearchSection = ({ research }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  if (!research) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-start gap-6">
          <div className="p-4 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl">
            <Target className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Current Research
            </h2>
            
            <h3 className="text-xl font-semibold text-white mb-2">
              {research.title}
            </h3>
            
            {research.advisor && (
              <p className="text-blue-300 mb-4">
                <span className="text-white/60">Advisor:</span> {research.advisor}
              </p>
            )}
            
            <p className="text-white/80 leading-relaxed mb-6">
              {research.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <BookOpen className="w-4 h-4 text-purple-300" />
                <span className="text-purple-300 font-medium">Publications: {research.publications || 0}</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <Star className="w-4 h-4 text-blue-300" />
                <span className="text-blue-300 font-medium">Citations: {research.citations || 0}</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                <Calendar className="w-4 h-4 text-green-300" />
                <span className="text-green-300 font-medium">Status: {research.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationDesktop = () => {
  const { university, courses = [], achievements = [], researchWork } = EducationData || {};

  if (!EducationData || !university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60">Loading education data...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* University Hero Section */}
        <UniversityHero university={university} />

        {/* Course History Carousel */}
        {courses.length > 0 && (
          <HorizontalCarousel
            title="Academic Coursework"
            items={courses}
            renderItem={(course, index) => <CourseCard course={course} index={index} />}
            itemsPerView={3}
            icon={BookOpen}
            gradientColors="from-blue-400 to-cyan-400"
          />
        )}

        {/* Achievements Carousel */}
        {achievements.length > 0 && (
          <HorizontalCarousel
            title="Academic Achievements"
            items={achievements}
            renderItem={(achievement, index) => <AchievementCard achievement={achievement} index={index} />}
            itemsPerView={3}
            icon={Award}
            gradientColors="from-yellow-400 to-orange-400"
          />
        )}

        {/* Research Work Section */}
        {researchWork && <ResearchSection research={researchWork} />}
      </div>
    </section>
  );
};

export default EducationDesktop;