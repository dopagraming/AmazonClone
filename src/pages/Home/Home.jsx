import React, { useState } from "react";
import homeImg from "../../images/home.jpg";
import Product from "../../components/Product/Product";
import ProductImg1 from "../../images/1.png";
import ProductImg2 from "../../images/2.png";
import ProductImg3 from "../../images/3.png";
import ProductImg4 from "../../images/4.png";
import ProductImg5 from "../../images/5.png";
import ProductImg6 from "../../images/6.png";
import MenuIcon from "../../images/menu.png";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Features from "../../components/Features/Features";
import Banner from "../../components/Panner/Banner";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import OnSaleProducts from "../../components/OnSaleProducts/OnSaleProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home ">
        <div className="home-container container">
          <main className="main-home">
            <ul className="menu">
              <li>
                <FontAwesomeIcon icon={faBars} />
                <p>SHOP BY DEPARTMENT</p>
              </li>
              <li className="menu-link">All Categories</li>
              <li className="menu-link">Best Seller Products</li>
              <li className="menu-link">BEST CHOICE</li>
              <li className="menu-link">HIGH</li>
              <li className="menu-link">New Arrivals</li>
              <li className="menu-link">Top 10 Offers</li>
              <li className="menu-link">RAM 6-256G</li>
              <li className="menu-link">Phones & Tablets</li>
              <li className="menu-link">Electronics & Digital</li>
              <li className="menu-link">Fashion & Clothings</li>
              <li className="menu-link">DISCOV</li>
              <li className="menu-link">Jewelry & Watches</li>
              <li className="menu-link">TV & Audio</li>
            </ul>
            <Slider />
          </main>
          <Features />
          <Banner />
          <OnSaleProducts productOfType={"onSaleProducts"} />
          <OnSaleProducts productOfType={"computerProducts"} />
          <OnSaleProducts productOfType={"phoneProducts"} />
          <strong className="products-title">Random Products</strong>
          <span className="line"></span>
          <div className="home-row">
            <Product
              id={1}
              image={ProductImg1}
              price={64}
              title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              rating={5}
            />
            <Product
              id={2}
              image={ProductImg2}
              price={682.95}
              title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
              rating={4}
            />
            <Product
              id={3}
              image={ProductImg3}
              price={449}
              title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
              rating={5}
            />
            <Product
              id={4}
              image={ProductImg4}
              price={229}
              title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
              rating={3}
            />
            <Product
              id={5}
              image={ProductImg5}
              price={239}
              title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
              rating={5}
            />
            <Product
              id={6}
              image={ProductImg6}
              price={(1, 142)}
              title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
              rating={5}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
