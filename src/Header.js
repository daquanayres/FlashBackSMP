import logo from "./FlashBackSMP200x100.png";
import React from "react";
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Container Fluid>
      <Navbar bg="dark" variant="dark" expand="lg" className="App-header">
        <Navbar.Brand href="#home">
          <Nav.Link href="/logo">
            <img
              src={logo}
              className="header-Logo d-inline-block align-top"
              alt="logo"
            />
          </Nav.Link>
        </Navbar.Brand>

        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className="header-links" href="/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="header-links" eventKey="link-1">
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="header-links" eventKey="link-2">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="header-links" eventKey="link-3">
              Endorsements
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="header-links" eventKey="link-4">
              FAQS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="header-links" eventKey="link-5">
              Contact Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="header-links" eventKey="link-6">
              Cart
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Header;
