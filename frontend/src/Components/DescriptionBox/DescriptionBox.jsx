import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (256)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that enables businesses or individuals to buy and sell goods, services, or digital products over the internet. It acts as a virtual storefront, allowing customers to browse products, compare prices, and make purchases from the convenience of their own devices.</p>
        <p>Ecommerce website typically display products or services along with detailed descriptions,prices, and any available variations (e.g sizes,colors).Each product has its own dedicated page with relevant information</p>
      </div>
    </div>
  )
}

export default DescriptionBox
