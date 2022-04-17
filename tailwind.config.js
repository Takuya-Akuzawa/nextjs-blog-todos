module.exports = {
  content: [
    './pages/**/*.{js, ts, jsx, tsx}',
    './components/**/*.{js, tsx, jsx, tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
