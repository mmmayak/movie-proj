import { observable, action, toJS, computed } from "mobx";
import { persist } from "mobx-persist";
class FavoritesStore {
  @persist("list") @observable favoriteList = [];
  @observable favorites = [];

  @action
  setFavorite = favorite => {
    this.favoriteList = [...this.favoriteList, favorite];
  };

  @action
  removeFromFavorite = id => {
    this.favoriteList = this.favoriteList.filter(item => item.id !== id);
  };

  @computed get FavoritesList() {
    return toJS(this.favoriteList);
  }
  @computed get Favorites(){
    return toJS(this.favorites)
  }
}

export default new FavoritesStore();
