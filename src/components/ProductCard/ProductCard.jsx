import React, {useState, useContext, useEffect} from 'react'
import "./ProductCard.css"
import {titleCase} from "title-case"
import { textShaver } from 'text-shaver'
import {FaHeart} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { CartContext } from '../../contexts/CartContext'




function ProductCard({product}) {
  //start with variable for icons
  // const isInCart = false; replace with state
  const [isInCart, setCart] = useState(false)
  //access global context for cart
  //uses {} not []
 const {cart, addProductToCart, removeProductFromCart} = useContext(CartContext)

 //need useEffect to set value for isInCart
 useEffect(
  ()=> {
    // is this product in the cart?
    //find will return the value if it found it or undefined if not found (which is false)
    setCart(cart.find(item=>item.id === product.id))
  }, [cart]
 )


  return (
    <div className="product-card">
      <div className="product-card-img-area">
      <Link to={`/details/${product?.id}`}><img src={product?.image} className="product-image" /></Link>
        <div className="cart-icon-area">
            {
            isInCart?
            <FaHeart className="cart-heart-icon" onClick={()=>removeProductFromCart(product.id)}/>
            :
            <FaHeart className="cart-heart-icon unfilled" onClick={()=>addProductToCart(product)} />
            }
        </div>
      </div>
      <div className="product-details-area">
      <Link to={`/details/${product?.id}`} className="product-title">{textShaver(product?.title, {mode: 'words', preserveWords: true, limit: 5, suffix: " (...)"})}</Link>
      <p className="product-category">{titleCase(product?.category)} </p>
      <p className="product-price">${product?.price.toFixed(2)} </p>
      </div> 
    </div>
  )

}

export default ProductCard
