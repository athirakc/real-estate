// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5ea8b.firebaseapp.com",
  projectId: "real-estate-5ea8b",
  storageBucket: "real-estate-5ea8b.appspot.com",
  messagingSenderId: "691759658215",
  appId: "1:691759658215:web:dbad298e08921d3f0f1e42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);