import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, logOut } = useContext(UserContext)
  
  const handelLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logout successful', {autoClose:2000})
      })
      .catch(error => {
      console.log(error);
    })
  }

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="manu">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to='/register'>Register</Link>
      </div>
      <p onClick={handelLogout} className="text-white">
        {
          user && <>
            <span>{ user.email}</span> <button className="btn-logout">Log Out</button>
          </>
         }
      </p>
      <ToastContainer autoClose={2000}></ToastContainer>
    </nav>
  );
};

export default Header;
