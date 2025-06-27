import data from "../transactions.json";
import "./App.css";

import {
  BudgetDashboard,
  type Transactions,
} from "./components/BudgetDashboard";

const transactions = data as Transactions;

function App() {
  return (
    <>
      <BudgetDashboard transactions={transactions} />
    </>
  );
}

export default App;
