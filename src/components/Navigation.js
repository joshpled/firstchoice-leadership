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
    </div>
  );
}

export default Navigation;
