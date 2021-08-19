import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
});

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
