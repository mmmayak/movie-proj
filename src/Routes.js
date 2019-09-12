import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Header from "./components/UI/Header";
import SingleMoviePage from "./components/pages/SingleMoviePage";
import AuthPage from "./components/pages/AuthPage";
import FavoritesPage from "./components/pages/FavoritesPage";

class Routes extends Component {
  render() {
    return (
      <>
        <Header/>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/movie/:id" exact component={SingleMoviePage} />
          <Route path="/favorites" exact component={FavoritesPage} />
          <Route path="/auth" exact component={AuthPage}/>
        </Switch>
      </>
    );
  }
}
export default Routes;
