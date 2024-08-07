/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('./src/assets/Bg.jpg')"
      },

      boxShadow: {
        'white-shadow': '0 4px 6px rgba(255, 255, 255, 0.4)',
        'black-shadow': '0px 0px rgba(0, 0, 0, 0.4)',
      },
      fontFamily:{
        'rubik': ['Rubik', 'sans-serif'],
        'roboto-mono':['Roboto Mono', 'Mono'],
        'eczar':['Eczar', 'Sans']
      }
    },
  },
  plugins: [],
}

