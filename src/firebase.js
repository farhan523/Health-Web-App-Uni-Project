// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "elderly-flutter-aa6a9.firebaseapp.com",
  projectId: "elderly-flutter-aa6a9",
  storageBucket: "elderly-flutter-aa6a9.appspot.com",
  messagingSenderId: "501824056073",
  appId: "1:501824056073:web:eb74ee96409a70fce681d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

export { db, auth, provider };
