// src/components/sections/Experience/components/MobileExperienceCard.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, ChevronDown, ExternalLink, Award } from 'lucide-react';

// src/components/sections/Experience/components/MobileExperienceCard.jsx
const TechnologyBadge = ({ tech }) => (
  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
    bg-gradient-to-br from-white/[0.05] to-white/[0.02]
    border border-white/10 backdrop-blur-sm
    text-sm text-white/70 whitespace-nowrap">
    {tech}
  </span>
);

const MobileExperienceCard = ({ experience, isActive, onClick, onCaseStudyClick, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="rounded-2xl overflow-hidden"
    >
      {/* Card Content */}
      <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent">
        <div className="relative bg-gray-900/60 rounded-2xl backdrop-blur-xl overflow-hidden">
          {/* Header */}
          <button onClick={onClick} className="w-full text-left p-5">
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0
                bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                {experience.companyLogo ? (
                  <img src={experience.companyLogo} alt={experience.company}
                    className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white/60" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white/90 line-clamp-1">
                  {experience.title}
                </h3>
                <div className="text-sm text-white/60 mb-2">
                  {experience.company}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period.display}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{experience.location}</span>
                  </div>
                </div>
              </div>

              <ChevronDown className={`w-5 h-5 text-white/40 transform transition-transform duration-300
                ${isActive ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Expandable Content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-white/10"
              >
                <div className="p-5 space-y-5">
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/70">
                    {experience.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white/40">Technologies</h4>
                    <div className="overflow-x-auto flex gap-2 -mx-5 px-5 pb-2
                      scrollbar-none scroll-smooth snap-x">
                      {experience.technologies.map((tech, idx) => (
                        <div key={idx} className="snap-start">
                          <TechnologyBadge tech={tech} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {experience.links.company && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(experience.links.company, '_blank');
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 h-11
                          bg-white/5 hover:bg-white/10 active:bg-white/5
                          border border-white/10 rounded-xl text-sm text-white/70
                          transition-all duration-300 active:scale-95"
                      >
                        <span>Visit Company</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {experience.links.caseStudy && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onCaseStudyClick();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 h-11
                          bg-gradient-to-r from-blue-500/20 to-purple-500/20
                          hover:from-blue-500/30 hover:to-purple-500/30
                          border border-blue-500/30 rounded-xl text-sm text-white
                          transition-all duration-300 active:scale-95"
                      >
                        <span>View Impact</span>
                        <Award className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileExperienceCard;