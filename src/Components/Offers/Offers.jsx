import React from 'react'
import Exclusive from '../../assets/exclusive_image.png'
import './Offers.css'
function Offers() {
  return (
    <div className='offer-container'>
      <div className="offers">
        <div className="offer-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className="offer-right">
          <img src={Exclusive} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Offers
