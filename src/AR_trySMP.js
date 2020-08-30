import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

function AR_trySMP() {
  return (
    <Container fluid className="AR-Window ">
      <Row>
        <Col></Col>
        <Col fluid className="">
          <div className=" AR-Col-2">
            <h1 className="AR-heading">Try Our SMP AR Filter! </h1>
            <p className="ar-text ">
              In order to use this feature, you must grant access to the camera.
            </p>
            <Button variant="primary" className="AR-Button ">
              Try Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AR_trySMP;
