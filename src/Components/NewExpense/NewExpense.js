import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //Data entered by user
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };


  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>ADD NEW EXPENSE</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
