import { useEffect, useState } from "react";
import { splitToPages } from "../utils/array";
import { formatCurrency } from "../utils/number";
import type { Transactions } from "../utils/transactions";

import shared from "../styles/shared.module.css";
import styles from "./TransactionList.module.css";

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
    <div className={shared.block}>
      <h3 className={shared.title}>TRANSACTIONS THIS MONTH</h3>
      {transactions.length > 0 && (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>PAYEE</th>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>CATEGORY</th>
              </tr>
            </thead>
            <tbody className={styles.list} role="list">
              {transactionPages[page] &&
                transactionPages[page].map((transaction) => (
                  <tr>
                    <td className={styles.td}>{transaction.payee}</td>
                    <td className={styles.td}>{transaction.date}</td>
                    <td className={styles.td}>
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td className={styles.td}>{transaction.category}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className={styles.pageButtons}>
            {transactionPages.map((_page, index) => (
              <button
                className={`${shared.button} ${
                  index === page && styles.active
                }`}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
