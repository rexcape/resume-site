/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,css}', './components/**/*.{js,css}'],
  theme: {
    extend: {
      // from mantine default https://mantine.dev/styles/css-variables/
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
      spacing: {
        xs: '0.625rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '2rem',
      },
      // shadow's default value is lost
      borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '2rem',
      }
    },
  },
  plugins: [require('daisyui')],
  corePlugins: {
    preflight: false,
  },
}
