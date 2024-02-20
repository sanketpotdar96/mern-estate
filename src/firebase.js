// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2e184.firebaseapp.com",
  projectId: "mern-estate-2e184",
  storageBucket: "mern-estate-2e184.appspot.com",
  messagingSenderId: "1046534335977",
  appId: "1:1046534335977:web:6469b3062d6ad2321eaf78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);