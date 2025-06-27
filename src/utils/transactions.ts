export type Transactions = {
  date: `${number}-${number}-${number}`;
  amount: number;
  payee: string;
  category: string;
}[];

export const filterData = (
  data: {
    date: `${number}-${number}-${number}`;
    amount: number;
    payee: string;
    category: string;
  }[],
  year: number,
  month: number
) => {
  return data.filter((transaction) => {
    const [rowYear, rowMonth] = transaction.date
      .split("-")
      .map((string) => parseInt(string));
    return rowYear === year && rowMonth === month;
  });
};
