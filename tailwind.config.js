/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7429C6',
        'pink': '#C951E7',
        'magenta': '#672171',
        'dark-grey': '#4A5567',
        'grey': '#97A3B6',
        'black': '#030616',
        'white': '#F2F5F9',
        'dark-blue': '#171E30'
      },
      boxShadow: {
        'custom': '0px 5px 0px 0px black',
        'button': '0px 5px 0px 0px #672171'
      },
      letterSpacing: {
        'custom': '1rem'
      }
    },
    fontFamily: {
      outfit: ['Outfit', 'serif']
    }
  },
  plugins: [],
}