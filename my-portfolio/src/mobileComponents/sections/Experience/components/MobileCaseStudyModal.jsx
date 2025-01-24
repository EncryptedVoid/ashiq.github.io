import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Award, ChevronDown } from 'lucide-react';

const MobileCaseStudyModal = ({ isOpen, onClose, experience }) => {
  const [activeTab, setActiveTab] = React.useState('overview');

  if (!isOpen || !experience) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95"
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30 }}
          className="absolute inset-x-0 bottom-0 bg-gray-900 rounded-t-3xl max-h-[90vh] overflow-hidden flex flex-col"
          style={{ touchAction: 'none' }}
        >
          {/* Drag Handle */}
          <div className="sticky top-0 flex justify-center py-3 bg-gray-900 border-b border-white/10">
            <div className="w-12 h-1 rounded-full bg-white/20" />
          </div>

          {/* Header */}
          <div className="flex items-start justify-between p-4 bg-gray-900">
            <div>
              <h1 className="text-xl font-bold text-white">{experience.title}</h1>
              <div className="mt-1 text-sm text-white/60">{experience.company}</div>
            </div>
            <button onClick={onClose} className="p-2">
              <X className="w-6 h-6 text-white/60" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <div className="text-sm text-white/80 leading-relaxed">
                  {experience.description}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-white/60 uppercase">Timeline</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-white/40" />
                    <span className="text-white/80">
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-white/40" />
                    <span className="text-white/80">{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-white/60 uppercase">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-white/60 uppercase">Key Achievements</h2>
                <div className="space-y-3">
                  {experience.achievements?.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 border border-white/10 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-blue-400 mb-2">
                        {achievement.stat}
                      </div>
                      <div className="text-white mb-1">{achievement.label}</div>
                      <div className="text-sm text-white/60">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          {experience.links?.company && (
            <div className="sticky bottom-0 p-4 bg-gray-900 border-t border-white/10">
              <a
                href={experience.links.company}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-white"
              >
                <span>Visit Company Website</span>
                <Award className="w-4 h-4" />
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileCaseStudyModal;