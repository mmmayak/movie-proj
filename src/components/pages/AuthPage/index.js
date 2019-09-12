import React, { Component } from "react";
import "./index.scss";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

export default class AuthPage extends Component {
  render() {
    return <NavLink to="/auth/sign-up" className='nav-link'>Sign Up</NavLink>;
  }
}
