import MoviesStore from "./MoviesStore";
import SingleMovieStore from "./SingleMovieStore";
import FavoritesStore from "./FavoritesStore";
import { create } from "mobx-persist";

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

hydrate("favorites", FavoritesStore);

export const stores = {
  MoviesStore,
  SingleMovieStore,
  FavoritesStore
};
