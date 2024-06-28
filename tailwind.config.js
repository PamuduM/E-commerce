/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Jost', 'sans']
      },
      colors: {
        primary: '#1862ef',
        secondary: '#f4ad13',
        tertiary: '#3f4236',
      }
    },
  },
  plugins: [],
}

