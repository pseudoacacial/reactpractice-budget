import { useEffect, useState } from "react";

import { MonthSwitcher } from "./MonthSwitcher";

export type Transactions = {
  date: `${number}-${number}-${number}`;
  amount: number;
  payee: string;
  category: string;
}[];

const filterData = (
  data: Transactions,
  year: number,
  month: number
): Transactions => {
  return data.filter((transaction) => {
    const [rowYear, rowMonth] = transaction.date
      .split("-")
      .map((string) => parseInt(string));
    return rowYear === year && rowMonth === month;
  });
};

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

      {selectedTransactions.map((transaction) => (
        <li>{transaction.amount}</li>
      ))}
    </div>
  );
};
