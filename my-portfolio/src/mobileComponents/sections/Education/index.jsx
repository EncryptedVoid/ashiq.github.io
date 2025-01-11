// src/components/Education/index.jsx
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { educationData } from '../../../data/educationData';

// Header subcomponent
const EducationHeader = ({ university }) => (
  <div className="grid grid-cols-[140px,1fr,auto] gap-10 items-center mb-12 p-8
    bg-white/[0.03] border border-white/[0.06] rounded-3xl backdrop-blur-xl
    transition-all duration-500 ease-out hover:bg-white/[0.04] hover:border-white/[0.08]
    md:grid-cols-1 md:text-center md:gap-4">
    <div className="w-[140px] h-[140px] bg-white/[0.03] border border-white/[0.06]
      rounded-2xl flex justify-center items-center font-semibold
      transition-transform duration-500 ease-out hover:scale-105 hover:-rotate-3
      hover:border-white/[0.08] md:mx-auto">
      <img src={university.logo} alt={`${university.name} logo`} className="w-full h-full object-cover rounded-2xl" />
    </div>
    <div className="text-white/90">
      <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-500 via-orange-500 to-green-500
        bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">{university.degree}</h1>
      <div className="text-xl text-white/90 mb-2">{university.name}</div>
      <div className="text-white/60 leading-relaxed">{university.programDescription}</div>
    </div>
    <div className="text-xl text-white/60 font-medium md:text-center">
      {university.duration.start} - {university.duration.end}
    </div>
  </div>
);

// Course Card subcomponent
const CourseCard = ({ course }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6
      transition-all duration-500 ease-out opacity-0 translate-y-8
      hover:-translate-y-2 hover:bg-white/[0.08] hover:border-white/[0.12]
      hover:shadow-xl hover:shadow-black/20">
      <div className="relative w-full h-48 bg-white/[0.04] rounded-2xl mb-5 overflow-hidden">
        <img src={course.image} alt={`${course.name} course`}
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          animate-shimmer" />
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
    </div>
  );
};

// Collapsible Section Component
const CollapsibleSection = ({ title, gradientColors, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="mt-16">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group"
      >
        <h2 className={`text-3xl font-bold bg-gradient-to-r ${gradientColors}
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
    </div>
  );
};

// Achievements section subcomponent
const Achievements = ({ achievements }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
    {achievements.map(achievement => (
      <div key={achievement.id}
        className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6
        transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2
        hover:shadow-lg hover:shadow-purple-500/10">
        <h3 className="text-xl font-semibold text-white/90 mb-2">
          {achievement.title}
        </h3>
        <span className="inline-block px-3 py-1 bg-purple-500/10 rounded-full
          text-sm text-purple-300 mb-3">
          {achievement.year}
        </span>
        <p className="text-white/70">{achievement.description}</p>
      </div>
    ))}
  </div>
);

// Research section subcomponent
const ResearchWork = ({ research }) => (
  <div className="pt-8">
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8
      hover:bg-white/[0.08] transition-all duration-500
      hover:shadow-lg hover:shadow-blue-500/10">
      <h3 className="text-2xl font-bold text-white/90 mb-4">
        {research.title}
      </h3>
      <p className="text-white/70 mb-2">
        <span className="text-blue-400">Advisor:</span> {research.advisor}
      </p>
      <p className="text-white/80 mb-6 leading-relaxed">
        {research.description}
      </p>
      <div className="flex flex-wrap gap-4">
        <span className="bg-blue-500/10 px-4 py-2 rounded-full text-blue-300">
          Publications: {research.publications}
        </span>
        <span className="bg-blue-500/10 px-4 py-2 rounded-full text-blue-300">
          Citations: {research.citations}
        </span>
      </div>
    </div>
  </div>
);

// Main Education component
const Education = () => {
  const { university, courses, achievements, researchWork } = educationData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto p-8 animate-fadeIn">
        <EducationHeader university={university} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <CollapsibleSection
          title="Academic Achievements"
          gradientColors="from-purple-500 to-blue-500"
        >
          <Achievements achievements={achievements} />
        </CollapsibleSection>

        <CollapsibleSection
          title="Research Work"
          gradientColors="from-blue-500 to-cyan-500"
        >
          <ResearchWork research={researchWork} />
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default Education;