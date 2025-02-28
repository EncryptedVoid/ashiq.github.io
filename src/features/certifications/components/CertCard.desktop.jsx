// src/features/certifications/components/CertCard.desktop.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

// Define skills mapping based on certificate type
const certSkills = {
  docker: ['Containerization', 'DevOps', 'Microservices'],
  jenkins: ['CI/CD', 'Automation', 'DevOps'],
  gitlab: ['Version Control', 'CI/CD', 'Collaboration'],
  networking: ['Protocols', 'Infrastructure', 'Security'],
  performance: ['Optimization', 'Testing', 'Metrics'],
  os: ['System Architecture', 'Kernel', 'Process Management'],
  python: ['Programming', 'Automation', 'Testing'],
  api: ['REST', 'Integration', 'Web Services'],
  bash: ['Shell Scripting', 'Automation', 'Linux']
};

const CertCard = ({ cert, onClick }) => {
  const style = certStyles[cert.type];
  // Get skills for this certificate type, or use defaults
  const skills = certSkills[cert.type] || ['Development', 'Technology', 'Professional'];

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
      className="group relative rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 h-full cursor-pointer"
    >
      <div className="p-5">
        {/* Header with logo */}
        <div className="flex items-start gap-4 mb-3">
          <div className={`
            w-12 h-12 rounded-lg ${style.iconBg}
            flex items-center justify-center
            flex-shrink-0 p-2
            transition-transform duration-300
            group-hover:scale-110 group-hover:rotate-3
          `}>
            <img
              src={`${cert.icon}`}
              alt={cert.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            {/* Truncate title if it's too long */}
            <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
              {cert.title}
            </h3>

            {/* Date and length info */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{cert.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{cert.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`
                px-2 py-1 text-xs rounded-full
                bg-${cert.type}-500/10 text-${cert.type}-400
                border border-${cert.type}-500/20
              `}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* View details hint */}
        <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
          <div className="flex items-center gap-1 text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300">
            <span>View Certificate</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertCard;