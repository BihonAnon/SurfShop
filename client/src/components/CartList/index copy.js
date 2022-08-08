import React from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import { QUERY_PRODUCT } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const CartItem = ({ cartProducts, title }) => {
  if (!cartProducts.length) {
    return <h3> No Items in Cart, Add some!</h3>
  }
  
  const arr = [];
  const handleClick = event => {
    var cartProductId = event.currentTarget.id;
    console.log('PRODUCT ID 👉️', cartProductId);
    arr.push(cartProductId);
    localStorage.setItem("cart", JSON.stringify(arr));
  }

  function SingleProduct({_id}) {
    const {loading, error, data} = useQuery(QUERY_PRODUCT, {
      variables: {_id},
    });
    if (loading) return `Loading`;
    if (error) return `error! ${error}`;

  
  return (
    <div>{data.product._id}</div>
  )
}
};

export default CartItem