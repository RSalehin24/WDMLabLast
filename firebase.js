// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW-_dP1H1k5-F4K8zqrgvY61LsaFekB60",
  authDomain: "books-b01a3.firebaseapp.com",
  projectId: "books-b01a3",
  storageBucket: "books-b01a3.appspot.com",
  messagingSenderId: "272901585769",
  appId: "1:272901585769:web:1271e9632f40dc95159bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 