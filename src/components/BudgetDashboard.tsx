import { useEffect, useState } from "react";

import type { Transactions } from "../utils/transactions";
import { filterData } from "../utils/transactions";
import { MonthSwitcher } from "./MonthSwitcher";
import { TotalSpending } from "./TotalSpending";

export const BudgetDashboard = (props: { transactions: Transactions }) => {
  const today = new Date("2025-02-01");
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
      <h3>Budget Dashboard</h3>
      <MonthSwitcher
        currentYearAndMonth={currentYearAndMonth}
        setCurrentYearAndMonth={setCurrentYearAndMonth}
      />

      <TotalSpending transactions={selectedTransactions} />

      {selectedTransactions.map((transaction) => (
        <li>{transaction.amount}</li>
      ))}
    </div>
  );
};
