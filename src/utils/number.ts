export const formatCurrency = (
  number: number,
  locale: string = "en-US",
  currency: string = "USD"
): string => {
  return number.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
