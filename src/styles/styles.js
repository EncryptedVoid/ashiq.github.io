// src/styles/styles.js

export const gradientStyles = {
    learning: 'from-emerald-500/20 to-cyan-500/20',
    frontend: 'from-pink-500/20 to-purple-500/20',
    academic: 'from-blue-500/20 to-indigo-500/20',
    career: 'from-orange-500/20 to-red-500/20',
    technical: 'from-violet-500/20 to-fuchsia-500/20'
  };

  // You can also add additional styles here
  export const cardStyles = {
    learning: {
      shadow: 'shadow-emerald-500/10',
      border: 'border-emerald-500/20',
      hover: 'hover:border-emerald-500/30'
    },
    frontend: {
      shadow: 'shadow-pink-500/10',
      border: 'border-pink-500/20',
      hover: 'hover:border-pink-500/30'
    },
    academic: {
      shadow: 'shadow-blue-500/10',
      border: 'border-blue-500/20',
      hover: 'hover:border-blue-500/30'
    },
    career: {
      shadow: 'shadow-orange-500/10',
      border: 'border-orange-500/20',
      hover: 'hover:border-orange-500/30'
    },
    technical: {
      shadow: 'shadow-violet-500/10',
      border: 'border-violet-500/20',
      hover: 'hover:border-violet-500/30'
    }
  };

  export default {
    gradientStyles,
    cardStyles
  };