// MobileCaseStudyModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { X, Calendar, MapPin, Award, ChevronDown, ExternalLink, ArrowLeft } from 'lucide-react';

const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
      ${isActive ?
        'bg-white/10 text-white' :
        'text-white/40 hover:text-white/60'
      }`}
  >
    {label}
  </button>
);

const MobileCaseStudyModal = ({ isOpen, onClose, experience }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 200], [1, 0]);

  // Early return if no experience data
  if (!isOpen || !experience) return null;

  // Helper function to format duration
  const getDurationDisplay = () => {
    if (experience.duration?.start) {
      return {
        start: experience.duration.start,
        end: experience.duration.end
      };
    }
    return {
      start: experience.startDate,
      end: experience.endDate || 'Present'
    };
  };

  // Get description safely
  const getDescription = () => {
    return experience.fullDescription || experience.description || '';
  };

  // Format highlights/achievements safely
  const getHighlights = () => {
    if (experience.highlights) return experience.highlights;
    if (experience.achievements) {
      return experience.achievements.map(achievement => ({
        metric: achievement.stat,
        label: achievement.label,
        shortDesc: achievement.description
      }));
    }
    return [];
  };

  // Format technologies safely
  const getTechnologies = () => {
    return (experience.technologies || []).map(tech => {
      if (typeof tech === 'string') {
        return {
          name: tech,
          icon: '💻',
          category: 'Technology'
        };
      }
      return tech;
    });
  };

  const duration = getDurationDisplay();

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg"
      >
        {/* Close Button */}
        <motion.button
          style={{ opacity }}
          className="absolute top-6 left-4 z-50 p-2
            bg-white/5 rounded-full border border-white/10"
          onClick={onClose}
        >
          <ArrowLeft className="w-6 h-6 text-white/60" />
        </motion.button>

        {/* Modal Content */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.y > 200) {
              onClose();
            }
          }}
          style={{ y }}
          className="absolute inset-x-0 bottom-0 h-[90vh]
            bg-gradient-to-b from-gray-900 to-black
            rounded-t-3xl overflow-hidden"
        >
          {/* Drag Handle */}
          <div className="sticky top-0 pt-3 pb-2 text-center
            bg-gradient-to-b from-gray-900 to-transparent">
            <div className="w-12 h-1 mx-auto rounded-full bg-white/20" />
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto">
            {/* Header */}
            <div className="px-6 pt-4 pb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {experience.title}
              </h2>
              <p className="text-white/60">{experience.company}</p>
            </div>

            {/* Tabs */}
            <div className="px-6 pb-4 -mx-6 overflow-x-auto
              flex gap-2 scrollbar-none">
              <TabButton
                label="Overview"
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <TabButton
                label="Impact"
                isActive={activeTab === 'impact'}
                onClick={() => setActiveTab('impact')}
              />
              <TabButton
                label="Technologies"
                isActive={activeTab === 'tech'}
                onClick={() => setActiveTab('tech')}
              />
            </div>

            {/* Tab Content */}
            <div className="px-6 pb-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <p className="text-white/80 leading-relaxed">
                        {experience.fullDescription}
                      </p>

                      {/* Timeline */}
                      <div className="space-y-4 border-l-2 border-white/10 pl-4">
                        <div className="relative">
                          <div className="absolute -left-[1.125rem] top-1 w-2 h-2
                            rounded-full bg-blue-400" />
                          <div className="text-white/80">
                            {experience.duration.start}
                          </div>
                        </div>
                        {experience.duration.end && (
                          <div className="relative">
                            <div className="absolute -left-[1.125rem] top-1 w-2 h-2
                              rounded-full bg-purple-400" />
                            <div className="text-white/80">
                              {experience.duration.end}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'impact' && (
                    <div className="space-y-4">
                      {experience.highlights.map((highlight, idx) => (
                        <div key={idx} className="p-4 rounded-xl
                          bg-white/5 border border-white/10">
                          <div className="text-2xl font-bold text-blue-400 mb-1">
                            {highlight.metric}
                          </div>
                          <div className="text-white mb-2">{highlight.label}</div>
                          <p className="text-sm text-white/60">
                            {highlight.shortDesc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'tech' && (
                    <div className="grid grid-cols-2 gap-3">
                      {experience.technologies.map((tech, idx) => (
                        <div key={idx} className="p-4 rounded-xl
                          bg-white/5 border border-white/10">
                          <div className="text-2xl mb-2">{tech.icon}</div>
                          <div className="text-white">{tech.name}</div>
                          <div className="text-sm text-white/40">
                            {tech.category}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileCaseStudyModal;