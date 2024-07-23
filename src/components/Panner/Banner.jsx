import React, { useState, useEffect, useRef } from "react";
import banner1 from "../../images2/banner-1.jpg";
import banner2 from "../../images2/banner-2.jpg";
import banner3 from "../../images2/banner-3.jpg";
import banner4 from "../../images2/banner-4.jpg";
import banner5 from "../../images2/banner-5.jpg";
import banner6 from "../../images2/banner-6.jpg";
import banner7 from "../../images2/banner-7.jpg";
import banner8 from "../../images2/banner-8.jpg";

import "./Banner.css";
const Banner = () => {
  const images = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef(null);
  const autoplayRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 3); // Loop to the end
    }
  };

  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 2000);
    return () => clearInterval(autoplayRef.current);
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    clearInterval(autoplayRef.current);
  };

  const handleTouchEnd = (e) => {
    autoplayRef.current = setInterval(handleNext, 2000);
  };

  return (
    <div
      className="banner-container"
      ref={bannerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="image-banner">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`Banner ${index + 1}`} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleBack} disabled={currentIndex === 0}>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= images.length - 3}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Banner;
