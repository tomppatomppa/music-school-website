/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        textPrimary: 'black',
        textSecondary: 'bg-zinc-500',
        hero: '#001122',
        base: '#66BAB5',
        app: '#001122',
        orange: '#FCAF3C',
      },
      backgroundImage: {
        hero2: "url('../src/assets/images/hero2.png')",
      },
    },
  },
  plugins: [],
}
