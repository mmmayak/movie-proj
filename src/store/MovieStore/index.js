import { observable, action, computed, toJS } from "mobx";
import axios from "axios";
class MobxStore {
  @observable movieList = null;
  @observable pages = 0;
  @observable page = 1;
  @observable movie = null;

  @action
  getMovieList = async () => {
    try {
      const res = await axios.get(`/movie/now_playing?page=${this.page}`);
      this.movieList = res.data.results;
      this.pages = res.data.total_pages;
      this.page = res.data.page;
    } catch (err) {
      throw err;
    }
  };

  @action
  activePageHandler = async page => {
    this.page = page + 1;
    this.getMovieList();
  };

  @action
  getSingleMovie = async id => {
    try {
      const res = await axios.get(`/movie/${id}`);
      this.movie = res.data;
    } catch (err) {
      throw err;
    }
  };

  @computed get SingleMovie() {
    return toJS(this.movie);
  }

  @computed get MovieList() {
    return toJS(this.movieList);
  }
  @computed get PageAmount() {
    return toJS(this.pages);
  }
}

export default new MobxStore();
