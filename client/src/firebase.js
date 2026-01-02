// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9fc4a.firebaseapp.com",
  projectId: "mern-estate-9fc4a",
  storageBucket: "mern-estate-9fc4a.firebasestorage.app",
  messagingSenderId: "747340317568",
  appId: "1:747340317568:web:e6780883b02d3dcdeef765",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
