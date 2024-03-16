/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:{
          100: "#ffffff",
          200: "#006ACB",
          300: "#7C838E",
          400: "#212121",
          500: "#111111",
        },
        secondaryColor: {
          100: "#000000",
        }
      }
    },
  },
  plugins: [],
}

