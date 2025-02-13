// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // New font configuration
      // fontFamily: {
      //   sans: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      //   mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      //   display: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      // },
      fontFamily: {
        // Really unique headline font
        display: ['Orbitron', 'Chakra Petch', 'sans-serif'],
        // Unique but readable body font
        sans: ['Cabinet Grotesk', 'Euclid Circular', 'system-ui'],
        // Keep JetBrains Mono for code
        mono: ['JetBrains Mono', 'monospace'],
      },
      // Your existing glass colors
      colors: {
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          hover: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      // Combining existing animations with new text animation
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'text-in': 'text-in 0.5s ease-out forwards',
      },
      // Combining existing keyframes with new text animation
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
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      // Optional: Adding custom letter spacing for tech look
      letterSpacing: {
        'tech': '-0.02em',
        'tech-wide': '0.05em',
      }
    }
  },
  plugins: [],
}