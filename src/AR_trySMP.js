import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

function AR_trySMP() {
  return (
    <Container fluid className="AR-Window">
      <Row>
        <Col>
          <div className=" AR-Col-1"></div>
        </Col>

        <Col>
          <div className=" AR-Col-2">
            <h3 className="AR-heading">Try Our SMP AR Filter! </h3>
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
