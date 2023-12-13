// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiud5uG8A4_2jLGh28v7UBqZoZSNeEV9M",
  authDomain: "skillzet-869b2.firebaseapp.com",
  projectId: "skillzet-869b2",
  storageBucket: "skillzet-869b2.appspot.com",
  messagingSenderId: "498555775328",
  appId: "1:498555775328:web:cabf141a547380045b1605",
  measurementId: "G-6R8QR7G1Z1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseStore = getFirestore(app);
