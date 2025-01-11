import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Bookmark, Share2, MessageCircle } from 'lucide-react';
import { educationData } from '../../../data/educationData';

const MobileEducation = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const { university, courses, achievements, researchWork } = educationData;

  const ProfileHeader = () => (
    <div className="px-4 py-6 border-b border-white/10">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
          <img
            src={university.logo}
            alt={university.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white/90">{university.name}</h1>
          <p className="text-sm text-white/60">{university.degree}</p>
          <p className="text-xs text-white/40 mt-1">
            {university.duration.start} - {university.duration.end}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-white/70 leading-relaxed">
        {university.programDescription}
      </p>

      <div className="flex justify-between mt-6 pb-2">
        <div className="text-center">
          <div className="text-lg font-bold text-white/90">{courses.length}</div>
          <div className="text-xs text-white/60">Courses</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-white/90">{achievements.length}</div>
          <div className="text-xs text-white/60">Achievements</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-white/90">{researchWork.publications}</div>
          <div className="text-xs text-white/60">Publications</div>
        </div>
      </div>
    </div>
  );

  const TabBar = () => (
    <div className="flex border-b border-white/10">
      <button
        onClick={() => setActiveTab('courses')}
        className={`flex-1 py-3 text-sm font-medium ${
          activeTab === 'courses'
            ? 'text-white/90 border-b-2 border-white/90'
            : 'text-white/40'
        }`}
      >
        Courses
      </button>
      <button
        onClick={() => setActiveTab('achievements')}
        className={`flex-1 py-3 text-sm font-medium ${
          activeTab === 'achievements'
            ? 'text-white/90 border-b-2 border-white/90'
            : 'text-white/40'
        }`}
      >
        Achievements
      </button>
      <button
        onClick={() => setActiveTab('research')}
        className={`flex-1 py-3 text-sm font-medium ${
          activeTab === 'research'
            ? 'text-white/90 border-b-2 border-white/90'
            : 'text-white/40'
        }`}
      >
        Research
      </button>
    </div>
  );

  const CourseCard = ({ course }) => (
    <div className="border-b border-white/10 pb-6 mb-6">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-white/90">{course.name}</h3>
          <span className="text-sm text-white/60">{course.grade}</span>
        </div>

        <div className="flex gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-white/60" />
          <Share2 className="w-5 h-5 text-white/60" />
          <div className="flex-1"></div>
          <Bookmark className="w-5 h-5 text-white/60" />
        </div>

        <p className="text-sm text-white/70 mb-2">{course.description}</p>
        <p className="text-xs text-white/40">Prof. {course.professor}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {course.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs text-blue-400 hover:text-blue-300"
            >
              #{skill.toLowerCase().replace(/\s+/g, '')}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const AchievementCard = ({ achievement }) => (
    <div className="bg-white/[0.03] rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base font-semibold text-white/90">
          {achievement.title}
        </h3>
        <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
          {achievement.year}
        </span>
      </div>
      <p className="text-sm text-white/70">{achievement.description}</p>
    </div>
  );

  const ResearchSection = () => (
    <div className="p-4">
      <div className="bg-white/[0.03] rounded-lg p-4">
        <h3 className="text-lg font-bold text-white/90 mb-3">
          {researchWork.title}
        </h3>
        <p className="text-sm text-white/70 mb-4">{researchWork.description}</p>
        <div className="flex justify-between text-xs text-white/60">
          <span>Advisor: {researchWork.advisor}</span>
          <span>Citations: {researchWork.citations}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <ProfileHeader />
      <TabBar />

      <div className="pt-4">
        {activeTab === 'courses' && (
          <div className="px-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="px-4">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        )}

        {activeTab === 'research' && <ResearchSection />}
      </div>
    </div>
  );
};

export default MobileEducation;