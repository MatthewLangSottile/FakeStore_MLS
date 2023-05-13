import React from 'react'
import "./Header.css"
import {AiOutlineShoppingCart} from "react-icons/ai"

function Header() {
  return (
    <div className="header-container">
      <h1>Fake Store</h1>
      <div className="cart-container">
        <AiOutlineShoppingCart className="cart-icon" />
            <div class="cart-count-container">
                <p className="cart-count-label">7</p>
            </div>
      </div>
    </div>
  )
}

export default Header
