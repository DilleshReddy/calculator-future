/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#00ffff',
          pink: '#ff00ff',
          green: '#00ff00',
        },
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px theme("colors.neon.blue"), 0 0 20px theme("colors.neon.blue")' },
          '50%': { boxShadow: '0 0 20px theme("colors.neon.pink"), 0 0 40px theme("colors.neon.pink")' },
        },
      },
    },
  },
  plugins: [],
};