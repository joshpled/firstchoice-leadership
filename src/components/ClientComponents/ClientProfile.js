import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, storage } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner, Button, Image, Modal } from "react-bootstrap";
import firebase from "firebase/app";
import ChangePictureModal from "./ChangePictureModal";
import UpdateProfileModal from "./UpdateProfileModal";

export default function ClientProfile() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const [showPicModal, setPicModal] = useState(false);
  const [showProfileModal, setProfileModal] = useState(false);

  const handlepicClose = () => {
    setPicModal(false);
  };
  const handleproClose = () => {
    setProfileModal(false);
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };

  return (
    <>
      <div className="client-profile">
        <div className="client-picture">
          <Image src={user.photoURL} alt="user" />
        </div>
        <div className="client-details">
          <div className="client-name">{user.displayName}</div>
          <div className="client-email">{user.email}</div>
          <div className="client-settings">
            <Button onClick={() => setPicModal(true)}>Change Picture</Button>
            <Button onClick={() => setProfileModal(true)}>Update Profile</Button>
            <Button onClick={() => logout()}>Logout</Button>
          </div>
        </div>
      </div>
      <ChangePictureModal show={showPicModal} handleClose={handlepicClose} image={user.photoURL} />
      <UpdateProfileModal show={showProfileModal} handleClose={handleproClose} />
    </>
  );
}
