import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="landing-content-div-test">
      <header className="landing-header">
        <h1>FIRST CHOICE</h1>
        <h1>LEADERSHIP</h1>
        <h3>LEARN TO TAKE LEAD IN YOUR PERSONAL AND PROFESSIONAL LIFE</h3>
      </header>
      <div className="landing-buttons">
        <h1>Where would you like to start your journey?</h1>
        <div>
          <Link to="/personal">
            <Button variant="secondary" value="personal">
              Personal
            </Button>
          </Link>
          <Link to="/professional">
            <Button variant="secondary" value="professional">
              Professional
            </Button>
          </Link>
        </div>
        {error && <h3>{error}</h3>}
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        <div className="landing-client-login-wrapper">
          <Link to={user ? "/client-home" : "/login"}>
            <Button variant="secondary" value="professional">
              {user ? "Client Home" : "Client Login"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
