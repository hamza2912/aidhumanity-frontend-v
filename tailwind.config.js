module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        f9: '#f9f9f9',
        sblue: '#00ade9',
        dblue: '#006ba3',
        nblue: '#102558',
        lgray: '#bdbdbd',
        dgray: '#7c7c7c',
        e6: '#e6e6e6',
        green: '#00c98b',
        dgreen: '#15803d',
        yellow: '#ffc100',
        lblack: '#444445',
        99: '#999999',
        c7: '#7c7c7c'
      },
      width: {
        650: '650px',
        fit: 'fit-content'
      },
      spacing: {
        '104px': '104px',
        '[0.15rem]': '0.15rem',
        '[5%]': '5%',
        '[10%]': '10%',
        '[15%]': '15%',
        '[20%]': '20%',
        '[25%]': '25%',
        '[55%]': '55%',
      },
      fontSize: {
        1.25: '1.25rem',
        0.75: '0.75rem',
        '[0.63rem]': '0.63rem',
        '[0.69rem]': '0.69rem',
        '[0.5rem]': '0.5rem',
        '[1.13rem]': '1.13rem',
      },
      inset: {
        '[1.1rem]': '1.1rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
