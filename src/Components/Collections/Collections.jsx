import React from 'react'
import Newcollections from '../../assets/new_collections'
import Item from '../Item/Item';
import './Collections.css'
function Collections() {
  return (
    <div className='container'>
      <div className="collections">
        <h1>New Collections</h1>
        <hr />
        <div className="newcollections">
          {Newcollections.map((item, i) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default Collections
