import React, { useState } from "react";
import "./Subtotal.css";
import { useAuth } from "../../context/GlobalContext";
import { getBasketTotal } from "../../context/AppReducer";
import { useNavigate } from "react-router-dom";
import paymet1 from "../../images2/payment-1.png";
import paymet2 from "../../images2/payment-2.png";
import paymet3 from "../../images2/payment-3.png";
import paymet4 from "../../images2/payment-4.png";
const Subtotal = () => {
  const [show, setShow] = useState(false);
  const { basket } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <p>
        Subtotal <strong>{basket.length}</strong> item : ${" "}
        {getBasketTotal(basket)}
      </p>
      <div>This Order Contains A Gift</div>
      <button
        className=""
        onClick={() =>
          basket.length !== 0 ? navigate("/payment") : setShow(true)
        }
      >
        Proceed To Checkout
      </button>
      {show && <p className="no-product">You Have To Get Products</p>}
      <div className="payment-types">
        <img src={paymet1} alt="" />
        <img src={paymet2} alt="" />
        <img src={paymet3} alt="" />
        <img src={paymet4} alt="" />
      </div>
    </div>
  );
};

export default Subtotal;
