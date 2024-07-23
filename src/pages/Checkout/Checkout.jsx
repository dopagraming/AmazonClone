import React from "react";
import { useAuth } from "../../context/GlobalContext";
import checkoutImg from "../../images/checkoutAd.jpg";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "../../components/Subtotal/Subtotal";
import Header from "../../components/Header/Header";
import Basket from "../../images/basket.png";
import Footer from "../../components/Footer/Footer";
const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <>
      <Header />
      <div className="checkout mb-20">
        <div className="checkout-left">
          <img className="checkout-ad" src={checkoutImg} />
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">Your shopping Basket</h2>

            {basket?.length > 0 ? (
              <div className="d-g mt-20">
                {basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-basket">
                <p>
                  You have no items in your basket.To buy one or more
                  items,click"Add to basket".
                </p>
                <img className="basket-img" src={Basket} alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
