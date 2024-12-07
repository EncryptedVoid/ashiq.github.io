// src/components/sections/Experience/Experience.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink, ChevronDown, Award, Users, Briefcase, Code } from 'lucide-react';
import AchievementStats from './components/AchievementStats';
import Testimonials from './components/Testimonials';
import CaseStudyModal from './components/CaseStudyModal';
import { experienceData } from '../../../data/experienceData';  // Update the path based on your file structure

const getSkillEmoji = (skill) => {
  const emojiMap = {
    'React': '⚛️',
    'Python': '🐍',
    'JavaScript': '💛',
    'TypeScript': '💙',
    'Node.js': '💚',
    'Docker': '🐳',
    'AWS': '☁️',
    'Git': '📚',
    'Linux': '🐧',
    'C++': '⚡',
    'RTOS': '⚡',
    'Assembly': '🔧',
    'Jenkins': '🔄',
    'GCC': '🛠️',
    'pytest': '🧪',
  };
  return emojiMap[skill] || '🔧';
};

const iconMap = {
  'Engineering': Building2,
  'Leadership': Users,
  'Development': Code,
  'Management': Briefcase
};

const ExperienceCard = ({ experience, isActive, onClick, onCaseStudyClick, index }) => {
  const IconComponent = iconMap[experience.type] || Building2;
  const isCurrentJob = !experience.endDate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      <div
        className={`
          relative
          bg-white/[0.03] hover:bg-white/[0.06]
          border border-white/[0.06] hover:border-white/[0.12]
          rounded-2xl overflow-hidden
          cursor-pointer
          transition-all duration-500
          ${isActive ? 'shadow-xl shadow-blue-500/10' : ''}
          ${isCurrentJob ? 'before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-green-400/40 before:animate-pulse' : ''}
        `}
        onClick={onClick}
      >
        {/* Header Section */}
        <div className="p-8 flex items-start justify-between gap-6">
          <div className="flex gap-6">
            <div className={`
              p-6 rounded-xl
              bg-gradient-to-br from-blue-500/20 to-purple-500/20
              border border-white/[0.06]
              group-hover:border-white/[0.12]
              transition-all duration-500
              w-24 h-24 flex items-center justify-center
            `}>
              <IconComponent className="w-12 h-12 text-white/60" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {experience.title}
              </h3>
              <div className="flex flex-col gap-2">
                <div className="text-xl text-white/80">{experience.company}</div>
                <div className="flex items-center gap-3 text-base text-white/60">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {experience.startDate} - {experience.endDate || (
                      <span className="text-green-400 animate-pulse font-semibold">
                        Present ✨
                      </span>
                    )}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {experience.location}
                  </span>
                </div>
                {!isActive && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="
                          px-3 py-1
                          bg-white/[0.03] hover:bg-white/[0.06]
                          border border-white/[0.06] hover:border-white/[0.12]
                          rounded-full
                          text-sm text-white/60
                          transition-all duration-300
                        "
                      >
                        {getSkillEmoji(tech)} {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-6">
                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1
                        bg-white/[0.03] hover:bg-white/[0.06]
                        border border-white/[0.06] hover:border-white/[0.12]
                        rounded-full
                        text-sm text-white/60
                        transition-all duration-300
                        hover:-translate-y-1
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                {experience.achievements && (
                  <AchievementStats achievements={experience.achievements} />
                )}

                {/* Testimonials */}
                {experience.testimonials && (
                  <Testimonials testimonials={experience.testimonials} />
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-white/[0.06]">
                  {experience.links?.company && (
                    <a
                      href={experience.links.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex items-center gap-2
                        px-4 py-2
                        bg-white/[0.03] hover:bg-white/[0.06]
                        border border-white/[0.06] hover:border-white/[0.12]
                        rounded-lg
                        text-sm text-white/60
                        transition-all duration-300
                        hover:-translate-y-1
                      "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Visit Company</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}

                  {experience.links?.caseStudy && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCaseStudyClick();
                      }}
                      className="
                        group
                        relative
                        flex items-center gap-2
                        px-6 py-3
                        bg-blue-500/20 hover:bg-blue-500/30
                        border border-blue-500/30 hover:border-blue-500/40
                        rounded-lg
                        text-base text-white
                        transition-all duration-300
                        hover:-translate-y-1
                        before:absolute before:inset-0
                        before:rounded-lg before:border-2
                        before:border-blue-400/40
                        before:animate-[pulse_2s_ease-in-out_infinite]
                        after:absolute after:inset-0
                        after:rounded-lg after:bg-blue-400/10
                        after:animate-[pulse_2s_ease-in-out_infinite_0.5s]
                      "
                    >
                      <span>View Case Study</span>
                      <Award className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeId, setActiveId] = React.useState(null);
  const [caseStudyData, setCaseStudyData] = React.useState(null);

  const handleCaseStudyOpen = (experience) => {
    setCaseStudyData(experience);
  };

  const handleCaseStudyClose = () => {
    setCaseStudyData(null);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h1>
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A journey through impactful roles and transformative projects
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isActive={activeId === experience.id}
              onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
              onCaseStudyClick={() => handleCaseStudyOpen(experience)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={!!caseStudyData}
        onClose={handleCaseStudyClose}
        experience={caseStudyData}
      />
    </div>
  );
};

export default Experience;