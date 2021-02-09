import "./App.css";
import { Header } from "./Component/Header";
import { Balance } from "./Component/Balance";
import { IncomeExpenses } from "./Component/IncomeExpenses";
import { TransactionList } from "./Component/TransactionList";
import { AddNewTransaction } from "./Component/AddNewTransaction";
import { GlobalProvider } from "./context/GlobaleState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
