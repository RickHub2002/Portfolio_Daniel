module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl-up': '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      colors: {
        'teste-zika': '#ff00ff',
      }
    },
  },
  plugins: [],
}
