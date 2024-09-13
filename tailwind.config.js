/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        customBlue:'#134867',
        customSnuff:'#d8d4e6',
        customFlamingo:'#b95b7d',
        customWine:'#1D425C',
        customFlush:'#3E3E52',
        customPersian:'#3f384b',
        customAccent: '#ff6f61', // Coral for buttons and accent text
        customGradientFrom: '#ff6f61', // Coral (for gradients)
        customGradientTo: '#f48fb1', // Light pink (for gradients)
        customVibrant:'#3c91e6',
        customGray: '#4a4a4a'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      fontFamily: {
        'shippori': ['"Shippori Mincho"', 'serif'], // Registering the font
      },
      fontWeight: {
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
    },
  },

  plugins: [],
}

