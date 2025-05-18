// src/features/experience/Experience.desktop.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceDetail, ExperienceTimeline, ExperienceGrid } from './components';
import { ExperienceData } from '@data/ExperienceData';
import { Briefcase, Code, Trophy, CalendarDays  } from 'lucide-react';

const ExperienceDesktop = () => {
  const [activeExperience, setActiveExperience] = useState(ExperienceData[0]?.id);
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'grid'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Create a circuit board pattern for background
  const circuitPattern = `
    radial-gradient(circle at 20% 20%, rgba(244,63,94,0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 80%, rgba(244,63,94,0.1) 1px, transparent 1px)
  `;

  const currentExperience = ExperienceData.find(exp => exp.id === activeExperience);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden relative"
      style={{
        backgroundImage: circuitPattern,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Header with view toggle */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          className="flex justify-between items-center mb-12"
          variants={itemVariants}
        >
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-gray-400 mt-2">Exploring innovation through code</p>
          </div>

          {/* View mode toggle */}
          <div className="flex gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                viewMode === 'timeline'
                  ? 'bg-red-500/20 text-red-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <CalendarDays  className="w-4 h-4" />
              Timeline
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                viewMode === 'grid'
                  ? 'bg-red-500/20 text-red-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Showcase
            </button>
          </div>
        </motion.div>

        {/* Main content area */}
        <div className="relative h-[calc(100vh-200px)] bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-red-500/20 overflow-hidden">
          <AnimatePresence mode="wait">
            {viewMode === 'timeline' ? (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full flex"
              >
                <ExperienceTimeline
                  experiences={ExperienceData}
                  activeId={activeExperience}
                  onSelect={setActiveExperience}
                />
                {currentExperience && (
                  <ExperienceDetail experience={currentExperience} />
                )}
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 overflow-y-auto"
              >
                {/* Grid view implementation */}
                <ExperienceGrid
                  experiences={ExperienceData}
                  activeId={activeExperience}
                  onSelect={setActiveExperience}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceDesktop;