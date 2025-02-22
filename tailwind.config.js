// tailwind.config.js
const theme = require('./src/styles/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: theme.colors.glass,
        primary: theme.colors.primary,
        brand: theme.colors.brand,
        surface: theme.colors.surface,
      },
      spacing: {
        ...theme.spacing,
      },
      fontFamily: {
        sans: theme.typography.fonts.sans.split(', '),
        display: theme.typography.fonts.display.split(', '),
        mono: theme.typography.fonts.mono.split(', ')
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'text-in': 'text-in 0.5s ease-out forwards',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'text-in': {
          'from': {
            opacity: 0,
            transform: 'translateY(10px)'
          },
          'to': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      transitionTimingFunction: {
        'default': `cubic-bezier(${theme.animation.easings.default.join(', ')})`,
        'bounce': `cubic-bezier(${theme.animation.easings.bounce.join(', ')})`,
        'soft': `cubic-bezier(${theme.animation.easings.soft.join(', ')})`
      },
      boxShadow: {
        'glow-sm': theme.effects.glow.sm,
        'glow': theme.effects.glow.DEFAULT,
        'glow-lg': theme.effects.glow.lg,
        'glow-xl': theme.effects.glow.xl,
      },
      backdropBlur: {
        'xs': theme.effects.blur.sm,
      }
    }
  },
  plugins: [],
}