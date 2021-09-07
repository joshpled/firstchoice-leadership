import { useState } from "react";
import { Button, Modal, Image, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

export default function UpdateProfileModal({ show, handleClose, image }) {
  const { currentUser, updatePasswordFunc, updateEmailFunc } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (email !== currentUser.email) {
      promises.push(updateEmailFunc(email));
    }
    if (password) {
      promises.push(updatePasswordFunc(password));
    }

    Promise.all(promises)
      .then(() => {
        setSuccess("Account updated successfully!");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        setSuccess("");
      }}
      className="change-picture-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Profile</Modal.Title>
      </Modal.Header>
      <Alert variant="danger" show={error}>
        {error}
      </Alert>
      <Alert variant="success" show={success}>
        {success}
      </Alert>
      <Modal.Body className="change-picture-body">
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onchange={(e) => setEmail(e.target.value)} required defaultValue={currentUser.email} />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onchange={(e) => setPassword(e.target.value)} placeholder="Leave blank to keep the same" />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onchange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Leave blank to keep the same"
            />
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-3" type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
