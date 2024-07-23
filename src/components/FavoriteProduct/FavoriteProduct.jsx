import React from "react";
import "./FavoriteProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/GlobalContext";
const FavoriteProduct = ({ id, image, price, title, rating }) => {
  const { dispatch } = useAuth();
  const addToFavorite = () => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      item: {
        id: id,
        image: image,
        price: price,
        title: title,
        rating: rating,
      },
    });
  };
  const removeFromFavorite = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITE",
      id: id,
    });
  };
  return (
    <div key={id} className="product-item">
      <img src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{price}$</p>
      </div>
      <div className="actions">
        <FontAwesomeIcon icon={faCartShopping} onClick={addToFavorite} />
        <FontAwesomeIcon icon={faShare} />
        <FontAwesomeIcon icon={faTrash} onClick={removeFromFavorite} />
      </div>
    </div>
  );
};

export default FavoriteProduct;
