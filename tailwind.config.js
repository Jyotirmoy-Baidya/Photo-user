/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#292A2D',
        'primary-darkgray': '#E5E5E51A',
        'primary-white': '#F5F5F5',
        'primary-bg': '#1B1C1F',
        'primary-blue': '#567DDF'
      }
    },
  },
  plugins: [],
}

