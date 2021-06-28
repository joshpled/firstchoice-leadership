import React from "react";
import { ContactForm, ContactInfo } from "components";

function Contact() {
  return (
    <div className="contact-wrapper">
      <header>
        <h1 className="display-1 contact-header">Contact Me</h1>
      </header>
      <div className="contact-content-wrapper">
        <div className="contact-form-container">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
