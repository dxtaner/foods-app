import React from "react";
import "./FavoritesItem.css";

function Favorites({ id, image, title, removeFavorite }) {
  return (
    <div className="favorite-item">
      <div className="item-image">
        <img src={image} alt={title} />
      </div>
      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        <button className="remove-favorite-button" onClick={removeFavorite}>
          Remove Favorite
        </button>
      </div>
    </div>
  );
}

export default Favorites;
