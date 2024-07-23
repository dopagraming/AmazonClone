import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Orders.css";
import { useAuth } from "../../context/GlobalContext";
import Order from "../../components/Order/Order";
import Footer from "../../components/Footer/Footer";
import delivery from "../../images/delivery.png";
const Orders = () => {
  const order = localStorage.getItem("orders");
  const getOrders = JSON.parse(order);
  const { user } = useAuth();

  return (
    <>
      <Header />
      <div className="orders">
        <h2 className="order-h1">
          {user ? `${user.email}` : "Gust"} :{" "}
          {getOrders?.length > 0
            ? "Your Order In The Way"
            : "There Is No Order"}{" "}
        </h2>
        {getOrders?.length > 0 ? (
          <ul className="order">
            {getOrders?.map((item) => (
              <Order
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </ul>
        ) : (
          <div className="orders-img">
            <img  src={delivery} alt="" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Orders;
