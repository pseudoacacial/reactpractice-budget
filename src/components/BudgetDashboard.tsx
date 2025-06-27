import { useEffect, useState } from "react";

import shared from "../styles/shared.module.css";
import type { Transactions } from "../utils/transactions";
import { filterData } from "../utils/transactions";
import styles from "./BudgetDashboard.module.css";
import { CategoryChart } from "./CategoryChart";
import { MonthSwitcher } from "./MonthSwitcher";
import { TotalSpending } from "./TotalSpending";
import { TransactionList } from "./TransactionList";

export const BudgetDashboard = (props: { transactions: Transactions }) => {
  const today = new Date("2025-01-01");
  const [currentYearAndMonth, setCurrentYearAndMonth] = useState<
    [number, number]
  >([today.getFullYear(), today.getMonth()]);
  const [selectedTransactions, setSelectedTransactions] =
    useState<Transactions>([]);

  useEffect(() => {
    setSelectedTransactions(
      filterData(
        props.transactions,
        currentYearAndMonth[0],
        currentYearAndMonth[1]
      )
    );
  }, [currentYearAndMonth, props.transactions]);

  return (
    <div className="">
      <h3 className={shared.title}>Budget Dashboard</h3>
      <MonthSwitcher
        currentYearAndMonth={currentYearAndMonth}
        setCurrentYearAndMonth={setCurrentYearAndMonth}
      />

      <TotalSpending transactions={selectedTransactions} />

      <div className={styles.double}>
        <CategoryChart transactions={selectedTransactions} />
        <TransactionList transactions={selectedTransactions} />
      </div>
    </div>
  );
};
