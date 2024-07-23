import React from "react";
import features1 from "../../images2/features1.png";
import features2 from "../../images2/features2.png";
import features3 from "../../images2/features3.png";
import features4 from "../../images2/features4.png";
import features5 from "../../images2/features5.png";
import "./Features.css";
const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <img src={features1} alt="" />
        <div>
          <p>Free Shipping</p>
          <p>Free Shipping On All Order</p>
        </div>
      </div>
      <div className="feature">
        <img src={features2} alt="" />
        <div>
          <p>Money Guarantee</p>
          <p>50 Day Money Back Quarantee</p>
        </div>
      </div>
      <div className="feature">
        <img src={features3} alt="" />
        <div>
          <p>Online Support 24/7</p>
          <p>Technical Support Stand By</p>
        </div>
      </div>
      <div className="feature">
        <img src={features4} alt="" />
        <div>
          <p>Secure Payment</p>
          <p>All Payment Method are accepted</p>
        </div>
      </div>
      <div className="feature">
        <img src={features5} alt="" />
        <div>
          <p>Member Discount</p>
          <p>Upto 40% Discount All Products</p>
        </div>
      </div>
      <div className="feature">
        <img src={features2} alt="" />
        <div>
          <p>Money Guarantee</p>
          <p>50 Day Money Back Quarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
