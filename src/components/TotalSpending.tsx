import type { Transactions } from "../utils/transactions";

import { formatCurrency } from "../utils/number";

export const TotalSpending = ({
  transactions,
}: {
  transactions: Transactions;
}) => {
  const total = transactions.reduce((a, b): number => a + b.amount, 0);
  return <div className="">TOTAL SPENT THIS MONTH {formatCurrency(total)}</div>;
};
