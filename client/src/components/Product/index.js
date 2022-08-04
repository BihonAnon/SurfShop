import { Button, ListGroup, Card } from 'react-bootstrap';

export default function Product({product_prop}) { //onclick={addProductItem}
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{product_prop.name}</Card.Title>
        <Card.Text>
        {product_prop.image}
        {product_prop.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{product_prop.category}</ListGroup.Item>
        <ListGroup.Item>{product_prop.stock}</ListGroup.Item>
        <ListGroup.Item>{product_prop.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button  variant="dark">Dark</Button> <Button variant="link">Link</Button>
      </Card.Body>
    </Card>
  );
}