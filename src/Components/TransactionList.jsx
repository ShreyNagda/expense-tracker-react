import { useContext } from "react";
import { TransactionContext } from "../Context/GlobalContext";
import TransactionItem from "./TransactionItem";
import { SwipeableList } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

function TransactionList() {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3 className="subtitle">History</h3>
      {transactions && transactions.length <= 0 && (
        <div>No Transactions to show</div>
      )}
      {transactions && transactions.length > 0 && (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TransactionList;
