/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter','sans-serif'],
        orbitron: ['Orbitron','sans-serif'],
      },
      colors: {
        space: {
          dark: '#07010d',
          purple: '#5b21b6',
          glow: '#9333ea',
          cyan: '#06b6d4'
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: [],
}
