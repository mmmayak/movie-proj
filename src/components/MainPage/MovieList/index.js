import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList(props) {
  const { movieList } = props;
  return (
    movieList &&
    movieList.map(item => {
      return <MovieItem key={item.id} item={item} />;
    })
  );
}
