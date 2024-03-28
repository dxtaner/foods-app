import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.js";
import FavoritesPage from "./pages/favoritespage/FavoritesPage.js";
import "./App.css";
import NotFoundPage from "./NotFound.js";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites Foods</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <footer className="footer">
          <a
            href="https://github.com/dxtaner"
            target="_blank"
            rel="noopener noreferrer">
            Visit My GitHub @dxtaner
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
