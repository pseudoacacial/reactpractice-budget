import data from "../transactions.json";
import "./App.css";

import { BudgetDashboard } from "./components/BudgetDashboard";
import type { Transactions } from "./utils/transactions";

const transactions = data as Transactions;

function App() {
  return (
    <>
      <BudgetDashboard transactions={transactions} />
    </>
  );
}

export default App;
