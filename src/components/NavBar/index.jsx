import React, { useState } from "react"
import "./style.scss"
import { Links } from "../Links/index.jsx"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const links = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/contact", name: "Contact" },
    { path: "/about", name: "About" },
  ]

  return (
    <div>
      <section className="navbar-section">
        <div className="n-logo"></div>

        {/* <div className={`n-hamburger-menu ${isMenuOpen ? "active" : ""}`}> */}
        {/* <p className="n-content">Home</p>
          <p className="n-content">Shop</p>
          <p className="n-content">About</p>
          <p className="n-content">Contact</p> */}
        <Links
          links={links}
          className={`n-hamburger-menu ${isMenuOpen ? "active" : ""}`}
        />
        {/* </div> */}

        <div
          className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        <div className="action-component">
          <p>action component</p>
        </div>
      </section>
    </div>
  )
}
export default NavBar
