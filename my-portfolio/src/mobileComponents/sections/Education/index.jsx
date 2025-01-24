import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { EducationData } from '../../../data/EducationData.js';

const MobileEducation = () => {
  const { university, courses, achievements, researchWork } = EducationData;
  const [activeTab, setActiveTab] = useState('overview');

  const Header = () => (
    <div className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <h1 className="text-lg font-bold text-white px-4 py-3">Education</h1>
    </div>
  );

  const TabBar = () => (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar bg-white/5 backdrop-blur-xl">
      {['Overview', 'Courses', 'Achievements', 'Research'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab.toLowerCase())}
          className={`
            px-4 py-2 rounded-full text-sm font-medium
            whitespace-nowrap transition-all
            ${activeTab === tab.toLowerCase()
              ? 'bg-white/20 text-white'
              : 'text-white/60 hover:text-white/80'}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  const OverviewSection = () => (
    <div className="p-4 bg-white/5 backdrop-blur-xl rounded-xl m-4">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/20">
          <img
            src={university.logo}
            alt={university.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{university.name}</h2>
          <p className="text-sm text-white/80 mt-1">{university.degree}</p>
          <p className="text-sm text-white/60 mt-1">
            {university.duration.start} - {university.duration.end}
          </p>
        </div>
      </div>
      <p className="text-base text-white/80 leading-relaxed">
        {university.programDescription}
      </p>
    </div>
  );

  const HorizontalScroller = ({ items, renderItem }) => (
    <div className="px-4 relative">
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 pt-2">
          {items.map((item, index) => (
            <div key={index} className="w-80 flex-shrink-0">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-sm text-white/60 animate-pulse">Swipe for more details</span>
      </div>
    </div>
  );

  const CourseCard = ({ course }) => (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden h-full border border-white/10">
      <div className="aspect-video relative">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4">
          <h3 className="text-lg font-bold text-white mb-1">{course.name}</h3>
          <p className="text-sm text-white/90">Prof. {course.professor}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-end mb-3">
          <div className="px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-green-400">{course.grade}</span>
          </div>
        </div>

        <p className="text-sm text-white/80 line-clamp-2 mb-3">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full text-white/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const AchievementCard = ({ achievement }) => (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 h-full border border-white/10">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
        <span className="px-2 py-1 text-xs bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300">
          {achievement.year}
        </span>
      </div>
      <p className="text-base text-white/80">{achievement.description}</p>
    </div>
  );

  const ResearchSection = () => (
    <div className="p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">{researchWork.title}</h3>
        <p className="text-base text-white/80 mb-6">{researchWork.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm text-white/60 mb-1">Advisor</p>
            <p className="text-base text-white">{researchWork.advisor}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm text-white/60 mb-1">Impact</p>
            <p className="text-base text-white">
              {researchWork.publications} pub · {researchWork.citations} citations
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <Header />
      <TabBar />

      <AnimatePresence mode="wait">
        {activeTab === 'overview' && <OverviewSection />}

        {activeTab === 'courses' && (
          <HorizontalScroller
            items={courses}
            renderItem={(course) => <CourseCard course={course} />}
          />
        )}

        {activeTab === 'achievements' && (
          <HorizontalScroller
            items={achievements}
            renderItem={(achievement) => <AchievementCard achievement={achievement} />}
          />
        )}

        {activeTab === 'research' && <ResearchSection />}
      </AnimatePresence>

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