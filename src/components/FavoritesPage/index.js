import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import CheckRenderStatus from "../../utils/checkRenderStatus";
import FavoritesList from "./FavoritesList";

@inject("FavoritesStore")
@observer
class FavoritesPage extends Component {
  render() {
    const { FavoritesStore } = this.props;
    return (
      <div className="container py-5">
        <div className="row">
          <CheckRenderStatus
            loading={FavoritesStore.loading}
            items={FavoritesStore.FavoritesList}
          >
            <FavoritesList favoritesList={FavoritesStore.FavoritesList} />
          </CheckRenderStatus>
        </div>
      </div>
    );
  }
}
export default FavoritesPage;
