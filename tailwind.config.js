/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './demo-page-assets/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: '#333',
              a: {
                color: '#333',
                '&:hover': {
                  color: '#333',
                },
              },
              hr: {
                borderColor: '#3a3a3a',
                margin: '1.5em 0',
              },
              pre: {
                backgroundColor: '#f7f7f7',
                color: '#333',
              },
            },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
}
