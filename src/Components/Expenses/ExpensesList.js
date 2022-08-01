import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  /*here we check if the year of the expense is equal to the year selected from the drop down list and returns true or false. This is
  done using .filter to the DEMO_EXPENSE which is taken using props.item. */

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> FOUND NO EXPENSES!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))};
    </ul>
  );
};

export default ExpensesList;
