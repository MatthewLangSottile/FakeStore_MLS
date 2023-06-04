import React, {useContext} from 'react'
import "./Header.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"
import { CartContext } from '../../contexts/CartContext'



function Header() {
  const {cart} = useContext(CartContext)
  return (
    <div className="header-container">
      <Link to="/"><h1>Fake Store</h1></Link>
      <div className="cart-container">
        <Link to="/checkout" className="cart-link"><AiOutlineShoppingCart className="cart-icon" /></Link>
                {
                (cart.length > 0) && 
                <Link to="/checkout"><div className="cart-count-container">
                <p className="cart-count-label">{cart.length}</p>
                </div>
                </Link>
                }
      </div>
    </div>
  )
}

export default Header
