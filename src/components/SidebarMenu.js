import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function SidebarMenu(props) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Menu right>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/personal">
        Personal
      </Link>
      <Link className="menu-item" to="/professional">
        Professional
      </Link>
      <Link className="menu-item" to="/contact">
        Contact Me
      </Link>
      <Link className="menu-item" to="/about">
        About
      </Link>
      <Link className="menu-item" to="/blog">
        Blog
      </Link>
      {/* {user ? <Link to="/client-home">CLIENT HOME</Link> : ""} */}
    </Menu>
  );
}
