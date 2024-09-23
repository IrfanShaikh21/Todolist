import React from "react";
import banner_womens from "../../assets/banner_women.png";
import Item from "../Item/Item";
import all_product from "../../assets/all_product";
import "./Women.css";
import dropdwon_icon from "../../assets/dropdown_icon.png";

function Women(props) {
  return (
    <div className="women-container">
      <img src={banner_womens} alt="" />
      <div className="index-container">
        <p>Here 1 to 12 out of 36 </p>
        <img src={dropdwon_icon} alt="" />
      </div>
      <div className="imagesContaniner">
        {all_product.map((item, i) => {
          if (item.category === "women") {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_prize={item.new_price}
                old_prize={item.old_price}
              ></Item>
            );
          }
        })}
      </div>
      <div className="explore-btn">
        <button type="button" className="btn btn-primary btn-lg">
          Explore more
        </button>
      </div>
    </div>
  );
}

export default Women;
