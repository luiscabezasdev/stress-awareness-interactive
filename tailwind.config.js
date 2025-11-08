/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // gradient colors used in data-driven cards
    'from-red-500', 'to-red-600',
    'from-purple-500', 'to-purple-600',
    'from-orange-500', 'to-orange-600',
    'from-indigo-500', 'to-indigo-600',
    'from-green-500', 'to-green-600',
    'from-yellow-500', 'to-yellow-600',
    'from-pink-500', 'to-pink-600',
    'from-blue-500', 'to-blue-600',
    'from-emerald-500', 'to-emerald-600',
    'from-amber-500', 'to-amber-600',
    // background and border colors defined via data
    'bg-red-50', 'bg-purple-50', 'bg-orange-50', 'bg-indigo-50', 'bg-green-50',
    'bg-yellow-50', 'bg-pink-50', 'bg-blue-50', 'bg-emerald-50', 'bg-amber-50',
    'border-red-300', 'border-purple-300', 'border-orange-300', 'border-indigo-300',
    'border-green-300', 'border-yellow-300', 'border-pink-300', 'border-blue-300',
    'border-emerald-300', 'border-amber-300',
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
