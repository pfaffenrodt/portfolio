/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Arial'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        200: '#b8cbda',
        400: '#508ab8',
        900: '#0d141c'
      }
    },
    extend: {
    },
  },
  plugins: [],
}
