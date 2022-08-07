import React from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';

const ProductList = ({ products, name}) => {
  if (!products.length) {
    return <h3> No Products Yet, Check Back Soon</h3>
  }
  return (
      <div>
        <h3>{name}</h3>
        {products &&
          products.map((product)=>(
            <div>
        {product_prop.image}
        {product_prop.description}
        {product_prop.category}
        {product_prop.stock}
        {product_prop.price}
            </div>
        ))}
      </div>
  )
};
