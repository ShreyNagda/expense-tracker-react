import { createContext, useEffect, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const storedValue = localStorage.getItem("transactions");
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const amounts = transactions.map((transaction) => Number(transaction.amount));
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  return (
    <TransactionContext.Provider
      value={{ amounts, income, expense, transactions, setTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
