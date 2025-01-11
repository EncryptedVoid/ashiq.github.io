// src/components/common/GlassCard/index.jsx
import React from 'react';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  onClick,
  as = 'div'
}) => {
  const Element = as;

  const baseClasses = `
    relative
    overflow-hidden
    bg-white/[0.03]
    border border-white/[0.08]
    backdrop-blur-2xl
    rounded-3xl
    p-6
  `;

  const hoverClasses = hover ? `
    transition-all
    duration-500
    ease-out
    hover:bg-white/[0.06]
    hover:border-white/[0.12]
    hover:-translate-y-1
    hover:shadow-xl
    hover:shadow-blue-500/10
  ` : '';

  const interactionClasses = onClick ? 'cursor-pointer active:scale-[0.98]' : '';

  return (
    <Element
      className={`
        ${baseClasses}
        ${hoverClasses}
        ${interactionClasses}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Gradient overlay */}
      {gradient && (
        <div className={`
          absolute inset-0
          bg-gradient-to-br from-white/[0.12] to-white/[0.06]
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        `} />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </Element>
  );
};

export default GlassCard;