import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {productId} = useParams();
  
  return (
    <div>
      <h1>Product Detail</h1>
      <p>This is product: <b>{productId}</b></p>
    </div>
  )
}

export default ProductDetail
