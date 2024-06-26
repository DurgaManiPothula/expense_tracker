import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list expense">
        {expenseTransactions.map((expenseTransaction) => (
          <ExpenseTransaction
            key={expenseTransaction._id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
