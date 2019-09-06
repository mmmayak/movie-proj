import React from "react";
import MovieCard from "../../../utils/MovieCard";

export default function MovieList(props) {
  const { movieList } = props;
  return movieList.map(item => <MovieCard key={item.id} item={item} />);
}
