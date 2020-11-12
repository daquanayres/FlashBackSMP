import React from "react";
import { Row, Col, Container, Form, ListGroup } from "react-bootstrap";
import logo from "./FlashBackSMP300x200.png";

function Footer() {
  return (
    <Container fluid>
      <div className="Footer">
        <Row>
          <Col md="auto">
            <img src={logo} className="footer-Logo " alt="logo" />
          </Col>
          <Col className="footer-address text-center">
            <a href="#" target="_blank">
              FLASHBACK SMP
              <br></br>
              12348 Sunset blvd
              <br></br>
              Hollywood, Fl 90028
            </a>
            <br></br>
            <a href="">
              <u>Get Directions</u>
            </a>
          </Col>
          <Col>
            <ul className=" text-center">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Schedule A Consultation</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Endorsements</a>
              </li>

              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Get Directions</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
            </ul>
          </Col>

          <Col xs="auto" className="Subscription">
            <h2>SIGN UP & SAVE</h2>
            <h4>Subscribe to get special offers and discounts!</h4>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              className="footer-emailInput"
            />
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
