/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', 
        'sm': '421px',
        'md': '640px',
        'lg': '768px'
      },
    },
  },
  plugins: [],
}