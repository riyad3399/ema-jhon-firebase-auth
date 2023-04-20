import React, { useContext, useState } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser } = useContext(UserContext);

  const handelRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    form.reset();
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("Your password must be 6 charcter");
      return;
    } else if (password !== confirm) {
      setError("Your Password not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
          console.log(loggedUser);
          toast.success('Register successful', {theme:'dark', autoClose:3000})
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handelRegister}>
        <h2 className="form-title">Please Register</h2>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input className="btn-login" type="submit" value="Register" />
          </form>
          <p className="link">You have an account? please <Link to='/login'>Login</Link></p>
          <p>{error}</p>
          <ToastContainer theme="dark" autoClose={3000}></ToastContainer>
    </div>
  );
};

export default Register;
