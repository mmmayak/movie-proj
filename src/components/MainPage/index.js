import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MovieList from "./MovieList";
import ReactPaginate from "react-paginate";
import "./index.scss";

@inject("MovieStore")
@observer
class MainPage extends Component {
  componentDidMount() {
    this.props.MovieStore.getMovieList();
  }

  pageChange = prop => {
    this.props.MovieStore.activePageHandler(prop.selected);
  };
  render() {
    const { MovieStore } = this.props;
    return (
      <div className="container py-5">
        <div className="row">
          <MovieList movieList={MovieStore.MovieList} />
          <ReactPaginate
            pageCount={MovieStore.PageAmount}
            previousLabel="previous"
            nextLabel="next"
            pageRangeDisplayed={2}
            pageLinkClassName="page-link"
            pageClassName="page-item"
            containerClassName="pagination"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            marginPagesDisplayed={1}
            previousClassName="page-item"
            nextClassName="page-item"
            activeClassName="active"
            onPageChange={this.pageChange}
            initialPage={MovieStore.page - 1}
            disableInitialCallback={true}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
