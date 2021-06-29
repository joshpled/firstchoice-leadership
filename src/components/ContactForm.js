import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

function ContactForm() {
  const maxChar = 150;
  const [charCount, setCharCount] = useState(150);
  const handleChange = (e) => {
    setCharCount(maxChar - e.target.value.length);
  };

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="email">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="Name">
          <Form.Control placeholder="Full Name" required />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="contactBody">
          <Form.Control placeholder="Must be 150 characters or more" as="textarea" rows={3} required minLength="150" onChange={(e) => handleChange(e)} />
          {charCount > -0 ? charCount : ""}
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
