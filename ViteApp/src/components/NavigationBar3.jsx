import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar3() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Pre-Procurements">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Draft PPMP</Nav.Link>
            <Nav.Link href="#">Consolidated APP</Nav.Link>
            <Nav.Link href="#">Final APP</Nav.Link>
            <NavDropdown title="Purchase Request List">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar3;