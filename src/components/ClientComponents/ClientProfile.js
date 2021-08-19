import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, storage } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner, Button } from "react-bootstrap";
import firebase from "firebase/app";

export default function ClientProfile() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const [file, setFile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [photoLoading, setPhotoLoading] = useState(false);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };

  const handleFileSelect = async () => {
    document.getElementById("myInput").click();
  };

  const handleImageUpload = () => {
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
          })
          .catch((error) => {
            setPhotoError(error);
          });
      });
    });
  };

  return (
    <div className="client-profile">
      <div className="client-picture">
        {photoLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <img src={user.photoURL} alt="user" />
        )}
      </div>
      <div className="client-details">
        <div id="client-name">{user.displayName}</div>
        <div id="client-email">{user.email}</div>
        <div className="client-settings">
          <input id="myInput" type="file" style={{ visibility: "hidden" }} />
          {photoLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : file ? (
            <Button onClick={() => handleImageUpload()}>Upload Picture</Button>
          ) : (
            <Button
              onClick={async (e) => {
                setPhotoLoading(true);
                await document.getElementById("myInput").click();
                await setFile(document.getElementById("myInput").files[0]);
              }}
            >
              Change Picture
            </Button>
          )}
          <Button>Change Email</Button>
          <Button>Change Password</Button>
          <Button onClick={() => logout()}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
