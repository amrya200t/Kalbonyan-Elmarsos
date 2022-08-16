import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (titleInput.trim() === "" || amountInput.trim() === "") return;

    props.onAddIngredient({ title: titleInput, amount: amountInput });

    // setTitleInput("");
    // setAmountInput("");
  };

  useEffect(() => {
    console.log(titleInput, amountInput);
    console.log(props.loading);
  }, [titleInput, amountInput, props.loading]);

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitleInput(e.target.value)}
              defaultValue={titleInput}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              defaultValue={amountInput}
              onChange={(e) => setAmountInput(e.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
