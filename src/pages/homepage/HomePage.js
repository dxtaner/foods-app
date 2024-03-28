import React, { useEffect, useState } from "react";
import Search from "../../components/search/Search";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import "./HomePage.css";
import alertify from "alertifyjs";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(favorites);
    };
    getFavorites();
  }, []);

  const handleSubmit = async (e, query) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=8e75c6f353244a1fa74788b5dac73b87&query=${query}`
      );

      const result = await response.json();
      setData(result.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleAddFavorite = (item) => {
    if (favorites.some((favorite) => favorite.id === item.id)) {
      alertify.warning("This item is already in your favorites");
    } else {
      const newFavorites = [...favorites, item];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      alertify.success("Added to favorites");
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="recipe-title">Recipe Foods</h1>
      <Search handleSubmit={handleSubmit} />
      <div className="items">
        {data.length > 0 ? (
          data.map((item) => (
            <RecipeItem
              key={item.id}
              {...item}
              addFavorite={() => handleAddFavorite(item)}
            />
          ))
        ) : (
          <p className="no-result">No result found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
