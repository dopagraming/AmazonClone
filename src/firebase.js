import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC8B4wVBAkaVsrSf9B7cDUdIgwgS9Q5n4E",
  authDomain: "clone-786d0.firebaseapp.com",
  projectId: "clone-786d0",
  storageBucket: "clone-786d0.appspot.com",
  messagingSenderId: "491627420063",
  appId: "1:491627420063:web:3f56cdeca3a290e0fdc5aa",
  measurementId: "G-09P91HD5PR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
