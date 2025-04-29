import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import insta_icon from '../Assets/instaicon.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" width="100px" height="100px" />
                <p>Janta</p>
            </div>
            <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta_icon} alt=""/>
        </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025-All right</p>
        </div>
        </div>
  )
}

export default Footer
