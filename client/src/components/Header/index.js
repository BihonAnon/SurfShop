import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#home">Surf</Navbar.Brand>
          <Nav className="d-flex flex-row-reverse">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;