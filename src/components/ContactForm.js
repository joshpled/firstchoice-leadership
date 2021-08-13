import React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../firebase";

export default function ContactForm() {
  const [value, loading, error] = useCollection(app.firestore().collection("messages"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          message: "",
        }}
        onSubmit={async (uservalues) => {
          console.log(value);
        }}
      >
        <Form>
          <label htmlFor="fullName">Full Name</label>
          <Field id="fullName" name="fullName" placeholder="Full Name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="example@email.om" type="email" />

          <label htmlFor="message">Message</label>
          <Field id="message" name="message" placeholder="Message" as="textarea" />
          <Button type="submit" size={"sm"}>
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
}
