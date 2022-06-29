import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>Keyboard</p>
        <p className="product_price">
          <small>₹</small>
          <strong>1000</strong>
        </p>
        <div className="product_rating">
          <p>🌟</p>
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/51LXPQdpvfL._AC_UY327_FMwebp_QL65_.jpg "></img>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
