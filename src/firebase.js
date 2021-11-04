// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpTrQNSKbDGjeajar62UwKWFdqfQnj4nc",
  authDomain: "cv-builder-56c7e.firebaseapp.com",
  projectId: "cv-builder-56c7e",
  storageBucket: "cv-builder-56c7e.appspot.com",
  messagingSenderId: "597768578220",
  appId: "1:597768578220:web:5b1929b48303483488eb09",
  measurementId: "G-RVHRPV6S8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };
