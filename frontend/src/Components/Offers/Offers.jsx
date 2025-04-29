import React from 'react'
import './Offers.css'
import exclusiveimg from '../Assets/exclusiveimg.jpeg'
const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusiveimg} alt="" width="250px" height="280px"/>
        </div>
      
    </div>
  )
}

export default Offers
