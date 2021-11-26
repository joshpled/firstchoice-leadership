import React from "react";
import { Blogs } from "components";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase";

export default function AdminHome() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const logout = () => {
    console.log("We're in the logout function");
    signOut(auth).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="admin-home">
      <div className="admin-container">
        {!loading && <p className="display-6">{user && "Welcome Jesus"}</p>}
        <div className="admin-blogs">
          <Blogs />
        </div>
        <div className="admin-buttons">
          <Button onClick={() => history.push("/new-blog")}>Make a blog</Button>
          <Button onClick={() => logout()}>Log Out</Button>
        </div>
        {/* <AdminButton /> */}
      </div>
    </div>
  );
}
