import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { Button, Form, FloatingLabel, Alert, Spinner } from "react-bootstrap";

export default function Signup() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, email, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Not Setup");
    // if (password === confirmPassword) {
    //   createUserWithEmailAndPassword(email, password);
    //   history.push("/client-home");
    // } else {
    // }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Sign Up</h1>
        {error && <Alert variant="danger">{error.message}</Alert>}
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            <div className="auth-form">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mt-3 mb-3">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingConfirmPassword" label="ConfirmPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </FloatingLabel>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
            <div className="authlinks-container">
              <Link to="/login"> Already have an account? </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
