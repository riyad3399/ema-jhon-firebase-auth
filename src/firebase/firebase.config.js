// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZEUQjw1YkRMBXzNAeSsWbEHNY_gOuIzw",
  authDomain: "ema-jhon-firebase-auth-recap.firebaseapp.com",
  projectId: "ema-jhon-firebase-auth-recap",
  storageBucket: "ema-jhon-firebase-auth-recap.appspot.com",
  messagingSenderId: "287722904312",
  appId: "1:287722904312:web:8fb47ebed3ac9738a2f90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;