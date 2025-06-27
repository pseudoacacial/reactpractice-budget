import { useEffect, useState } from "react";
import { splitToPages } from "../utils/array";
import { formatCurrency } from "../utils/number";
import type { Transactions } from "../utils/transactions";

export const TransactionList = ({
  transactions,
}: {
  transactions: Transactions;
}) => {
  const [page, setPage] = useState(0);
  const transactionPages = splitToPages(transactions, 5);
  useEffect(() => {
    setPage(0);
  }, [transactions]);
  return (
    <div>
      <h3>TRANSACTIONS THIS MONTH</h3>
      {transactionPages[page] &&
        transactionPages[page].map((transaction) => (
          <li>{formatCurrency(transaction.amount)}</li>
        ))}

      {transactionPages.map((_page, index) => (
        <button onClick={() => setPage(index)}>{index + 1}</button>
      ))}
    </div>
  );
};
