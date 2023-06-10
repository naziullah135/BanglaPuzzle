import React from "react";
import logo from "../assets/short-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="flex-1 rounded-full">
        <Link to="/"><img className="w-48" src={logo} alt="logo" /></Link>
      </div>
      <div className="flex-none">
        <ul className="menu text-base font-bold menu-horizontal px-1">
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
