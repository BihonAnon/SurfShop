import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';

const ProductList = ({ products, title }) => {
   
  
  const arr = [];
  const handleClick = event => {
    var cartProductId = event.currentTarget.id;
    console.log('PRODUCT ID 👉️', cartProductId);
    arr.push(cartProductId);
    localStorage.setItem("cart", JSON.stringify(arr));
  }
  return (
    <div>
      <h3>{title}</h3>
      {products &&
        products.map((product_prop) => (
          <div className = {product_prop._id}> 
          {product_prop}
          </div>
        ))}
    </div>
  )
};

export default ProductList