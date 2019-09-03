import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MovieList from "./MovieList";
import ReactPaginate from "react-paginate";
import "./index.scss";
import CheckRenderStatus from "../../helpers/CheckRenderStatus";

@inject("MoviesStore")
@observer
class MainPage extends Component {
  componentDidMount() {
    this.props.MoviesStore.getMovieList();
  }

  pageChange = prop => {
    this.props.MoviesStore.activePageHandler(prop.selected);
  };
  render() {
    const { MoviesStore } = this.props;
    return (
      <div className="container py-5">
        <div className="row">
          <CheckRenderStatus
            loading={MoviesStore.loading}
            items={MoviesStore.MovieList}
          >
            <MovieList movieList={MoviesStore.MovieList} />
          </CheckRenderStatus>
          <ReactPaginate
            pageCount={MoviesStore.PageAmount}
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
            initialPage={MoviesStore.page - 1}
            disableInitialCallback={true}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
