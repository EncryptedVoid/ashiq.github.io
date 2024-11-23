// src/components/common/GlassCard/index.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { variants } from './variants';

const GlassCard = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  animation = true,
  delay = 0,
  ...props
}) => {
  const variantStyles = variants[variant];

  const baseClasses = `
    relative overflow-hidden
    backdrop-blur-xl
    p-6
    rounded-2xl
    ${variantStyles.base}
  `;

  const hoverClasses = hover ? `
    ${variantStyles.hover}
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-purple-500/10
    transition-all duration-500 ease-out
  ` : '';

  const component = animation ? motion.div : 'div';
  const animationProps = animation ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: variantStyles.animation.duration,
      ease: variantStyles.animation.ease,
      delay
    }
  } : {};

  return React.createElement(
    component,
    {
      className: `${baseClasses} ${hoverClasses} ${className}`.trim(),
      ...animationProps,
      ...props
    },
    <>
      <div className="
        absolute inset-0
        bg-gradient-to-br from-white/[0.12] to-white/[0.06]
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
      "/>
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
};

export default GlassCard;