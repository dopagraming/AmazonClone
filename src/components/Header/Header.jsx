import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/header-logo.png";
import searchIcon from "../../images/searchIcon.png";
import shoppingCart from "../../images/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../../context/GlobalContext";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { basket, user, dispatch, darkTheme } = useAuth();
  const [theme, setTheme] = useState(darkTheme);
  const changeTheme = () => {
    const newTheme = !darkTheme;
    setTheme(newTheme);
    dispatch({
      type: "CHANGE_THEME",
      payload: newTheme,
    });
  };
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <nav className="header-nav">
        <div className="header-links">
          <Link to="/">
            <div className="header-option">
              <span className="optionLineTwo">Home</span>
            </div>
          </Link>

          <Link to="/favorite">
            <div className="header-option">
              <span className="header-optionLineOne">Favorite</span>
              <span className="header-optionLineTwo">Products</span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header-option">
              <span className="header-optionLineOne">Returns</span>
              <span className="header-optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
          <Link to={!user && "/login"}>
            <div className="header-option" onClick={handleSignOut}>
              <span className="header-optionLineOne">
                Hello {user ? `${user.email}` : "Gust"}
              </span>
              <span className="header-optionLineTwo">
                {user ? "Sign Out" : "Sign in"}
              </span>
            </div>
          </Link>
        </div>
        <button className="theme-mode" onClick={changeTheme}>
          {darkTheme ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
        <Link to="/checkout" className="d-f">
          <div className="header-optionBasket">
            <img src={shoppingCart} />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className="list-icon"
          onClick={() => {
            document.querySelector(".header-links").classList.toggle("active");
          }}
        />
      </nav>
    </header>
  );
};

export default Header;
