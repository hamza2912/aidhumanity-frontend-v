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
        platinum: '#e6e6e6',
        dgray: '#7c7c7c',
        e6: '#e6e6e6',
        green: '#00c98b',
        dgreen: '#15803d',
        yellow: '#ffc100',
        lblack: '#444445',
        white: '#ffffff',
        99: '#999999',
        f5: '#f5f6f7',
      },
      width: {
        650: '650px',
        fit: 'fit-content',
      },
      minWidth: {
        fit: 'fit-content',
      },
      height: {
        '100vh': '100vh'
      },
      maxHeight: {
        230: '230px',
      },
      spacing: {
        '104px': '104px',
        '20px': '20px !important',
        '500px': '500px',
        '210px': '210px',
        '100vh': '100vh',
        '[0.15rem]': '0.15rem',
        '[5%]': '5%',
        '[10%]': '10%',
        '[15%]': '15%',
        '[20%]': '20%',
        '[25%]': '25%',
        '[35%]': '35%',
        '[40%]': '40%',
        '[45%]': '45%',
        '[55%]': '55%',
        '[95%]': '95% !important',
        '[100]': '100% !important',
        '[1.25rem]': '1.25rem',
        '[200px]': '200px',
      },
      fontSize: {
        1.25: '1.25rem',
        0.75: '0.75rem',
        '[10px]': '0.63rem',
        '[11px]': '0.69rem',
        '[13px]': '0.8rem',
        '[14px]': '0.87rem',
        '[30px]': '1.87rem',
        '[32px]': '2rem',
        '[0.5rem]': '0.5rem',
        '[1.13rem]': '1.13rem',
      },
      inset: {
        '[1.1rem]': '1.1rem',
      },
      zIndex: {
        '[1]': '1',
        '[9]': '9',
        '[100]': '100',
      },
      transitionProperty: {
        width: 'width',
      },
      transitionDuration: {
        '500ms': '500ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
