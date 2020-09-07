import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function WhatSMPCanFix() {
  return (
    <Container fluid as="div">
      <div className="WhatSMPCanFix-css">
        <h2 className="WhatSMPCanFix-heading">What SMP Can Fix</h2>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="cards">
              <Card.Img variant="top" src="" className="Card-IMGs" />
              <Card.Body>
                <Card.Title className="Card-Title">Thinning Hair</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="cards">
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                className="Card-IMGs"
              />
              <Card.Body>
                <Card.Title className="Card-Title">Pattern Baldness</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="cards">
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                className="Card-IMGs"
              />
              <Card.Body>
                <Card.Title className="Card-Title">Hair Loss</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="cards">
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                className="Card-IMGs"
              />
              <Card.Body>
                <Card.Title className="Card-Title">Scar Camouflage</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Button className="WhatSMPCanFix-button">Learn More</Button>
      </div>
    </Container>
  );
}

export default WhatSMPCanFix;
