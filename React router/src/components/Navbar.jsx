import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "red" : "")}
          to="/home"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "red" : "")}
          to="/about"
        >
          <li>About</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "red" : "")}
          to="/login"
        >
          <li>Login</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
