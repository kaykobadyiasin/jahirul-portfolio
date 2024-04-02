/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        primaryColor: {
          100: "#ffffff",
          200: "#008EFF",
          300: "#F4FBFF",
          400: "#EAF0FD",
          500: "#D4D4D4",
        },
        secondaryColor: {
          100: "#000000",
          200: "#2E2E2E",
          300: "#5B5B5B",
          400: "#D4D4D4",
        }
      }
    },
  },
  plugins: [],
}

