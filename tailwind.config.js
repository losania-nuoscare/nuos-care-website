/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nuos: {
          'blue-light': '#B9D8F2',
          blue: '#5BA3D9',
          'blue-dark': '#3A7FB5',
          pink: '#F7C6D9',
          'pink-soft': '#FCE4EC',
          lavender: '#A78BFA',
          'lavender-light': '#DDD6FE',
          cream: '#FBF7F2',
          'grey-50': '#F9F9F9',
          'grey-100': '#F4F4F4',
          'grey-200': '#E8E8E8',
          'grey-400': '#A0A0A0',
          charcoal: '#2A2A33',
          star: '#F59E0B',
        },
      },
      fontFamily: {
        display: ["'Libre Caslon Text'", 'Georgia', 'serif'],
        body: ["'Poppins'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
