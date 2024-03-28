import React, { useEffect, useState } from "react";
import Favorites from "../../components/favorites-item/FavoritesItem";
import "./FavoritesPage.css";
import alertify from "alertifyjs";

const HomePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteQuery, setFavoriteQuery] = useState("");

  useEffect(() => {
    const getFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(favorites);
    };
    getFavorites();
  }, []);

  const handleRemoveFavorite = (item) => {
    alertify.confirm(
      "Confirm Removal",
      `Are you sure you want to remove ${item.title} from your favorites?`,
      () => {
        const newFavorites = favorites.filter(
          (favorite) => favorite.id !== item.id
        );
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setFavorites(newFavorites);
        alertify.success("Removed from favorites");
      },
      () => {
        alertify.error("Cancelled!");
      }
    );
  };

  const handleFilterFavorites = () => {
    const filteredFavorites = favorites.filter((favorite) =>
      favorite.title.toLowerCase().includes(favoriteQuery.toLowerCase())
    );
    setFavorites(filteredFavorites);
    setFavoriteQuery("");
  };

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Favorites Foods</h1>
      <div className="search-favorites">
        <input
          type="text"
          name="filterfavorites"
          placeholder="Search in favorites"
          value={favoriteQuery}
          onChange={(e) => setFavoriteQuery(e.target.value)}
        />
        <button className="filter-button" onClick={handleFilterFavorites}>
          Filter
        </button>
      </div>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <Favorites
              key={item.id}
              {...item}
              removeFavorite={() => handleRemoveFavorite(item)}
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
