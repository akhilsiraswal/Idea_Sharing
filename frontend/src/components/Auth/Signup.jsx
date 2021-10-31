import React, { useState } from "react";
import { signup } from "../../API";
import "./css/Auth.css";

function Signup() {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    error: "",
    didRedirect: false,
  });

  const { username, email, password } = Values;

  const onChangeHandler = (name) => (event) => {
    setValues({ ...Values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    signup({ username, email, password })
      .then(console.log("signup success"))
      // .catch(console.log("signup failed"));
  };

  const SignupForm = () => {
    return (
      <div className="auth">
        <div className="image-section">
          <p className="heading">Welcome</p>
          <p className="heading">to the Community!</p>
        </div>
        <div className="form-section">
          <h2 className="head">Register</h2>
          <p className="sub-head">
            Welcome! Please enter your details to create an account.
          </p>
          <form action="">
            <div className="field">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="username"
                onChange={onChangeHandler("username")}
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                onChange={onChangeHandler("email")}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={onChangeHandler("password")}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                onChange={onChangeHandler("confirm_password")}
              />
            </div>

            <button type="submit " onClick={onSubmit}>
              Register
            </button>
          </form>
          <p className="sub-head">
            Already have an account? <a href="/auth/signin">Sign in</a>
          </p>
        </div>
      </div>
    );
  };

  return <div>{SignupForm()}</div>;
}

export default Signup;
