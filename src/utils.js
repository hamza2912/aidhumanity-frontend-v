export const currencyFormatter = number =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' , currencyDisplay: "symbol" }).format(
    number
  );