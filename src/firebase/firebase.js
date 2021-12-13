import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBPjmfTbdH4ltYGm83sn63LEmlEdPNzwpo",
  authDomain: "employees1-67771.firebaseapp.com",
  projectId: "employees1-67771",
  storageBucket: "employees1-67771.appspot.com",
  messagingSenderId: "406220193250",
  appId: "1:406220193250:web:cf79c5d882c9cafa344dbb"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()
const google = new GoogleAuthProvider()

export {
    app,
    db,
    google,
    auth
}