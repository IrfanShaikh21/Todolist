import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../assets/all_product";

export const webcontext = createContext(null);

function ContextApi({ children }) {
  const getdefaultcart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
      cart[all_product[i].id] = 0;
    }
    return cart;
  };

  const [cartitem, setcartitem] = useState(getdefaultcart());

  const addcart = (itemID) => {
    console.log(`Adding item with ID: ${itemID}`);
    setcartitem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const deletecart = (itemID) => {
    console.log(`Removing item with ID: ${itemID}`);
    setcartitem((prev) => ({
      ...prev,
      [itemID]: Math.max(0, prev[itemID] - 1),
    }));
  };

  return (
    <webcontext.Provider
      value={{ all_product, cartitem, setcartitem, addcart, deletecart }}
    >
      {children}
    </webcontext.Provider>
  );
}

export default ContextApi;
