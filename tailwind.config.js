module.exports = {
  mode: 'jit',
  darkMode: 'class',
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
        'hero-pattern': "url('/hip-square.png')",
        'dark-hero-pattern' : "url('/861241.jpg')"
      }
    },
  },
  plugins: [],
}
