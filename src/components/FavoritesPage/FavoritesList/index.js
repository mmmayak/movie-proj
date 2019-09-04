import React from "react";
import MovieItem from "../../UI/MovieItem";

export default function FavoiritesList({ favoritesList }) {
  return favoritesList.map(item => <MovieItem key={item.id} item={item} />);
}
