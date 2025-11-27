/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        
        'pokemon-fire': '#DC143C',      // Carmesí intenso
        'pokemon-water': '#4682B4',     // Azul acero
        'pokemon-grass': '#228B22',     // Verde bosque
        'pokemon-electric': '#DAA520',  // Vara dorada
        'pokemon-psychic': '#9370DB',   // Púrpura medio
        'pokemon-ice': '#5F9EA0',       // Azul cadete
        'pokemon-dragon': '#483D8B',    // Azul pizarra oscuro
        'pokemon-dark': '#2F2F2F',      // Gris carbón
        'pokemon-fairy': '#C71585',     // Violeta rojo medio
        'pokemon-normal': '#696969',    // Gris tenue
        'pokemon-fighting': '#8B0000',  // Rojo oscuro
        'pokemon-poison': '#800080',    // Púrpura
        'pokemon-ground': '#A0522D',    // Siena
        'pokemon-flying': '#4169E1',    // Azul real
        'pokemon-bug': '#556B2F',       // Verde oliva oscuro
        'pokemon-rock': '#708090',      // Gris pizarra
        'pokemon-ghost': '#483D8B',     // Azul pizarra oscuro
        'pokemon-steel': '#708090'      // Gris pizarra
      },
      backdropBlur: {
        '4xl': '72px',
      },
      animation: {
        'fade-in-scale': 'fadeInScale 0.6s ease-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInScale: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        gradientShift: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
