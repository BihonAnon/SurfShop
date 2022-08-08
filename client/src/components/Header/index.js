import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="nav fixed-bottom" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="navbar-brand"   href="#home">Surf</Navbar.Brand>
          <Nav className="d-flex flex-row-reverse">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/commentsForm"}>Chat!</Nav.Link>
            <Nav.Link as={Link} to={"/shop"}>Shop</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;