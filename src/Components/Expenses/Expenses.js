import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020"); //At first value shown in the dropdown box is 2020

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  /*What is done here is in <ExpensesFilter>, a value is passes to the onChangeFilter attribute in the child component ExpenseFilter
which is then passes to the filterChangeHandler which sets the FilteredYear to the selectedYear*/
  /*In the case of selected attribute of <ExpensesFilter>, filteredYear is passes to the childcomponent(i.e at first the default year 
  2020 is passed and after that the year we selected which is passed on through onChangeFilter is taken as the filteredYear*/
  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /* we display only the expense of the chosen year. We check if the selected year has any expenses and if there is nothing
we'll Show NO EXPENSE FOUND( i.e the right side of && is executed if the left side is true).  filteredExpense.length finds the number
of entried in that year*/
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}
export default Expenses;
