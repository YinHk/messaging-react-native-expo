/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      blue: {
        bright: '#5FECFF',
        navy: '#1974d2',
        azure: '#007fff',
        velvet: '#0d6183',
        brilliant: '#0075b3',
        cornflower: '#6495ed',
        ocean: '#009dc4'
      }
    },
    extend: {
    },
  },
  plugins: [],
}
