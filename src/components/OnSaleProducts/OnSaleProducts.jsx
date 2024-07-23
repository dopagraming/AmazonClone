import React, { useEffect, useState } from "react";

import { useAuth } from "../../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import * as ProductsType from "../../ProductsType";
import "./OnSaleProducts.css";
import { useNavigate } from "react-router-dom";
const OnSaleProducts = ({ productOfType }) => {
  const navigate = useNavigate();
  const { dispatch, user } = useAuth();
  const [productType, setProductType] = useState(productOfType);
  const [productsArray, setproductsArray] = useState([]);
  const addToCart = (id, image, priec, title, rating) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: priec,
        title: title,
        rating: rating,
      },
    });
  };
  useEffect(() => {
    if (productOfType === "onSaleProducts") {
      setproductsArray(ProductsType.onSaleProducts);
      console.log(productsArray);
    } else if (productOfType === "computerProducts") {
      setproductsArray(ProductsType.computerProducts);
    } else if (productOfType === "phoneProducts") {
      setproductsArray(ProductsType.phoneProducts);
    }
  }, []);
  const handleAddToFavorite = (id, image, priec, title, rating) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      product: {
        id: id,
        image: image,
        price: priec,
        title: title,
        rating: rating,
      },
    });
  };
  return (
    <div className="on-sale-products">
      <strong className="products-title">{productsArray[0]}</strong>
      <span className="line"></span>
      <div className="products">
        {productsArray[1]?.map((product) => (
          <div className="product" key={product.id}>
            <span>{product.sale}%</span>
            <img src={product.image} alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quasi.
            </p>
            <div>*******</div>
            <div className="product-price">
              <span className="sale-price">
                {product.originalPrice -
                  (product.originalPrice * product.sale) / 100}
                $
              </span>
              <del>{product.originalPrice}$</del>
            </div>
            <ul>
              <li
                onClick={() =>
                  user === null
                    ? navigate("/login")
                    : addToCart(
                        product.id,
                        product.image,
                        product.originalPrice -
                          (product.originalPrice * product.sale) / 100,
                        product.title,
                        product.rating
                      )
                }
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </li>

              <li
                onClick={() => {
                  user === null
                    ? navigate("/login")
                    : handleAddToFavorite(
                        product.id,
                        product.image,
                        product.originalPrice -
                          (product.originalPrice * product.sale) / 100,
                        product.title,
                        product.rating
                      );
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </li>
              <li>
                <FontAwesomeIcon icon={faShare} />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnSaleProducts;
