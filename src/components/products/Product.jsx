import React from "react";
import "./products.scss";

const Product = ({ src, name, price, className, ...rest }) => {
  return (
    <div className={`product ${className || ""}`} {...rest}>
      <div className="image">
        <img src={src} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
