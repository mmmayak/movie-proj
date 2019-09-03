import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList(props) {
  const { movieList } = props;
  return movieList.map(item => <MovieItem key={item.id} item={item} />);
}
