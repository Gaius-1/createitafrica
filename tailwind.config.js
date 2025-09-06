/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'host': ['Host Grotesk', 'sans-serif'],
      },
      colors: {
        'base-100': '#181717',
        'base-200': '#292725',
        'base-300': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
