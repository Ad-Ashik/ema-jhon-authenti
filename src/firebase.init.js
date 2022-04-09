// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCpmCWn-6vbvMsilcjIzk6maY9XJvWYQw",
    authDomain: "ema-jhon-authenti.firebaseapp.com",
    projectId: "ema-jhon-authenti",
    storageBucket: "ema-jhon-authenti.appspot.com",
    messagingSenderId: "320650157818",
    appId: "1:320650157818:web:59304cbf1cba029722b343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;