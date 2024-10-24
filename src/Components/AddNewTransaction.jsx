import { useContext, useState } from "react";
import { TransactionContext } from "../Context/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function AddNewTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const { transactions, setTransactions } = useContext(TransactionContext);

  function handleSubmit(e) {
    setError(null);
    e.preventDefault();
    if (text === null || text === "") {
      setError("Please enter a transaction description");
    } else if (amount === null || amount === 0) {
      setError("Please enter a valid amount");
    } else {
      setTransactions((prev) => [...prev, { id: uuidv4(), text, amount }]);
      setText("");
      setAmount(0);
      toast.success("Transaction added successfully!");
    }
  }

  return (
    <div className="add-new-transaction">
      <h3 className="subtitle">Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="input-container">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              id="text"
              placeholder="Enter text..."
              value={text}
              onChange={(ev) => setText(ev.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount ('-' for expense)</label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount..."
              value={amount}
              onChange={(ev) => setAmount(ev.target.value)}
            />
          </div>
        </div>
        <input type="submit" value={"Add New Transaction"} className="btn" />
      </form>
    </div>
  );
}
export default AddNewTransaction;
