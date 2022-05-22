import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuBk-NZoP8PyBZRkitibib71DLt1wC0Fs",
  authDomain: "netflix-clone-154c3.firebaseapp.com",
  projectId: "netflix-clone-154c3",
  storageBucket: "netflix-clone-154c3.appspot.com",
  messagingSenderId: "596771134407",
  appId: "1:596771134407:web:bbc1c9a746cdc2b67957e2",
};

// initialize firebase app
initializeApp(firebaseConfig);

// initialize firebase database services
const db = getFirestore();
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
