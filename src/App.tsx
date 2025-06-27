import data from "../transactions.json";
import "./App.css";

import { BudgetDashboard } from "./components/BudgetDashboard";

function App() {
  return (
    <>
      <BudgetDashboard transactions={data} />
    </>
  );
}

export default App;
