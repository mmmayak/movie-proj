import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/UI/Header";
import SingleMoviePage from "./components/SingleMoviePage";

export default class Routes extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/movie/:id" exact component={SingleMoviePage} />
        </Switch>
      </>
    );
  }
}
