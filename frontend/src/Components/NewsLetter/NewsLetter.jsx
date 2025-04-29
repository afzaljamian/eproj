import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offers on Your email</h1>
      <p>Subscribe to our news letter</p>
    <div>
    <input type="email" placeholder="Your email here"/>
    <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter
