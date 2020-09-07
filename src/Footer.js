import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import logo from "./FlashBackSMP300x200.png";

function Footer() {
  return (
    <Container fluid>
      <div className="Footer">
        <Row>
          <Col>
            <img src={logo} className="Footer-Logo" alt="logo" />
          </Col>
          <Col>
            <a href="#" target="_blank">
              FLASHBACKSMP
            </a>
            <br></br>
            <a href="#" target="_blank">
              12348 Sunset blvd
            </a>
            <br></br>
            <a href="#" target="_blank">
              Hollywood, Fl 90028
            </a>
          </Col>
          <Col className="Links"></Col>

          <Col className="Subscription">
            <h2>SIGN UP & SAVE</h2>
            <h4>Subscribe to get special offers and discounts!</h4>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <br></br>
            <br></br>
            <img className="Socials" src="#" alt="Social-Instagram" />
            <img className="Socials" src="#" alt="Social-Snapchat" />
            <img className="Socials" src="#" alt="Social-Facebook" />
            <img className="Socials" src="#" alt="Social-Youtube" />
            <img className="Socials" src="#" alt="Social-TikTok" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Footer;
