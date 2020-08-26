import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Welcome() {
  return (
    <Jumbotron>
      <Container fluid>
        <h1>Welcome To FlashBack</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Welcome;
