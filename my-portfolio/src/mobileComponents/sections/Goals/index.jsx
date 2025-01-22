import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Calendar, MapPin, ExternalLink,
  ChevronDown, Award, ChevronLeft, Code, X
} from 'lucide-react';

// Icon mapping for different experience types
const iconMap = {
  'Engineering': Building2,
  'Development': Code
};

const getSkillEmoji = (skill) => {
  const emojiMap = {
    'React': '⚛️',
    'Python': '🐍',
    'JavaScript': '💛',
    'TypeScript': '💙',
    'Node.js': '💚',
    'Docker': '🐳',
    'AWS': '☁️'
  };
  return emojiMap[skill] || '🔧';
};

const MobileExperienceCard = ({ experience, isActive, onToggle, onCaseStudyClick }) => {
  const IconComponent = iconMap[experience.type] || Building2;
  const isCurrentJob = !experience.endDate;

  return (
    <motion.div layout className="w-full">
      <div
        className={`
          bg-white/[0.03] rounded-xl overflow-hidden border
          ${isActive ? 'border-blue-500/30' : 'border-white/[0.06]'}
          ${isCurrentJob ? 'relative' : ''}
        `}
      >
        {isCurrentJob && !isActive && (
          <div className="absolute inset-0 border-2 border-green-400/20 rounded-xl animate-pulse" />
        )}

        {/* Header Section */}
        <div
          className="p-4 cursor-pointer"
          onClick={onToggle}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-5 h-5 text-white/60" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white">{experience.title}</h3>
              <p className="text-sm text-white/60 mt-0.5">{experience.company}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
                <Calendar className="w-3 h-3" />
                <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <MapPin className="w-3 h-3" />
                <span>{experience.location}</span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-white/40" />
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-4">
                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/5 rounded-full text-white/60"
                    >
                      {getSkillEmoji(tech)} {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                {experience.achievements && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white/60">Key Achievements</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {experience.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-lg p-3 space-y-1"
                        >
                          <div className="text-lg font-bold text-blue-400">
                            {achievement.stat}
                          </div>
                          <div className="text-xs text-white/60">
                            {achievement.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-white/10">
                  {experience.links?.company && (
                    <a
                      href={experience.links.company}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 rounded-lg text-sm text-white/80"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Company</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {experience.links?.caseStudy && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCaseStudyClick(experience);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-500/10 rounded-lg text-sm text-blue-400"
                    >
                      Case Study
                      <Award className="w-4 h-4" />
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

const MobileCaseStudyModal = ({ experience, isOpen, onClose }) => {
  if (!experience || !isOpen) return null;

  // Get the appropriate icon for the experience type
  const IconComponent = iconMap[experience.type] || Building2;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        className="fixed inset-0 z-50 bg-black"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-black/80 backdrop-blur-lg">
          <button onClick={onClose}>
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-lg font-semibold text-white">{experience.title}</h2>
          <div className="w-6" />
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-64px)] overflow-y-auto px-4 py-6 space-y-6">
          {/* Company Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white/40" />
            </div>
            <div>
              <h3 className="text-white font-medium">{experience.company}</h3>
              <p className="text-sm text-white/60">{experience.location}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
                <Calendar className="w-3 h-3" />
                {experience.startDate} - {experience.endDate || 'Present'}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-medium text-white/60 mb-2">Overview</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-sm font-medium text-white/60 mb-3">Key Achievements</h3>
            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <div className="text-xl font-bold text-blue-400 mb-1">
                    {achievement.stat}
                  </div>
                  <div className="text-sm text-white mb-2">{achievement.label}</div>
                  <p className="text-xs text-white/60">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-medium text-white/60 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-white/5 rounded-full text-white/80"
                >
                  {getSkillEmoji(tech)} {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const MobileExperience = ({ ExperienceData }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section className="py-12">
      {/* Header */}
      <div className="px-4 mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h1>
        <p className="text-sm text-white/60 mt-2">
          Professional journey and key achievements
        </p>
      </div>

      {/* Experience Cards */}
      <div className="px-4 space-y-3">
        {ExperienceData.map((experience) => (
          <MobileExperienceCard
            key={experience.id}
            experience={experience}
            isActive={expandedId === experience.id}
            onToggle={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
            onCaseStudyClick={() => setSelectedExperience(experience)}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <MobileCaseStudyModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
};

export default MobileExperience;