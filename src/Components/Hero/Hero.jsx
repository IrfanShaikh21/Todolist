import React from 'react'
import './Hero.css'
import heroimg from '../../assets/hero_image.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-right">
        <div className="hero-body">
          <p>Fresh Styles Await You</p>
          <p>New ARRIVALS ONLY</p>
          <h1>new collections for everyone</h1>
        </div>
        <div className="get-start">
          <button>Discover Now</button>
        </div>
      </div>
      <div className="hero-left">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
}

export default Hero
