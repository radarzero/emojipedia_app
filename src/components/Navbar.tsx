import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location.state);
  

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
      {location.state} | Logout
      </NavLink>
    </div>
  );
}

export default Navbar;
