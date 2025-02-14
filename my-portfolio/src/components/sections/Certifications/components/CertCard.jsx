// src/components/sections/certifications/components/CertCard.jsx
import React from 'react';
import { certStyles } from '../../../../data/CertificationsData';

const CertCard = ({ cert, onClick }) => {
  const style = certStyles[cert.type];

  return (
    <div
      onClick={onClick}
      className={`
        group relative overflow-hidden
        bg-white/[0.03] hover:bg-white/[0.06]
        border border-white/[0.06] hover:border-white/[0.12]
        rounded-3xl p-8
        transition-all duration-700 ease-out
        hover:-translate-y-2 hover:shadow-2xl ${style.shadow}
        cursor-pointer
      `}
      role="button"
      tabIndex={0}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Container */}
        <div className={`
          relative w-32 h-32 mb-8
          bg-white/[0.03]
          border border-white/[0.06]
          rounded-2xl
          overflow-hidden
          transition-all duration-700
          group-hover:scale-110 group-hover:-rotate-3
          group-hover:shadow-lg ${style.shadow}
        `}>
          <img
            src={cert.icon}
            alt={cert.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h3 className={`
            text-2xl font-bold
            bg-gradient-to-r ${style.gradient}
            bg-clip-text text-transparent
          `}>
            {cert.title}
          </h3>
          <p className="text-white/60">{cert.date}</p>
          <div className="
            inline-block
            px-4 py-2 rounded-full
            bg-white/[0.03] border border-white/[0.06]
            text-sm text-white/80
          ">
            {cert.level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertCard;