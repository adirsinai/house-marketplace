import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTQFMqiuY-udNH8EvrC4onCB59WS2W_c8",
  authDomain: "house-marketplace-app-98a20.firebaseapp.com",
  projectId: "house-marketplace-app-98a20",
  storageBucket: "house-marketplace-app-98a20.appspot.com",
  messagingSenderId: "1029794672651",
  appId: "1:1029794672651:web:2f3488a4904d5070aa170e",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
