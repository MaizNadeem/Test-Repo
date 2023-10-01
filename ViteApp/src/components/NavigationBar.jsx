import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#">Procurement</Nav.Link>
            <Nav.Link href="#">Accounting</Nav.Link>
            <Nav.Link href="#">Inventory</Nav.Link>
            <Nav.Link href="#">Supplier</Nav.Link>
            <Nav.Link href="#">View Approvals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;