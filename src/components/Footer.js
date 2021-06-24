import React from "react";

function Navigation() {
  return (
    <>
      <div className="landing-footer">
        <p className="footer-left">
          Made with &#9829; by{" "}
          <a href="https://www.joshuapleduc.com/" style={{ textDecoration: "none", color: "white" }}>
            Joshua Perez Leduc
          </a>
        </p>
        <p className="footer-right">&#169; Copyright 2021</p>
      </div>
      <div style={{ clear: "both" }}></div>
    </>
  );
}

export default Navigation;
