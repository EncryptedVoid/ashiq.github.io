// src/features/education/Education.desktop.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { EducationData } from '@data/EducationData';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
      className="grid grid-cols-[140px,1fr,auto] gap-10 items-center mb-12 p-8
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
const CourseCard = ({ course, index }) => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:bg-white/[0.08] hover:border-white/[0.12]
        hover:shadow-xl hover:shadow-black/20"
    >
      <div className="relative w-full h-48 bg-white/[0.04] rounded-2xl mb-5 overflow-hidden">
        <img src={`${course.image}`} alt={`${course.name} course`}
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="text-xl font-semibold text-white/90 mb-3">{course.name}</div>
      <div className="text-white/60 text-sm leading-relaxed">
        {course.skills.join(' • ')}
      </div>
      <div className="mt-4 space-y-3">
        <p className="text-white/70">{course.description}</p>
        <div className="flex justify-between items-center text-sm text-white/60">
          <span>Grade: {course.grade}</span>
          <span>Prof: {course.professor}</span>
        </div>
      </div>
    </motion.div>
  );
};

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
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <EducationHeader university={university} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <CollapsibleSection
          title="Academic Achievements"
          gradientColors="from-purple-500 to-blue-500"
        >
          <Achievements achievements={achievements} />
        </CollapsibleSection>

        {researchWork && ( // Only render if researchWork exists
          <CollapsibleSection
            title="Research Work"
            gradientColors="from-blue-500 to-cyan-500"
          >
            <ResearchWork research={researchWork} />
          </CollapsibleSection>
        )}
      </div>
    </section>
  );
};

export default EducationDesktop;