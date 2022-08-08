import { useQuery } from '@apollo/client';
import React, {useEffect, useState}from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import { QUERY_PRODUCTS } from '../../utils/queries'

const ProductList = ({ products, title }) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const { loading, data } = useQuery(QUERY_PRODUCTS)
  const dbproducts = data?.products || []
  
  useEffect(()=>{
    console.log(dbproducts);
    console.log(products);
    if (dbproducts){
    const arr1 = dbproducts.filter(product => products.indexOf(product._id) !== -1 )
    setFilteredProducts(arr1)
  }
  },[
    data?.products
  ])

  useEffect(()=>{
    console.log(filteredProducts);
  },[filteredProducts])
  
  console.log(document.querySelectorAll('[id=cartPrice]'))
  const cartTotal = 'bs'
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
      {filteredProducts &&
        filteredProducts.map((product_prop) => (
          <div className = {product_prop._id}> 
          <div id='cartPrice'>{product_prop.price}</div>
          {product_prop.name}
          </div>
        ))}
        <div>{cartTotal}</div>
    </div>
  )
};

export default ProductList