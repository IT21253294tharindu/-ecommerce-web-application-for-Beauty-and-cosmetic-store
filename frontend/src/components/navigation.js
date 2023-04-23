import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home"style={{color:"pink"}}>ATL BEAUTY</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            
          </Nav>
          <img src='src\cart_shopping_icon.png' alt='cart'href="#cart"></img><br/>
          <a href="#logout" style={{marginLeft:"60px"}}>logout</a> 
        </Container>
      </Navbar>

     
      <Navbar fixed="top" />
    </>
  );
}

export default Header;