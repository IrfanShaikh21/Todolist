import React, { useContext } from "react";
import "./Card.css";
import { webcontext } from "../../ContextApi/ContextApi";
import remove_icon from "../../assets/cart_cross_icon.png";
import all_product from "../../assets/all_product";

function Cards() {
  4;
  const { cartitem, setcartitem, deletecart } = useContext(webcontext);

  return (
    <div className="cartitems">
      <div className="cartmain">
        <p>Product</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartitem[e.id] > 0) {
          return (
            <div className="cartitemformat" key={e.id}>
              <img src={e.image} alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cart-quntity">{cartitem[e.id]}</button>
              <p>{e.new_price * cartitem[e.id]}</p>
              <img
                src={remove_icon}
                className="remove-icon" // Apply the class here
                onClick={() => {
                  deletecart(e.id); // Pass the item ID for deletion
                }}
                alt=""
              />
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Cards;
