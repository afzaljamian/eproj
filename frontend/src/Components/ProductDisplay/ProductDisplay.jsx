import React,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dullicon from '../Assets/star_dullicon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image}/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" width="20px" height="20px"/>
            <img src={star_icon} alt="" width="20px" height="20px"/>
            <img src={star_icon} alt="" width="20px" height="20px"/>
            <img src={star_dullicon} alt="" width="20px" height="20px"/>
            <p>256</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fuga labore quidem. Culpa deleniti asperiores sint eius totam e.
        </div>
        <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women,Tshirt,Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
