import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FloatingLabel, Alert, Spinner } from "react-bootstrap";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push("/client-home");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

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
