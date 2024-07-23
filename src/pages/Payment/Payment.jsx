import { useAuth } from "../../context/GlobalContext";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import Header from "../../components/Header/Header";
import { getBasketTotal } from "../../context/AppReducer";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const Payment = () => {
  const { user, basket, dispatch } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const buyNow = () => {
    localStorage.setItem("orders", JSON.stringify(basket));
    localStorage.removeItem("basket");
    dispatch({
      type: "BUY_NOW",
      payload: [],
    });
  };
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment-container">
          <h1></h1>
          {/* Delivery Address */}
          <div className="payment-section">
            <div className="payment-title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment-address">
              <p>{user?.email}</p>
              <p>Alexandria, Egypt</p>
            </div>
          </div>
          {/* Review Items*/}
          <div className="payment-section">
            <div className="payment-title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment-items">
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
          </div>
          {/* Payment method*/}
          <div className="payment-section">
            <h3>Payment Method</h3>
            <div className="payment-details">
              <p>Total Price: {getBasketTotal(basket)}</p>
              <form>
                <div className="payment-priceContainer">
                  <button
                    onClick={() => {
                      basket.length !== 0 ? navigate("/orders") : setShow(true);
                      buyNow();
                    }}
                  >
                    <span>"Buy Now"</span>
                  </button>
                  {show && (
                    <p className="no-product">You have to get Products</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
