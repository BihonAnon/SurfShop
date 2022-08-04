import React, { useState } from 'react';
// import Product from '../Product';
import HeaderOther from '../HeaderOther';

//Shows 9 products on the page?
export default function Shop() 
{ // How to define products

  const [cartItems, setCartItems] = useState([
    {
      name:"",
      image:"",
      description:"",
      category:"",
      stock:"",
      price:"",
    }])
  const [productItem, setProductItem] = useState({
    name:"",
    image:"",
    description:"",
    category:"",
    stock:"",
    price:"",
  })
  function addToCart(productItem)
  { //
    // setCartState
  }
  function addProductItem(){ //Set the state of product item
    //create an object with name image descripton category stock price.
    //grab values from card (event.target.this.name)
    var SuperCartItem = {};
    setProductItem(SuperCartItem)
    addToCart(productItem)
  }
  //      <Product product_prop={products}/>
  return (
    <div>
      <HeaderOther />
    </div>
  );
}
