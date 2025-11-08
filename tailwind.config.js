/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'scaleIn': 'scaleIn 0.3s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
    },
  },
  plugins: [],
}