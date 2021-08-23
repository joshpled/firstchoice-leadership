import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Navigation() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="navigation-container">
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
      <span className="separator">|</span>
      <Link to="/blog">
        <p className="link">BLOG</p>
      </Link>
      {user ? (
        <>
          <span className="separator">|</span>
          <Link to="/client-home">
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
