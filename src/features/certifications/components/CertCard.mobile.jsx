// src/features/certifications/components/CertCard.mobile.jsx
import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

// Define skills mapping based on certificate type
const certSkills = {
  docker: ['Containerization', 'DevOps'],
  jenkins: ['CI/CD', 'Automation'],
  gitlab: ['Version Control', 'CI/CD'],
  networking: ['Protocols', 'Security'],
  performance: ['Optimization', 'Testing'],
  os: ['System Architecture', 'Kernel'],
  python: ['Programming', 'Automation'],
  api: ['REST', 'Integration'],
  bash: ['Shell Scripting', 'Linux']
};

const CertCardMobile = ({ cert, onClick, featured = false }) => {
  const style = certStyles[cert.type];
  // Get skills for this certificate type, or use defaults (but limit to 2 for mobile)
  const skills = (certSkills[cert.type] || ['Development', 'Technology']).slice(0, 2);

  return (
    <div
      onClick={onClick}
      className={`
        relative w-full rounded-xl overflow-hidden
        ${featured
          ? `bg-gradient-to-r ${style.gradient} bg-opacity-20`
          : 'bg-white/[0.03]'}
        border ${featured ? `border-${cert.type}-500/30` : 'border-white/10'}
        active:scale-[0.98] transition-all duration-200
        touch-manipulation
      `}
    >
      <div className="flex p-3">
        {/* Logo */}
        <div className={`
          w-12 h-12 rounded-lg ${style.iconBg}
          flex items-center justify-center p-2
          flex-shrink-0 mr-3
        `}>
          <img
            src={`${cert.icon}`}
            alt=""
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title with truncation */}
          <h3 className="text-white font-medium text-base truncate mb-1">
            {cert.title}
          </h3>

          {/* Info row */}
          <div className="flex items-center gap-3 text-xs text-white/60 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{cert.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{cert.length}</span>
            </div>
          </div>

          {/* Skills tags */}
          <div className="flex gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow icon */}
        <div className="flex items-center px-1">
          <ChevronRight className="w-5 h-5 text-white/40" />
        </div>
      </div>
    </div>
  );
};

export default CertCardMobile;