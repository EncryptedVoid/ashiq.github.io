// components/CertificationList.desktop.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Award, ExternalLink } from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

const CertificationList = ({ certifications, onCertSelect, isInView }) => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-3"
    >
      {certifications.map((cert) => {
        const style = certStyles[cert.type];

        return (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            onClick={() => onCertSelect(cert)}
            className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 cursor-pointer hover:border-purple-500/30 transition-all duration-300"
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex items-center gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg ${style.iconBg} flex items-center justify-center p-2 flex-shrink-0`}>
                <img
                  src={cert.icon}
                  alt=""
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{cert.length}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>{cert.level}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {cert.skills.slice(0, 5).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 5 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300">
                      +{cert.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CertificationList;