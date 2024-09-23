import React from 'react'
import Star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import './Productdisplay.css'
function ProductDisplay({product}) {
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
          <img src={product.image} alt="" />{" "}
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="price">
            <h3>{product.new_prize}</h3>
            <h3>{product.old_prize}</h3>
          </div>
          <div className="productdisplay-right-star">
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={Star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay
