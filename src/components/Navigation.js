import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="landing-navigation">
      <Link to="/">
        <p className="link">HOME</p>
      </Link>
      <span className="separator">|</span>
      <Link to="/personal">
        <p className="link">PERSONAL</p>
      </Link>
      <span className="separator">|</span>
      <Link to="/professional">
        <p className="link">PROFESSIONAL</p>
      </Link>
      <span className="separator">|</span>
      <Link to="/contact">
        <p className="link">CONTACT ME</p>
      </Link>
      <span className="separator">|</span>
      <Link to="/about">
        <p className="link">ABOUT</p>
      </Link>
      {false ? (
        <>
          <span className="separator">|</span>
          <Link to="/client/home">
            <p className="link">CLIENT HOME</p>
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navigation;
