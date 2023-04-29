import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA0PoteuvmkD8TYcCekIzHvNvKYpbMaaX4",
    authDomain: "go-hitch.firebaseapp.com",
    projectId: "go-hitch",
    storageBucket: "go-hitch.appspot.com",
    messagingSenderId: "940477143682",
    appId: "1:940477143682:web:9db06ed719b4e6cda9b29b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);