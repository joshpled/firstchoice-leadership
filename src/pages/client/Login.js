import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { Button, Form, FloatingLabel, Alert, Spinner } from "react-bootstrap";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth, email, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    if (user !== undefined) history.push("/client-home");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            {error && <Alert variant="danger">{error.message}</Alert>}
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
                <Button type="submit">Submit</Button>
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
