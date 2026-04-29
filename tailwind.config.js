/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1a1a1a',
        'bg-card': '#141414',
        'accent-gold': '#c9a962',
        'accent-gold-light': '#e4d4a8',
        'accent-gold-dark': '#8b7355',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a3a3a3',
        'text-muted': '#666666',
        'border-subtle': '#262626',
        'border-gold': '#3d3421',
        'wealth': '#c9a962',
        'life': '#7c9c6b',
        'next': '#6b8c9c',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}