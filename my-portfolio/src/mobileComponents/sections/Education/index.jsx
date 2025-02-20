import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Book,
  Award,
  Calendar,
  MapPin,
  Star,
  ScrollText,
  Briefcase
} from 'lucide-react';
import { TypewriterText } from '../../../styles/TypewriterText';
import { EducationData } from '../../../data/EducationData';

const MobileEducation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (data) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < data.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Section components
  const UniversityCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-salmon/20"
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-salmon/10 border border-salmon/20">
          <img
            src="/logo/uottawa-logo.jpg"
            alt="University of Ottawa"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">
            University of Ottawa
          </h3>
          <p className="text-salmon-300 text-sm mb-4">
            Honours BSc Mathematics and Computer Science
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Calendar className="w-4 h-4" />
            <span>2023 - 2029</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-salmon/10 border border-salmon/20">
          <div className="text-lg font-bold text-salmon-300">4.0</div>
          <div className="text-sm text-white/60">Current GPA</div>
        </div>
        <div className="p-4 rounded-xl bg-salmon/10 border border-salmon/20">
          <div className="text-lg font-bold text-salmon-300">10</div>
          <div className="text-sm text-white/60">Current Courses</div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-white/80 mb-3">Program Focus</h4>
        <div className="flex flex-wrap gap-2">
          {['Data Science', 'AI/ML', 'Algorithms', 'Statistics'].map(skill => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm
                bg-salmon/10 text-salmon-300 border border-salmon/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const CourseCard = ({ course }) => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="bg-black/20 backdrop-blur-lg rounded-2xl overflow-hidden border border-salmon/20"
    >
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{course.name}</h3>
          <div className="flex items-center gap-2 text-salmon-300">
            <ScrollText className="w-4 h-4" />
            <span>{course.code}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className={`
            px-3 py-1 rounded-full text-sm
            ${course.status === 'Current'
              ? 'bg-salmon/10 text-salmon-300 border border-salmon/20'
              : 'bg-green-500/10 text-green-300 border border-green-500/20'}
          `}>
            {course.status}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-salmon-300" />
            <span className="text-white font-medium">{course.grade}</span>
          </div>
        </div>

        <p className="text-white/70 text-sm mb-4">{course.description}</p>

        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm
                bg-salmon/10 text-salmon-300 border border-salmon/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Navigation tabs
  const tabs = [
    { id: 'overview', label: 'Overview', icon: GraduationCap },
    { id: 'courses', label: 'Courses', icon: Book },
    { id: 'achievements', label: 'Awards', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Minimal Header */}
      <div className="fixed top-0 inset-x-0 z-50">
        <div className="flex justify-between items-center px-4 py-3 bg-black/80 backdrop-blur-xl border-b border-salmon/20">
          <div className="text-salmon-300 text-sm font-medium">Education</div>
          <div className="flex gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`
                  p-2 rounded-lg transition-all duration-300
                  ${activeSection === tab.id
                    ? 'bg-salmon/10 text-salmon-300'
                    : 'text-white/60'}
                `}
              >
                <tab.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-14 px-4 pb-24">
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && <UniversityCard />}

          {activeSection === 'courses' && (
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(EducationData.courses)}
              className="relative"
            >
              <CourseCard course={EducationData.courses[currentIndex]} />

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {EducationData.courses.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`
                      transition-all duration-300 rounded-full
                      ${idx === currentIndex
                        ? 'w-8 h-2 bg-gradient-to-r from-salmon-500 to-red-500'
                        : 'w-2 h-2 bg-white/20'}
                    `}
                  />
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MobileEducation;