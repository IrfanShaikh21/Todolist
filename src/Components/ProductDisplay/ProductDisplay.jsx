import React, { useCallback, useContext } from "react";
import Star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import "./Productdisplay.css";
import { webcontext } from "../../ContextApi/ContextApi";
function ProductDisplay({ product }) {
  let { addcart } = useContext(webcontext);
  return (
    <>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-img">
          <img className="main-img" src={product.image} alt="" />{" "}
        </div>
        <div className="productdisplay-right">
          <h3>{product.name}</h3>
          <div className="productdisplay-right-star">
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="price">
            <h2 className="new">${product.new_price}</h2>
            <h2 className="old">${product.old_price}</h2>
            <h1></h1>
          </div>
          <div className="product-dis">
            This backpack is designed for durability and lightweight
            convenience, making it perfect for everyday use. Whether you're
            heading to school, work, or a weekend adventure, it combines
            functionality with a modern look to meet all your needs.
          </div>
          <div className="cloth-size">
            <h3>Select size</h3>
            <div className="product-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() => addcart(product.id)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
