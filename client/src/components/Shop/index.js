import React, { useState } from 'react';
//useQuery() from apollo client
import { useQuery } from '@apollo/client';
// import Product from '../Product';
import HeaderOther from '../HeaderOther';
//import the query we are executing
import { QUERY_PRODUCTS } from '../../utils/queries'
import Product from '../Product'

//Shows 9 products on the page?
const Shop = () => {
  // Execute The Query on Component Load
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  //Chaining Something?
  const products = data?.products || [];
  return(
    <div>
      <HeaderOther />
      <Product 
        products={products}
      /> 
    </div>
  )
};
export default Shop;
// export default function Shop() 
// { // How to define products

//   const [cartItems, setCartItems] = useState([
//     {
//       name:"",
//       image:"",
//       description:"",
//       category:"",
//       stock:"",
//       price:"",
//     }])
//   const [productItem, setProductItem] = useState({
//     name:"",
//     image:"",
//     description:"",
//     category:"",
//     stock:"",
//     price:"",
//   })
//   function addToCart(productItem)
//   { //
//     // setCartState
//   }
//   function addProductItem(){ //Set the state of product item
//     //create an object with name image descripton category stock price.
//     //grab values from card (event.target.this.name)
//     var SuperCartItem = {};
//     setProductItem(SuperCartItem)
//     addToCart(productItem)
//   }
//   //      <Product product_prop={products}/>
//   return (
//     <div>
//       <HeaderOther />
//     </div>
//   );
// }
