// src/features/certifications/components/CertCard.mobile.jsx
import React from 'react';
import { Calendar } from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

const CertCard = ({ cert, onClick }) => {
  const style = certStyles[cert.type];

  return (
    <div
      onClick={onClick}
      className="relative w-full bg-white/[0.03] rounded-2xl overflow-hidden touch-manipulation"
    >
      {/* Card Content */}
      <div className="flex items-center gap-4 p-4">
        {/* Icon */}
        <div className={`
          w-16 h-16 rounded-xl ${style.iconBg}
          flex-shrink-0 flex items-center justify-center
          transition-transform active:scale-95
        `}>
          <img src={`${cert.icon}`} alt="" className="w-10 h-10" />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1 truncate">
            {cert.title}
          </h3>

          <div className="flex items-center gap-3 text-sm text-white/60">
            <Calendar className="w-4 h-4" />
            <span>{cert.date}</span>
          </div>
        </div>

        {/* Level Badge */}
        <div className="px-3 py-1 rounded-full bg-white/[0.06] text-sm">
          {cert.level}
        </div>
      </div>
    </div>
  );
};

export default CertCard;