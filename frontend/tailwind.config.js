/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
            primary: "#193d81",
            secondary: "#4E71FF",
            accent: "#BBFBFF",
            button: "#8DD8FF",
         },
    },
  },
  plugins: [],
}

