import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = ({ one, two, user}) => {
  return (
    <nav className="navbar">
      <h1>E-Learning</h1>
      <ul className="nav-links">
        <li><NavLink to={"/"+ user + "/" + one}>{one}</NavLink></li>
        <li><NavLink to={"/"+ user + "/" + two}>{two}</NavLink></li>
        <li><NavLink to="/">Log Out</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
