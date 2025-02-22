// tailwind.config.js
const { colors, spacing, typography, effects } = require('./src/styles/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        glass: colors.glass,
        primary: colors.primary,
        // ... other colors
      },
      spacing: {
        ...spacing,
        'golden': spacing.golden
      },
      fontFamily: {
        sans: typography.fonts.sans.split(', '),
        display: typography.fonts.display.split(', '),
        mono: typography.fonts.mono.split(', ')
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
        'default': `cubic-bezier(${animation.easings.default.join(', ')})`,
        'bounce': `cubic-bezier(${animation.easings.bounce.join(', ')})`,
        'soft': `cubic-bezier(${animation.easings.soft.join(', ')})`
      },
      boxShadow: {
        'glow-sm': effects.glow.sm,
        'glow': effects.glow.DEFAULT,
        'glow-lg': effects.glow.lg,
        'glow-xl': effects.glow.xl,
      },
      backdropBlur: {
        'xs': effects.blur.sm,
      }
    }
  },
  plugins: [],
}