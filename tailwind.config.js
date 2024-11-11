/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      dePixel: ['DePixel', 'sans-serif'],
      chicago: ['Chicago', 'DOSIyagiMedium'],
      monaco: ['Monaco', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
};
