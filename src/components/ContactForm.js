import React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";
import { db } from "../firebase";

export default function ContactForm() {
  const messages = db.collection("contact-form");

  return (
    <div className="contact-form-container">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          message: "",
        }}
        onSubmit={async (uservalues) => {
          try {
            messages.add(uservalues);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <Form>
          <label htmlFor="fullName">Full Name</label>
          <Field id="fullName" name="fullName" placeholder="Full Name" required />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="example@email.om" type="email" required />

          <label htmlFor="message">Message</label>
          <Field id="message" name="message" placeholder="Message" as="textarea" required />
          <Button type="submit" size={"sm"}>
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
