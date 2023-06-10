import React from "react";
import logo from "../assets/short-logo.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="navbar shadow-md px-20">
      <div className="flex-1 rounded-full">
        <Link to="/"><img className="w-48" src={logo} alt="logo" /></Link>
      </div>
      <div className="flex-none">
        <ul className="flex justify-between text-base font-bold px-4">
          <li className={`px-4 hover:text-red-500 ${
              location.pathname === '/' ? 'text-red-500' : 'text-black'
            }`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`hover:text-red-500 ${
              location.pathname === '/about' ? 'text-red-500' : 'text-black'
            }`}>
            <Link to="/about">About Us</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
