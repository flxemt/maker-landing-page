/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        cyan: '#3EE9E5',
        blue: '#093F68',
        gray: '#777F98',
        'dark-blue': '#080C20',
        'red-errors': '#FF2965'
      },
      listStyleImage: {
        checkmark: 'url("/icon-check.svg")',
        'checkmark-cyan': 'url("/icon-check-cyan.svg")'
      }
    },
    backgroundImage: {
      hero: 'url("/bg-hero-squiggle.svg")',
      footer: 'url("/bg-footer-squiggle.svg")'
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif']
    },
    fontSize: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.125rem',
      body: '0.9375rem'
    },
    lineHeight: {
      h1: '3.5rem',
      h2: '3.4375rem',
      h3: '2.75rem',
      body: '1.5625rem'
    },
    borderRadius: {
      illustration: '45px',
      input: '24px',
      card: '8px'
    },
    screens: {
      md: '768px',
      xl: '1110px',
      '2xl': '1600px'
    },
    container: {
      center: true
    }
  },
  plugins: []
}
