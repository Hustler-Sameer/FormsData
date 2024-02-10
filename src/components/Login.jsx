import { useState } from "react";

export default function Login() {
  // const [enteredEmail , setEnteredEmail]=useState();
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  // validation of every keyStroke

const emailIsInvalid = enteredValues.email !== "" && !enteredValues.email.includes('@');
// this makes false if @ is not present in email entered by user

  function handleInputChange(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  }
  console.log(enteredValues);
  // this is a generic submit handler which sets data according to identifier and also does not lose the old data

  function submitHandler() {
    event.preventDefault();
    console.log("submitted clicked");
  }
  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
