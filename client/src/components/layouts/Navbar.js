import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import GuestContext from "../../context/guestContext/guestContext";

const Navbar = () => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext);
  const { clearGuests } = useContext(GuestContext);

  const onLogout = () => {
    logout();
    clearGuests();
    clearErrors();
  };
  const authLinks = (
    <Fragment>
      <li>Hello, {user && user.name}</li>
      <span className="sm-hide">|</span>
      <li>
        <a href="#!" onClick={onLogout}>
          <span className="sm-hide">Logout</span>{" "}
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <span className="sm-hide">|</span>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div className="logo">
        <p>
          Made with <span>❤</span> by React
        </p>
      </div>
      <ul>{isAuthencated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
