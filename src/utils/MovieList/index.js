import React from "react";
import MovieCard from "../MovieCard";

export default function MovieList(props) {
  const { list } = props;
  return list.map(item => <MovieCard key={item.id} item={item} />);
}
