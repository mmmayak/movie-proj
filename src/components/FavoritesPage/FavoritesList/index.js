import React from "react";
import MovieCard from "../../../utils/MovieCard";

export default function FavoiritesList({ favoritesList }) {
  return favoritesList.map(item => <MovieCard key={item.id} item={item} />);
}
