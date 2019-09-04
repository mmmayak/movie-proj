import { observable, action, toJS, computed } from "mobx";

class FavoritesStore {
  @observable favoriteList = [];
  @observable loading = false;

  @action
  getFavoriteList = async () => {
    this.loading = true;
    try {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      this.favoriteList = favorites;
      this.loading = false;
    } catch (err) {
      this.loading = false;
      throw err;
    }
  };

  @action
  setFavorite = favorite => {
    const newFavorites = [...this.favoriteList, favorite];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    this.favoriteList = newFavorites;
    this.loading = false;
  };

  @computed get FavoritesList() {
    return toJS(this.favoriteList);
  }
}

export default new FavoritesStore();
