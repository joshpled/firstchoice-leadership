import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";

function Landing() {
  const { currentUser } = useAuth();
  return (
    <div>
      <header className="landing-header">
        <h1>FIRST CHOICE</h1>
        <h1>LEADERSHIP</h1>
        <h3>LEARN TO TAKE LEAD IN YOUR PERSONAL AND PROFESSIONAL LIFE</h3>
      </header>
      <div className="landing-buttons">
        <h1>Where would you like to start your journey?</h1>
        <div>
          <Link to="/home/personal">
            <Button variant="secondary" value="personal">
              Personal
            </Button>
          </Link>
          <Link to="/home/professional">
            <Button variant="secondary" value="professional">
              Professional
            </Button>
          </Link>
        </div>
        <div className="landing-client-login-wrapper">
          <Link to={currentUser ? "/client/home" : "/client/login"}>
            <Button variant="secondary" value="professional">
              {currentUser ? "Client Home" : "Client Login"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
