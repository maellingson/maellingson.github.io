import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Marissa Ellingson's Portfolio
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/portfolio"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/resume"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
