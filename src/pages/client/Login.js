import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button, Form, FloatingLabel, Alert } from "react-bootstrap";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/client-home");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Log In</h1>
        {currentUser && (
          <Alert variant="warning">
            <div className="auth-alreadylog">
              <div className="authAlert-heading">You're logged in as {currentUser.email} </div>
              <div className="authAlert-button">
                <Link to="/client-home">
                  <Button>Go To Client Home</Button>
                </Link>
              </div>
            </div>
          </Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        {!!currentUser || (
          <>
            <div className="auth-form">
              <Form onSubmit={handleSubmit}>
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
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FloatingLabel>
                <Button disabled={loading} type="submit">
                  Submit
                </Button>
              </Form>
            </div>

            <div className="authlinks-container">
              <Link to="/forgot-password"> Forgot Password </Link>
              <Link to="/signup"> Need an Account? </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
