/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        'darkBrown': '#5C4033',
        'lightBrown': '#C4A484',
        'Brown': '#A52A2A',
        'darkRed': '#8B0000',
        'Wine': '#722F37',
        'ochre': '#CC7722',
      },

      fontFamily:{
        'Explora': "'Explora', cursive",
        'vibes': "'Great Vibes', cursive",
      },
      
    },
  },
  plugins: [],
}
