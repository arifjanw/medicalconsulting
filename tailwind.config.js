/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'turquoise': '#38c0c4;',
        'dark-turquoise': '#39a2a5;',
        'baby-pink': '#e06666;',
        'baby-yellow': '#ffeaaa;',
        
      },
    },
  },
  plugins: [],
}

