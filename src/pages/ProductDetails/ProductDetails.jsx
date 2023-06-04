import React, {useState, useEffect,useContext} from 'react'
import "./ProductDetails.css"
import {useParams} from "react-router-dom"
import axios from "axios"
import {titleCase} from "title-case"
import { textShaver } from 'text-shaver';
import { CartContext } from '../../contexts/CartContext';


function ProductDetails() {

  const {cart, addProductToCart, removeProductFromCart} = useContext(CartContext)

  //page shows details for a single specific product
  //url has id to determine which product
  const {productId} = useParams()
  //https://fakestoreapi.com/products/1
  // get data when the page loads

  //create state to hold product data (object, not array)
  const [product, setProduct] = useState('')

  useEffect (
    ()=>{
      console.log('loaded')
      //make api call for spec product data
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res =>{
        // console.log(res.data)
        //what do I do with this data
        setProduct(res.data)
      } )
      .catch(err => console.log(err))
    },[]
  )
  

  return (
    <div className="details-container">
       <div className="product-image-area">
            <img src={product?.image} className="product-image" />
       </div>
       <div className="product-det-area">
          <p className="product-det-title">{product?.title}</p>
          <p className="product-det-price">${product?.price?.toFixed(2)} </p>
          <h2>Description</h2>
          <p className="product-det-description">{product?.description} </p>
          
          {         
                    //find array method will return the value if it found it or undefined if not found (which is false)
                    cart.find(item => item.id === product.id)?
                    <button className="product-det-remove-btn" onClick={()=>removeProductFromCart(product.id)}>Remove from Cart</button>
                    :
                    <button className="product-det-add-btn" onClick={()=>addProductToCart(product)}>Add to Cart</button>
          }
       </div>
    </div>
  )
}

export default ProductDetails
