/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#7429C6',
      'pink': '#C951E7',
      'magenta': '#672171',
      'dark-grey': '#4A5567',
      'grey': '#97A3B6',
      'black': '#030616',
      'white': '#F2F5F9'
    },
    fontFamily: {
      outfit: ['Outfit', 'serif']
    }
  },
  plugins: [],
}