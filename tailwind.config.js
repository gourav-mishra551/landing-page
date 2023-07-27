/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern-mobile':
          "url('../public/assets/illustration-hero-mobile.png')",
        'bg-hero-squiggle': "url('../public/assets/bg-hero-squiggle.svg')",
        'illustration-hero-right':
          "url('../public/assets/illustration-hero-right.svg')",
        'illustration-hero-left':
          "url('../public/assets/illustration-hero-left.svg')",
        'bg-footer-squiggle': "url('../public/assets/bg-footer-squiggle.svg')",
        'bg-rainy': "url('../public/assets/rains.svg')",
      },
    },
  },
  plugins: [],
}
