import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ImageCheck } from "../MainPage/MovieList/MovieItem";
import "./index.scss";

@inject("MovieStore")
@observer
class SingleMoviePage extends Component {
  componentDidMount() {
    this.props.MovieStore.getSingleMovie(this.props.match.params.id);
  }

  render() {
    const { MovieStore } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="single-movie bannerCont">
          {
            <img
              src={ImageCheck(
                `http://image.tmdb.org/t/p/w342${MovieStore.SingleMovie &&
                  MovieStore.SingleMovie.backdrop_path}`
              )}
              alt=""
            />
          }
          <h3 className='text-white'>{MovieStore.SingleMovie.title}</h3>
        </div>
        <div className="container">
          <div className="row">asdasd</div>
        </div>
      </>
    );
  }
}

export default SingleMoviePage;
