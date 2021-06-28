import React from "react";
import { Form, Button, Col } from "react-bootstrap";

function ContactForm() {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="email">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="Name">
          <Form.Control placeholder="Full Name" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="contactBody">
          <Form.Control placeholder="Any questions?" as="textarea" rows={3} />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
