import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import { auth } from "../../firebase";

import { Button } from "react-bootstrap";

export default function ClientHome() {
  const history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1 style={{ color: "white" }}>{user ? user.email : "none"}</h1>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
