import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.jpg'
import navprofile from '../../assets/navbar_profile.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={navlogo} alt="" className='nav-logo' width="100px" height="100px"/>
        <img src={navprofile} alt="" className='nav-profile' width="100px" height="100px"/>
    </div>
  )
}

export default Navbar
