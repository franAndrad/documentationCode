import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu navbar navbar-expand-lg text-light border-info">
      <Container>
        <Navbar.Brand as={Link} end to="/" className="">
          <div className="text-light">DocNowledge</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-0">
            <Nav.Link as={Link} end to="/">
              {" "}
              <div className="text-light">Home</div>
            </Nav.Link>
            <Nav.Link as={Link} end to="/documents">
              <div className="text-light">Document</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </nav>
  );
};

export default Menu;
