import React, { useState } from "react";
import { Modal, Alert, Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { storage } from "../../firebase";

function EditProfile({ show, handleClose, userChanged, handleChange, handleCancel, userInfo, handleSaveChanges, setUserInfo }) {
  const [changePic, setChange] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  function handleImageAsFile(e) {
    setFile(e.target.files[0]);
  }

  function handleImageUpload(e) {
    e.preventDefault();
    setUploading(true);
    const ref = storage.ref(`/images/${file.name}`);
    const userRef = firebase.firestore().collection("users").doc(userInfo.id);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log("Success"), console.error("Error"), () => {
      ref.getDownloadURL().then((url) => {
        setFile(null);
        userRef
          .set({
            name: userInfo.name,
            email: userInfo.email,
            image: url,
          })
          .then((docRef) => {
            setUserInfo({ name: userInfo.name, email: userInfo.email, image: url });
            sessionStorage.setItem("image", url);
            setUploading(false);
            setChange(false);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      });
    });
  }

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
            <Button>
              <Link to="/client/update-profile">Change Password or Email</Link>
            </Button>
          </div>
          <hr></hr>
          <div className="edit-inputs">
            <>
              <FloatingLabel controlId="fullName" label="Name" className="mb-3" style={{ color: "#2e2e2e" }}>
                <Form.Control type="text" placeholder="John Smith" name="name" value={userInfo.name} onChange={(e) => handleChange(e)} />
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
          <Button variant="primary" onClick={handleSaveChanges} disabled={!userChanged}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
