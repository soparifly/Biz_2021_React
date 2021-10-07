import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = ({ children, NavList }) => {
  const nav_items = NavList.map((nav) => {
    return (
      <li className="nav_item" key={nav.id}>
        <NavLink to={nav.link} exact={nav.title === "Home"}>
          {nav.title}
        </NavLink>
      </li>
    );
  });
  return (
    <Router>
      <ul className="main_navBox">{nav_items}</ul>
      {children}
    </Router>
  );
};

export default Navbar;
