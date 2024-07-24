// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARxUt83LFzfMI7RZezLtwxh_gIux21oGE",
  authDomain: "web-based-9e7ca.firebaseapp.com",
  projectId: "web-based-9e7ca",
  storageBucket: "web-based-9e7ca.appspot.com",
  messagingSenderId: "704957910834",
  appId: "1:704957910834:web:013f415e84bac294b2912b",
  measurementId: "G-MGXPQW6ZNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;