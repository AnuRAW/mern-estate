// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9cd2a.firebaseapp.com",
  projectId: "mern-estate-9cd2a",
  storageBucket: "mern-estate-9cd2a.appspot.com",
  messagingSenderId: "131010739963",
  appId: "1:131010739963:web:0076dc194f198fd356ba5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);