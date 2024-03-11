/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:{
          light: "#fff",
          dark: "#111"
        },
        primary: {
          light: "#ff0000",
          dark: "#ff0000"
        },
        text:{
          light: "#eee",
          dark: "#111"
        }
      }
    },
    transitionDuration: 5
  },
  plugins: [],
}

