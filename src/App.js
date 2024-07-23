import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useAuth } from "./context/GlobalContext";
import { auth } from "./firebase";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Favorite from "./pages/Favorite/Favorite";
import RequireAuth from "./RequireAuth";
const App = () => {
  const { dispatch, darkTheme } = useAuth();
  window.onload = function () {
    if (localStorage.getItem("basket")) {
      const jsonBasket = localStorage.getItem("basket");
      const oldBasket = JSON.parse(jsonBasket).basket;
      if (oldBasket !== undefined) {
        dispatch({
          type: "ON_LOAD",
          payload: oldBasket,
        });
      }
    }
    if (localStorage.getItem("favorite")) {
      const jsonFavorite = localStorage.getItem("favorite");
      const oldFavorite = JSON.parse(jsonFavorite).favorite;
      if (oldFavorite !== undefined) {
        dispatch({
          type: "ON_LOAD",
          payload: oldFavorite,
        });
      }
    }
    if (localStorage.getItem("theme")) {
      const jsonFavorite = localStorage.getItem("theme");
      const oldFavorite = JSON.parse(jsonFavorite);
      if (oldFavorite !== undefined) {
        dispatch({
          type: "CHANGE_THEME_FROM_LOCAL",
          theme: oldFavorite,
        });
      }
    }
    // if (localStorage.getItem("theme")) {
    //   const jsonTheme = localStorage.getItem("theme");
    //   const storgedTheme = JSON.parse(jsonTheme);
    //   if (storgedTheme !== undefined) {
    //     console.log(storgedTheme);
    //     dispatch({
    //       type: "ON_LOAD",
    //       theme: storgedTheme,
    //     });
    //   }
    // }
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className={darkTheme ? "app dark" : "app"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/favorite"
          element={
            <RequireAuth>
              <Favorite />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/payment"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route path="*" element={<h1>Pag Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
