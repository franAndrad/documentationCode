import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <Navbar
      expand="lg"
      className="menu navbar navbar-expand-lg border-bottom border-info"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} end to="/">
          DocNowledge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-0">
            <Nav.Link as={Link} end to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} end to="/documents">
              Document
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
