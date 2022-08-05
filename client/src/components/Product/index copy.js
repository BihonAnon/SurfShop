import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import surfBoard from '../../assets/images/surfboard.jpg';



<Card style={{ width: '18rem' }}>
<Card.Img variant="top" img src={surfBoard}  style={{ width: '18rem' }}/>
<Card.Body>
  <Card.Title><h2>Wooden Board</h2></Card.Title>
  <Card.Text>
    Hand made from reclaimed Redwood.
  </Card.Text>
  <Button variant="primary">$200<br/>Add to Cart</Button>
</Card.Body>
</Card> 