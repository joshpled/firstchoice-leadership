import React, { useState } from "react";
import { Modal, Alert, Form, FloatingLabel, Button } from "react-bootstrap";

function EditProfile({
  show,
  handleClose,
  userChanged,
  handleChange,
  handleCancel,
  userInfo,
  handleImageAsFile,
  handleImageUpload,
  uploading,
  changePic,
  setChange,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton={!userChanged}>
          <Modal.Title>EDIT PROFILE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="edit-buttons">
            {changePic ? (
              <Form onSubmit={(e) => handleImageUpload(e)}>
                <Form.Group controlId="formFile" className="mb-3" onChange={(e) => handleImageAsFile(e)}>
                  <Form.Control type="file" />
                </Form.Group>
                <Button type="submit" disabled={uploading}>
                  Upload
                </Button>
              </Form>
            ) : (
              <Button onClick={() => setChange(true)}>Change Picture</Button>
            )}
            <Button>Change Password</Button>
          </div>
          <hr></hr>
          <div className="edit-inputs">
            <>
              <FloatingLabel controlId="fullName" label="Name" className="mb-3" style={{ color: "#2e2e2e" }}>
                <Form.Control type="text" placeholder="John Smith" name="name" value={userInfo.name} onChange={(e) => handleChange(e)} />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="Email" style={{ color: "#2e2e2e" }}>
                <Form.Control type="email" placeholder="example@email.com" name="email" value={userInfo.email} onChange={(e) => handleChange(e)} />
              </FloatingLabel>
            </>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Alert variant="warning" className="changes-alert" show={userChanged}>
            Changes have been made, use the cancel button to exit without save
          </Alert>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
