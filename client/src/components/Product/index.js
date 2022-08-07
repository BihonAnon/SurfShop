import React from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import Cart from '../Cart';

const AddToCart =({ product_prop }) =>{
  console.log(product_prop)
}
const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3> No Products Yet, Check Back Soon</h3>
  }
  return (
    <div>
      <h3>{title}</h3>
      {products &&
        products.map((product_prop) => (
          <div className = {product_prop._id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" img src={product_prop.image} style={{ height: "16rem" }} />
              <Card.Body>
                <Card.Title><h2>{product_prop.name}</h2></Card.Title>
                <Card.Text>
                  {product_prop.description}
                  {product_prop.category}
                  <br />
                  Quantity: {product_prop.stock}
                </Card.Text>
                <Button variant="primary" onClick={product_prop._id}>${product_prop.price}<br />Add to Cart</Button>
              </Card.Body>
            </Card>

            
            
            
            
            
            <br />
          </div>
        ))}
    </div>
  )
};

export default ProductList