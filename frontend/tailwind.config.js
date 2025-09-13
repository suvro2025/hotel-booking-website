/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
            primary: "#0f172a",
            button: "#f59e0b",
            secondary: "#3f3f46",
            
         },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      }   
    },
  },
  plugins: [],
}

