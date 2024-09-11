/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      colors: {
        primary: '#ffffff', 
        secondary: '#1a1a1a', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, #000000, #1a1a1a)', 
      },
      boxShadow: {
        custom: '0px 4px 20px rgba(0, 0, 0, 0.3)', 
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [],
}
