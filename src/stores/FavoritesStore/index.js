import { observable, action, toJS, computed } from "mobx";
import { persist, create } from "mobx-persist";

class FavoritesStore {
  @persist('list') @observable favoriteList = [];
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
    const getFromStorage = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = [...getFromStorage, favorite];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    this.favoriteList = newFavorites;
    this.loading = false;
  };

  @computed get FavoritesList() {
    return toJS(this.favoriteList);
  }
}

const hydrate = create({
  storage: localStorage,
  jsonify: false
})

export default new FavoritesStore();
