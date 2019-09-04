import axios from "axios";
import { observable, action, computed, toJS } from "mobx";

class SingleMovieStore {
  @observable movie = null;

  @action
  getMovie = async id => {
    try {
      const res = await axios.get(`/movie/${id}`);
      this.movie = res.data;
    } catch (err) {
      throw err;
    }
  };

  @action
  resetMovie = () => {
    this.movie = null;
  };

  @computed get SingleMovie() {
    return toJS(this.movie);
  }
}

export default new SingleMovieStore();
