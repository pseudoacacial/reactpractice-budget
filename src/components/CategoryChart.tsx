import Chart from "react-google-charts";
import shared from "../styles/shared.module.css";
import type { Transactions } from "../utils/transactions";
import styles from "./CategoryChart.module.css";

const sumByCategory = <T extends { category: string; amount: number }>(
  data: T[]
): [string, number][] => {
  const result: Record<string, number> = {};
  for (const item of data) {
    result[item.category] = result[item.category]
      ? result[item.category] + item.amount
      : item.amount;
  }
  return Object.entries(result);
};

export const CategoryChart = ({
  transactions,
}: {
  transactions: Transactions;
}) => {
  console.log(sumByCategory(transactions));
  return (
    <div className={`${styles.categoryChart} ${shared.block}`}>
      <h3 className={shared.title}>EXPENSES BY CATEGORY</h3>
      <Chart
        // Try different chart types by changing this property with one of: LineChart, BarChart, AreaChart...
        chartType="PieChart"
        data={[["category", "amount"], ...sumByCategory(transactions)]}
        options={{}}
        legendToggle
      />
    </div>
  );
};
