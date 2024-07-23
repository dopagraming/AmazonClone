// FavoriteProductsPage.js

import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/GlobalContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FavoriteProduct from "../../components/FavoriteProduct/FavoriteProduct";
import emptyCart from "../../images/emptyCard.png";
import "./Favorite.css";

const Favorite = () => {
  const { favorite } = useAuth();

  return (
    <>
      <Header />
      <div className="favorite-products-p">
        <h1>My Favorite Products</h1>
        {favorite.length > 0 ? (
          <div className="favorite-products">
            {favorite?.map((product) => (
              <FavoriteProduct
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>Save Your Favorite Products By Click On Heart</p>
            <img src={emptyCart} alt="" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favorite;
