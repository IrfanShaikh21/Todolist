import React from "react";
import { createContext } from "react";
import all_product from "../assets/all_product";
export const webcontext = createContext(null);

function ContextApi({ children }) {

  let contextValue={all_product}

  return (
    <>
      <webcontext.Provider value={contextValue}>{children}</webcontext.Provider>
      ;
    </>
  );
}

export default ContextApi;
