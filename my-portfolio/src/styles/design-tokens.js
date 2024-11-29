// src/styles/design-tokens.js

export const colors = {
  // Brand colors with alpha variations
  primary: {
    50: 'rgba(59, 130, 246, 0.1)',   // #3B82F6 with 10% opacity
    100: 'rgba(59, 130, 246, 0.2)',
    200: 'rgba(59, 130, 246, 0.3)',
    300: 'rgba(59, 130, 246, 0.4)',
    400: 'rgba(59, 130, 246, 0.6)',
    500: 'rgba(59, 130, 246, 1)',    // #3B82F6 - Primary blue
    600: 'rgba(37, 99, 235, 1)',     // #2563EB - Darker blue
  },

  // Glass effects (currently used in your components)
  glass: {
    surface: 'rgba(255, 255, 255, 0.03)',
    surfaceHover: 'rgba(255, 255, 255, 0.06)',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.12)'
  },

  // Text colors
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    tertiary: 'rgba(255, 255, 255, 0.5)'
  },

  brand: {
    blue: {
      DEFAULT: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB'
    },
    purple: {
      DEFAULT: '#8B5CF6',
      light: '#A78BFA',
      dark: '#7C3AED'
    }
  },

  // Surface colors
  surface: {
    glass: {
      DEFAULT: 'rgba(255, 255, 255, 0.03)',
      hover: 'rgba(255, 255, 255, 0.06)',
      active: 'rgba(255, 255, 255, 0.08)',
      border: 'rgba(255, 255, 255, 0.08)',
      borderHover: 'rgba(255, 255, 255, 0.12)'
    },
    dark: {
      DEFAULT: '#0A0A0A',
      lighter: '#1A1A1A',
      darker: '#050505'
    }
  },

};

export const gradients = {
  // Currently used gradients
  primary: 'from-purple-500 via-blue-500 to-indigo-500',
  secondary: 'from-red-500 via-purple-500 to-blue-500',

  // Glass effects
  glass: 'from-white/[0.12] to-white/[0.06]',
  glassHover: 'from-white/[0.16] to-white/[0.08]'
};

export const spacing = {
  // Based on 8px grid
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  golden: '1.618rem' // Golden ratio
};

export const animation = {
  durations: {
    fastest: '100ms',
    faster: '150ms',
    fast: '200ms',
    normal: '300ms',
    slow: '400ms',
    slower: '500ms',
    slowest: '700ms'
  },
  easings: {
    // Custom cubic-bezier curves for more refined animations
    default: [0.16, 1, 0.3, 1],    // Smooth with slight overshoot
    bounce: [0.34, 1.56, 0.64, 1], // Bouncy effect
    soft: [0.23, 1, 0.32, 1]       // Soft landing
  }
};

export const typography = {
  fonts: {
    sans: '"Inter var", system-ui, -apple-system, sans-serif',
    display: '"Manrope", "Inter var", system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", "Fira Code", monospace'
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  }
};

export const effects = {
  blur: {
    sm: '8px',
    DEFAULT: '12px',
    lg: '16px',
    xl: '24px'
  },
  glow: {
    sm: '0 2px 8px',
    DEFAULT: '0 4px 12px',
    lg: '0 8px 24px',
    xl: '0 12px 36px'
  }
};