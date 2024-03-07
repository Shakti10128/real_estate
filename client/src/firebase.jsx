// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-49767.firebaseapp.com",
  projectId: "real-estate-49767",
  storageBucket: "real-estate-49767.appspot.com",
  messagingSenderId: "692349873581",
  appId: "1:692349873581:web:e5d5dc1b9c7b144a598524"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);