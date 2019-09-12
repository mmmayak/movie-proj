import React, { Component } from "react";
import {withRouter} from 'react-router';
 class CheckOnFavorites extends Component {
  state = {
    inStorage: false
  };

  componentDidMount(){
    this.checkInStorage();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.favoriteList.length !== this.props.favoriteList.length){
      this.checkInStorage();
    }
  }
  
  checkInStorage = () => {
    const findInStorage = this.props.favoriteList.find(
      item => item.id === +this.props.match.params.id
    );
    if (findInStorage) {
      this.setState({
        inStorage: true
      });
    } else {
      this.setState({
        inStorage: false
      });
    }
  };

  addToFavorites = () => {
    this.props.favoritesStore.setFavorite(this.props.singleMovie);
  };

  removeFromFavorites = () => {
    this.props.favoritesStore.removeFromFavorite(this.props.singleMovie.id)
  }

  render() {
    const { inStorage } = this.state;
    let renderButton;
    if (inStorage) {
      renderButton = (
        <button className="btn btn-primary" onClick={this.removeFromFavorites}>
          Remove from Favorites
        </button>
      );
    } else {
      renderButton = (
        <button className="btn btn-success" onClick={this.addToFavorites}>
          Add to Favorites
        </button>
      );
    }
    return <div>{renderButton}</div>;
  }
}

export default withRouter(CheckOnFavorites);