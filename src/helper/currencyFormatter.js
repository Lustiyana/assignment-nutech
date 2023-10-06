export const currencyFormatter = (amount) => {
  if (amount) {
    return `Rp${amount.toLocaleString("id-ID")}`;
  }
  return "-";
};
