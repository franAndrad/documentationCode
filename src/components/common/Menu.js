import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menu = () => {
   return (
      <Navbar bg="dark" variant='dark' expand="lg">
         <Container>
            <Navbar.Brand as={Link} end to='/' >DocNowledge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link as={Link} end to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} end to='/document'>Document</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Menu;