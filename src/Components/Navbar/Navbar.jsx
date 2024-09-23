import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-Container">
      <div className="navbar-logo-name">
        <img src={logo} alt="logo" />
        <p>Shopping</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kid"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kids
          </NavLink>
        </li>
      </ul>
      <div className="navbar-login">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/card" style={{ textDecoration: "none", color: "white" }}>
          <div className="cart-icon-wrapper">
            <PiShoppingCartLight className="m-25" />
            <span className="badge">5</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
