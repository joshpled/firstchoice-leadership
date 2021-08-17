import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { Button, Form, FloatingLabel, Alert } from "react-bootstrap";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setConfirmed(true);
      })
      .catch((error) => {
        setError(`${error.message}`);
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Forgot Password</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        {confirmed ? (
          <>
            <Alert variant="success">Sent! Check your email to reset password.</Alert>
            <Link to="/login">
              <Button variant="success">Go Login</Button>
            </Link>
          </>
        ) : (
          <>
            <div className="auth-form">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FloatingLabel>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
            <div className="authlinks-container">
              <Link to="/login"> Already have an account? </Link>
              <Link to="/signup"> Need an Account? </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
