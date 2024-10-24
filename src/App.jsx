import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import AddNewTransaction from "./Components/AddNewTransaction";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
