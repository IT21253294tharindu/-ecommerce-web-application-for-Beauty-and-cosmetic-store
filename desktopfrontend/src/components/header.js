import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{marginLeft:"-25%"}}>
        <Container>
          <Navbar.Brand style={{color:"white"}}>Delivery Dashboard</Navbar.Brand>
          
        </Container>
      </Navbar>

     
      <Navbar fixed="top" />
    </>
  );
}

export default Header;