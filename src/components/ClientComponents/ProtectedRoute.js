import { useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProtectedRoute({ children }) {
  const [user, loading, error] = useAuthState();
  console.log(user);
  return <>{children}</>;
}
