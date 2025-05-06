/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the original CSS variables
        'gold': 'var(--color-gold, #c9a654)',
        'gold-light': 'var(--color-gold-light, rgba(201, 166, 84, 0.1))',
        'gold-dark': 'var(--color-gold-hover, #d6b56a)',
        'charcoal': 'var(--color-charcoal, #2c2c2c)',
        'off-white': 'var(--color-cream, #f8f8f8)',
        'light-gray': '#e9e9e9',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}