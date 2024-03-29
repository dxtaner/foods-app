import React from "react";
import "./RecipeItem.css";

const RecipeItem = ({ id, image, title, addFavorite }) => {
  return (
    <div className="recipe-item" key={id}>
      <div className="recipe-image">
        <img src={image} alt={title} />
      </div>
      <div className="recipe-details">
        <h3 className="recipe-title">{title}</h3>
        <button className="add-favorite-button" onClick={addFavorite}>
          <i className="fas fa-heart"></i> Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default RecipeItem;
