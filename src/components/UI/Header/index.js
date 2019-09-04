import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./index.scss";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <NavLink className="navbar-brand navbar__imgCont" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
