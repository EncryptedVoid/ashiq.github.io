// src/features/experience/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TechnologyTag } from '@/features/experience/components';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50"
      whileHover={{ y: -5, backgroundColor: 'rgba(82, 82, 91, 0.4)' }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg font-medium text-white mb-3">{project.name}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {project.challenge && (
          <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <h4 className="text-sm font-medium text-rose-400 mb-1">Challenge</h4>
            <p className="text-gray-300 text-sm">{project.challenge}</p>
          </div>
        )}

        {project.solution && (
          <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <h4 className="text-sm font-medium text-rose-400 mb-1">Solution</h4>
            <p className="text-gray-300 text-sm">{project.solution}</p>
          </div>
        )}

        {project.outcomes && (
          <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <h4 className="text-sm font-medium text-rose-400 mb-1">Outcomes</h4>
            <p className="text-gray-300 text-sm">{project.outcomes}</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700/30">
        {project.technologies?.map((tech, idx) => (
          <TechnologyTag key={idx} technology={tech} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;