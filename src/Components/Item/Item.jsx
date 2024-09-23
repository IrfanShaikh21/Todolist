import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <div className="card cart">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="item-prize">
          <div className="card-new-price">${props.new_prize}</div>

          <div className="card-old-price">${props.old_prize}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
