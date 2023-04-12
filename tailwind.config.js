module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "f9": "#f9f9f9",
        "sblue": "#00ade9",
        "lgray": "#bdbdbd",
        "green": "#00c98b",
        "yellow": "#ffc100"
      }, 
      spacing: {
        '104px': '104px',
      },
      fontSize: {
        1.25: '1.25rem',
        0.75: '0.75rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
