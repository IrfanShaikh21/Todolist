import React, { useContext } from 'react'
import { webcontext } from '../../ContextApi/ContextApi';
import all_product from "../../assets/all_product";
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';



function Product() {

  let { contextValue } = useContext(webcontext);
 const {productID} = useParams()
const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}></ProductDisplay>
    </div>
  );
}

export default Product
