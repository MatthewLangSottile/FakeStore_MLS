import React, { useState, useEffect, useContext } from 'react'
import "./CartProductCard.css"
import { BsTrash } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'
import { textShaver } from 'text-shaver'
import { Link } from 'react-router-dom'



function CartProductCard({ product }) {
  //start with variable for icons
  // const isInCart = false; replace with state
  const [isInCart, setCart] = useState(false)
  //access global context for cart
  //uses {} not []
  const { cart, removeProductFromCart } = useContext(CartContext)

  //need useEffect to set value for isInCart
  useEffect(
    () => {
      // is this product in the cart?
      //find will return the value if it found it or undefined if not found (which is false)
      setCart(cart.find(item => item.id === product.id))
    }, [cart]
  )

  return (
    <div className="cart-product-card">
      <div className="cart-product-item-area">
        <Link to={`/details/${product?.id}`}><img src={product?.image} className="cart-product-image" /></Link>
        <Link to={`/details/${product?.id}`}><p className="cart-product-title">
          {textShaver(product?.title, { mode: 'words', preserveWords: true, limit: 5, suffix: " (...)" })}</p>
        </Link>
      </div>
      <p className="cart-product-price">${product?.price.toFixed(2)} </p>
      <p className="cart-product-quantity">1</p>
      <p>
        <BsTrash onClick={() => removeProductFromCart(product.id)} className="cart-remove-btn" />
      </p>
    </div>
  )
}

export default CartProductCard
