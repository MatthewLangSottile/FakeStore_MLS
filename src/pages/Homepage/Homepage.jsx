import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from 'axios'
import { titleCase } from "title-case"


function Homepage() {


  //create state for products
  const [products, setProducts] = useState([])

  //create state for categories
  const [categories, setCategories] = useState([])


  //useEffect to make API call when page loads
  useEffect(
    () => {
      //call api for all products
      axios.get(`https://fakestoreapi.com/products`)
        .then(res => {

          //store result in state
          setProducts(res.data)
        })
        .catch(err => console.log(err))

      //call api for all categories
      axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {

          //store result in state
          setCategories(res.data)
        })
    }, [] //empty array means one time when page loads 

  )

  const handleFilter = ({ category }) => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(result => {

        // update state with new filtered set of products
        setProducts(result.data)
      })
      .catch(err => console.log(err))
  }





  return (
    <div className="homepage-container">
      <div className="filter-container">
        <button onClick={() => window.location.reload(false)}>All</button>
        {
          categories.map(category => <button key={category} onClick={() => handleFilter({ category })} >{titleCase(category)}</button>)
        }
      </div>
      <div className="product-grid-container">
        {
          products.map(item => <ProductCard key={item.id} product={item} />)
        }
      </div>
    </div>
  )
}




export default Homepage
