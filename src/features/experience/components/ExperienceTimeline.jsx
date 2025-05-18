// src/features/experience/components/ExperienceTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building, MapPin, Code } from 'lucide-react';

const ExperienceTimeline = ({ experiences, activeId, onSelect }) => {
  // Group experiences by year for better organization
  const experiencesByYear = experiences.reduce((acc, exp) => {
    const startYear = new Date(exp.period.start).getFullYear();
    if (!acc[startYear]) acc[startYear] = [];
    acc[startYear].push(exp);
    return acc;
  }, {});

  const years = Object.keys(experiencesByYear).sort((a, b) => b - a);

  return (
    <div className="w-80 h-full overflow-y-auto border-r border-red-500/20 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm">
      <div className="p-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Career Timeline
        </h3>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-purple-500/30 to-blue-500/20" />

          {years.map(year => (
            <div key={year} className="mb-8">
              {/* Year marker */}
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-red-500 flex items-center justify-center text-red-400 relative z-10">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="ml-4 text-xl font-bold text-white">{year}</h4>
              </div>

              {/* Experiences for this year */}
              <div className="ml-8 space-y-4">
                {experiencesByYear[year].map(exp => (
                  <motion.div
                    key={exp.id}
                    onClick={() => onSelect(exp.id)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      exp.id === activeId
                        ? 'scale-105'
                        : 'hover:scale-102'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {/* Connection to timeline */}
                    <div className={`absolute left-0 top-1/2 w-6 h-0.5 ${
                      exp.id === activeId ? 'bg-red-500' : 'bg-gray-700'
                    }`} />

                    {/* Experience card */}
                    <div className={`ml-8 p-4 rounded-lg border transition-all ${
                      exp.id === activeId
                        ? 'bg-red-500/10 border-red-500/30 shadow-lg shadow-red-500/20'
                        : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70'
                    }`}>
                      <div className="flex items-start gap-3">
                        {/* Company logo */}
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                          {exp.companyLogo ? (
                            <img
                              src={exp.companyLogo}
                              alt={exp.company}
                              className="w-full h-full object-contain bg-gray-700/50"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                              <Building className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <h5 className={`font-semibold ${
                            exp.id === activeId ? 'text-red-400' : 'text-white'
                          }`}>
                            {exp.company}
                          </h5>
                          <p className="text-sm text-gray-400">{exp.title}</p>
                          <div className="mt-1 text-xs text-gray-500 flex flex-wrap gap-2">
                            <span>{exp.period.display}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>

                          {/* Current job indicator */}
                          {exp.period.end === null && (
                            <div className="mt-2 inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                              Current
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;