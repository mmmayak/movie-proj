import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import CheckRenderStatus from "../../../utils/checkRenderStatus";
import MovieList from "../../../utils/MovieList"

@inject("FavoritesStore")
@observer
class FavoritesPage extends Component {
  render() {
    const {
      FavoritesStore: { loading, FavoritesList }
    } = this.props;
    return (
      <div className="container py-5">
        <div className="row">
          <CheckRenderStatus loading={loading} items={FavoritesList}>
            <MovieList list={FavoritesList} />
          </CheckRenderStatus>
        </div>
      </div>
    );
  }
}
export default FavoritesPage;
