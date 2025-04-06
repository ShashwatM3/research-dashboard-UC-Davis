// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhVQzN1P9oF7Lr23RUknez8EAAZWYLhUo",
  authDomain: "research-dashboard-d08c1.firebaseapp.com",
  projectId: "research-dashboard-d08c1",
  storageBucket: "research-dashboard-d08c1.firebasestorage.app",
  messagingSenderId: "145819771547",
  appId: "1:145819771547:web:12951fd0739cc1bfe11c3e",
  measurementId: "G-T1N16G89J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);