import "../styles/ExpenseDate.css";

const ExpenseDate = (props) => {
  const date = {
    day: props.date.toLocaleString(navigator.language, { day: "2-digit" }),
    month: props.date.toLocaleString(navigator.language, { month: "long" }),
    year: props.date.getFullYear(),
  };

  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.month}</div>
      <div className="expense-date__year">{date.year}</div>
      <div className="expense-date__day">{date.day}</div>
    </div>
  );
};

export default ExpenseDate;
