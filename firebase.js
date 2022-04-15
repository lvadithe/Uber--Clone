import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaswfEuF2Zh8oM_7Ko81btCgB2c4Hd6Ng",
    authDomain: "uber--clone--practice.firebaseapp.com",
    projectId: "uber--clone--practice",
    storageBucket: "uber--clone--practice.appspot.com",
    messagingSenderId: "761000991281",
    appId: "1:761000991281:web:6c64fe85fc9bfea7109310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provaider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provaider, auth };