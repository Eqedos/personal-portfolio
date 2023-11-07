/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      translate: {
        '60': '60px',
        '120': '120px',
        '180': '180px',
        // Add as many as you need
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function({ addUtilities }) {
      const newUtilities = {
        '.translate-z-60': {
          transform: 'translateZ(60px)',
        },
        '.translate-z-120': {
          transform: 'translateZ(120px)',
        },
        '.translate-z-180': {
          transform: 'translateZ(180px)',
        },
        // Add as many as you need
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
