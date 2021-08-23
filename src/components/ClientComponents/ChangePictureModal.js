import { useState } from "react";
import { Button, Modal, Image, Form, Alert } from "react-bootstrap";
import { auth, storage } from "../../firebase";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ChangePictureModal({ show, handleClose, image }) {
  const [user, loading, error] = useAuthState(auth);

  const [file, setFile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [photoLoading, setPhotoLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImageUpload = (e) => {
    e.preventDefault();
    setPhotoLoading(true);
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log("Success"), console.error("Error"), () => {
      ref.getDownloadURL().then((url) => {
        setPhotoUrl(url);
        user
          .updateProfile({
            photoURL: url,
          })
          .then((docRef) => {
            setPhotoLoading(false);
            setFile("");
            setSuccess(true);
          })
          .catch((error) => {
            setPhotoError(error);
          });
      });
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        setFile("");
        setSuccess(false);
      }}
      className="change-picture-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Change Picture</Modal.Title>
      </Modal.Header>
      <Alert variant="danger" show={file}>
        <b>WARNING:</b> Click upload to change your picture, otherwise close to cancel!
      </Alert>
      <Alert variant="danger" show={photoError}>
        {photoError.message}
      </Alert>
      <Modal.Body className="change-picture-body">
        <Alert variant="success" show={success} style={{ width: "200px", marginRight: "20px" }} onClose={handleClose} dismissible={true}>
          Upload Succcessful!
        </Alert>
        <Form onSubmit={(e) => handleImageUpload(e)} style={{ display: success ? "none" : "" }}>
          <Form.Control type="file" onChange={(e) => handleChange(e)} />
          <Button type="submit" style={{ display: file ? "" : "none", float: "right", marginTop: "20px" }} disabled={photoLoading}>
            Upload
          </Button>
        </Form>
        <Image src={photoUrl ? photoUrl : image} style={{ border: `${file ? "red" : "green"} 6px solid` }} />
      </Modal.Body>
    </Modal>
  );
}
