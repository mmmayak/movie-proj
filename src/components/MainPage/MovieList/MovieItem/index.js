import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export function ImageCheck(img) {
  if (img.endsWith("null")) {
    return "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg";
  }
  return img;
}

export default function MovieItem(props) {
  const {
    item: { id, poster_path, title, overview }
  } = props;
  return (
    <div className="col-lg-3 col-md-4 mb-3 card-item">
      <div className="card">
        <img
          src={ImageCheck(`http://image.tmdb.org/t/p/w342${poster_path}`)}
          className="card-img-top card-item__image"
          alt="..."
        />
        <div className="card-body card-item__body">
          <h5 className="card-title card-item__title">{title}</h5>
          <p className="card-text card-item__text">{overview}</p>
          <NavLink to={`/movie/${id}`} className="btn btn-primary">
            More details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
