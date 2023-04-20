import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <form className="form-container">
      <h3 className="form-title">Please Login</h3>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-login" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
