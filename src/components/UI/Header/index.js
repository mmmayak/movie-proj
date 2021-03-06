import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./index.scss";
import { inject, observer } from "mobx-react";

@inject("FavoritesStore")
@observer
class Header extends Component {
  render() {
    const { FavoritesList } = this.props.FavoritesStore;
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
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites">
                Favorites
                <span className="badge badge-dark">{FavoritesList.length}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/sign-up">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
