// src/components/GlassCard.jsx
import React from 'react';

// Define variants object directly in the file since it's only used here
const variants = {
  default: {
    base: 'bg-white/[0.03] border-white/[0.08]',
    hover: 'hover:bg-white/[0.06] hover:border-white/[0.12]',
    animation: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  project: {
    base: 'bg-white/[0.04] border-white/[0.1]',
    hover: 'hover:bg-white/[0.08] hover:border-white/[0.16]',
    animation: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  skill: {
    base: 'bg-white/[0.02] border-white/[0.06]',
    hover: 'hover:bg-white/[0.04] hover:border-white/[0.1]',
    animation: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const GlassCard = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  onClick,
  as = 'div',
  variant = 'default'
}) => {
  const Element = as;

  const baseClasses = `
    relative
    overflow-hidden
    ${variants[variant].base}
    backdrop-blur-2xl
    rounded-3xl
    p-6
  `;

  const hoverClasses = hover ? `
    transition-all
    duration-500
    ease-out
    ${variants[variant].hover}
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