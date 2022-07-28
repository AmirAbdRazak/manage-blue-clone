/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /** Put your fancy colors here owowow nwn nwnwn n wnnwnw */
        desaturatedBlue: '#4e4f67',
        darkBlue: '#2b2d54',
        veryDarkBlue: '#1c1b26',
        imageColor: '#ededf6'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }
  },
  plugins: [],
}
