// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-practice-ed2de.firebaseapp.com",
  projectId: "twitter-practice-ed2de",
  storageBucket: "twitter-practice-ed2de.appspot.com",
  messagingSenderId: "480257446030",
  appId: "1:480257446030:web:48e674b444531dad7ab9df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
