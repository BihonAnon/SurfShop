import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Product({product_prop}) {
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
        <Card.Link href="#">Add To Cart</Card.Link>
      </Card.Body>
    </Card>
  );
}