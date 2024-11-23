// src/components/common/GlassCard/variants.js
export const variants = {
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