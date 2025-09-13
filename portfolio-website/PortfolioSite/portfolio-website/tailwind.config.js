/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinSide: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pingSlow: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.4)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'spin-side': 'spinSide 2s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'ping-slow': 'pingSlow 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
