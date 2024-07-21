import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import contact from "../assets/contact.jpeg";
import { Link } from "react-scroll";
import menu from "../assets/menu.png";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="name">Ruban christan Pais</h1>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuItemList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="skills"
          className="desktopMenuItemList"
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="portfolio"
          className="desktopMenuItemList"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="contact"
          className="desktopMenuItemList"
        >
          Contact
        </Link>
      </div>
      <button
        className="desktopMenuButton"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behaviour: "smooth" });
        }}
      >
        <img src={contact} alt="Contact" className="desktopMenuImg" />
        Contact me
      </button>
      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="skills"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          to="Projects"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          to="contact"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
