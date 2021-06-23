import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function InfoCard({ data }) {
  const { title, text, link, button, subtitle } = data;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        {link && (
          <Link to={`${link}`}>
            <Button variant="primary">{button}</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
