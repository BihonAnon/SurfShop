import React, { useState, ReactDOM } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartList from '../CartList';
import { QUERY_PRODUCT } from '../../utils/queries'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

function Cart() {
  const [show, setShow] = useState(false);
  const [cartFull, setCartFull] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartArr = localStorage.getItem('cart');
  const cart = JSON.parse(cartArr);
  console.log(cart);

  const handleCartClear = () => {
    localStorage.setItem('cart', JSON.stringify('nocart'));
    console.log(localStorage.getItem('cart'))
    handleClose();
  }

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartList
            products={cart}
            title="Items In Cart..."
            cartFullState={cartFull}
          />
        </Offcanvas.Body>
        <Offcanvas.Body>
          <Button variant="info" onClick={handleCartClear}>
            ClearCart
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
