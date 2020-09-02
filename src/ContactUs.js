import React from "react";
import { Form, Button, FormGroup } from "react-bootstrap";

function ContactUs() {
  return (
    <Form>
      <Form.Group controlId="form-FN">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group controlId="form-LN">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group>
        <Form.Group controlId="form-Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="form-PhoneNumber">
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactUs;
