import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

function Welcome() {
  return (
    <Jumbotron>
      <Container fluid className="welcome-group">
        <h1>STEP BACK INTO YOUR PRIME</h1>
        <p>
          With Scalp Micropigmentation. A permanent hair loss treatment for both
          women and men.
        </p>
        <Button variant="primary" className="BookAppt xl={3}">
          Schedule A Consultation
        </Button>
      </Container>
    </Jumbotron>
  );
}

export default Welcome;
