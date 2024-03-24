import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <Navbar style={{ backgroundColor: '#4285f4' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: '-230px' }}>Juarema App</Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
        <Navbar.Collapse id="minhanav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Inicial</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
