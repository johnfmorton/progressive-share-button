/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './demo-page-assets/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: '#18181b', // zinc-900
              a: {
                color: '#4f46e5', // indigo-600
                '&:hover': {
                  color: '#4338ca', // indigo-700
                },
              },
              hr: {
                borderColor: '#e4e4e7', // zinc-200
                margin: '1.5em 0',
              },
              pre: {
                backgroundColor: '#f4f4f5', // zinc-100
                color: '#18181b', // zinc-900
              },
              code: {
                backgroundColor: '#f4f4f5', // zinc-100
                padding: '0.125rem 0.25rem',
                borderRadius: '0.25rem',
                fontWeight: '400',
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            },
          },
          invert: {
            css: {
              color: '#fafafa', // zinc-50
              a: {
                color: '#818cf8', // indigo-400
                '&:hover': {
                  color: '#a5b4fc', // indigo-300
                },
              },
              hr: {
                borderColor: '#27272a', // zinc-800
              },
              pre: {
                backgroundColor: '#27272a', // zinc-800
                color: '#fafafa', // zinc-50
              },
              code: {
                backgroundColor: '#27272a', // zinc-800
                color: '#fafafa', // zinc-50
              },
              strong: {
                color: '#fafafa', // zinc-50
              },
              h1: {
                color: '#fafafa', // zinc-50
              },
              h2: {
                color: '#fafafa', // zinc-50
              },
              h3: {
                color: '#fafafa', // zinc-50
              },
              h4: {
                color: '#fafafa', // zinc-50
              },
              blockquote: {
                color: '#a1a1aa', // zinc-400
              },
            },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
}
