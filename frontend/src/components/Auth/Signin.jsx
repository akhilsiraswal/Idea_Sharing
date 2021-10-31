import React, { useState } from "react";
import "./css/Auth.css";
import { signin } from "../../API";

function Signin() {
  const [Values, setValues] = useState({
    email: "",
    error: false,
    password: "",
  });

  const { email, password } = Values;

  const onsubmit = (event) => {
    event.preventDefault();
    signin({ email, password })
      .then((response) => console.log(response))
      .catch();
  };

  const onChangeHandler = (name) => (event) => {
    setValues({ ...Values, error: false, [name]: event.target.value });
  };

  const signinForm = () => {
    return (
      <div className="auth">
        <div className="image-section">
          <p className="heading">Welcome</p>
          <p className="heading">Back !</p>
        </div>
        <div className="form-section">
          <h2 className="head">Login</h2>
          <p className="sub-head">
            Welcome back! Please login to your account.{" "}
          </p>
          <form action="">
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
            <button type="submit" onClick={onsubmit}>
              Login
            </button>
          </form>
          <p className="sub-head">
            New User? <a href="/auth/signup">Sign up</a>
          </p>
        </div>
      </div>
    );
  };

  return <div>{signinForm()}</div>;
}

export default Signin;
