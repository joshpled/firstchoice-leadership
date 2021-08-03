import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "context/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import firebase from "firebase/app";
// import { ReactSVG } from "react-svg";
// import signingoogle from "./sign-in-google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  // const provider = new firebase.auth.GoogleAuthProvider();

  // function signInWithGoogle() {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       /** @type {firebase.auth.OAuthCredential} */
  //       const credential = result.credential;

  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       history.push("/client/home");
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;

  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       const credential = error.credential;
  //       // ...
  //     });
  // }

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/client/home");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="login-card-wrapper">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <div className="password-input-div">
                <Form.Control type={showPassword ? "text" : "password"} ref={passwordRef} required />
                {showPassword ? (
                  <FontAwesomeIcon icon="eye-slash" className="password-open-eye" onClick={() => setShowPassword((prev) => !prev)} />
                ) : (
                  <FontAwesomeIcon icon="eye" className="password-open-eye" onClick={() => setShowPassword((prev) => !prev)} />
                )}
              </div>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
            {/* <div className="sign-in-with-google">
              <ReactSVG src={signingoogle} onClick={signInWithGoogle} />
            </div> */}
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/client/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/client/signup">Sign Up</Link>
      </div>
    </div>
  );
}
