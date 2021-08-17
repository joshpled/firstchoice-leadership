import React from "react";
import { ContactForm, ContactInfo } from "components";

function Contact() {
  return (
    <div className="contact-wrapper">
      <h1 className="display-1 contact-header">CONTACT</h1>
      <div className="contact-content-wrapper">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
