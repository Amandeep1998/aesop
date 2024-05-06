import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { CiSearch, CiHeart } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";

import { HiMenuAlt4 } from "react-icons/hi";
import { AesopSvg } from "../../assets/svgJs/AesopSvg";
let defaultMenuOptions = [
  "Skin Care",
  "Body & Hand",
  "Hair",
  "Home",
  "Kits & Travel",
  "Gifts",
  "Read",
  "Stores",
  "Facial Appointments",
];

const Navbar = () => {
  const [menuOptions, setMenuOptions] = useState(defaultMenuOptions);

  const isTablet = useMediaQuery({ maxWidth: 1050 });
  const isMobile = useMediaQuery({ maxWidth: 700 });

  // shop, read, stores

  useEffect(() => {
    if (isTablet) {
      setMenuOptions(["Shop", "Read", "Stores"]);
    } else {
      setMenuOptions(defaultMenuOptions);
    }
  }, [isTablet]);

  if (!isMobile) {
    return (
      <div className={"navbar"}>
        <div className="navbar-menu">
          {menuOptions &&
            menuOptions.map((item) => {
              return <span className="navbar-menu-options">{item}</span>;
            })}

          <span className="navbar-search">
            <CiSearch fontSize={20} />
            {isMobile ? <CiHeart fontSize={20} /> : null}
          </span>
        </div>
        <div className="navbar-right">
          <span className="navbar-menu-options">Log in</span>
          <span className="navbar-menu-options">Cabinet</span>

          <span className="navbar-menu-options">Cart</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar-mobile">
        <div className="navbar-left-mobile">
          <AesopSvg color={"#fffef2"} />
        </div>
        <div className="navbar-right-mobile">
          <CiSearch fill="#fffef2" fontSize={20} />
          <CiHeart fill="#fffef2" fontSize={20} />
          <span className="navbar-menu-options">Cart</span>
          <HiMenuAlt4 />
        </div>
      </div>
    );
  }
};

export default Navbar;
