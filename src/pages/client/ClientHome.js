import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useAuth } from "context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { EditProfile } from "components";

function ClientHome() {
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [userInfo, setUserInfo] = useState({});
  const [userChanged, setChanged] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const handleSaveChanges = async (e) => {
    setLoading(true);
    const userRef = firebase.firestore().collection("users").doc(userInfo.id);
    userRef
      .set({
        name: userInfo.name,
        email: userInfo.email,
        image: userInfo.image,
      })
      .then((docRef) => {
        setUserInfo({ name: userInfo.name, email: userInfo.email, image: userInfo.image, id: userInfo.id });
        sessionStorage.setItem("name", userInfo.name);
        sessionStorage.setItem("email", userInfo.email);
        sessionStorage.setItem("id", userInfo.id);
        sessionStorage.setItem("image", userInfo.image);
        setLoading(false);
        handleClose();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let unmounted = false;
    setLoading(true);
    const userCollectionRef = firebase.firestore().collection("users").where("email", "==", currentUser.email);
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

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/home/landing");
    } catch {
      setError("Failed to log out");
    }
  };

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
            <div className="client-text">
              <p>{userInfo.name}</p>
              <p>{currentUser && currentUser.email}</p>
            </div>

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
        setUserInfo={setUserInfo}
        handleSaveChanges={handleSaveChanges}
      />
    </div>
  );
}

export default ClientHome;
