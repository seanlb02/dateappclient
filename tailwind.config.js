/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xxs': '250px',
      'xs': '350px',
      'sm': '640px',
      'md': '750px',
      'lg': '850px',
      'xlg': '1100px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '350px',
        'sm': '640px',
        'md': '750px',
        'lg': '850px',
        'xlg': '1100px',
      },
    },
  },
  plugins: [],
}
