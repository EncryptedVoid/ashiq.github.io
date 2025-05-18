// components/CertCard.mobile.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Award } from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

const CertCardMobile = ({ certificate, onClick }) => {
  const style = certStyles[certificate.type];

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg"
    >
      <div className="p-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className={`w-12 h-12 rounded-lg ${style.iconBg} flex items-center justify-center p-2 flex-shrink-0`}>
            <img
              src={certificate.icon}
              alt=""
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-white truncate">
              {certificate.title}
            </h3>

            <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{certificate.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>{certificate.level}</span>
              </div>
            </div>

            {/* Skills tags - mobile optimized */}
            <div className="flex gap-1.5 mt-2 overflow-x-auto scrollbar-hide">
              {certificate.skills.slice(0, 2).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs rounded bg-gray-700/50 text-gray-300 whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
              {certificate.skills.length > 2 && (
                <span className="px-2 py-0.5 text-xs rounded bg-purple-500/10 text-purple-400 whitespace-nowrap">
                  +{certificate.skills.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Arrow */}
          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </div>
      </div>

      {/* Subtle gradient line at bottom */}
      <div className={`h-0.5 bg-gradient-to-r ${style.gradient} opacity-20`} />
    </motion.div>
  );
};

export default CertCardMobile;