import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header-container">
        <div
          className="logo"
          style={{ cursor: "pointer", fontWeight: "1000" }}
          onClick={() => navigate("/")}
        >
          MDB
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
          />
        </div>
        <div className="buttons-container">
          <button className="header-button">Sign In</button>
          <button className="header-button">Wishlist</button>
          <button className="header-button">My Cart</button>
        </div>
      </header>
      <div className="men-wear-container">
        <h3>Men's Wear</h3>
      </div>
    </>
  );
};

export default Header;
