// src/features/education/Education.desktop.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { EducationData } from '@data/EducationData';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '@hooks/useAnimation';

// Header subcomponent
const EducationHeader = ({ university }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-[140px,1fr,auto] gap-10 items-center mb-8 p-8
        bg-white/[0.03] border border-white/[0.06] rounded-3xl backdrop-blur-xl
        transition-all duration-500 ease-out hover:bg-white/[0.04] hover:border-white/[0.08]
        md:grid-cols-1 md:text-center md:gap-4"
    >
      <div className="w-[140px] h-[140px] bg-white/[0.03] border border-white/[0.06]
        rounded-2xl flex justify-center items-center font-semibold
        transition-transform duration-500 ease-out hover:scale-105 hover:-rotate-3
        hover:border-white/[0.08] md:mx-auto">
        <img src={`${university.logo}`} alt={`${university.name} logo`} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="text-white/90">
        <h2 className="tech-heading text-4xl font-bold mb-3 bg-gradient-to-r from-red-500 via-orange-500 to-green-500
          bg-clip-text text-transparent">
          {university.degree}
        </h2>
        <div className="text-xl text-white/90 mb-2">{university.name}</div>
        <div className="text-white/60 leading-relaxed">{university.programDescription}</div>
      </div>
      <div className="text-xl text-white/60 font-medium md:text-center">
        {university.duration.start} - {university.duration.end}
      </div>
    </motion.div>
  );
};

// Course Card subcomponent
const CourseCard = ({ course }) => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6
        transition-all duration-500 ease-out flex-shrink-0
        hover:-translate-y-2 hover:bg-white/[0.08] hover:border-white/[0.12]
        hover:shadow-xl hover:shadow-black/20 h-full flex flex-col"
    >
      <div className="relative w-full h-48 bg-white/[0.04] rounded-2xl mb-5 overflow-hidden flex-shrink-0">
        <img src={`${course.image}`} alt={`${course.name} course`}
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="text-xl font-semibold text-white/90 mb-3">{course.name}</div>
      <div className="text-white/60 text-sm leading-relaxed mb-4">
        {course.skills.join(' • ')}
      </div>
      <div className="mt-auto space-y-3 flex-grow">
        <p className="text-white/70 line-clamp-3">{course.description}</p>
        <div className="flex justify-between items-center text-sm text-white/60 pt-3 mt-auto">
          <span>Grade: {course.grade}</span>
          <span>Prof: {course.professor}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Carousel Component for Courses
  const CourseCarousel = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const maxIndex = Math.max(0, Math.ceil(courses.length / cardsPerPage) - 1);
  // Calculate how many courses to show on the last page
  const remainingCourses = courses.length % cardsPerPage;
  const lastPageCourses = remainingCourses === 0 ? cardsPerPage : remainingCourses;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="relative py-4">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-8"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, pageIndex) => {
              // Determine if this is the last page
              const isLastPage = pageIndex === maxIndex;
              // Number of cards to show on this page
              const cardsCount = isLastPage ? lastPageCourses : cardsPerPage;

              return (
                <div key={pageIndex} className="flex gap-8 w-full flex-shrink-0">
                  {courses
                    .slice(pageIndex * cardsPerPage, pageIndex * cardsPerPage + cardsCount)
                    .map(course => (
                      <div key={course.id} className="w-1/3 h-full">
                        <CourseCard course={course} />
                      </div>
                    ))}
                    {/* Add empty spacer divs if needed on last page */}
                    {isLastPage && lastPageCourses < cardsPerPage &&
                      Array.from({ length: cardsPerPage - lastPageCourses }).map((_, i) => (
                        <div key={`spacer-${i}`} className="w-1/3" />
                      ))
                    }
                </div>
              );
            })}
        </div>
      </div>

      {/* Pagination Indicators with Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10
            flex items-center justify-center hover:bg-white/10 transition-all"
            aria-label="Previous courses"
          >
            <ChevronLeft className="w-5 h-5 text-white/70" />
          </button>
        )}

        {/* Pagination dots */}
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'bg-white/20'
              }`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        {currentIndex < maxIndex && (
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10
            flex items-center justify-center hover:bg-white/10 transition-all"
            aria-label="Next courses"
          >
            <ChevronRight className="w-5 h-5 text-white/70" />
          </button>
        )}
      </div>


    </div>
  );
};

// Current Status Component
const CurrentStatus = () => (
  <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8
    transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.12]
    mb-6">
    <div className="flex items-start gap-6">
      <div className="p-4 rounded-xl bg-blue-500/10 flex-shrink-0">
        <Briefcase className="w-8 h-8 text-blue-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Currently on Internship</h3>
        <p className="text-lg text-blue-400 mb-4">Software Testing Specialist at BlackBerry QNX</p>
        <p className="text-white/70">
          Developing automation testing framework for the QNX Everywhere project
          and improving testing efficiency while providing quality assurance support.
        </p>
      </div>
    </div>
  </div>
);

// Collapsible Section Component
const CollapsibleSection = ({ title, gradientColors, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className="mt-16"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group"
      >
        <h2 className={`tech-heading text-3xl font-bold bg-gradient-to-r ${gradientColors}
          bg-clip-text text-transparent transition-transform duration-300
          group-hover:scale-105`}>
          {title}
        </h2>
        <div className="flex items-center gap-2 text-white/60 group-hover:text-white/90">
          <span className="text-sm">{isOpen ? 'Hide' : 'Show'}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      <div
        style={{ height: isOpen ? contentHeight : 0 }}
        className="overflow-hidden transition-all duration-500 ease-out"
      >
        <div ref={contentRef}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// Achievements section subcomponent
const Achievements = ({ achievements }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
    {achievements.map((achievement, index) => (
      <motion.div
        key={achievement.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6
          transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2
          hover:shadow-lg hover:shadow-purple-500/10"
      >
        <h3 className="text-xl font-semibold text-white/90 mb-2">
          {achievement.title}
        </h3>
        <span className="inline-block px-3 py-1 bg-purple-500/10 rounded-full
          text-sm text-purple-300 mb-3">
          {achievement.year}
        </span>
        <p className="text-white/70">{achievement.description}</p>
      </motion.div>
    ))}
  </div>
);

// ResearchWork component with null check
const ResearchWork = ({ research }) => {
  if (!research) return null; // Early return if no research data

  return (
    <div className="pt-8">
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8
        hover:bg-white/[0.08] transition-all duration-500
        hover:shadow-lg hover:shadow-blue-500/10">
        <h3 className="text-2xl font-bold text-white/90 mb-4">
          {research.title}
        </h3>
        {research.advisor && (
          <p className="text-white/70 mb-2">
            <span className="text-blue-400">Advisor:</span> {research.advisor}
          </p>
        )}
        {research.description && (
          <p className="text-white/80 mb-6 leading-relaxed">
            {research.description}
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          {research.publications !== undefined && (
            <span className="bg-blue-500/10 px-4 py-2 rounded-full text-blue-300">
              Publications: {research.publications}
            </span>
          )}
          {research.citations !== undefined && (
            <span className="bg-blue-500/10 px-4 py-2 rounded-full text-blue-300">
              Citations: {research.citations}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const EducationDesktop = () => {
  const { university, courses = [], achievements = [], researchWork } = EducationData || {};
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Early return if no education data
  if (!EducationData || !university) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/60">
        Education data is being updated...
      </div>
    );
  }

  return (
    <section ref={ref} className="pb-5">
      <div className="max-w-7xl mx-auto px-8">
        <EducationHeader university={university} />

        {/* Current Status (Internship) */}
        <CurrentStatus />

        {/* Collapsible Courses Carousel */}
        <CollapsibleSection
          title="Course History"
          gradientColors="from-blue-500 to-cyan-500"
          defaultOpen={false}
        >
          <CourseCarousel courses={courses} />
        </CollapsibleSection>

        {/* Academic Achievements */}
        <CollapsibleSection
          title="Academic Achievements"
          gradientColors="from-purple-500 to-blue-500"
          defaultOpen={false}
        >
          <Achievements achievements={achievements} />
        </CollapsibleSection>

        {/* Research Work - if exists */}
        {researchWork && (
          <CollapsibleSection
            title="Research Work"
            gradientColors="from-blue-500 to-cyan-500"
            defaultOpen={false}
          >
            <ResearchWork research={researchWork} />
          </CollapsibleSection>
        )}
      </div>
    </section>
  );
};

export default EducationDesktop;