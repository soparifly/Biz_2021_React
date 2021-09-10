import React from "react";
import { NavLink } from "react-router-dom";
function MainNav() {
  return (
    <div className="main_navBox">
      <ul className="main_nav">
        <li>
          <NavLink exact to="/" activeClassName="active_nav">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Write" activeClassName="active_nav">
            WRITE
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login" activeClassName="active_nav">
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/join" activeClassName="active_nav">
            JOIN
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
