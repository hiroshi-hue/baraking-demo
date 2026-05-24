/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'baraking-orange': '#FF6B35',
        'baraking-gold': '#FFD700',
        'baraking-warm': '#FFF8E7',
        'baraking-warm-dark': '#D4C5B0',
        'baraking-teal': '#2A9D8F',
        'baraking-accent': '#E9C46A',
      },
      fontFamily: {
        'primary': ['Hiragino Maru Gothic ProN', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
