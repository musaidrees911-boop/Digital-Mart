/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rust: {
          50: '#fdf6ee',
          100: '#fdead0',
          200: '#fbd9a5',
          300: '#f7c07a',
          400: '#f0a04e',
          500: '#C65D2E',
          600: '#B45309',
          700: '#924010',
          800: '#78350f',
          900: '#652d0f',
        },
        ink: {
          900: '#0A0A0B',
          800: '#141416',
          700: '#1E1E20',
          600: '#2A2A2E',
        },
        cream: '#FFFBF5',
        sand: '#E8DDD0',
        copper: '#CB6D3A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        '3d': '0 25px 50px -12px rgba(0,0,0,0.4), 0 10px 20px -6px rgba(0,0,0,0.3)',
        'glow': '0 0 40px rgba(198, 93, 46, 0.3)',
      }
    },
  },
  plugins: [],
}
