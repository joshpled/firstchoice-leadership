import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAvmBTBFv36cu2ORipZti6KNxPHFq6jiyk",
  authDomain: "firstchoiceleader-4261b.firebaseapp.com",
  projectId: "firstchoiceleader-4261b",
  storageBucket: "firstchoiceleader-4261b.appspot.com",
  messagingSenderId: "793964320282",
  appId: "1:793964320282:web:33361e425d9adc0cdaa3a3",
});

export const auth = app.auth();
export default app;
