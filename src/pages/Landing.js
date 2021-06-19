import React from "react";
import { Button } from "react-bootstrap";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-navigation">
        <p className="link">HOME</p>
        <span className="separator">|</span>
        <p className="link">ABOUT</p>
        <span className="separator">|</span>
        <p className="link">BOOKING</p>
      </div>
      <header className="landing-header">
        <h1>FIRST CHOICE</h1>
        <h1>LEADERSHIP</h1>
        <h3>LEARN TO TAKE LEAD IN YOUR PERSONAL AND PROFESSIONAL LIFE</h3>
      </header>
      <div className="landing-buttons">
        <h1>Where would you like to start your journey?</h1>
        <div>
          <Button variant="secondary">Personal</Button>
          <Button variant="secondary">Professional</Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
