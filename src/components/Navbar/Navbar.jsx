import React, { useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [menuOptions, setMenuOptions] = useState([
    "Skin Care",
    "Body & Hand",
    "Hair",
    "Home",
    "Kits & Travel",
    "Gifts",
    "Read",
    "Stores",
    "Facial Appointments",
  ]);

  return (
    <div className="navbar">
      <div className="navbar-menu">
        {menuOptions &&
          menuOptions.map((item) => {
            return <span className="navbar-menu-options">{item}</span>;
          })}

        <span>
          <CiSearch fontSize={20} />
        </span>
      </div>
      <div className="navbar-right">
        <span className="navbar-menu-options">Log in</span>
        <span className="navbar-menu-options">Cabinet</span>
        <span className="navbar-menu-options">Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
