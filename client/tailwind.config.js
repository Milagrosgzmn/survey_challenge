/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
          colors: {
              // light mode
              'background-light': '#fcfcfc',
              'text-color-light': '#000',
              'hover-color-light': '#567eac',
              // dark mode
              'background-dark': '#0b0b25',
              'hover-color-dark': '#d2cfcf',
              'text-color-dark': '#fcfcfc',
          },
          screens: {
              sm: '640px',
              // => @media (min-width: 640px) { ... }

              md: '768px',
              // => @media (min-width: 768px) { ... }

              lg: '1024px',
              // => @media (min-width: 1024px) { ... }

              xl: '1280px',
              // => @media (min-width: 1280px) { ... }

              '2xl': '1536px',
              // => @media (min-width: 1536px) { ... }
          },
      },
  },
  plugins: [],
};

