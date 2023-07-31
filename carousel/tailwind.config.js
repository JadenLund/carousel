/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'custom': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'fadein': '#8A22BE',
        'fadeout': "#E70A8C",
        'tab': '#161120',
        'bg-t': '#261F35',
        'bg-m': '#161120',
        's-text': '#BFBFBF',
        'marq': '#F70684'
      },
      fontFamily: {
        'roboto': ['Roboto', 'cursive'],
      },
      spacing: {
        "a": "100%",
        "b": "75%",
        "c": "25%",
        "d": "15%",
        "e": "10%",
        "z": "100vh",
        "y": "40vh",
        "x": "25vh",
        "w": "10vh",
        "q": "100rem",
        "r": "70rem",
        "s": "35rem",
        "t": "2.5rem",
        "u": "4rem",
        "v": "30vh",
        'ta': '50rem',
        "f": '16vw',
        'g': '1vw',
        'h': '2rem'

      },
    },
  },
};
