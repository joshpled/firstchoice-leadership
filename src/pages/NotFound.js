import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import lost from "../assets/images/Lost.png";

const NotFound = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <h1 className="display-1 " style={{ color: "white" }}>
      You might be lost!
    </h1>
    <img src={lost} style={{ height: "200px", margin: "20px" }} />
    <Link to="/" style={{ color: "white", textDecoration: "none" }}>
      <Button style={{ width: "200px" }}>Go Home</Button>
    </Link>
  </div>
);

export default NotFound;
