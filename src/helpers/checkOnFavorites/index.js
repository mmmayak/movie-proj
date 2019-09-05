import React from "react";

export function CheckOnFavorites({ id, remove, add }) {
  let renderButton;
  const storage = JSON.parse(localStorage.getItem("favorites")) || [];
  const findInLocal = storage.find(item => item.id == id);
  if (findInLocal) {
    renderButton = (
      <button className="btn btn-primary" onClick={remove}>
        Remove from Favorites
      </button>
    );
  } else {
    renderButton = (
      <button className="btn btn-success" onClick={add}>
        Add to Favorites
      </button>
    );
  }

  return <div>{renderButton}</div>;
}
