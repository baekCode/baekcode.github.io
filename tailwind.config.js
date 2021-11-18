const SIZE_SYSTEM = {
  0.5: '0.125rem', //2px
  0.75: '0.1875rem',
  1.25: '0.3125rem',
  1.75: '0.4375rem',
  3.25: '0.8125rem',
  3.75: '0.9375rem', // 15px
  4.5: '1.125rem', // 18px
  5: '1.25rem', // 20px
  5.5: '1.375rem', // 22px
  6.25: '1.5625rem', // 25px
  7.5: '1.875rem', // 30px
  8.5: '2.125rem', // 34px
  11.5: '2.875rem', // 46px
  12.5: '3.125rem', // 50px
  13: '3.25rem', // 52px
  21: '5.25rem', // 84px
  19.5: '4.875rem', // 78px
  21: '5.25rem',
  26: '6.5rem', // 104px
};

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      width: {
        ...SIZE_SYSTEM,
      },
      height: {
        ...SIZE_SYSTEM,
      },
      spacing: {
        ...SIZE_SYSTEM,
      },
      padding: {
        ...SIZE_SYSTEM,
      },
      margin: {
        ...SIZE_SYSTEM,
      },
      inset: {
        ...SIZE_SYSTEM,
      },
      rotate: {
        '-20': '20deg',
        20: '20deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
