import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, storage } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner, Button, Image } from "react-bootstrap";
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
        <Image src={user.photoURL} alt="user" />
      </div>
      <div className="client-details">
        <div className="client-name">{user.displayName}</div>
        <div className="client-email">{user.email}</div>
        <div className="client-settings">
          <Button>Change Picture</Button>
          <Button>Change Email</Button>
          <Button>Change Password</Button>
          <Button onClick={() => logout()}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
