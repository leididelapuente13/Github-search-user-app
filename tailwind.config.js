/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "src/**/*.{js,jsx,tsx}",
    './src/assets/styles/index.css'
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#fefefe",
          200: "#f6f8ff",
        },
        github: {
          100: "#60abff",
          200: "#0079ff",
          300: "#4b6a9b",
          400: "#1E2A47",
          500: "#141D2F",
          600: "#2b3442"
        }
      }
    },
  },
  plugins: [],
}

