import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

function Welcome() {
  return (
    <Container fluid>
      <Jumbotron fluid className="welcome-jumbotron">
        <Container className="welcome-group">
          <h1>STEP BACK INTO YOUR PRIME</h1>
          <p>
            With Scalp Micropigmentation. A permanent hair loss treatment for
            both women and men.
          </p>
          <Button variant="primary" className="BookAppt">
            Schedule A Consultation
          </Button>
        </Container>
      </Jumbotron>
    </Container>
  );
}

export default Welcome;
