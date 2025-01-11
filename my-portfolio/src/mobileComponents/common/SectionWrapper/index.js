// src/components/common/SectionWrapper/index.jsx
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
glass: {
    background: 'bg-white/[0.03]',
    border: 'border-white/[0.08]',
    backdrop: 'backdrop-blur-xl'
},
transparent: {
    background: 'bg-transparent',
    border: 'border-transparent',
    backdrop: ''
}
};

export const SectionWrapper = ({
children,
className = '',
variant = 'transparent',
animate = true
}) => {
const Component = animate ? motion.section : 'section';
const variantStyles = variants[variant];

const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1]
    }
} : {};

return (
    <Component
    className={`
        w-full
        px-4 sm:px-6 md:px-8 lg:px-12
        py-12 md:py-16
        overflow-hidden
        ${variantStyles.background}
        ${variantStyles.border}
        ${variantStyles.backdrop}
        ${className}
    `}
    {...animationProps}
    >
    <div className="max-w-7xl mx-auto w-full">
        {children}
    </div>
    </Component>
);
};

export default SectionWrapper;