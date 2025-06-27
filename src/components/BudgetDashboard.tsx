import { useState } from "react";

export interface BudgetDashboardProps {
  transactions: {
    date: string;
    amount: number;
    payee: string;
    category: string;
  }[];
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const BudgetDashboard = (props: BudgetDashboardProps) => {
  const today = new Date();
  const [currentYearAndMonth, setCurrentYearAndMonth] = useState<
    [number, number]
  >([today.getFullYear(), today.getMonth()]);

  const incrementMonth = () => {
    if (currentYearAndMonth[1] == 11) {
      setCurrentYearAndMonth([currentYearAndMonth[0] + 1, 0]);
    } else {
      setCurrentYearAndMonth([
        currentYearAndMonth[0],
        currentYearAndMonth[1] + 1,
      ]);
    }
  };

  const decrementMonth = () => {
    if (currentYearAndMonth[1] == 0) {
      setCurrentYearAndMonth([currentYearAndMonth[0] - 1, 11]);
    } else {
      setCurrentYearAndMonth([
        currentYearAndMonth[0],
        currentYearAndMonth[1] - 1,
      ]);
    }
  };
  return (
    <div className="">
      <h3>Budget Dashboard</h3>
      <button onClick={decrementMonth}>{"<<"}</button>
      {monthNames[currentYearAndMonth[1]]} {currentYearAndMonth[0]}
      <button onClick={incrementMonth}>{">>"}</button>
    </div>
  );
};
