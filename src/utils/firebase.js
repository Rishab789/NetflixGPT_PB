// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS9SZcLz9HYn8KUth_XWB7J2OWnxHJizw",
  authDomain: "netflixgptpb.firebaseapp.com",
  projectId: "netflixgptpb",
  storageBucket: "netflixgptpb.appspot.com",
  messagingSenderId: "735297304296",
  appId: "1:735297304296:web:d065ed3077191b57373b5d",
  measurementId: "G-FPD2F40PFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();