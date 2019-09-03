import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ImageCheck } from "../MainPage/MovieList/MovieItem";
import "./index.scss";

@inject("SingleMovieStore")
@observer
class SingleMoviePage extends Component {
  componentDidMount() {
    this.props.SingleMovieStore.getMovie(this.props.match.params.id);
  }

  render() {
    const { SingleMovieStore } = this.props;
    let renderMovieItem;
    if (SingleMovieStore.SingleMovie) {
      renderMovieItem = (
        <>
          <div className="single-movie bannerCont">
            {
              <img
                src={ImageCheck(
                  `http://image.tmdb.org/t/p/w342${SingleMovieStore.SingleMovie &&
                    SingleMovieStore.SingleMovie.backdrop_path}`
                )}
                alt=""
              />
            }
            <h3 className="text-white">{SingleMovieStore.SingleMovie.title}</h3>
          </div>
          <div className="container">
            <div className="row">asdasd</div>
          </div>
        </>
      );
    }
    return <>{renderMovieItem}</>;
  }
}

export default SingleMoviePage;
