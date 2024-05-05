/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#fff253',
      },
      fontFamily: {
        "Oswald": ['Oswald', 'sans-serif'],
        "Roboto": ['Roboto', 'sans-serif'],
        "Orbitron": ['Orbitron', 'sans-serif']

      }
    },
  },
  plugins: [],
}