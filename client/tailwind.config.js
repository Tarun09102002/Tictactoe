module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      colors: {
        button: {
          dark: '#005b96',
          light: '#b3cde0'
        },
        background: '#011f4b',
        text: {
          lightButton: '#2c699e'
        }
      }
    },

  },
  plugins: [],
}