/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': "linear-gradient(90deg, rgba(94,17,255,1) 0%, rgba(248,117,22,1) 100%)",
        'gradient-secondary': "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
        'gradient-tertiary': "linear-gradient(90deg, rgba(248,117,22,1) 0%, rgba(94,17,255,1) 100%)"
      })
    },
  },
  plugins: [],
}

