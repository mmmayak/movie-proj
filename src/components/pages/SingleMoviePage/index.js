import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import imageCheck from "../../../utils/imageCheck";
import moment from "moment";
import "./index.scss";
import checkMovieStatus from "../../../utils/checkMovieStatus";
import CheckOnFavorites from "../../../utils/checkOnFavorites";
import checkRatingAverage from "../../../utils/checkRatingAverage";

@inject("SingleMovieStore", "FavoritesStore")
@observer
class SingleMoviePage extends Component {
  componentDidMount() {
    this.props.SingleMovieStore.getMovie(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.SingleMovieStore.resetMovie();
  }

  render() {
    const { SingleMovieStore } = this.props;
    let renderMovieItem;
    if (SingleMovieStore.SingleMovie) {
      const { SingleMovie } = SingleMovieStore;
      renderMovieItem = (
        <>
          <div
            className="single-movie banner"
            style={{
              background: `url(${imageCheck(
                `http://image.tmdb.org/t/p/original${SingleMovie.backdrop_path}`
              )}) no-repeat center center`,
              backgroundSize: "cover"
            }}
          >
            <div className="container banner__titleCont">
              <h1 className="text-white banner__title text-center">
                {SingleMovie.title}
              </h1>
              <span className="text-white banner__subtitle">
                {SingleMovie.tagline}
              </span>
            </div>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={imageCheck(
                    `http://image.tmdb.org/t/p/w342${SingleMovie.poster_path}`
                  )}
                  alt="poster"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-md-8">
                <div className="mt-2 d-flex">
                  <h5 className="mr-2">Release:</h5>
                  <p>{moment(SingleMovie.release_date).format("LL")}</p>
                </div>
                <div className="mt-2 d-flex">
                  <h5 className="mr-2">Status:</h5>
                  {checkMovieStatus(SingleMovie.status)}
                </div>
                <div className="mt-2 d-flex">
                  <h5 className="mr-2">Rating:</h5>
                  {checkRatingAverage(SingleMovie.vote_average)}
                </div>
                <div className="mt-2 d-flex">
                  <h5 className="mr-2">Original language:</h5>
                  <p>{SingleMovie.original_language}</p>
                </div>
                <p>{SingleMovie.overview}</p>
                <CheckOnFavorites
                  favoriteList={this.props.FavoritesStore.FavoritesList}
                  favoritesStore={this.props.FavoritesStore}
                  singleMovie={SingleMovie}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
    return <>{renderMovieItem}</>;
  }
}

export default SingleMoviePage;
