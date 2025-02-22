// src/features/education/Education.mobile.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Book,
  Award,
  Calendar,
  Filter,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';
import { EducationData } from '@data/EducationData';
import { useScrollAnimation } from '@hooks/useAnimation';

const EducationMobile = () => {
  // State management
  const [activeSection, setActiveSection] = useState('overview');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [yearFilter, setYearFilter] = useState('All');
  const [topicFilter, setTopicFilter] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState(EducationData.courses);
  const carouselRef = useRef(null);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Extract unique years and topics for filters
  const years = ['All', ...new Set(EducationData.courses.map(course =>
    course.term.split(' ')[1]))].sort();

  const topics = ['All', ...new Set(EducationData.courses.flatMap(course =>
    course.skills.map(skill => skill.split(' ')[0])))].sort();

  // Filter courses based on selected filters
  useEffect(() => {
    let filtered = EducationData.courses;

    if (yearFilter !== 'All') {
      filtered = filtered.filter(course => course.term.includes(yearFilter));
    }

    if (topicFilter !== 'All') {
      filtered = filtered.filter(course =>
        course.skills.some(skill => skill.startsWith(topicFilter)));
    }

    setFilteredCourses(filtered);
    setCurrentIndex(0); // Reset to first course when filters change
  }, [yearFilter, topicFilter]);

  // Navigation for carousel
  const nextCourse = () => {
    if (currentIndex < filteredCourses.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevCourse = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Component for University Overview
  const UniversityCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-xl p-5 border border-white/20 bg-gradient-to-b from-black/40 to-black/10 backdrop-blur-sm"
    >
      {/* School logo and name side by side */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex-shrink-0">
          <img
            src={`/assets/logo/${EducationData.university.logo}`}
            alt={EducationData.university.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-white">
          {EducationData.university.name}
        </h3>
      </div>

      {/* Degree and timeline with full horizontal space */}
      <div className="mb-5">
        <p className="text-blue-300 text-sm mb-1">
          {EducationData.university.degree}
        </p>
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <Calendar className="w-3 h-3" />
          <span>{`${EducationData.university.duration.start} - ${EducationData.university.duration.end}`}</span>
        </div>
      </div>

      {/* Highlight GPA and courses */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-white/10 border border-white/20 flex flex-col items-center justify-center">
          <div className="text-xl font-bold text-blue-300">4.0</div>
          <div className="text-xs text-white/60 mt-1">Current GPA</div>
        </div>
        <div className="p-4 rounded-xl bg-white/10 border border-white/20 flex flex-col items-center justify-center">
          <div className="text-xl font-bold text-blue-300">10</div>
          <div className="text-xs text-white/60 mt-1">Current Courses</div>
        </div>
      </div>

      {/* Highlight current courses */}
      <div className="mt-5">
        <h4 className="text-sm font-medium text-white/80 mb-3">Current Courses</h4>
        <div className="p-3 rounded-xl bg-black/30 border border-white/10">
          <div className="grid grid-cols-2 gap-2">
            {EducationData.courses
              .filter(course => course.status === 'Current')
              .slice(0, 4)
              .map(course => (
                <div key={course.id} className="text-xs">
                  <span className="text-blue-300">{course.code}</span>
                  <div className="text-white/80 truncate">{course.name}</div>
                </div>
              ))}
          </div>
          <div
            className="mt-3 pt-2 text-center text-xs text-blue-300 border-t border-white/10 cursor-pointer"
            onClick={() => setActiveSection('courses')}
          >
            View all courses
          </div>
        </div>
      </div>

      {/* Show only 1-2 achievements */}
      {EducationData.achievements && EducationData.achievements.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm font-medium text-white/80 mb-2">Recent Achievement</h4>
          <div
            key={EducationData.achievements[0].id}
            className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-3"
          >
            <Award className="w-4 h-4 text-blue-300 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-white">{EducationData.achievements[0].title}</div>
              <div className="text-xs text-white/60 mt-1">{EducationData.achievements[0].year}</div>
            </div>
          </div>
          {EducationData.achievements.length > 1 && (
            <div
              className="mt-2 py-2 text-center text-xs text-blue-300 cursor-pointer"
              onClick={() => setActiveSection('achievements')}
            >
              View all {EducationData.achievements.length} achievements
            </div>
          )}
        </div>
      )}
    </motion.div>
  );

  // Component for displaying course details in carousel
  const CourseCard = ({ course }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="rounded-xl overflow-hidden border border-white/20 bg-gradient-to-b from-black/40 to-black/10 backdrop-blur-sm"
    >
      <div className="relative h-40">
        <img
          src={`/assets/course-thumbnails/year1/${course.image}`}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <span className={`
              px-2 py-0.5 rounded-full text-xs
              ${course.status === 'Current'
                ? 'bg-white/10 text-blue-300 border border-white/20'
                : 'bg-green-500/10 text-green-300 border border-green-500/20'}
            `}>
              {course.status}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-blue-300" />
              <span className="text-white text-xs font-medium">{course.grade}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">{course.name}</h3>
          <div className="flex items-center gap-2 text-blue-300 text-xs mt-1">
            <span>{course.code}</span>
            <span className="text-white/40">•</span>
            <span>{course.term}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white/70 text-sm mb-4">{course.description}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {course.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full text-xs
                bg-white/10 text-blue-300 border border-white/20"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="text-xs text-white/50 mt-3">
          {course.professor}
        </div>
      </div>
    </motion.div>
  );

  // Component for Achievements section
  const AchievementsSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {EducationData.achievements && EducationData.achievements.map(achievement => (
        <div
          key={achievement.id}
          className="p-4 rounded-xl bg-gradient-to-b from-black/40 to-black/10 backdrop-blur-sm border border-white/20"
        >
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-300 mt-0.5" />
            <div>
              <div className="text-base font-bold text-white">{achievement.title}</div>
              <div className="text-sm text-blue-300 mt-0.5">{achievement.year}</div>
              <div className="text-sm text-white/70 mt-2">{achievement.description}</div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );

  // Tabs for navigation
  const tabs = [
    { id: 'overview', label: 'Overview', icon: GraduationCap },
    { id: 'courses', label: 'Courses', icon: Book },
    ...(EducationData.achievements && EducationData.achievements.length > 0 ?
      [{ id: 'achievements', label: 'Awards', icon: Award }] : [])
  ];

  return (
    <section ref={ref} className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 px-4"
      >
        <h2 className="tech-heading text-3xl font-bold mb-2">Education</h2>
        <p className="tech-text text-sm text-white/70">
          Academic journey and achievements
        </p>
      </motion.div>

      {/* Section Tabs */}
      <div className="px-4 mb-5">
        <div className="flex bg-black/20 backdrop-blur-sm rounded-lg p-1 border border-white/10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`
                flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300
                ${activeSection === tab.id
                  ? 'bg-white/10 text-blue-300'
                  : 'text-white/60 hover:text-white/80'}
              `}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && <UniversityCard />}

          {activeSection === 'courses' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Filters */}
              <div className="mb-4 p-3 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-white/80">Filter Courses</h4>
                  <Filter className="w-4 h-4 text-blue-300" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Year</label>
                    <select
                      value={yearFilter}
                      onChange={(e) => setYearFilter(e.target.value)}
                      className="w-full text-sm bg-black/30 border border-white/20 rounded-lg p-2 text-white"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-white/60 mb-1 block">Topic</label>
                    <select
                      value={topicFilter}
                      onChange={(e) => setTopicFilter(e.target.value)}
                      className="w-full text-sm bg-black/30 border border-white/20 rounded-lg p-2 text-white"
                    >
                      {topics.map(topic => (
                        <option key={topic} value={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Carousel */}
              <div ref={carouselRef} className="relative">
                {filteredCourses.length > 0 ? (
                  <>
                    <CourseCard course={filteredCourses[currentIndex]} />

                    {/* Navigation arrows */}
                    <div className="flex justify-between absolute inset-0 pointer-events-none">
                      {currentIndex > 0 && (
                        <button
                          onClick={prevCourse}
                          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto self-center ml-2"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                      )}
                      {currentIndex < filteredCourses.length - 1 && (
                        <button
                          onClick={nextCourse}
                          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto self-center mr-2"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    {/* Progress indicator */}
                    <div className="flex justify-center gap-1.5 mt-4">
                      {filteredCourses.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`
                            transition-all duration-300 rounded-full
                            ${idx === currentIndex
                              ? 'w-6 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500'
                              : 'w-1.5 h-1.5 bg-white/20'}
                          `}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Counter */}
                    <div className="text-center text-xs text-white/60 mt-2">
                      {currentIndex + 1} of {filteredCourses.length}
                    </div>
                  </>
                ) : (
                  <div className="py-8 text-center text-white/60 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
                    No courses match your filter criteria
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeSection === 'achievements' && <AchievementsSection />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EducationMobile;