/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          200:"#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue:{
          500:"#2b77e7"
        }
      },
      fontFamily:{
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['poppins', "sans-serif"]
      }
    },
  },
  plugins: [],
}

