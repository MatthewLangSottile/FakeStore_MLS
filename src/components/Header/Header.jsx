import React from 'react'
import "./Header.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="header-container">
      <Link to="/"><h1>Fake Store</h1></Link>
      <div className="cart-container">
        <AiOutlineShoppingCart className="cart-icon" />
            <div className="cart-count-container">
                <p className="cart-count-label">7</p>
            </div>
      </div>
    </div>
  )
}

export default Header
