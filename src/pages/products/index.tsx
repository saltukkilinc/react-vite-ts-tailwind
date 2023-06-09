import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Link to={"/product-detail/pro-detail-test"}> Go to Product Detail Test</Link>
    </div>
  )
}

export default Products
