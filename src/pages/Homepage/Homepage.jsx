import React, {useEffect, useState} from 'react'
import "./Homepage.css"
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from 'axios'
import {titleCase} from "title-case"







function Homepage() {



//create state for products
const [products, setProducts] = useState([])

//create state for categories
const [categories, setCategories] = useState([])

const handleFilter = ({item}) => {
  axios.get(`https://fakestoreapi.com/products/category/${item}`)
  .then(result=>{
    console.log(result.data)
    setProducts(result.data)
  })
  .catch(err=>console.log(err))

  return (
    <div className="homepage-container">
        <div className="filter-container">
          <button onClick={() => window.location.reload(false)}>All</button>
          {
          categories.map(item=><button key={item} onClick={() => handleFilter({item})}>{titleCase(item)}</button>)
          }
        </div>
        <div className="product-grid-container">
            {
            products.map(item=><ProductCard key={item.id} product={item} />)
            }
        </div>
    </div>
  )
}

//useEffect to make API call when page loads
useEffect(
  ()=>{
    //call api for all products
    axios.get(`https://fakestoreapi.com/products`)
    .then(res=> {
      console.log(res.data)
      //store result in state
      setProducts(res.data)
    })
    .catch(err=>console.log(err))

    //call api for all categories
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then(res=> {
      console.log(res.data)
      //store result in state
      setCategories(res.data)
    })
  }, [] //empty array means one time when page loads 
    
)



  return (
    <div className="homepage-container">
        <div className="filter-container">
          <button onClick={() => window.location.reload(false)}>All</button>
          {
          categories.map(item=><button key={item} onClick={() => handleFilter({item})} >{titleCase(item)}</button>)
          }
        </div>
        <div className="product-grid-container">
            {
            products.map(item=><ProductCard key={item.id} product={item} />)
            }
        </div>
    </div>
  )
}




export default Homepage
