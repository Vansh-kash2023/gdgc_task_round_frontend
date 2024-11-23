/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*", "./src/components/*"],
  theme: {
    extend: {
      keyframes: {
        fadeInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInFromLeft: 'fadeInFromLeft 1s ease-out',
      },
    
    },
  },
  plugins: [],
}

