import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import { QUERY_PRODUCTS } from '../../utils/queries'
import { ADD_ORDER } from '../../utils/mutations'

const ProductList = ({ products, title, cartFullState }) => {
  const [priceTotal, setPriceTotal] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { loading, data } = useQuery(QUERY_PRODUCTS)
  const dbproducts = data?.products || []
  var theGrandTotal = 0

  useEffect(() => {
    console.log(dbproducts);
    console.log(products);
    if (dbproducts) {
      const arr1 = dbproducts.filter(product => products.indexOf(product._id) !== -1)
      setFilteredProducts(arr1)
    }
  }, [
    data?.products
  ])

  useEffect(() => {
    const pricesArr = [];
    console.log('FilteredProducts:', filteredProducts);
    for (let i = 0; i < filteredProducts.length; i++) {
      const priceset = document.querySelectorAll('cartPrice')
      console.log(priceset);
      pricesArr.push(filteredProducts[i].price);
      console.log('here?')
    }
    console.log(pricesArr);
    for (let z = 0; z < pricesArr.length; z++) {
      const element = pricesArr[z];
      theGrandTotal = element + theGrandTotal;
      console.log(theGrandTotal);
      setPriceTotal(theGrandTotal);
    }
  }, [filteredProducts])

  const arr = [];

  const handleClick = event => {
    var cartProductId = event.currentTarget.id;
    console.log('PRODUCT ID 👉️', cartProductId);
    arr.push(cartProductId);
    localStorage.setItem("cart", JSON.stringify(arr));
  }
  const handleDeleteThis = event => {
    console.log('deleted ', event.currentTarget.id)

    // Handle
  }

  const handleCheckOut = () => {
    console.log('working...');
    console.log('Date ');
    console.log('Total ', priceTotal);
    console.log('Products in Cart', filteredProducts)
    handleOrderSubmit();
  }

  // Invoke `useMutation()` hook to return a Promise-based function and data about the ADD_PROFILE mutation
  const [addOrder, { error }] = useMutation(ADD_ORDER);

  const handleOrderSubmit = async () => {
    // event.preventDefault();
    console.log(priceTotal, products)
    // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
    try {
      // Execute mutation and pass in defined parameter data as variables
      const { data } = await addOrder({
        variables: { priceTotal, products },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };  

  return (
    <div>
      <h3>{title}</h3>

      {filteredProducts &&
        filteredProducts.map((product_prop) => (
          <Card>
            <Card.Body className={product_prop._id}>
              <div>{product_prop.name}</div>
              <div className='cartPrice'>${product_prop.price}</div>
              <Button id={product_prop._id} variant="outline-danger" onClick={handleDeleteThis}>🗑️</Button>{' '}
            </Card.Body>
          </Card>))}

      <Button varient="danger" onClick={handleCheckOut}>Check out: ${priceTotal}</Button>

    </div>
  )
};
export default ProductList