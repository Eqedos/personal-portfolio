module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' for system-based dark mode
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37', // Gold color
        },
      },
      translate: {
        '60': '60px',
        '120': '120px',
        '180': '180px',
        // Continue adding your custom translate sizes here
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Poppins font
        'roboto': ['Roboto', 'sans-serif'], // Roboto font
      },
      height: {
        'screen': '100vh', // Fullscreen height
        '50vh': '50vh', // 50% of the viewport height
        '25vh': '25vh', // 25% of the viewport height for large monitors
      },
      spacing: {
        'full': '100%', // Full width
        // Add more custom spacing as needed
      },
      screens: {
        'lg-monitor': '1920px', // Custom screen size for large monitors
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Plugin to hide scrollbars
    // Define custom utilities if needed
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
        // Add more custom utilities here as needed
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    // Add other plugins here as needed
  ],
}
