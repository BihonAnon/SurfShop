import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartList from '../CartList';
import { QUERY_PRODUCT } from '../../utils/queries'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartArr = localStorage.getItem('cart');
  const cart = JSON.parse(cartArr);
  console.log(cart);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartList
            products={cart}
            title="A Cart!"
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
