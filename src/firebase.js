import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

// eslint-disable-next-line no-unused-vars
import firestore from "firebase/firestore";
import config from "firebaseConfig";

export const app = firebase.initializeApp(config);
export const auth = app.auth();

export const db = firebase.firestore();
export const storage = firebase.storage();
