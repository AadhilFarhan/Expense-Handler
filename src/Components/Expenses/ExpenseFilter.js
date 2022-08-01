import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  /*When a change happens to the dropdown list, i.e we select a year, onChange is activated whcih points to dropdownChangeHandler where 
the event is caught and the value of the event(i.e for eg 2021) is passed to the parent node onChanhgeFilter attribute of <ExpenseFilter>*/
  /* value attribute of <select> gets the value from the parent component(i.e Expenses). This value is then shown in the drop down list*/
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
