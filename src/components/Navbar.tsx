import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="topnav">
      <NavLink exact to="/home">
        Home
      </NavLink>
      <NavLink exact to="/about">
        About-US
      </NavLink>
      <NavLink exact to="/contact">
        Contact-US
      </NavLink>
      <NavLink exact to="/">
        Logout
      </NavLink>
    </div>
  );
}

export default Navbar;
