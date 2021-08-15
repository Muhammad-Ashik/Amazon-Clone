import firebase from "firebase";
//use your firebase details
const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { db, auth };
