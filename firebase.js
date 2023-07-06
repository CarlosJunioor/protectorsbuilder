// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaqQP-yFYdC3EPKfT8eeD6aRltlrw3Neg",
  authDomain: "protectorsbuilder.firebaseapp.com",
  projectId: "protectorsbuilder",
  storageBucket: "protectorsbuilder.appspot.com",
  messagingSenderId: "411807265026",
  appId: "1:411807265026:web:00c80f2f091d5326b8d21b",
  measurementId: "G-YP1N29ZVT9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
