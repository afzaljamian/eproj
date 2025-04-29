import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import product_icon from '../../assets/product_cart.png'
import product_list from '../../assets/product_list.png'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={product_icon} alt="" width="50px" height="50px"/>
        <p>Add product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={product_list} alt="" width="50px" height="50px"/>
        <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
