import React from 'react';
import Product from '../Product';
import Header from '../Header';

//Shows 9 products on the page?
export default function Shop() {
  return (
    <div>

      <Product product_prop={products}/>
    </div>
  );
}
