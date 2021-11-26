import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AdminLogin() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { currentUser } = useAuth();
  const { login } = useAuth();

  useEffect(() => {
    if (!loading && currentUser) {
      history.push("/admin-login");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login("jesuper03@yahoo.com", password);
      history.push("/admin-home");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Admin Login</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="auth-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div style={{ color: "white", textAlign: "center" }}>Contact System Admin for Password Reset</div>
      </div>
    </div>
  );
}

export default AdminLogin;
