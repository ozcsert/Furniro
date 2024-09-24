import React, { useState } from "react";
import "./style.scss";
import navbarlogo from "../../assets/images/navbarlogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <section className="navbar-section">
        <div className="n-div">
          <div className="n-logo">
            <img className="logo-img" src={navbarlogo} alt="logo" />
          </div>

          <div className={`n-hamburger-menu ${isMenuOpen ? "active" : ""}`}>
            <p className="n-content">Home</p>
            <p className="n-content">Shop</p>
            <p className="n-content">About</p>
            <p className="n-content">Contact</p>
          </div>

          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="action-component">
          <p>action component</p>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
