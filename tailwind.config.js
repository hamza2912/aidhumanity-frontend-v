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
        mgreen: '#10B981',
        yellow: '#ffc100',
        lblack: '#444445',
        white: '#ffffff',
        palepink: '#eeebeb',
        99: '#999999',
        f5: '#f5f6f7',
        red: '#EF4444',
        dred: '#DC2626',
      },
      width: {
        650: '650px',
        '[30rem]': '30rem',
        fit: 'fit-content',
        '160px': '160px',
        '70px': '70px',
        '400px': '400px',
        inherit: 'inherit',
      },
      minWidth: {
        fit: 'fit-content',
      },
      height: {
        '[50vh]': '50vh',
        '100vh': '100vh',
        '150px': '150px',
        '[14rem]': '14rem',
        '[16rem]': '16rem',
        '70px': '70px',
        '230px': '230px',
        '400px': '400px',
      },
      maxHeight: {
        230: '230px',
        600: '600px',
        200: '200px',
      },
      minHeight: {
        '400px': '400px',
        '[28rem]': '28rem',
        '[5.5rem]': '5.5rem',
        36: '9rem',
        '200px': '200px',
      },
      spacing: {
        '104px': '104px',
        '20px': '20px !important',
        '500px': '500px',
        '210px': '210px',
        '100vh': '100vh',
        '[0.15rem]': '0.15rem',
        '[9.5rem]': '9.5rem',
        '[5%]': '5%',
        '[10%]': '10%',
        '[13%]': '13%',
        '[15%]': '15%',
        '[17%]': '17%',
        '[20%]': '20%',
        '[25%]': '25%',
        '[27%]': '27%',
        '[30%]': '30%',
        '[31%]': '31%',
        '[32%]': '32%',
        '[33%]': '33%',
        '[34%]': '34%',
        '[35%]': '35%',
        '[36%]': '36%',
        '[40%]': '40%',
        '[41%]': '41%',
        '[42%]': '42%',
        '[44%]': '44%',
        '[45%]': '45%',
        '[48%]': '48%',
        '[49%]': '49%',
        '[51%]': '51%',
        '[54%]': '54%',
        '[55%]': '55%',
        '[58%]': '58%',
        '[59%]': '59%',
        '[60%]': '60%',
        '[95%]': '95% !important',
        '[100]': '100% !important',
        '[1.25rem]': '1.25rem',
        '[3.6rem]': '3.6rem',
        '[9.5rem]': '9.5rem',
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
        '[40px]': '2.5rem',
        '[60px]': '3.75rem',
        '[0.5rem]': '0.5rem',
        '[0.8rem]': '0.8rem',
        '[1.13rem]': '1.13rem',
      },
      inset: {
        '[1.1rem]': '1.1rem',
      },
      zIndex: {
        '[-10]': '-10',
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
      lineHeight: {
        '[4.5rem]': '4.5rem',
        '[3rem]': '3rem',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
};
