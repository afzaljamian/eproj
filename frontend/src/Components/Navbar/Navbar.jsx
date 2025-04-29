import {React,useState,useContext,useRef} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/basketicon.png'
import { Link } from 'react-router-dom'
import Shop from '../../Pages/Shop'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assets/navdropdown.webp';
const Navbar = () => {
  const [menu,stateMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef=useRef();
  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="80px" height="90%"/>
        <p>Janta</p>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt="" width="70px" height="50px"/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{stateMenu("Shop")}}><Link style={{textDecoration:'none',color:'black',fontWeight:'800'}}to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{stateMenu("Men")}}><Link style={{textDecoration:'none',color:"black",fontWeight:'800'}}to='/mens'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{stateMenu("Women")}}><Link style={{textDecoration:'none',color:"black",fontWeight:'800'}}to='/womens'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{stateMenu("Kids")}}><Link style={{textDecoration:'none',color:"black",fontWeight:'800'}}to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token")
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img src={cart_icon} alt="" width='50px' height="50px"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
