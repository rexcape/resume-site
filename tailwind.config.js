/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,css}', './components/**/*.{js,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  corePlugins: {
    preflight: false,
  },
}
