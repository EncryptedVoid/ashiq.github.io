// src/styles/design-tokens.js

export const spacing = {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem',   // 48px
  };

  export const colors = {
    // Brand colors
    primary: {
      50: '#f0f7ff',
      100: '#e0efff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    // Background colors
    background: {
      light: '#ffffff',
      dark: '#0a0a0a',
      glass: 'rgba(255, 255, 255, 0.03)',
      glassHover: 'rgba(255, 255, 255, 0.06)',
      glassBorder: 'rgba(255, 255, 255, 0.08)',
    },
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.5)',
    },
  };

  export const gradients = {
    primary: 'from-purple-500 via-blue-500 to-indigo-500',
    secondary: 'from-red-500 via-purple-500 to-blue-500',
    glass: 'from-white/[0.12] to-white/[0.06]',
  };

  export const animations = {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      verySlow: '1000ms',
    },
    timing: {
      bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      easeOut: 'cubic-bezier(0.23, 1, 0.32, 1)',
    },
  };

  export const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    glow: 'shadow-lg shadow-purple-500/20',
  };

  export const borderRadius = {
    sm: 'rounded-lg',     // 8px
    md: 'rounded-xl',     // 12px
    lg: 'rounded-2xl',    // 16px
    xl: 'rounded-3xl',    // 24px
    full: 'rounded-full', // 9999px
  };