import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFN,
    isValid: fNIsValid,
    hasError: fNInputHasError,
    valueChangeHandler: fNChangeHandler,
    inputBlurHandler: fNBlurHandler,
    reset: resetFNInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLN,
    isValid: lNIsValid,
    hasError: lNInputHasError,
    valueChangeHandler: lNChangeHandler,
    inputBlurHandler: lNBlurHandler,
    reset: resetLNInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (fNIsValid && lNIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!fNIsValid || !lNIsValid || !emailIsValid) return;

    console.log(`First Name: ${enteredFN}`);
    console.log(`Last Name: ${enteredLN}`);
    console.log(`Email: ${enteredEmail}`);

    resetFNInput();
    resetLNInput();
    resetEmailInput();
  };

  const fNClasses = fNInputHasError ? "form-control invalid" : "form-control";
  const lNClasses = lNInputHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFN}
            onChange={fNChangeHandler}
            onBlur={fNBlurHandler}
          />
          {fNInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={lNClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={enteredLN}
            onChange={lNChangeHandler}
            onBlur={lNBlurHandler}
          />
          {lNInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must includes @ sign.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
