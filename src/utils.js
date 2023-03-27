export const currencyFormatter = number =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'GBP' }).format(
    number
  );
