import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Award, ChevronDown } from 'lucide-react';

const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-all duration-300
      ${isActive
        ? 'text-[#FA8072] border-b-2 border-[#FA8072]'
        : 'text-white/40 hover:text-white/60'
      }`}
  >
    {label}
  </button>
);

const StatCard = ({ stat, label, description }) => (
  <div className="p-4 rounded-lg bg-[#FA8072]/5 border border-[#FA8072]/10">
    <div className="text-2xl font-bold text-[#FA8072] mb-1">{stat}</div>
    <div className="text-white/90 font-medium mb-2">{label}</div>
    <p className="text-sm text-white/60 leading-relaxed">{description}</p>
  </div>
);

const MobileCaseStudyModal = ({ isOpen, onClose, experience }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !experience) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-4 z-50 p-2 rounded-full
            hover:bg-[#FA8072]/10 transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-[#FA8072]" />
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto pt-20 pb-12">
          {/* Header */}
          <div className="px-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              {experience.title}
            </h2>
            <p className="text-lg text-[#FA8072] mb-4">
              {experience.company}
            </p>
            <div className="flex flex-col gap-2 text-white/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.period.display}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-white/10">
            <div className="px-6 flex gap-6">
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
                label="Tech Stack"
                isActive={activeTab === 'tech'}
                onClick={() => setActiveTab('tech')}
              />
            </div>
          </div>

          {/* Tab Content */}
          <div className="px-6 pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-white/80 leading-relaxed">
                      {experience.fullDescription || experience.shortDescription}
                    </p>

                    {/* Key Responsibilities */}
                    {experience.responsibilities && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider">
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-white/70">
                              <span className="text-[#FA8072] mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'impact' && (
                  <div className="space-y-4">
                    {experience.achievements?.map((achievement, idx) => (
                      <StatCard
                        key={idx}
                        stat={achievement.stat}
                        label={achievement.label}
                        description={achievement.description}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-sm text-[#FA8072]
                            border border-[#FA8072]/20 rounded-full
                            bg-[#FA8072]/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileCaseStudyModal;