import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <p className="footer-left">
          Made with &#9829; by{" "}
          <a href="https://www.joshuapleduc.com/" style={{ textDecoration: "none", color: "white" }}>
            Joshua Perez Leduc
          </a>
        </p>
        <p className="footer-right">&#169; Copyright 2021</p>
      </div>
    </>
  );
}

export default Footer;
