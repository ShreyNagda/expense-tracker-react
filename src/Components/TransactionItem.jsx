import { useContext } from "react";
import { toast } from "react-toastify";
import { TransactionContext } from "../Context/GlobalContext";

function TransactionItem({ transaction }) {
  const sign = transaction.amount > 0 ? "" : "-";
  const { transactions, setTransactions } = useContext(TransactionContext);

  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    toast.success("Transaction deleted successfully!");
  }

  return (
    <li
      key={transaction.id}
      className={`transaction-item ${transaction.amount > 0 ? "green" : "red"}`}
    >
      <div>{transaction.text}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <div>
          {sign}₹{Math.abs(transaction.amount)}
        </div>
        <button
          type="button"
          onClick={() => {
            if (confirm("Are you sure?")) {
              deleteTransaction(transaction.id);
            }
          }}
        >
          X
        </button>
      </div>
    </li>
  );
}
export default TransactionItem;
