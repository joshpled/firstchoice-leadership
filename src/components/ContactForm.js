import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async () => {
    window.open(`mailto:jesusmperez@ileadperez.com?subject=${fullName}+:+${email}&body=${message}`);
  };

  return (
    <div className="contact-form-container">
      <Form {...{ onSubmit }}>
        <label htmlFor="fullName">Full Name</label>
        <Form.Control id="fullName" name="fullName" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} required />
        <label htmlFor="email">Email</label>
        <Form.Control id="email" name="email" placeholder="example@email.om" type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="message">Message</label>
        <Form.Control id="message" name="message" placeholder="Message" as="textarea" onChange={(e) => setMessage(e.target.value)} required />
        <Button type="submit" size={"sm"}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
