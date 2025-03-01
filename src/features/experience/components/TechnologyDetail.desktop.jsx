// src/features/experience/components/TechnologyDetail.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TechnologyDetail = ({ technology }) => {
  return (
    <motion.div
      className="p-4 rounded-lg bg-gray-700/30 border border-gray-600/50 flex items-start gap-3"
      whileHover={{ y: -5, backgroundColor: 'rgba(82, 82, 91, 0.4)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon/Emoji */}
      <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center text-xl text-rose-400 flex-shrink-0">
        {technology.icon || '💻'}
      </div>

      {/* Details */}
      <div>
        <h4 className="text-white font-medium">{technology.name}</h4>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
          {technology.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TechnologyDetail;