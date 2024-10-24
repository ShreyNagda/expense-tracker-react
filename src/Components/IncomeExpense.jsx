import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../Context/GlobalContext";

function IncomeExpense() {
  const { transactions, income, expense } = useContext(TransactionContext);

  return (
    <div className="inc-exp-container">
      <div className="inner-container">
        <h5>INCOME</h5>
        <h4 className="income">₹{income}</h4>
      </div>
      <div className="inner-container">
        <h5>EXPENSE</h5>
        <h4 className="expense">₹{expense}</h4>
      </div>
    </div>
  );
}

export default IncomeExpense;
