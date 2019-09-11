import { observable, action, computed, toJS } from "mobx";
import axios from "axios";

class MoviesStore {
  @observable movieList = null;
  @observable loading = false;
  @observable pages = 0;
  @observable page = 1;

  @action
  getMovieList = async () => {
    this.loading = true;
    try {
      const res = await axios.get(`/movie/now_playing?page=${this.page}`);
      this.movieList = res.data.results;
      this.pages = res.data.total_pages;
      this.page = res.data.page;
      this.loading = false;
    } catch (err) {
      this.loading = false;
      throw err;
    }
  };

  @action
  fetchMovies = async () => {
    try {
      const res = await axios.get('/movie/now_playing');
      this.movieList = res.data.results;
    }catch(err){

    }
  }

  @action
  activePageHandler = async page => {
    this.page = page + 1;
    this.getMovieList();
  };

  @computed get MovieList() {
    return toJS(this.movieList);
  }
  @computed get PageAmount() {
    return toJS(this.pages);
  }
}

export default new MoviesStore();
