import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ one, two}) => {
  return (
    <nav className="navbar">
      <h1>E-Learning</h1>
      <ul className="nav-links">
        <li><Link to={"/" + one}>{one}</Link></li>
        <li><Link to={"/" + two}>{two}</Link></li>
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
