module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans : ['Poppins','sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/hip-square.png')",
      }
    },
  },
  plugins: [],
}
