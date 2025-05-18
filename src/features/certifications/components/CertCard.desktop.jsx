// components/CertCard.desktop.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Award, ExternalLink, ChevronRight, Tag } from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

const CertCardDesktop = ({ certificate, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const style = certStyles[certificate.type];

  // Parse the date to determine if it's recent (within last 3 months)
  const isRecent = (dateString) => {
    const certDate = new Date(dateString);
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return certDate > threeMonthsAgo;
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 cursor-pointer transition-all duration-300 hover:border-purple-500/30"
    >
      {/* Gradient Background Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${style.gradient}`} />

      {/* New Badge */}
      {isRecent(certificate.date) && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-medium text-white">
            New
          </div>
        </div>
      )}

      <div className="relative z-10 p-6">
        {/* Header with Logo and Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-16 h-16 rounded-lg ${style.iconBg} flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110`}>
            <img
              src={certificate.icon}
              alt={certificate.type}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-purple-400 transition-colors">
              {certificate.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {certificate.instructor} • {certificate.platform}
            </p>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{certificate.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{certificate.length}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Award className="w-4 h-4" />
            <span>{certificate.level}</span>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {certificate.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-700"
              >
                {skill}
              </span>
            ))}
            {certificate.skills.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                +{certificate.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Category Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-400 capitalize">{certificate.category}</span>
          </div>

          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-purple-400"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 border-2 border-purple-500/0 rounded-xl transition-colors duration-300 group-hover:border-purple-500/20" />
      </div>
    </motion.div>
  );
};

export default CertCardDesktop;