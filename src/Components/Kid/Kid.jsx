import React from "react";
import kids from "../../assets/banner_kids.png";
import Item from "../Item/Item";
import all_product from "../../assets/all_product";
import dropdwon_icon from "../../assets/dropdown_icon.png";
import "./Kid.css";
function Kid(props) {
  return (
    <>
      <div className="kid-container">
        <img src={kids} alt="" />
        <div className="sort-index">
          <p>Here 1 to 12 out of 36 </p>
          <img src={dropdwon_icon} alt="" />
        </div>
        <div className="imagescontaniner">
          {all_product.map((item, i) => {
            if (item.category === "kid") {
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
    </>
  );
}

export default Kid;
