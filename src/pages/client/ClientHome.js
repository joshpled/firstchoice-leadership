import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function ClientHome() {
  const logout = () => {
    firebase.auth().signOut();
  };
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <h1 style={{ color: "white" }}>
        {user && user.email}
        {user || "none"}
      </h1>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
