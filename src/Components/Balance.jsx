import { useContext } from "react";
import { TransactionContext } from "../Context/GlobalContext";

function Balance() {
  function moneyFormatter(num) {
    let p = num.toFixed(2).split(".");
    return (
      "₹ " +
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  }
  const { transactions, income, expense } = useContext(TransactionContext);
  const sign = income >= expense ? "" : "-";

  return (
    <div className="balance-container">
      <h4>Balance:</h4>
      <h2>
        {sign} ₹ {Math.abs(income - expense)}
      </h2>
    </div>
  );
}
export default Balance;
