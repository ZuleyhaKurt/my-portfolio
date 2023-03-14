import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <>
      <Navbar  style={{padding:20 ,backgroundColor:"white",display:'flex', flexDirection:"row", justifyContent:"space-between"  }}>
       <div>
                  <Navbar.Brand href="#home">Zuleyha Kurt</Navbar.Brand>
              </div>
              <div>
          <Nav className="me-auto gap-5">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
                  </Nav>
              </div>
              <div>
                  hello
              </div>
       
      </Navbar>
    

 
    </>
  );
}

export default NavbarComp;