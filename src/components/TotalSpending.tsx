import type { Transactions } from "../utils/transactions";

export const TotalSpending = ({
  transactions,
}: {
  transactions: Transactions;
}) => {
  const total = transactions.reduce((a, b): number => a + b.amount, 0);
  return <div className="">TOTATL SPENT THIS MONTH {total}</div>;
};
