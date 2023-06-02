import React, {useContext} from 'react'
import "./Cart.css"
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'



function Cart() {
    //show what is in the cart
    //they are in the cart context 
      //access global context for cart
  //uses {} not []
 const {cart} = useContext(CartContext)
  return (
    <div className="cart-page-container">
        <div className="cart-headers">
            <h4>Item</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Remove</h4>
        </div>
        <div className="cart-products">
            {
            cart.length > 0 ?
            cart.map(item=><ProductCard key={item.id} product={item} />)
            :
            <p>No items in cart</p>
            }
        </div>
    </div>
  )
}

export default Cart
