import React, { useState } from "react";

const Order = ({ key, id, image, price, title }) => {
  const [more, setMore] = useState(false);
  const handleMore = () => {
    setMore(!more);
  };
  return (
    <li className="items-of-order" key={id}>
      <img src={image} alt="" />
      <p>{title.slice(0, 50)} </p>
      <span className="read-more" onClick={handleMore}>
        {more ? "" : "read more ..."}
      </span>
      <p>{more && title.slice(50, title.length)}</p>
      <p className="read-more" onClick={handleMore}>
        {more ? "less" : ""}
      </p>
      <span>{price} $</span>
    </li>
  );
};

export default Order;
