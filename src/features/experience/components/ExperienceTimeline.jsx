// ExperienceTimeline.jsx - Fixed version
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ExperienceTimeline = ({ experiences = [], activeId, onSelect }) => {
  // Add default empty array and check if experiences exists
  if (!experiences || !Array.isArray(experiences) || experiences.length === 0) {
    return (
      <div className="relative w-72 h-full border-r border-gray-800 bg-gray-900/80 backdrop-blur-sm py-8 px-6">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400 mb-6">
          My Journey
        </h3>
        <div className="text-gray-400 italic">No experience data available.</div>
      </div>
    );
  }

  // Group experiences by year
  const experiencesByYear = experiences.reduce((acc, exp) => {
    // Check if period.start exists and has the expected format
    if (!exp.period || !exp.period.start) return acc;

    const parts = exp.period.start.split(' ');
    const year = parts.length > 1 ? parts[1] : 'Unknown';

    if (!acc[year]) acc[year] = [];
    acc[year].push(exp);
    return acc;
  }, {});

  const years = Object.keys(experiencesByYear).sort((a, b) => b - a); // Sort years descending

  return (
    <div className="relative w-72 h-full overflow-y-auto border-r border-gray-800 bg-gray-900/80 backdrop-blur-sm py-8">
      <div className="px-6">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400 mb-6">
          My Journey
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative ml-10 mr-4">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-rose-500/80 via-purple-500/50 to-blue-500/30" />

        {years.length > 0 ? (
          years.map(year => (
            <div key={year} className="mb-8">
              {/* Year marker */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-rose-500 flex items-center justify-center text-rose-400 z-10">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="ml-4 text-xl font-semibold text-white">{year}</span>
              </div>

              {/* Experiences for this year */}
              <div className="ml-6 space-y-4">
                {experiencesByYear[year].map(exp => {
                  const isActive = exp.id === activeId;

                  return (
                    <motion.div
                      key={exp.id}
                      onClick={() => onSelect(exp.id)}
                      className={`
                        relative pl-8 pr-4 py-3 rounded-lg cursor-pointer
                        transition-all duration-300
                        ${isActive
                          ? 'bg-gray-800/80 border-l-2 border-rose-500 shadow-lg shadow-rose-500/20'
                          : 'hover:bg-gray-800/50'}
                      `}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Connection to timeline */}
                      <div className={`
                        absolute left-0 top-1/2 h-0.5 w-6
                        ${isActive ? 'bg-rose-500' : 'bg-gray-700'}
                        transform -translate-y-1/2
                      `} />

                      {/* Node on timeline */}
                      <div className={`
                        absolute left-0 top-1/2 w-3 h-3 rounded-full
                        ${isActive ? 'bg-rose-500' : 'bg-gray-700'}
                        transform -translate-x-1.5 -translate-y-1/2
                      `} />

                      <div className="flex flex-col">
                        <span className={`font-medium ${isActive ? 'text-rose-400' : 'text-white'}`}>
                          {exp.company}
                        </span>
                        <span className="text-sm text-gray-400">
                          {exp.title}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          {exp.period.display}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 italic">No experience data found.</div>
        )}
      </div>
    </div>
  );
};

export default ExperienceTimeline;