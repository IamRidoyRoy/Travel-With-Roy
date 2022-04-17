// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDKAUd5vxyujP9SQR3VY8d5w2xlo0o-Xw",
    authDomain: "travel-with-roy.firebaseapp.com",
    projectId: "travel-with-roy",
    storageBucket: "travel-with-roy.appspot.com",
    messagingSenderId: "943199034525",
    appId: "1:943199034525:web:51edaaf3f98e6d3ae5c874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;