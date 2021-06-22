import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function InfoCard({ data }) {
  const { title, text, link, button } = data;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          {link && (
            <Link to={`${link}`}>
              <Button variant="primary">{button}</Button>
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default InfoCard;
