/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6b68e7',
        secondary: '#d1b1f9',
        tan: '#79403a',
        lightTan: '#c5a992'
      }
    },
  },
  plugins: [],
}
