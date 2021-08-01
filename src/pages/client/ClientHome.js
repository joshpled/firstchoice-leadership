import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useAuth } from "context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { storage } from "../../firebase";
import { EditProfile } from "components";

function ClientHome() {
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const userCollectionRef = currentUser && firebase.firestore().collection("users").where("email", "==", currentUser.email);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [changePic, setChange] = useState(false);

  const [userInfo, setUserInfo] = useState({});
  const [userChanged, setChanged] = useState(false);
  const [show, setShow] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file, setFile] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [url, setURL] = useState("");

  function handleImageAsFile(e) {
    setFile(e.target.files[0]);
  }

  function handleImageUpload(e) {
    e.preventDefault();
    setUploading(true);
    const ref = storage.ref(`/images/${file.name}`);
    const userRef = firebase.firestore().collection("users").doc(userInfo.id);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        setFile(null);
        setURL(url);
        userRef
          .set({
            name: userInfo.name,
            email: userInfo.email,
            image: url,
          })
          .then((docRef) => {
            setUserInfo({ name: userInfo.name, email: userInfo.email, image: url });
            setUploading(false);
            setChange(false);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      });
    });
  }

  const handleCancel = () => {
    setLoading(true);
    if (userChanged) {
      setUserInfo({
        name: sessionStorage.getItem("name"),
        email: sessionStorage.getItem("email"),
        id: sessionStorage.getItem("id"),
        image: sessionStorage.getItem("image"),
      });
      setLoading(false);
      setChanged(false);
      handleClose();
    } else {
      handleClose();
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setChanged(true);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let unmounted = false;
    setLoading(true);
    userCollectionRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { name, email, image } = doc.data();
        setUserInfo({ name, email, image, id: doc.id });
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("id", doc.id);
        sessionStorage.setItem("image", image);

        setLoading(false);
      });
    });
    return () => {
      setLoading(false);
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      if (!currentUser) {
        history.push("/");
      }
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="client-wrapper">
      {error && error}
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && (
        <>
          <div className="client-menu">
            <div className="client-picture">
              <img src={userInfo.image} alt="client" height="200px" />
              <button onClick={handleShow}>Edit Profile</button>
            </div>
            {userInfo.name}
            <br></br>
            {currentUser && currentUser.email}

            <div className="client-buttons">
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          </div>

          <div className="client-dashboard">
            <h3>Messages</h3>
            <hr></hr>
          </div>
        </>
      )}
      <EditProfile
        show={show}
        handleClose={handleClose}
        userChanged={userChanged}
        handleChange={handleChange}
        handleCancel={handleCancel}
        userInfo={userInfo}
        handleImageAsFile={handleImageAsFile}
        handleImageUpload={handleImageUpload}
        uploading={uploading}
        changePic={changePic}
        setChange={setChange}
      />
    </div>
  );
}

export default ClientHome;
