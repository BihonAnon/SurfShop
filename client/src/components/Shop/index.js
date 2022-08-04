import React from 'react';
import Product from '../Product';
import Header from '../Header';

export default function Shop() {
  return (
    <div>
      <Header />
      <Product product_prop={products}/>
    </div>
  );
}
