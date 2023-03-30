export const currencyFormatter = number =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' , currencyDisplay: "symbol", minimumIntegerDigits: 4 , minimumFractionDigits: 0,
  maximumFractionDigits: 0, useGrouping: true }).format(
    number
  );