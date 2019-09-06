/* import React from "react";

export function CheckOnFavorites({ inStorage, remove, add }) {
  let renderButton;
  
  if (inStorage) {
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
 */