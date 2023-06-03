import React, {useContext, useState} from 'react'
import "./Cart.css"
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'




function Cart() {

  //create state for modal
const [isOpen, setIsOpen] = useState(false)

  //create styling for modal
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      // backgroundColor: "green",
      },
    overlay:{
      backgroundColor: "rgba(0,0,0,0.5)",
    }
  
  }
  
  //bind modal to app element
  Modal.setAppElement(document.getElementById("root"));
  
    //show what is in the cart
    //they are in the cart context 
      //access global context for cart
  //uses {} not []
 const {cart, cartTotalPrice, clearCart} = useContext(CartContext)

    
  //function for closing the modal procedure
  //clear cart then setIsOpenFalse
  const closeModalProc = () => {
    // set cart to empty array with function in cart context
    clearCart();
    // use setIsOpen method to close modal
    setIsOpen(false);   
  }

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
            {
            (cart.length > 0) &&
            <div>
            <p>Total: ${cartTotalPrice}</p>
            <button onClick={()=>setIsOpen(true)}>Checkout</button>
            </div>
            }
            
            
              <Modal
              isOpen={isOpen}
              // onRequesetClose={()=>{closeModalProc()}}
              onRequesetClose={()=>{setIsOpen(false)}}
              shouldCloseOnOverlayClick={true}
              style={modalStyles}
              contentLabel = "Checkout Modal"
              >
              <div className="checkout-modal-container">

                <p>Your Order was successful!</p>
                <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                <Link to="/"><button onClick={()=>{closeModalProc()}}>Return to Main Page</button></Link>
                </div>
              </Modal>
              </div>
           
            
            
        
    
  )
}

export default Cart
