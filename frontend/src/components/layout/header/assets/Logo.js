import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div style={{width:'20%'}} className="nav-col">
      <NavLink className="logo" to={"/"}>
        <img src="/Logo.png" alt="logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
