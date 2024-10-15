/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      primary: '#FFFFFF',
      secondary: '#FC6E04',
      black: '#000000',
      gray: '#636363',
      white: '#FFFFFF',
      transparent: 'rgba(148, 163, 184, 0.1)'
    },
    extend: {},
  },
  plugins: [],
}

