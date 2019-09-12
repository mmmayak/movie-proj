import { observable, action, toJS, computed } from "mobx";
import { persist } from "mobx-persist";
class FavoritesStore {
  @persist("list") @observable favoriteList = [];

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
}

export default new FavoritesStore();
