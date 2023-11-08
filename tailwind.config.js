export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37', // Add the gold color you want to use
        }
      },
      translate: {
        '60': '60px',
        '120': '120px',
        '180': '180px',
        // Add as many as you need
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Add Poppins font
        'roboto': ['Roboto', 'sans-serif'], // Add Roboto font
      },
      height: {
        'screen': '100vh', // Add full screen height
      },
      spacing: {
        'full': '100%', // Add full width
      }
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
        '.fullPageSection': {
          height: '100vh',
          width: '100vw',
        },
        // Add as many as you need
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
