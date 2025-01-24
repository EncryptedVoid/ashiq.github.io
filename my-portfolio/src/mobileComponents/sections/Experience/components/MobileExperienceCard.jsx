import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, ChevronDown, ExternalLink, Award } from 'lucide-react';

const MobileExperienceCard = ({ experience, isActive, onClick, onCaseStudyClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
    >
      {/* Compact Header */}
      <button
        onClick={onClick}
        className="w-full text-left p-4"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-white/60" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white">
              {experience.title}
            </h3>
            <div className="text-sm text-white/60">
              {experience.company}
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">
                  {experience.startDate} − {experience.endDate || 'Present'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{experience.location}</span>
              </div>
            </div>
          </div>

          <ChevronDown
            className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
              isActive ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-white/10"
          >
            <div className="p-4 space-y-6">
              {/* Description */}
              <p className="text-sm text-white/80 leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-white/40 uppercase">
                  Technologies
                </div>
                <div className="-mx-4 px-4 pb-2 overflow-x-auto flex gap-2 scrollbar-none">
                  {experience.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="flex-shrink-0 px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
                {experience.links?.company && (
                  <a
                    href={experience.links.company}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white/60"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Visit Company</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {experience.links?.caseStudy && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCaseStudyClick();
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 bg-blue-500/20 border border-blue-500/30 rounded-xl text-sm text-white"
                  >
                    <span>View Case Study</span>
                    <Award className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileExperienceCard;