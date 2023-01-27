/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary) / <alpha-value>)',
        'text-color': 'rgba(var(--text-color) / <alpha-value>)',
        secondary: 'rgba(var(--secondary) / <alpha-value>)',
        tertiary: 'rgba(var(--tertiary) / <alpha-value>)'
      }
    }
  },
  plugins: [],
}
