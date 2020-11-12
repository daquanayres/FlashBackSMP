import React from "react";
import { Form, Button, Container, FormGroup, Col, Row } from "react-bootstrap";

function ContactUs() {
  return (
    <Container fluid as="div">
      <div className="Contact-Us">
        <Row>
          <Col>
            <h1 className="Contact-Us-Heading">Send Us A Message</h1>
          </Col>
          <Col className="form">
            <Form className="Contact-Us-Form ">
              <Form.Group controlId="form-FNLN">
                <Form.Row>
                  <Col>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="form-Inputs form-width90"
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="form-Inputs form-width90"
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Group controlId="form-Email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="form-Inputs form-width70"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="form-PhoneNumber ">
                  <Form.Label>Phone Number: </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter phone number"
                    className="form-Inputs form-width60"
                  />
                </Form.Group>
                <Form.Group controlId="form-Message">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Enter message"
                    className="form-Inputs form-width90"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.File
                    id="form-file"
                    label="Attachments:"
                    className="form-Inputs"
                  />
                </Form.Group>
              </Form.Group>

              <Button variant="primary" type="submit" className="form-Btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ContactUs;
