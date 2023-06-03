import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function RoutingBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          MELLOWSPINS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link as={Link} to="/" className="home-link">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/mixes" className="mixes-link">
              MIXES
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="contact-link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RoutingBar;
