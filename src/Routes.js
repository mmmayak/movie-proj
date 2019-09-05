import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/UI/Header";
import SingleMoviePage from "./components/SingleMoviePage";
import FavoritesPage from "./components/FavoritesPage";
import { inject, observer } from "mobx-react";

@inject("FavoritesStore")
@observer
class Routes extends Component {
  componentDidMount() {
    this.props.FavoritesStore.getFavoriteList();
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/movie/:id" exact component={SingleMoviePage} />
          <Route path="/favorites" exact component={FavoritesPage} />
        </Switch>
      </>
    );
  }
}
export default Routes;
