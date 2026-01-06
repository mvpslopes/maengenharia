/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'brand-yellow': '#f5a900',
        'brand-yellow-hover': '#d49400',
        'brand-yellow-light': '#ffb833',
      },
    },
  },
  plugins: [],
};
