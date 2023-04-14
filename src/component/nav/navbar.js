import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Nav = () => {
  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "nav-header nav-header-bg" : "nav-header"}>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/who-we-are" onClick={closeMenu}>
              Who We Are
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/our-clients" onClick={closeMenu}>
              Our Clients
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/carrers" onClick={closeMenu}>
              Carrers
            </NavLink>
          </li>
          <li className="nav-item contact">
            {" "}
            <NavLink
              className="nav-button-link cta"
              to="/contact"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#f8f8f8" }} />
          ) : (
            <FaBars size={30} style={{ color: "#f8f8f8" }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
