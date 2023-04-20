import React, { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const { loginUser } = useContext(UserContext);

  const handelLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Login successful", { theme: "dark", autoClose: 3000 });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handelLogin}>
        <h3 className="form-title">Please Login</h3>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? 'text' : 'password'} name="password" id="" required />
          <p onClick={() => setShow(!show)} className="password-show">
            {show ? <span>Show password</span> : <span>Hide password</span>}
          </p>
        </div>
        <input className="btn-login" type="submit" value="Login" />
      </form>
      <p className="link">
        New Ema Jhon please <Link to="/register">Register</Link>
      </p>
      <p>{error}</p>
      <ToastContainer theme="dark" autoClose={3000}></ToastContainer>
    </div>
  );
};

export default Login;
