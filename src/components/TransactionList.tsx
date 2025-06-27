import { useState } from "react";
import { splitToPages } from "../utils/array";
import type { Transactions } from "../utils/transactions";

export const TransactionList = ({
  transactions,
}: {
  transactions: Transactions;
}) => {
  const [page, setPage] = useState(0);
  const transactionPages = splitToPages(transactions, 5);
  return (
    <div>
      <h3>TRANSACTIONS THIS MONTH</h3>
      {transactionPages[page].map((transaction) => (
        <li>{transaction.amount}</li>
      ))}

      {transactionPages.map((_page, index) => (
        <button onClick={() => setPage(index)}>{index + 1}</button>
      ))}
    </div>
  );
};
