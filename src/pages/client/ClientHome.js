import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "context/AuthContext";
import { useHistory } from "react-router-dom";

function ClientHome() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/client/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="client-wrapper">
      {error && error}
      <div className="client-menu">
        <div className="client-picture">Picture of Client</div>
        {currentUser && currentUser.email}
        <div className="client-buttons">
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
      </div>
      <div className="client-dashboard">
        Messages
        <hr></hr>
      </div>
    </div>
  );
}

export default ClientHome;
