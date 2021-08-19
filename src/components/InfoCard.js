import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function InfoCard({ data }) {
  const { title, text, link, button, subtitle } = data;
  return (
    <div className="custom-card">
      <div className="custom-card-title">{title}</div>
      <div className="custom-card-subtitle">{subtitle}</div>
      <div className="custom-card-body">
        <div className="custom-card-text">{text}</div>
      </div>
      <div className="custom-card-button">
        {link && (
          <Link to={`${link}`}>
            <Button variant="primary">{button}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
