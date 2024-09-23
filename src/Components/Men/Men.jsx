import React, { useContext } from "react";
import "./Men.css";
import dropdwon_icon from "../../assets/dropdown_icon.png";
import banner_mens from "../../assets/banner_mens.png";
import { webcontext } from "../../ContextApi/ContextApi";
import Item from "../Item/Item";
import all_product from "../../assets/all_product";
function Men(props) {
  let { contextValue } = useContext(webcontext);

  return (
    <div className="men-container">
      <img src={banner_mens} alt="" />
      <div className="sort-index-container">
        <p>Here 1 to 12 out of 36 </p>
        <img src={dropdwon_icon} alt="" />
      </div>
      <div className="images-contaniner">
        {all_product.map((item, i) => {
          if (item.category === "men") {
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

export default Men;
