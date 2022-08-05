import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import surfBoard from './images/surfboard.jpg';
import towel from './images/colorful-towel.jpg';
import fiberBoard from './images/fiberglassBoard.jpg';
import foamBoard from './images/foamBoard.jpeg';
import goldenWax from './images/goldenWax.webp';



<Card style={{ width: '18rem' }}>
<Card.Img variant="top" img src={surfBoard}  style={{ width: '18rem' }} style={{height:"16rem"}}/>
<Card.Body>
  <Card.Title><h2>Wooden Board</h2></Card.Title>
  <Card.Text>
    Hand made from reclaimed Redwood.
  </Card.Text>
  <Button variant="primary">$1500<br/>Add to Cart</Button>
</Card.Body>
</Card> 

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" img src={towel}  style={{ width: '18rem' }} style={{height:"16rem"}} />
<Card.Body>
  <Card.Title><h2>Beach Towel</h2></Card.Title>
  <Card.Text>
    Colorful towel made from recycled cotton 
  </Card.Text>
  <Button variant="primary">$30<br/>Add to Cart</Button>
</Card.Body>
</Card> 

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" img src={fiberBoard}  style={{ width: '18rem' }} style={{height:"16rem"}} />
<Card.Body>
  <Card.Title><h2>Fiberglass Board</h2></Card.Title>
  <Card.Text>
    Colorful towel made from recycled cotton 
  </Card.Text>
  <Button variant="primary">$1000<br/>Add to Cart</Button>
</Card.Body>
</Card> 

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" img src={foamBoard}  style={{ width: '18rem' }} style={{height:"16rem"}} />
<Card.Body>
  <Card.Title><h2>Fiberglass Board</h2></Card.Title>
  <Card.Text>
    Colorful towel made from recycled cotton 
  </Card.Text>
  <Button variant="primary">$1000<br/>Add to Cart</Button>
</Card.Body>
</Card> 


<Card style={{ width: '18rem' }}>
<Card.Img variant="top" img src={goldenWax}  style={{ width: '18rem' }} style={{height:"16rem"}} />
<Card.Body>
  <Card.Title><h2>GoldenGrip Wax</h2></Card.Title>
  <Card.Text>
    Colorful towel made from recycled cotton 
  </Card.Text>
  <Button variant="primary">$15<br/>Add to Cart</Button>
</Card.Body>
</Card> 
