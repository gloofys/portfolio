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
        customPersian:'#3f384b'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      }
    },
  },

  plugins: [],
}

