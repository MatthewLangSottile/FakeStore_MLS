import React, {useContext, useState} from 'react'
import "./Checkout.css"
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import CartProductCard from '../../components/CartProductCard/CartProductCard';





function Checkout() {

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
      width: '48%',
      height: '50%'
    
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
 const {cart, cartTotalPrice, clearCart, setCartTotalPrice} = useContext(CartContext)

    
  //function for closing the modal procedure
  //clear cart then setIsOpenFalse
  const closeModalProc = () => {
    // set cart to empty array with function in cart context
    clearCart();
    //set cart total to 0 
    setCartTotalPrice(0);
    // use setIsOpen method to close modal
    setIsOpen(false);  
    
  }



  return (
    <div className="cart-page-container">
        <div className="cart-headers">
            <h4 className="item-header">Item</h4>
            <h4 className="price-header">Price</h4>
            <h4 className="quantity-header">Quantity</h4>
            <h4 className="remove-header">Remove</h4>
        </div>
        <div className="cart-products">
            {
            cart.length > 0 ?
        
            cart.map(item => <CartProductCard key={item.id} product={item} />)
            :
            <p className="no-items-message">No items in cart</p>
            }
            </div>
            {
            (cart.length > 0) &&
            <div className="checkout-bottom">
            <p>Total: ${cartTotalPrice}</p>
            <button onClick={()=>setIsOpen(true)}>Checkout</button>
            </div>
            }
            
            
              <Modal
              //run when checkout is clicked
              isOpen={isOpen}
              //run when return button or overlay is clicked
              onRequestClose={()=>{closeModalProc()}}
              //makes overlay work with above
              shouldCloseOnOverlayClick={true}
              //styling for modal from above
              style={modalStyles}
              contentLabel = "Checkout Modal"
              >
              <div className="checkout-modal-container">

                <h4>Your Order was successful!</h4>
                <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                <Link to="/">
                  <button onClick={()=>{closeModalProc()}}>Return to Main Page</button>
                  </Link>
                </div>
              </Modal>
      </div>

  )
}

export default Checkout
