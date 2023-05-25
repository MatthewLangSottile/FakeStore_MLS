import React from 'react'
import "./ProductCard.css"
import {titleCase} from "title-case"
import { textShaver } from 'text-shaver';
import {FaHeart} from 'react-icons/fa'
import {Link} from "react-router-dom"


function ProductCard({product}) {
  return (
    <div className="product-card">
      <div className="product-card-img-area">
      <Link to={`/details/${product?.id}`}><img src={product?.image} className="product-image" /></Link>
        <div className="favorite-icon-area">
            <FaHeart className="favorite-icon" />
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
