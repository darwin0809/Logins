// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALZwCX5_S7iBsFhUp7lkJlrfgjPyeS-zs",
  authDomain: "primerproyecto-web.firebaseapp.com",
  projectId: "primerproyecto-web",
  storageBucket: "primerproyecto-web.appspot.com",
  messagingSenderId: "404570838411",
  appId: "1:404570838411:web:c81c713a53baea99c64b8e",
  measurementId: "G-NGDYRPDF26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{auth}