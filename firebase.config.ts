// firebase/firebase.config.js
import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsBKkmo7l0oiu9YiSOJg3S--Q2_-LQrsU",
  authDomain: "bytestack-llc.firebaseapp.com",
  databaseURL: "https://bytestack-llc-default-rtdb.firebaseio.com",
  projectId: "bytestack-llc",
  storageBucket: "bytestack-llc.firebasestorage.app",
  messagingSenderId: "255746188151",
  appId: "1:255746188151:web:60551eb69ef08f9de0b772",
  measurementId: "G-5HD0ZC6572",
};

// Initialize Firebase only if it hasn't been initialized yet
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
