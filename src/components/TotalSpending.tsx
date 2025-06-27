import type { Transactions } from "../utils/transactions";

import { formatCurrency } from "../utils/number";

import shared from "../styles/shared.module.css";
import styles from "./TotalSpending.module.css";

export const TotalSpending = ({
  transactions,
}: {
  transactions: Transactions;
}) => {
  const total = transactions.reduce((a, b): number => a + b.amount, 0);
  return (
    <div className={shared.block}>
      <h3 className={`${shared.title} ${styles.title}`}>
        TOTAL SPENT THIS MONTH
      </h3>
      <span className={styles.total}>{formatCurrency(total)}</span>
    </div>
  );
};
