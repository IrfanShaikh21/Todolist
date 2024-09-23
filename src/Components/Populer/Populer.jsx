import React, { useState } from 'react'
import data_product from '../../assets/data' 
import Item from '../Item/Item'
import './Populer.css'
function Populer() {
  
  return (
    <div className='populer'>
      <h1>POPULER IN WOMEN</h1>
      <hr />
     
      <div className="populer-item">
        {data_product.map((item,i)=> {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_prize={item.new_price} old_prize={item.old_price}  
          ></Item>
        })}
      </div>
    </div>
  )
}

export default Populer
