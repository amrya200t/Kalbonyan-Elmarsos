import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return props.data.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
    />
  ));
};

export default Expenses;
