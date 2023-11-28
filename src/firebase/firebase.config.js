// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDZjbYLfvQf8cWtxbuWlU5LTFnGiBamiY",
  authDomain: "the-world-newspaper.firebaseapp.com",
  projectId: "the-world-newspaper",
  storageBucket: "the-world-newspaper.appspot.com",
  messagingSenderId: "59204592221",
  appId: "1:59204592221:web:3ecdc2502d447c5f2e63b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app