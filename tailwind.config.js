/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,css}', './components/**/*.{js,css}'],
  theme: {
    extend: {
      spacing: {
        xs: '0.625rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '2rem',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
      lineHeight: {
        xs: '1.4',
        sm: '1.45',
        md: '1.55',
        lg: '1.6',
        xl: '1.65',
      },
    },
  },
  plugins: [require('daisyui')],
  corePlugins: {
    preflight: false,
  },
}
