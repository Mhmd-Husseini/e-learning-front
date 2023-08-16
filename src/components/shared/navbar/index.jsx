import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = ({ one, two, user}) => {

  const logout = () => localStorage.clear

  return (
    <nav className="navbar">
      <h1>E-Learning</h1>
      <ul className="nav-links">
        <li><NavLink to={"/Student"}>{one}</NavLink></li>
        <li><NavLink to={"/"+ user + "/" + two}>{two}</NavLink></li>
        <li><NavLink to="/" onClick={logout}>Log Out</NavLink></li>
        <li className="one"><Link to={"/" + one}>Classwork</Link></li>
        <li className="two"><Link to={"/" + two}>Enrollments</Link></li>
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
