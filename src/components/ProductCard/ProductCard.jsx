import React from 'react'
import "./ProductCard.css"
import {titleCase} from "title-case"
import { textShaver } from 'text-shaver';
import {FaHeart} from 'react-icons/fa'


function ProductCard({product}) {
  return (
    <div className="product-card">
      <div className="product-card-img-area">
      <img src={product.image} className="product-image" />
        <div className="favorite-icon-area">
            <FaHeart className="favorite-icon" />
        </div>
      </div>
      <div className="product-details-area">
      <p className="product-title">{textShaver(product.title, {mode: 'words', preserveWords: true, limit: 5, suffix: " (...)"})}</p>
      <p className="product-category">{titleCase(product.category)} </p>
      <p className="product-price">${product.price.toFixed(2)} </p>
      </div> 
    </div>
  )

}

export default ProductCard
