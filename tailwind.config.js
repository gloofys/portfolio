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
        customFlamingo:'#F14F36',
        customWine:'#1D425C',
        customFlush:'#B73E83'
      }
    },
  },
  plugins: [],
}

