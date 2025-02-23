import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ExternalLink, Award } from 'lucide-react';
import { ExperienceData } from '@data/ExperienceData';
import MobileCaseStudyModal from './components/CaseStudyModal.mobile';

const ExperienceMobile = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  if (!ExperienceData?.length) {
    return null;
  }

  const handleCaseStudyOpen = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = 'hidden';
  };

  const handleCaseStudyClose = () => {
    setSelectedJob(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      {/* Experience Cards */}
      <div className="px-4 space-y-6">
        {ExperienceData.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative ${!job.period.end ? 'animate-pulse-subtle' : ''}`}
          >
            {/* Glowing border for current role */}
            {!job.period.end && (
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-red-500/20
                             rounded-lg blur-lg animate-pulse-slow" />
            )}

            {/* Card Header */}
            <button
              onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
              className="w-full text-left relative bg-black/20 rounded-lg p-4"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base font-medium text-white/90">
                    {job.title}
                  </h3>
                  <p className="text-sm font-medium text-rose-400 mt-1">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-white/50">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {job.period.display}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </div>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-rose-400 transform transition-transform duration-300
                    ${expandedId === job.id ? 'rotate-180' : ''}`}
                />
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-white/10 space-y-4">
                      {/* Description */}
                      <p className="text-xs text-white/70 leading-relaxed">
                        {job.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-xs text-white/40 uppercase tracking-wider">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {job.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs text-rose-400 border border-rose-400/20
                                       rounded-full bg-rose-400/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-2">
                        {job.links?.company && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(job.links.company, '_blank');
                            }}
                            className="text-xs text-rose-400 hover:text-rose-300
                                     transition-colors duration-300 flex items-center gap-1"
                          >
                            Visit Company
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        )}

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCaseStudyOpen(job);
                          }}
                          className="text-xs text-rose-400 hover:text-rose-300
                                   transition-colors duration-300 flex items-center gap-1 ml-auto"
                        >
                          View Impact
                          <Award className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <MobileCaseStudyModal
        isOpen={!!selectedJob}
        onClose={handleCaseStudyClose}
        experience={selectedJob}
        accentColor="#f87171"
      />

      {/* Add the animation keyframes */}
      <style jsx global>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ExperienceMobile;