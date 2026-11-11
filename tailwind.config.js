/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B0911',
        violet: '#9B6DFF',
        lavender: '#D7C4FF',
      },
    },
  },
  plugins: [],
}
